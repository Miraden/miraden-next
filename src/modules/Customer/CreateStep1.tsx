import { Button, RequestButton } from '@/components/ui'
import { ArrowIcon, CrossIcon, MapIcon, SearchIcon } from '@/icons'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { MapContainer } from './MapContainer'
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

const CreateStep1 = ({ className }: Props) => {
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
    <StyledCreateStep1 className={className}>
      <div className="Reg">
        <div className="Reg__headContainer">
          <div className="Reg__head">
            <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
              Укажите город или локацию недвижимости
            </h1>
          </div>
        </div>
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
                <RequestButton
                  key={option}
                  onClick={() => handleSelect(option as Option)}
                  active={selected === option}
                >
                  {cityMap[option as Option].label}
                </RequestButton>
              ))}
            </div>
            <div className="Reg__citiesContainer">
              {selected && (
                <>
                  <h2 className="Font_20_120 sm:Font_18_120_500">Город</h2>
                  <div className="Reg__cities">
                    <RequestButton
                      onClick={() => {
                        setSelectedCity(null)
                        setAllCitiesActive(true)
                      }}
                      active={allCitiesActive}
                    >
                      Все города
                    </RequestButton>
                    {cityMap[selected].cities
                      .slice(0, numCitiesToShow)
                      .map(city => (
                        <RequestButton
                          key={city}
                          onClick={() => {
                            handleSelectCity(city)
                            setAllCitiesActive(false)
                          }}
                          active={selectedCity === city && !allCitiesActive}
                        >
                          {city}
                        </RequestButton>
                      ))}
                    {cityMap[selected].cities.length > numCitiesToShow &&
                      !showAllCities && (
                        <RequestButton
                          onClick={handleShowMoreCities}
                          className="Color_blue_primary"
                        >
                          Ещё {numCitiesToShow}
                        </RequestButton>
                      )}
                    {showAllCities && (
                      <RequestButton
                        onClick={handleHideExtraCities}
                        className="Color_blue_primary"
                      >
                        Скрыть
                      </RequestButton>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        <div className="Reg__footerContainer">
          <div className="Reg__progressBar"></div>

          <div className="Reg__footer">
            <div className="Reg__footerBack">
              <Button secondary href="/lead/add" className="Reg__goBackButton">
                Назад
              </Button>
              <Button
                secondary
                href="/"
                leftIcon={<ArrowIcon />}
                className="Reg__goBackButtonMobile"
              ></Button>
              <div className="Reg__footerSteps">
                <span className="Font_16_24">Шаг</span>
                <span className="Reg__footerCount Font_16_140 Color_blue_primary">
                  1
                </span>
                <span className="Font_16_140 Color_text_grey">/ 11</span>
              </div>
            </div>
            <div className="Reg__nextButtonContainer">
              <div className="Reg__sellers">
                <span className="Color_text_grey Font_16_24">
                  Найдено продавцов
                </span>
                <p className="Color_blue_primary Font_16_140">317</p>
              </div>

              <Button
                disabled={!selected || (!selectedCity && !allCitiesActive)}
                href="/lead/add/2"
              >
                Далее
              </Button>
            </div>
          </div>
        </div>
      </div>
    </StyledCreateStep1>
  )
}

const StyledCreateStep1 = styled.section`
  background: #fff;
  border-radius: 10px;
  margin-top: 150px;

  .Reg__head {
    padding: 30px 30px 20px 30px;
  }

  .Reg__link {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 30px;
    background: #f1f7ff;
  }

  .Reg__options {
    padding: 41px 30px 0 30px;
    height: 352px;
  }

  .Reg__optionsList {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-top: -10px;

    button {
      justify-content: flex-start;
      width: fit-content;
      margin-left: 10px;
      margin-top: 10px;
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
    padding: 15px 30px 155px 0;
    margin-left: -10px;
    margin-top: -10px;
    display: flex;
    flex-wrap: wrap;

    button {
      justify-content: flex-start;
      width: fit-content !important;
      margin-left: 10px;
      margin-top: 10px;
      padding: 10px 20px;

      span {
        text-align: initial;
      }
    }
  }

  .Reg__progressBar {
    position: relative;
    height: 6px;
    background-color: #d4ddee;
    ::after {
      position: absolute;
      border-radius: 0 10px 10px 0;
      content: '';
      width: 9%;
      height: 6px;
      background-color: #4e6af3;
    }
  }

  .Reg__nextButtonContainer {
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
    }
    p {
      margin-left: 10px;
      margin-right: 30px;
    }
  }

  .Reg__footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
  }

  .Reg__footerSteps {
    margin-left: 30px;

    span:last-child {
      margin-left: 4px;
    }
  }

  .Reg__footerCount {
    margin-left: 10px;
  }

  .Reg__footerBack {
    display: flex;
    align-items: center;
  }

  .Reg__goBackButtonMobile {
    display: none;
  }

  @media (max-width: 1200px) {
    margin-top: 100px;

    .Reg__cities {
      padding-top: 12px;
    }
  }

  @media (max-width: 960px) {
    margin-top: 10px;
    .Reg__options {
      margin-top: -10px;
      margin-left: -10px;
      flex-wrap: wrap;
      height: 767px;
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 46px;
      button {
        max-width: unset;
        margin-left: 10px;
        margin-top: 12px;
      }
    }

    .Reg__citiesContainer {
      padding-top: 36px;
    }
  }

  @media (max-width: 576px) {
    margin-top: 0;
    height: 100vh;

    .Reg__sellers {
      display: none !important;
    }

    .Reg {
      height: 100%;
    }
    .Reg__head {
      padding: 20px 20px 16px 20px;
    }

    .Reg__options {
      padding: 38px 10px;
      padding-bottom: 0;
    }

    .Reg__optionsList {
      padding-left: 20px;
    }
    .Reg__cities {
      margin-top: 0;
      padding-top: 0;
      padding-bottom: 0;
    }

    .Reg__citiesContainer {
      padding-top: 36px;
      padding-left: 20px;
    }

    .Reg__goBackButton {
      display: none;
    }

    .Reg__footer {
      padding: 20px;
    }

    .Reg__footerSteps {
      margin-left: 20px;
    }

    .Reg__goBackButtonMobile {
      padding: 16px;
      display: flex;
      svg {
        transform: rotate(-90deg);
        path {
          fill: none !important;
        }
      }
    }

    .Reg__headContainer {
      position: sticky;
      top: 0;
      z-index: 400;
      background: #fff;
      width: 100%;
    }

    .Reg__footerContainer {
      position: fixed;
      bottom: 0;
      width: 100%;
      background: #fff;
    }
  }
`

const Option = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`

const SearchRegContainer = styled.div`
  position: relative;
  border-top: 2px solid #f1f7ff;
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
  border: none;
  border-top: 2px solid #f1f7ff;
  border-bottom: 2px solid #f1f7ff;
  border-right: 2px solid #f1f7ff;
  border-left: 2px solid #f1f7ff;
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

export { CreateStep1 }
