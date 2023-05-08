import { Button, NumberInput, RequestButton } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

type Option = "€" | "$" | "£" | "₽" | "¥" | "CHF" | "₺" | "AED";

const CreateStep9 = ({ className }: Props) => {
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

  return (
    <StyledRegStep1 className={className}>
      <div className="">
        <div className="Reg__head">
          <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
            Укажите примерный бюджет
          </h1>
        </div>

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
              Показать ещё {currencyOptions.length - 4}
            </RequestButton>
          )}
        </div>
        <div className="Reg__inputs">
          <NumberInput
            label="От"
            value={fromValue}
            onChange={(event: any) => setFromValue(event.target.value)}
          />
          <NumberInput
            label="До"
            value={toValue}
            onChange={(event: any) => setToValue(event.target.value)}
          />
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
                9
              </span>
              <span className="Font_16_140">/ 11</span>
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
              href="/customer/create-step-10"
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
    padding: 41px 30px 155px 30px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-top: -20px;

    button {
      justify-content: flex-start;
      margin-left: 20px;
      margin-top: 20px;
      padding: 10px 20px;

      span {
        text-align: initial;
      }
    }
  }

  .Reg__inputs {
    padding-left: 30px;
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
      width: 85%;
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

  @media (max-width: 960px) {
    .Reg__options {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: max-content;
      grid-gap: 20px;
      margin-left: 0;
      margin-top: 0;
      height: 797px;
      button {
        max-width: unset;
        width: 100%;
        margin-left: 0;
        margin-top: 0;
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
    .Reg__head {
      padding: 20px;
    }

    .Reg__options {
      padding: 38px 20px;
      display: flex;
      flex-direction: column;
      grid-gap: 12px;
      height: 566px;
      button {
      }
    }

    .Reg__link {
      padding: 5px 20px;
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

export { CreateStep9 };
