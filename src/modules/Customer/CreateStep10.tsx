import { Button, RequestButton } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import { SetStateAction, useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

type Option = "any" | "installments" | "mortgage" | "personal";
type PayOption = "cash" | "cashless" | "crypt";

const CreateStep10 = ({ className }: Props) => {
  const [selected, setSelected] = useState<Option | null>(null);
  const [startPercent, setStartPercent] = useState<number | null>(null);
  const [selectedRange, setSelectedRange] = useState<number[]>([]);

  const [selectedPay, setSelectedPay] = useState<PayOption[]>([]);

  const handleSelectPay = useCallback(
    (payOption: PayOption) => {
      if (selectedPay.includes(payOption)) {
        setSelectedPay(selectedPay.filter((item) => item !== payOption));
      } else {
        setSelectedPay([...selectedPay, payOption]);
      }
    },
    [selectedPay]
  );

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);

  const handleSquareClick = (percentIndex: number) => {
    if (startPercent === null) {
      // start new range
      setStartPercent(percentIndex);
      setSelectedRange([percentIndex]);
    } else {
      // continue existing range
      const endSquare = percentIndex;
      const rangeStart = Math.min(startPercent, endSquare);
      const rangeEnd = Math.max(startPercent, endSquare);
      const selectedRange: SetStateAction<number[]> = [];
      for (let i = rangeStart; i <= rangeEnd; i++) {
        selectedRange.push(i);
      }

      if (selectedRange.every((m) => selectedRange.includes(m))) {
        // update existing range
        setSelectedRange(selectedRange);
      } else {
        // create new range
        setSelectedRange(selectedRange);
        setStartPercent(null);
      }
    }

    if (startPercent !== null && percentIndex !== startPercent) {
      const rangeStart = Math.min(startPercent, percentIndex);
      const rangeEnd = Math.max(startPercent, percentIndex);
      const newRange = [];
      for (let i = rangeStart; i <= rangeEnd; i++) {
        newRange.push(i);
      }

      if (
        selectedRange.length > 0 &&
        newRange.every((m) => selectedRange.includes(m))
      ) {
        // update existing range
        setSelectedRange(newRange);
      } else {
        // add new range to existing range
        setSelectedRange([...selectedRange, ...newRange]);
      }
    }
  };

  const percents = [];
  for (let percent = 10; percent <= 100; percent += 10) {
    percents.push(percent);
  }

  return (
    <StyledRegStep1 className={className}>
      <div className="">
        <div className="Reg__head">
          <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
            Укажите формат сделки с недвижимостью
          </h1>
        </div>

        <div className="Reg__options">
          <RequestButton
            onClick={() => handleSelect("any")}
            active={selected === "any"}
          >
            Неважно
          </RequestButton>
          <RequestButton
            onClick={() => handleSelect("installments")}
            active={selected === "installments"}
          >
            В рассрочку
          </RequestButton>
          <RequestButton
            onClick={() => handleSelect("mortgage")}
            active={selected === "mortgage"}
          >
            В ипотеку
          </RequestButton>
          <RequestButton
            onClick={() => handleSelect("personal")}
            active={selected === "personal"}
          >
            Личными средствами
          </RequestButton>
        </div>
        <div>
          <h2>Первый взнос</h2>
          <div className="Reg__percents">
            {[...Array(10)].map((_, index) => {
              const percent = (index + 1) * 10;
              const label = `${percent}%`;

              const isActive = selectedRange.includes(percent);
              const isWithinRange =
                selectedRange.length === 2 &&
                percent >= selectedRange[0] &&
                percent <= selectedRange[1];
              return (
                <RequestButton
                  key={`${index}`}
                  onClick={() => handleSquareClick(percent)}
                  active={isActive}
                  ranged={isWithinRange}
                >
                  {label}
                </RequestButton>
              );
            })}
          </div>
        </div>

        <div className="Reg__payOptions">
          <RequestButton
            onClick={() => handleSelectPay("cash")}
            active={selectedPay.includes("cash")}
          >
            Наличный
          </RequestButton>
          <RequestButton
            onClick={() => handleSelectPay("cashless")}
            active={selectedPay.includes("cashless")}
          >
            Безналичный
          </RequestButton>
          <RequestButton
            onClick={() => handleSelectPay("crypt")}
            active={selectedPay.includes("crypt")}
          >
            Криптовалютой
          </RequestButton>
        </div>
        <div className="Reg__progressBar"></div>
        <div className="Reg__footer">
          <div className="Reg__footerBack">
            <Button
              secondary
              href="/customer/create-step-9"
              className="Reg__goBackButton"
            >
              Назад
            </Button>
            <Button
              secondary
              href="/customer/create-step-9"
              leftIcon={<ArrowIcon />}
              className="Reg__goBackButtonMobile"
            ></Button>
            <div className="Reg__footerSteps">
              <span className="Font_16_24">Шаг</span>
              <span className="Reg__footerCount Font_16_140 Color_blue_primary">
                10
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
            <Button href="/customer/create-step-11">Далее</Button>
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
    padding: 30px 30px 18px 30px;
    border: 2px solid #f1f7ff;
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

  .Reg__options {
    padding: 41px 30px 30px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-top: -20px;

    button {
      justify-content: flex-start;
      width: fit-content;
      padding: 10px 20px;
      margin-left: 20px;
      margin-top: 20px;

      span {
        text-align: initial;
      }
    }
  }

  .Reg__percents {
    display: flex;
    flex-wrap: wrap;
    button {
      max-width: fit-content;
      padding: 10px 20px;
    }
  }

  .Reg__payOptions {
    display: flex;
  }

  .Reg__monthsContainer {
    padding: 30px;
  }

  .Reg__months {
    display: flex;
    flex-wrap: wrap;

    margin-left: -10px;
    margin-top: -10px;
    button {
      padding: 10px 20px;
      width: fit-content;
      margin-left: 10px;
      margin-top: 10px;
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
      width: 92%;
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

export { CreateStep10 };
