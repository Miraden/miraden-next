import { CreateStep1 } from '@/modules/Customer'
import styled from 'styled-components'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CrossIcon, MapIcon, SearchIcon } from '@/icons'
import { MapContainer } from '@/modules/Customer/MapContainer'
import { Button } from '@/components/ui'

interface Props {
  className?: string
  mapButtonLabel?: string
}

const cityMap: Record<Option, { label: string; cities: string[] }> = {
  turkey: {
    label: 'Турция',
    cities: [
      'Аланья',
      'Анталья',
      'Стамбул',
      'Кемер',
      'Бодрум',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '11',
    ],
  },
  cyprus: {
    label: 'Кипр',
    cities: [
      'Лимассол',
      'Пафос',
      'Ларнака',
      'Никосия',
      'Айя-Напа',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
    ],
  },
  northCyprus: {
    label: 'Северный Кипр',
    cities: [
      'Гирне',
      'Фамагуста',
      'Лефкоша',
      'Искеле',
      'Карпасия',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
    ],
  },
  montenegro: {
    label: 'Черногория',
    cities: [
      'Будва',
      'Котор',
      'Тиват',
      'Подгорица',
      'Бар',
      '32',
      '33',
      '34',
      '35',
      '36',
      '37',
      '38',
      '39',
      '40',
      '41',
    ],
  },
}
type Option = 'turkey' | 'cyprus' | 'northCyprus' | 'montenegro'

interface SearchProps {
  options: { [key: string]: { label: string; cities: string[] } }
  onClick?: any
  mapButtonLabel?: string
}

interface SearchOptionProps {
  selected: boolean
  onClick: () => void
  children?: any
  mapButtonLabel?: string
}

interface SearchOptionItemProps {
  selected: boolean
  onClick: () => void
  mapButtonLabel?: string
}

const SearchOptionItem = styled.li<SearchOptionItemProps>`
  background-color: ${props => (props.selected ? '#ccc' : 'transparent')};
  cursor: pointer;
  padding: 8px;
`

const SearchOptionLocal = ({
  selected,
  onClick,
  children,
  searchText,
  mapButtonLabel,
}: SearchOptionProps &
  React.HTMLProps<HTMLLIElement> & { searchText: string }) => {
  const highlightedText = searchText
    ? children
        .toString()
        .replace(
          new RegExp(searchText, 'gi'),
          (match: any) => `<mark>${match}</mark>`
        )
    : children
  return (
    <SearchOptionItem onClick={onClick} selected={selected}>
      <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
    </SearchOptionItem>
  )
}

