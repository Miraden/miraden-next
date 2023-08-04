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
import { DropdownInput } from '@/components/ui/DropDowns/DropdownInput'
import FormField from '@/components/ui/FormField'
import GoogleMap from '@/modules/Google/GoogleMap'
import GoogleMapMarker from '@/modules/Google/GoogleMapMarker'
import GoogleMapCircle from '@/modules/Google/GoogleMapCircle'
import GoogleMapAutoComplete from '@/modules/Google/GoogleMapAutoComplete'
import { GoogleAutoComplete } from '@/infrastructure/Google/places/GoogleAutoComplete'
import { GeocoderManager } from '@/infrastructure/Google/geocoder/GeocoderManager'
import GoogleMapGeocoder from '@/modules/Google/GoogleMapGeocoder'
import StepCommonLayout from "@/modules/Leads/Maker/StepCommonLayout";
import StepBlankLayout from "@/modules/Leads/Maker/StepBlankLayout";

const desktop: string = theme.breakpoints.desktop.max + 'px'
const tablet: string = theme.breakpoints.tablet.max + 'px'
const mobile: string = theme.breakpoints.mobile.max + 'px'

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
  const [autocompleteVisible, setAutocompleteVisibility] =
    useState<boolean>(false)
  const [searchResult, setSearchResult] = useState<
    google.maps.GeocoderResult[]
  >([])
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.GeocoderResult | null>(null)

  useEffect(() => {
    if (view === Views.List) {
      unregisterMap()
      const provider: LocationsProvider = new LocationsProvider()
      provider.fetch(LocationView.Countries).then(res => {
        const data = provider.getList() as CountriesStruct[]
        setLocations(data)
      })
    }

    if (view === Views.Map) {
      setAutocompleteVisibility(false)
      setSearchResult([])
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

  const onSearchResult = useCallback(
    (result: google.maps.GeocoderResult[] | null) => {
      const geocoder = window.Miraden.geocoder
      geocoder.clearResults()
      if (!result) {
        setAutocompleteVisibility(false)
        return
      }
      setAutocompleteVisibility(true)
      setSearchResult(result)
    },
    []
  )

  return (
    <StyledStep>
      <div className="StepHeader">
        <div className="StepHeader__left">
          {view === Views.Map && (
            <>
              <RenderSearch onResult={onSearchResult} />
              <SearchAutoComplete
                show={autocompleteVisible}
                items={searchResult}
                onSelect={(e: google.maps.GeocoderResult) => {
                  setSelectedPlace(e)
                  setAutocompleteVisibility(false)
                }}
              />
            </>
          )}
          {view === Views.List && <SearchLocations />}
        </div>

        <div className="StepHeader__right">
          <div className="CountriesMap" onClick={OnStateToggle}>
            <MapIcon />
            <span className={"CountriesMap__label"}>{getViewLabel(view)}</span>
          </div>
        </div>
      </div>

      <div className="StepBody">
        {view === Views.List && (
          <StepCommonLayout>
            <RenderLocations className={"Locations"} locations={locations} onChanged={onLocations} />
          </StepCommonLayout>
        )}
        {view === Views.Map &&
          <StepBlankLayout>
            <RenderMap place={selectedPlace} />
          </StepBlankLayout>
        }
      </div>
    </StyledStep>
  )
}

interface LocationsProps {
  locations: CountriesStruct[]
  onChanged: (selected: LocationResult) => void
  className?: string
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
    <ListStyled className={props.className}>
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

interface MapProps {
  place?: google.maps.GeocoderResult | null
}

const RenderMap = (props: MapProps): JSX.Element => {
  const radiusList = [
    { label: 'Диапазон 1 км', value: 1_000 },
    { label: 'Диапазон 10 км', value: 10_000 },
    { label: 'Диапазон 20 км', value: 20_000 },
  ]
  const DEFAULT_REGION = 'Cyprus'
  const DEFAULT_RADIUS = radiusList[1]

  const [Map, setMap] = useState<google.maps.Map>(window.Miraden.map)
  const [CircleRadius, setCircleRadius] = useState<number>(DEFAULT_RADIUS.value)
  const [pointCenter, setPointCenter] = useState<google.maps.LatLngLiteral>({lat: 0, lng: 0})

  useEffect(() => {
    if (!props.place) return
    const location = props.place.geometry?.location
    if (!location) return
    setPointCenter({ lat: location.lat(), lng: location.lng() })
    if (Map) Map.setCenter(location)
  }, [Map, props.place])

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      setMap(map)

      const mgr: GeocoderManager = new GeocoderManager()
      mgr.setMap(map).makeService()
      const geo = mgr.findByQuery(DEFAULT_REGION)
      geo?.then(res => {
        if(res.results.length === 0) return
        const result = res.results[0]
        const location = result.geometry?.location
        setPointCenter({ lat: location.lat(), lng: location.lng() })
        map.setCenter({ lat: location.lat(), lng: location.lng() })
      })
    },
    []
  )

  const onRadius = useCallback((e: Forms.DropDownOption) => {
    setCircleRadius(Number(e.value))
  }, [])

  const onMarkerDrag = useCallback((e: any) => {
    const point = new google.maps.LatLng(e)
    setPointCenter({ lat: point.lat(), lng: point.lng() })
  }, [])

  return (
    <MapStyled>
      <FormField className={'MapRadius'}>
        <DropdownInput
          options={radiusList}
          placeholder={'Инфраструктура'}
          selected={onRadius}
        />
      </FormField>

      <GoogleMap
        onLoad={onLoad}
        initialSettings={{
          center: { lat: -34, lng: 151 },
          zoom: 10,
          disableDefaultUI: true,
        }}
      />

      <GoogleMapCircle
        Map={Map}
        settings={{
          strokeColor: '#000',
          strokeOpacity: 0,
          strokeWeight: 1,
          fillColor: 'blue',
          fillOpacity: 0.2,
          map: Map,
          center: pointCenter,
          radius: CircleRadius,
        }}
      />

      <GoogleMapMarker
        Map={Map}
        onDrag={onMarkerDrag}
        settings={{
          icon: '/icons/location.svg',
          map: Map,
          position: pointCenter,
          draggable: true,
        }}
      />
    </MapStyled>
  )
}

interface SearchProps {
  onResult?: (result: google.maps.GeocoderResult[] | null) => void
}

const RenderSearch = (props: SearchProps): JSX.Element => {
  const [map, setMap] = useState<google.maps.Map>()
  const [autoCompleteMgr, setAutoCompleteMgr] = useState<GoogleAutoComplete>()
  const [geocoderMgr, setGeocoderMgr] = useState<GeocoderManager>()
  const [searchResult, setSearchResult] = useState<
    google.maps.GeocoderResult[]
  >([])

  useEffect(() => {
    const handler = (e: any) => {
      setMap(e.detail.map)
    }
    document.addEventListener('GoogleMapInit', handler)
  }, [])

  const onResult = useCallback(
    (result: google.maps.places.QueryAutocompletePrediction[] | null) => {
      if (geocoderMgr === undefined) return
      result?.map(async place => {
        if (!place.place_id) return
        const geocode = await geocoderMgr.geocodeByPlaceId(place.place_id)
        if (geocode) geocoderMgr.addResult(geocode.results[0])
      })
      setSearchResult(geocoderMgr.getResults())
      if (props.onResult) props.onResult(geocoderMgr.getResults())
    },
    [geocoderMgr, props]
  )

  const onChange = useCallback(
    (q: string) => {
      if (q.length == 0) {
        geocoderMgr?.clearResults()
        onResult(null)
        return
      }
      autoCompleteMgr?.searchLocation(
        q,
        (result: google.maps.places.QueryAutocompletePrediction[] | null) => {
          onResult(result)
        }
      )
    },
    [autoCompleteMgr, geocoderMgr, onResult]
  )

  const onFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const cachedResults = window.Miraden.geocoder.searchResult
    onResult(cachedResults)
  }, [onResult])

  return (
    <SearchStyled>
      <Search
        sort={[]}
        placeholder={'Укажите город'}
        onSearchChange={onChange}
        onInputFocus={onFocus}
      />
      <GoogleMapAutoComplete map={map} onReady={e => setAutoCompleteMgr(e)} />
      <GoogleMapGeocoder map={map} onReady={e => {
        setGeocoderMgr(e)
      }} />
    </SearchStyled>
  )
}

