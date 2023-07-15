import { MapIcon } from "@/icons";
import { FC, useState } from "react";
import styled from "styled-components";
import {
  CitiesStruct,
  CountriesStruct
} from "@/infrastructure/Locations/LocationsProvider";

type Props = {
  locations: CountriesStruct[];
  showDropDown: boolean;
  toggleDropDown: Function;
  optionSelection: Function;
  className?: string;
  onCitySelected?: Function
  onCountrySelected?: Function
};

const DropdownLocation: FC<Props> = ({
  locations,
  optionSelection,
  className,
  onCitySelected,
  onCountrySelected
}: Props): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [selectedSubOption, setSelectedSubOption] = useState<string | null>(null)

  const onMouseEnterHandler = (option: string): void => {
    setSelectedOption(option);
    setShowDropDown(true);
  };

  const onMouseLeaveHandler = (): void => {
    setSelectedOption(null);
    setSelectedSubOption(null);
    setShowDropDown(false);
  };

  const onClickHandler = (countryName: string, cityName?: string): void => {
    if (cityName) {
      optionSelection(`${countryName}, ${cityName}`);
      setSelectedOption(countryName);
      setSelectedSubOption(cityName);
    } else {
      optionSelection(countryName);
      setSelectedOption(countryName);
      setSelectedSubOption(null);
    }
    setShowDropDown(false);
  };

  const onCountryClick = (country?: CountriesStruct): void => {
    if(onCountrySelected) onCountrySelected(country)
  }

  const onCityClick = (city: CitiesStruct): void => {
    if(onCitySelected) onCitySelected(city)
  }

  return (
    <StyledDropdownLocation className={className}>
      <div className="DropdownLocation__menu">
        <div className="DropdownLocation__list">
          <div className="DropdownLocation__menu_active">
            <p
              className={selectedOption === "Все страны" ? "active" : ""}
              onMouseEnter={(): void => onMouseEnterHandler("Все страны")}
              onMouseLeave={onMouseLeaveHandler}
              onClick={(): void => {
                onClickHandler("Все страны")
                onCountryClick(undefined)
              }}
            >
              Все страны
            </p>

            {locations.map((country: CountriesStruct, index: number): JSX.Element => {
              return (
                <div
                  key={index}
                  onMouseEnter={(): void => onMouseEnterHandler(country.name)}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <div className="Options">
                    <p
                      className={selectedOption === country.name ? "active" : ""}
                      onClick={(): void => {
                        onClickHandler(country.name)
                        onCountryClick(country)
                      }}
                    >
                      {country.name}
                    </p>
                    {showDropDown && selectedOption === country.name && (
                      <div className="SubOptions">
                        {country.cities.map(
                          (
                            city: CitiesStruct,
                            cityKey: number
                          ): JSX.Element => {
                            return (
                              <p
                                key={cityKey}
                                className={selectedSubOption === city.name ? "active" : ""}
                                onClick={() => {
                                  onClickHandler(country.name, city.name)
                                  onCityClick(city)
                                }}
                              >
                                {city.name}
                              </p>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="MapButton__container">
              <a className="MapButton">
                <MapIcon className="MapIcon" />
                <span>На карте</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledDropdownLocation>
  );
};

const StyledDropdownLocation = styled.div`
  .DropdownLocation__menu_active p.active {
    color: #4e6af3;

    :hover {
      background: #f1f7ff;
    }
  }

  .Options {
    p {
      width: 50%;
    }
    display: flex;
    p:hover {
      background: #f1f7ff;
    }
  }

  .SubOptions {
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: calc(100% - 50px);
    overflow-y: auto;
    border-left: 1px solid #e1edfd;
    p:first-child {
      margin-top: 0;
    }

    p {
      width: 100%;
    }
    p:hover {
      background: #f1f7ff;
    }
  }

  .MapButton__container {
    border-top: 1px solid #e1edfd;
    width: 100%;
    :hover {
      background: #f1f7ff;
    }
  }

  .MapButton {
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #7786a5;

    span {
      margin-left: 10px;
    }

    :hover {
      color: #4e6af3;

      svg {
        path {
          fill: #4e6af3 !important;
        }
      }
    }
  }

  .MapIcon {
    path {
      fill: #7786a5 !important;
      stroke: none !important;
    }
  }

  .DropdownLocation__menu_active {
    outline: 2px solid #e1edfd;

    position: absolute;
    z-index: 2;
    top: 18px;
    left: -20px;
    width: calc(100% + 40px);
    background: #fff;
    border-radius: 10px;
    overflow-y: auto;
    font-size: 14px;
    line-height: 140%;
    cursor: pointer;
    p {
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 12px 20px 13px 20px;
      color: #2a344a;
    }

    p:hover {
      color: #4e6af3;
    }
  }

  .DropdownLocation__list {
    display: flex;
    flex-direction: column;
  }

  .DropdownLocation__menu_active::-webkit-scrollbar {
    width: 5px;
  }

  .DropdownLocation__menu_active {
    scrollbar-width: thin;
  }

  .DropdownLocation__menu_active::-webkit-scrollbar-track {
    background: transparent;
  }

  .DropdownLocation__menu_active::-webkit-scrollbar-thumb {
    background-color: #c7d2e9;
    height: 50px;
    border-radius: 10px;
  }
`;

export { DropdownLocation };
