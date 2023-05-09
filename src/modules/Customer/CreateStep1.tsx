import { Button, RequestButton } from "@/components/ui";
import { ArrowIcon, CrossIcon, MapIcon, SearchIcon } from "@/icons";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const cityMap: Record<Option, { label: string; cities: string[] }> = {
  turkey: {
    label: "Турция",
    cities: [
      "Аланья",
      "Анталья",
      "Стамбул",
      "Кемер",
      "Бодрум",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "11",
    ],
  },
  cyprus: {
    label: "Кипр",
    cities: [
      "Лимассол",
      "Пафос",
      "Ларнака",
      "Никосия",
      "Айя-Напа",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
    ],
  },
  northCyprus: {
    label: "Северный Кипр",
    cities: [
      "Гирне",
      "Фамагуста",
      "Лефкоша",
      "Искеле",
      "Карпасия",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
  },
  montenegro: {
    label: "Черногория",
    cities: [
      "Будва",
      "Котор",
      "Тиват",
      "Подгорица",
      "Бар",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
    ],
  },
};
type Option = "turkey" | "cyprus" | "northCyprus" | "montenegro";

interface SearchProps {
  options: { [key: string]: { label: string; cities: string[] } };
}

interface SearchOptionProps {
  selected: boolean;
  onClick: () => void;
  children?: any;
}

interface SearchOptionItemProps {
  selected: boolean;
  onClick: () => void;
}

const SearchOptionItem = styled.li<SearchOptionItemProps>`
  background-color: ${(props) => (props.selected ? "#ccc" : "transparent")};
  cursor: pointer;
  padding: 8px;
`;
const SearchOptionLocal = ({
  selected,
  onClick,
  children,
  searchText,
}: SearchOptionProps &
  React.HTMLProps<HTMLLIElement> & { searchText: string }) => {
  const highlightedText = searchText
    ? children
        .toString()
        .replace(
          new RegExp(searchText, "gi"),
          (match: any) => `<mark>${match}</mark>`
        )
    : children;
  return (
    <SearchOptionItem onClick={onClick} selected={selected}>
      <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
    </SearchOptionItem>
  );
};

const SearchReg = ({ options }: SearchProps) => {
  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState<{
    city: string;
    region: string;
  } | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSearchText(value);
    setSelectedOption(null);
    setShowDropdown(value !== "");
  };

  const handleOptionClick = (option: { city: string; region: string }) => {
    setSelectedOption(option);
    setSearchText(option.city);
    setShowDropdown(false);
  };

  const filteredOptions = Object.keys(options).reduce(
    (
      acc: { [key: string]: { label: string; cities: string[] } },
      optionKey: string
    ) => {
      const option = options[optionKey];
      const cities = option.cities.filter((city) =>
        city.toLowerCase().includes(searchText.toLowerCase())
      );
      if (cities.length) {
        acc[optionKey] = {
          ...option,
          cities,
        };
      }
      return acc;
    },
    {}
  );

  const handleRemoveResults = useCallback(() => {
    setSearchText("");
  }, []);

  return (
    <SearchRegContainer>
      <SearchIcon className="Search__searchIcon" />
      <div className="Search__container">
        <SearchInput
          type="text"
          placeholder="Укажите город"
          value={searchText}
          onChange={handleSearchInputChange}
        />

        {searchText && (
          <CrossIcon
            className="Search__crossIcon"
            width={18}
            height={18}
            onClick={handleRemoveResults}
          />
        )}
        <button className="Search__mapButton">
          <MapIcon />
          <p>На карте</p>
        </button>
      </div>

      {showDropdown && (
        <SearchDropdown>
          {Object.keys(filteredOptions).map((optionKey) => (
            <SearchOptionGroup key={optionKey} className="Font_16_24">
              <SearchOptionList>
                {filteredOptions[optionKey].cities.map((city) => (
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
  );
};

interface Props {
  className?: string;
}

const CreateStep1 = ({ className }: Props) => {
  const [selected, setSelected] = useState<Option | null>(null);
  const [showAllCities, setShowAllCities] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [numCitiesToShow, setNumCitiesToShow] = useState<number>(5); // шаг 1
  const [allCitiesActive, setAllCitiesActive] = useState(false);

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
    setSelectedCity(null); // очистить выбранный город
    setShowAllCities(false); // сбросить флаг
    setNumCitiesToShow(5);
  }, []);

  const handleSelectCity = useCallback((city: string) => {
    setSelectedCity(city);
  }, []);

  const handleShowMoreCities = useCallback(() => {
    setShowAllCities(true);
    setNumCitiesToShow((prev) => {
      const option = cityMap[selected as Option];
      return option ? option.cities.length : prev;
    }); // показать все города
  }, [selected]);

  const handleHideExtraCities = useCallback(() => {
    setShowAllCities(false);
    setNumCitiesToShow(5); // показать только первые 5 городов
  }, []);

  return (
    <StyledCreateStep1 className={className}>
      <div className="">
        <div className="Reg__head">
          <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
            Укажите город или локацию недвижимости
          </h1>
        </div>
        <SearchReg options={cityMap} />

        <div className="Reg__options">
          <div className="Reg__optionsList">
            {Object.keys(cityMap).map((option) => (
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
            <h2>Город</h2>
            <div className="Reg__cities">
              {selected && (
                <>
                  <RequestButton
                    onClick={() => {
                      setSelectedCity(null);
                      setAllCitiesActive(true);
                    }}
                    active={allCitiesActive}
                  >
                    Все города
                  </RequestButton>
                  {cityMap[selected].cities
                    .slice(0, numCitiesToShow)
                    .map((city) => (
                      <RequestButton
                        key={city}
                        onClick={() => {
                          handleSelectCity(city);
                          setAllCitiesActive(false);
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
                    <RequestButton onClick={handleHideExtraCities}>
                      Скрыть
                    </RequestButton>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div className="Reg__progressBar"></div>

        <div className="Reg__footer">
          <div className="Reg__footerBack">
            <Button
              secondary
              href="/customer/create-1"
              className="Reg__goBackButton"
            >
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
              <span className="Font_16_140">/ 11</span>
            </div>
          </div>
          <Button
            disabled={!selected || (!selectedCity && !allCitiesActive)}
            href="/customer/create-step-2"
          >
            Далее
          </Button>
        </div>
      </div>
    </StyledCreateStep1>
  );
};

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
    height: 362px;
  }

  .Reg__optionsList {
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-top: -20px;
    overflow-y: scroll;

    button {
      justify-content: flex-start;
      width: fit-content;
      margin-left: 20px;
      margin-top: 20px;
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
    margin-left: -20px;
    margin-top: -20px;
    display: flex;
    flex-wrap: wrap;

    button {
      justify-content: flex-start;
      width: fit-content !important;
      margin-left: 20px;
      margin-top: 20px;
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
      content: "";
      width: 9%;
      height: 6px;
      background-color: #4e6af3;
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
  }

  @media (max-width: 960px) {
    margin-top: 10px;
    .Reg__options {
      margin-top: -10px;
      margin-left: -10px;
      flex-wrap: wrap;
      height: 767px;
      button {
        max-width: unset;
        margin-left: 10px;
        margin-top: 10px;
      }
    }
  }

  @media (max-width: 576px) {
    .Reg__head {
      padding: 20px;
    }

    .Reg__options {
      padding: 38px 20px;
      padding-bottom: 0;
    }

    .Reg__optionsList {
      padding-left: 20px;
    }
    .Reg__cities {
      margin-top: 10px;
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
  }
`;

const Option = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const SearchRegContainer = styled.div`
  position: relative;

  border-top: 2px solid #f1f7ff;
  border-bottom: 2px solid #f1f7ff;
  padding: 10px 21px;

  .Search__searchIcon {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 20px;
    left: 20px;
    z-index: 21;
  }

  .Search__container {
    display: flex;
  }

  .Search__crossIcon {
    position: absolute;
    right: 160px;
    top: 20px;
    path {
      fill: #7786a5;
    }
  }

  .Search__mapButton {
    display: flex;
    align-items: center;
    padding: 10px 24px;
    p {
      margin-left: 10px;
      font-size: 16px;
      line-height: 20px;
      color: #7786a5;
    }
  }
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 16px;
  border: none;
  margin-left: 20px;
  outline: none;
  color: #7786a5;
`;

const SearchDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border-radius: 0 0 10px 10px;
  border: none;
  border-bottom: 2px solid #f1f7ff;
  border-right: 2px solid #f1f7ff;
  border-left: 2px solid #f1f7ff;
  background-color: #fff;
  z-index: 1;
`;

const SearchOptionGroup = styled.div`
  padding-left: 30px;
`;

const SearchOptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #7786a5;
  mark {
    color: #2a344a;
    background: transparent;
  }
`;

export { CreateStep1 };
