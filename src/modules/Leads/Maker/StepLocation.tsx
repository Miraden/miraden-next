import styled from 'styled-components'
import React, { useCallback, useEffect, useState } from 'react'
import LocationsProvider, {
  CitiesStruct,
  CountriesStruct,
  LocationView,
} from '@/infrastructure/Locations/LocationsProvider'
import { MapIcon } from '@/icons'
import { Button, Search } from '@/components/ui'
import { theme } from '../../../../styles/tokens'
import {
  GoogleMapApi,
  GoogleMapComponent,
  GoogleMapLibLoader,
  GoogleMapsLibEnum,
} from '@/infrastructure/Google/map/GoogleMapApi'
import MapLocation from '@/icons/MapLocation'
import { DropdownInputCheckbox } from '@/components/ui/DropdownInputCheckbox'
import {DropdownInput} from "@/components/ui/DropDowns/DropdownInput";
import FormField from "@/components/ui/FormField";

interface Props {
  className?: string
  mapButtonLabel?: string
  onChanged: (selected: LocationResult) => void
}

enum Views {
  Map = 'map',
  List = 'list',
}

export interface LocationResult {
  countryId: number
  cityId: number
}

const StepLocation = (props: Props): JSX.Element => {
  const [locations, setLocations] = useState<CountriesStruct[]>([])
  const [view, setView] = useState<Views>(Views.List)

  useEffect(() => {
    if (view === Views.List) {
      const provider: LocationsProvider = new LocationsProvider()
      provider.fetch(LocationView.Countries).then(res => {
        const data = provider.getList() as CountriesStruct[]
        setLocations(data)
      })
    }

    if (view === Views.Map) {
    }
  }, [view])

  const OnStateToggle = useCallback(
    (e: any) => {
      if (view === Views.Map) setView(Views.List)
      if (view === Views.List) setView(Views.Map)
    },
    [view]
  )

  const onLocations = useCallback(
    (selected: LocationResult) => {
      props.onChanged(selected)
    },
    [props]
  )

  return (
    <StyledStep>
      <div className="StepHeader">
        <div className="StepHeader__left">
          <RenderSearch />
        </div>

        <div className="StepHeader__right">
          <div className="CountriesMap" onClick={OnStateToggle}>
            <MapIcon />
            <span>{getViewLabel(view)}</span>
          </div>
        </div>
      </div>

      <div className="StepBody">
        {view === Views.List && (
          <RenderLocations locations={locations} onChanged={onLocations} />
        )}
        {view === Views.Map && <RenderMap />}
      </div>
    </StyledStep>
  )
}

interface LocationsProps {
  locations: CountriesStruct[]
  onChanged: (selected: LocationResult) => void
}

const RenderLocations = (props: LocationsProps): JSX.Element => {
  const anyCity = 0
  const [selectedCountryId, setSelectedCountryId] = useState<number>(0)
  const [selectedCityId, setSelectedCityId] = useState<number>(anyCity)
  const [cities, setCities] = useState<CitiesStruct[]>([])
  const [isCitiesVisible, setIsCitiesVisible] = useState<boolean>(false)

  useEffect(() => {
    setIsCitiesVisible(cities.length > 0)
  }, [cities.length])

  const onCountryClick = useCallback(
    (country: CountriesStruct) => {
      setSelectedCountryId(country.id)
      setCities(findCitiesByCountry(country.id, props.locations))
      setSelectedCityId(anyCity)
      props.onChanged({ cityId: anyCity, countryId: country.id })
    },
    [props]
  )

  const onCityClick = useCallback(
    (cityId: number) => {
      setSelectedCityId(cityId)
      props.onChanged({ cityId: cityId, countryId: selectedCountryId })
    },
    [props, selectedCountryId]
  )

  return (
    <ListStyled>
      <div className="ListRow">
        {props.locations.map(country => {
          return (
            <Button
              compact
              request
              key={country.id}
              active={selectedCountryId === country.id}
              onClick={e => onCountryClick(country)}
            >
              {country.name}
            </Button>
          )
        })}
      </div>
      <div className="ListRowCities ListRow">
        {isCitiesVisible && (
          <>
            <h5 className={'Font_headline_5'}>Город</h5>
            <div className={'ListCities'}>
              <Button
                compact
                request
                key={anyCity}
                active={selectedCityId === anyCity}
                onClick={e => onCityClick(anyCity)}
              >
                Все города
              </Button>
              {cities.map(city => {
                return (
                  <Button
                    compact
                    request
                    key={city.id}
                    active={selectedCityId === city.id}
                    onClick={e => onCityClick(city.id)}
                  >
                    {city.name}
                  </Button>
                )
              })}
            </div>
          </>
        )}
      </div>
    </ListStyled>
  )
}