const SearchLocations = (): JSX.Element => {
  return (
    <>
      <SearchStyled>
        <Search sort={[]} placeholder={'Укажите город'} />
      </SearchStyled>
    </>
  )
}

interface AutocompleteProps {
  className?: string
  items: google.maps.GeocoderResult[]
  onSelect?: (selected: google.maps.GeocoderResult) => void
  show: boolean
}

const SearchAutoComplete = (props: AutocompleteProps): JSX.Element => {
  const onClick = useCallback(
    (e: any) => {
      if (props.onSelect) props.onSelect(e)
    },
    [props]
  )

  if (!props.show) return <></>

  return (
    <StyledAutocomplete className={'Search__AutocompleteBox'}>
      {props.items.map((item: google.maps.GeocoderResult, idx) => {
        return (
          <div
            className={'Search__AutocompleteBoxItem'}
            key={idx}
            onClick={e => onClick(item)}
          >
            {item.formatted_address}
          </div>
        )
      })}
    </StyledAutocomplete>
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

const unregisterMap = (): void => {
  if (window.Miraden.map) window.Miraden.map = undefined
  if (window.Miraden.geocoder) window.Miraden.geocoder = undefined
}

const StyledAutocomplete = styled.div`
  &.Search__AutocompleteBox {
    position: absolute;
    left: 0;
    top: 60px;
    width: 100%;
    background: #fff;
    z-index: 100;
    border-top: 1px solid ${theme.colors.fields.stroke};
  }

  .Search__AutocompleteBoxItem {
    padding: 10px 10px 10px 59px;
    cursor: pointer;

    &:hover {
      background: ${theme.colors.background.lightBlue};
    }
  }
`

const StyledStep = styled.section`
  .StepHeader {
    border-bottom: 2px solid #f1f7ff;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 0 30px;
    color: ${theme.colors.button.tertiary.text.default};
    gap: 30px;
    position: relative;

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
    user-select: none;

    svg path {
      fill: ${theme.colors.button.tertiary.text.default};
    }
  }

  @media (max-width: ${mobile}) {
    .StepHeader {
      padding-left: 20px;
      padding-right: 20px;
    }

    .CountriesMap {
      &__label {
        display: none;
      }
    }
  }
`

const SearchStyled = styled.div`
  position: relative;
  outline: none;
  width: 100%;

  .Search__menu {
    padding: 0;
    outline: none;
    width: 100%;
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
    .Search__searchIcon {
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
  display: flex;
  flex-direction: column;
  gap: 50px;

  .ListRow {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .ListRowCities {
    flex-direction: column;
    align-items: flex-start;
  }

  .ListCities {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  @media (max-width: ${tablet}) {
    gap: 35px;
  }

  @media (max-width: ${mobile}) {
    gap: 35px;
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
    z-index: 1;
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