const SearchReg = ({ options, mapButtonLabel, onClick }: SearchProps) => {
  const [searchText, setSearchText] = useState('')
  const [selectedOption, setSelectedOption] = useState<{
    city: string
    region: string
  } | null>(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    setSearchText(value)
    setSelectedOption(null)
    setShowDropdown(value !== '')
  }

  const handleOptionClick = (option: { city: string; region: string }) => {
    setSelectedOption(option)
    setSearchText(option.city)
    setShowDropdown(false)
  }

  const filteredOptions = Object.keys(options).reduce(
    (
      acc: { [key: string]: { label: string; cities: string[] } },
      optionKey: string
    ) => {
      const option = options[optionKey]
      const cities = option.cities.filter(city =>
        city.toLowerCase().includes(searchText.toLowerCase())
      )
      if (cities.length) {
        acc[optionKey] = {
          ...option,
          cities,
        }
      }
      return acc
    },
    {}
  )

  const handleRemoveResults = () => {
    setSearchText('')
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const [isFocused, setIsFocused] = useState(false)

  return (
    <SearchRegContainer ref={ref}>
      <div className={`Search__container ${isFocused ? 'focused' : ''}`}>
        <SearchIcon attr={{ className: 'Search__searchIcon' }} />
        <SearchInput
          type="text"
          placeholder="Укажите город"
          value={searchText}
          onChange={handleSearchInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {searchText && (
          <CrossIcon
            attr={{ className: 'Search__crossIcon', width: 18, height: 18 }}
          />
        )}
        <button className="Search__mapButton" onClick={onClick}>
          <MapIcon />
          <p>{mapButtonLabel}</p>
        </button>
      </div>
      {showDropdown && (
        <SearchDropdown>
          {Object.keys(filteredOptions).map(optionKey => (
            <SearchOptionGroup key={optionKey} className="Font_14_16">
              <SearchOptionList>
                {filteredOptions[optionKey].cities.map(city => (
                  <SearchOptionLocal
                    key={city}
                    selected={selectedOption?.city === city}
                    onClick={() =>
                      handleOptionClick({ city, region: optionKey })
                    }
                    searchText={searchText}
                  >
                    {city}
                  </SearchOptionLocal>
                ))}
              </SearchOptionList>
            </SearchOptionGroup>
          ))}
        </SearchDropdown>
      )}
    </SearchRegContainer>
  )
}

interface Props {
  className?: string
}

const StepLocation = (): JSX.Element => {
  const [selected, setSelected] = useState<Option | null>(null)
  const [showAllCities, setShowAllCities] = useState(false)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [numCitiesToShow, setNumCitiesToShow] = useState<number>(5)
  const [allCitiesActive, setAllCitiesActive] = useState(false)

  const [openMap, setOpenMap] = useState(false)
  const [mapButtonLabel, setMapButtonLabel] = useState('На карте')

  const handleOpenMap = useCallback(() => {
    setOpenMap(!openMap)
    setMapButtonLabel(openMap ? 'На карте' : 'Свернуть')
  }, [openMap])

  const handleSelect = useCallback((option: Option) => {
    setSelected(option)
    setSelectedCity(null)
    setShowAllCities(false)
    setNumCitiesToShow(5)
  }, [])

  const handleSelectCity = useCallback((city: string) => {
    setSelectedCity(city)
  }, [])

  const handleShowMoreCities = useCallback(() => {
    setShowAllCities(true)
    setNumCitiesToShow(prev => {
      const option = cityMap[selected as Option]
      return option ? option.cities.length : prev
    })
  }, [selected])

  const handleHideExtraCities = useCallback(() => {
    setShowAllCities(false)
    setNumCitiesToShow(5)
  }, [])

  return (
    <StyledCreateStep1>
      <SearchReg
        options={cityMap}
        onClick={handleOpenMap}
        mapButtonLabel={mapButtonLabel}
      />
      {openMap ? (
        <MapContainer />
      ) : (
        <div className="Reg__options">
          <div className="Reg__optionsList">
            {Object.keys(cityMap).map(option => (
              <Button
                request
                key={option}
                onClick={() => handleSelect(option as Option)}
                active={selected === option}
              >
                {cityMap[option as Option].label}
              </Button>
            ))}
          </div>
          <div className="Reg__citiesContainer">
            {selected && (
              <>
                <h2 className="Font_20_120 sm:Font_18_120_500">Город</h2>
                <div className="Reg__cities">
                  <Button
                    request
                    onClick={() => {
                      setSelectedCity(null)
                      setAllCitiesActive(true)
                    }}
                    active={allCitiesActive}
                  >
                    Все города
                  </Button>
                  {cityMap[selected].cities
                    .slice(0, numCitiesToShow)
                    .map(city => (
                      <Button
                        request
                        key={city}
                        onClick={() => {
                          handleSelectCity(city)
                          setAllCitiesActive(false)
                        }}
                        active={selectedCity === city && !allCitiesActive}
                      >
                        {city}
                      </Button>
                    ))}
                  {cityMap[selected].cities.length > numCitiesToShow &&
                    !showAllCities && (
                      <Button
                        request
                        onClick={handleShowMoreCities}
                        className="Color_blue_primary"
                      >
                        Ещё {numCitiesToShow}
                      </Button>
                    )}
                  {showAllCities && (
                    <Button
                      request
                      onClick={handleHideExtraCities}
                      className="Color_blue_primary"
                    >
                      Скрыть
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </StyledCreateStep1>
  )
}

const StyledCreateStep1 = styled.section`
  .Reg__options {
    padding: 41px 30px 0 30px;
  }

  .Reg__optionsList {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    button {
      justify-content: flex-start;
      width: fit-content;
      padding: 10px 20px;

      span {
        text-align: initial;
      }
    }
  }

  .Reg__citiesContainer {
    padding-top: 50px;
  }

  .Reg__cities {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    button {
      justify-content: flex-start;
      width: fit-content;
      padding: 10px 20px;

      span {
        text-align: initial;
      }
    }
  }
`

const SearchRegContainer = styled.div`
  position: relative;
  border-bottom: 2px solid #f1f7ff;
  padding: 10px 6px 10px 21px;

  .Search__searchIcon {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 20px;
    left: 30px;
    z-index: 21;
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

const SearchInput = styled.input`
  width: 100%;
  font-size: 16px;
  border: none;
  margin-left: 40px;
  outline: none;

  ::placeholder {
    color: #7786a5;
  }

  :focus {
    .Search__searchIcon {
    }
  }
`

const SearchDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border-radius: 0 0 10px 10px;
  border: 2px solid #f1f7ff;
  background-color: #fff;
  z-index: 1;
`

const SearchOptionGroup = styled.div`
  padding-left: 22px;
`

const SearchOptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #b8c6e3;

  mark {
    color: #2a344a;
    background: transparent;
  }
`

export default StepLocation