const RenderMap = (): JSX.Element => {
  const radiusList = [
    { label: 'Диапазон 1 км', value: 1 },
    { label: 'Диапазон 10 км', value: 10 },
    { label: 'Диапазон 20 км', value: 20 },
  ]

  return (
    <MapStyled>
      <FormField className={"MapRadius"}>
        <DropdownInput options={radiusList} placeholder={"Инфраструктура"} selected={(e: Forms.DropDownOption) => {}} />
      </FormField>
      {/*<DropdownInput className={'MapRadius'} options={radiusList} placeholder={"Select"} selected={() => {}} />*/}
    </MapStyled>
  )
}

const RenderSearch = (): JSX.Element => {
  const onChange = useCallback((e: any) => {
    console.log(e)
  }, [])

  return (
    <SearchStyled>
      <Search
        sort={[]}
        placeholder={'Укажите город'}
        onSearchChange={onChange}
      />
    </SearchStyled>
  )
}

const getViewLabel = (view: Views): string => {
  switch (view) {
    case Views.Map:
      return 'Свернуть'
    case Views.List:
      return 'На карте'
  }
}

const findCitiesByCountry = (
  countryId: number,
  locations: CountriesStruct[]
): CitiesStruct[] => {
  let result: CitiesStruct[] = []
  locations.map(country => {
    if (country.id === countryId) {
      result = country.cities
    }
  })

  return result
}

const StyledStep = styled.section`
  .StepHeader {
    border-bottom: 2px solid #f1f7ff;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 0 30px;
    color: ${theme.colors.button.tertiary.text.default};
    gap: 30px;

    &__left,
    &__right {
      display: flex;
      flex-grow: 1;
    }

    &__left {
      width: 82.47%;
    }

    &__right {
      justify-content: flex-end;
    }
  }

  .StepBody {
    height: 100%;
  }

  .CountriesMap {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    white-space: nowrap;

    svg path {
      fill: ${theme.colors.button.tertiary.text.default};
    }
  }
`

const SearchStyled = styled.div`
  position: relative;
  outline: none;

  .Search__menu {
    padding: 0;
    outline: none;
  }

  .Search__input:hover {
    outline: none;
  }

  .Search__container.focused .Search__searchIcon {
    path {
      fill: #4e6af3 !important;
    }
  }

  .Search__container {
    display: flex;
  }

  .Search__crossIcon {
    position: absolute;
    right: 200px;
    top: 20px;

    :hover {
      cursor: pointer;
    }

    path {
      fill: #7786a5;
    }
  }

  .Search__mapButton {
    display: flex;
    align-items: center;
    padding: 10px 24px;

    p {
      min-width: 66px;
      margin-left: 10px;
      font-size: 16px;
      line-height: 20px;
      color: #7786a5;
    }

    :hover {
      p {
        color: #4e6af3;
      }

      svg {
        path {
          fill: #4e6af3;
        }
      }
    }
  }

  @media (max-width: 576px) {
    padding: 10px 6px 10px 11px;
    .Search__searchIcon {
      position: absolute;

      top: 20px;
      left: 20px;
      z-index: 21;
    }

    .Search__mapButton {
      p {
        display: none;
      }
    }
  }
`

const ListStyled = styled.div`
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  .ListRow {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .ListRowCities {
    flex-direction: column;
    align-items: flex-start;
  }

  .ListCities {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

const MapStyled = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  .MapRadius {
    position: absolute;
    right: 34px;
    top: 20px;
    font-size: 14px;
  }

  .MapRadiusChoice {
    .ChoicesSelector {
      padding: 9px 18px;
    }

    .ChoicesOptions {
      top: 37px;
    }
  }
`

export default StepLocation
