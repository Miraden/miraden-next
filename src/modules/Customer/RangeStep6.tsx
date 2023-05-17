import { Button, NumberInput, Radio, RequestButton } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

type Option = "€" | "$" | "£" | "₽" | "¥" | "CHF" | "₺" | "AED";

const RangeStep6 = ({ className }: Props) => {
  const currencyOptions: Option[] = [
    "€",
    "$",
    "£",
    "₽",
    "¥",
    "CHF",
    "₺",
    "AED",
  ];

  const [selected, setSelected] = useState<Option | null>(currencyOptions[0]);

  const [showAllOptions, setShowAllOptions] = useState(false);

  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);

  const [isDailyCheck, setIsDailyCheck] = useState(true);
  const [isMonthChecked, setIsMonthChecked] = useState(false);
  const handleDailyCheck = useCallback(() => {
    setIsDailyCheck(true);
    setIsMonthChecked(false);
  }, []);

  const handleMonthCheck = useCallback(() => {
    setIsDailyCheck(false);
    setIsMonthChecked(true);
  }, []);

  const handleFromValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputFromValue = event.target.value;
    if (/^\d*$/.test(inputFromValue)) {
      // проверка вводимых символов
      setFromValue(inputFromValue);
    }
  };

  const handleToValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputToValue = event.target.value;
    if (/^\d*$/.test(inputToValue)) {
      // проверка вводимых символов
      setToValue(inputToValue);
    }
  };

  return (
    <StyledRegStep1 className={className}>
      <div className="">
        <div className="Reg__head">
          <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
            Укажите примерный бюджет аренды
          </h1>
        </div>
        <div className="Reg__radioButtons">
          <Radio
            value="За ночь"
            checked={isDailyCheck}
            onChange={handleDailyCheck}
          />
          <Radio
            value="За месяц"
            checked={isMonthChecked}
            onChange={handleMonthCheck}
          />
        </div>
        <div className="Reg__selectContainer">
          <div className="Reg__options">
            {currencyOptions.slice(0, 4).map((option) => (
              <RequestButton
                key={option}
                onClick={() => handleSelect(option)}
                active={selected === option}
              >
                {option}
              </RequestButton>
            ))}
            {showAllOptions &&
              currencyOptions.slice(4).map((option) => (
                <RequestButton
                  key={option}
                  onClick={() => handleSelect(option)}
                  active={selected === option}
                >
                  {option}
                </RequestButton>
              ))}
            {!showAllOptions && (
              <RequestButton
                className="Reg__showMoreButton"
                onClick={() => setShowAllOptions(true)}
              >
                Ещё {currencyOptions.length - 4}
              </RequestButton>
            )}
          </div>
          <div className="Reg__inputs">
            <NumberInput
              label="От"
              value={fromValue}
              onChange={handleFromValueChange}
            />
            <NumberInput
              label="До"
              value={toValue}
              onChange={handleToValueChange}
            />
          </div>
        </div>

        <div className="Reg__progressBar"></div>
        <div className="Reg__footer">
          <div className="Reg__footerBack">
            <Button
              secondary
              href="/customer/create-step-8"
              className="Reg__goBackButton"
            >
              Назад
            </Button>
            <Button
              secondary
              href="/customer/create-step-8"
              leftIcon={<ArrowIcon />}
              className="Reg__goBackButtonMobile"
            ></Button>
            <div className="Reg__footerSteps">
              <span className="Font_16_24">Шаг</span>
              <span className="Reg__footerCount Font_16_140 Color_blue_primary">
                6
              </span>
              <span className="Font_16_140 Color_text_grey">/ 7</span>
            </div>
          </div>
          <div className="Reg__nextButtonContainer">
            <div>
              <span className="Color_text_grey Font_16_24">
                Найдено продавцов
              </span>
              <p className="Color_blue_primary Font_16_140">317</p>
            </div>
            <Button
              disabled={!selected || (!fromValue && !toValue)}
              href="/customer/create-step-11"
            >
              Далее
            </Button>
          </div>
        </div>
      </div>
    </StyledRegStep1>
  );
};

const StyledRegStep1 = styled.section`
  background: #fff;
  border-radius: 10px;
  margin-top: 150px;

  .Reg__head {
    padding: 30px 30px 20px 30px;
    border-bottom: 2px solid #f1f7ff;
  }

  .Reg__link {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 30px;
    background: #f1f7ff;
  }

  .Reg__radioButtons {
    padding-left: 30px;
    margin-top: 42px;
    margin-left: -30px;
    display: flex;
    align-items: center;

    input {
      margin-left: 30px;
    }
  }

  .Reg__selectContainer {
    height: 416px;
    overflow-y: auto;
  }

  .Reg__options {
    padding: 40px 30px 0 30px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-top: -20px;

    button {
      justify-content: flex-start;
      margin-left: 10px;
      margin-top: 20px;
      padding: 10px 20px;

      span {
        text-align: initial;
      }
    }
  }

  .Reg__inputs {
    margin-top: 50px;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    align-items: center;
    div {
      max-width: 340px;
    }
    div:not(:first-child) {
      margin-left: 20px;
    }
  }

  .Reg__showMoreButton {
    color: #4e6af3;
  }

  .Reg__progressBar {
    position: relative;
    height: 6px;
    background-color: #d4ddee;
    ::after {
      position: absolute;
      border-radius: 0 10px 10px 0;
      content: "";
      width: 81.81%;
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

    .Reg__selectContainer {
      height: 827px;
    }

    .Reg__inputs {
      div {
        max-width: unset;
      }
    }
  }

  @media (max-width: 768px) {
    .Reg__nextButtonContainer {
      div {
        display: none;
      }
    }
  }

  @media (max-width: 576px) {
    margin-top: 0;
    .Reg__head {
      padding: 20px;
    }

    .Reg__selectContainer {
      height: 610px;
    }

    .Reg__options {
      padding: 38px 20px;
      display: flex;
    }

    .Reg__inputs {
      padding-left: 20px;
      padding-right: 20px;
      margin-top: 36px;
      flex-direction: column;

      div:not(:first-child) {
        margin-left: 0;
        margin-top: 20px;
      }
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

export { RangeStep6 };
