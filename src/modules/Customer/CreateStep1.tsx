import { Button, RequestButton } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

type Option = "turkey" | "cyprus" | "northCyprus" | "montenegro";

const cityMap: Record<Option, { label: string; cities: string[] }> = {
  turkey: {
    label: "Турция",
    cities: [
      "Все города",
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
      "Все города",
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
      "Все города",
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
      "Все города",
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

const CreateStep1 = ({ className }: Props) => {
  const [selected, setSelected] = useState<Option | null>(null);
  const [showAllCities, setShowAllCities] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [numCitiesToShow, setNumCitiesToShow] = useState(5); // шаг 1

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
    setNumCitiesToShow(cityMap[selected as Option].cities.length); // показать все города
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
        <div className="Reg__options">
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
                {cityMap[selected].cities
                  .slice(0, numCitiesToShow)
                  .map((city) => (
                    <RequestButton
                      key={city}
                      onClick={() => handleSelectCity(city)}
                      active={selectedCity === city}
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
        <div className="Reg__progressBar"></div>

        <div className="Reg__footer">
          <div className="Reg__footerBack">
            <Button secondary href="/" className="Reg__goBackButton">
              На главную
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
          <Button disabled={!selected || !selectedCity} href="/customer/reg-2">
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
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-top: -20px;

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
    padding-left: 30px;
  }

  .Reg__cities {
    padding: 15px 30px 155px 0;
    margin-left: -20px;
    margin-top: -20px;
    display: flex;
    flex-wrap: wrap;

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

  @media (max-width: 960px) {
    .Reg__options {
      margin-top: -10px;
      margin-left: -10px;
      flex-wrap: wrap;
      button {
        max-width: unset;
        margin-left: 10px;
        margin-top: 10px;
      }
    }

    .Reg__citiesContainer {
      padding-bottom: 529px;
    }
  }

  @media (max-width: 576px) {
    .Reg__head {
      padding: 20px;
    }

    .Reg__options {
      padding: 38px 20px;
      padding-bottom: 0;

      button {
      }
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

export { CreateStep1 };
