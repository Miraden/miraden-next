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
  const minIndex = Math.min(...selectedRange);
  const maxIndex = Math.max(...selectedRange);
  return (
    <StyledRegStep1 className={className}>
      <div className="Reg">
        <div className="Reg__headContainer">
          <div className="Reg__head">
            <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
              Укажите удобный способ покупки
            </h1>
          </div>
        </div>
        <div className="Reg__selectContainer">
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
          <div className="Reg__percentsContainer">
            <h2 className="Font_20_120 sm:Font_18_120_500">Первый взнос</h2>
            <div className="Reg__percents">
              {[...Array(10)].map((_, index) => {
                const percent = (index + 1) * 10;
                const label = `${percent}%`;
                const isRanged = index > minIndex && index < maxIndex;
                return (
                  <RequestButton
                    key={`${index}`}
                    onClick={() => handleSquareClick(index)}
                    active={isRanged ? false : selectedRange.includes(index)}
                    ranged={isRanged}
                  >
                    {label}
                  </RequestButton>
                );
              })}
            </div>
          </div>
          <div className="Reg__payOptionsContainer">
            <h2 className="Font_20_120 sm:Font_18_120_500">Формат расчёта</h2>
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
          </div>
        </div>
        <div className="Reg__footerContainer">
          <div className="Reg__progressBar"></div>
          <div className="Reg__footer">
            <div className="Reg__footerBack">
              <Button
                secondary
                href="/lead/add/9"
                className="Reg__goBackButton"
              >
                Назад
              </Button>
              <Button
                secondary
                href="/lead/add/9"
                leftIcon={<ArrowIcon />}
                className="Reg__goBackButtonMobile"
              ></Button>
              <div className="Reg__footerSteps">
                <span className="Font_16_24">Шаг</span>
                <span className="Reg__footerCount Font_16_140 Color_blue_primary">
                  10
                </span>
                <span className="Font_16_140 Color_text_grey">/ 11</span>
              </div>
            </div>
            <div className="Reg__nextButtonContainer">
              <div>
                <span className="Color_text_grey Font_16_24">
                  Найдено продавцов
                </span>
                <p className="Color_blue_primary Font_16_140">317</p>
              </div>
              <Button href="/lead/add/11">Далее</Button>
            </div>
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
    padding: 30px 30px 18px 30px;
    border-bottom: 2px solid #f1f7ff;
  }

  .Reg__selectContainer {
    height: 416px;
    padding: 40px 30px 0 30px;
  }

  .Reg__options {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-top: -20px;

    button {
      justify-content: flex-start;
      width: fit-content;
      padding: 10px 20px;
      margin-left: 10px;
      margin-top: 12px;

      span {
        text-align: initial;
      }
    }
  }

  .Reg__percentsContainer {
    margin-top: 50px;
  }

  .Reg__percents {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    button {
      margin-left: 10px;
      margin-top: 12px;
      max-width: fit-content;
      padding: 10px 12px;
    }
  }

  .Reg__payOptionsContainer {
    margin-top: 50px;
  }

  .Reg__payOptions {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    button {
      margin-left: 10px;
      margin-top: 12px;
      width: fit-content;
      padding: 10px 20px;
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
      width: 91%;
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

    .Reg__selectContainer {
      padding-top: 36px;
    }

    .Reg__options {
      margin-top: -10px;
    }

    .Reg__percentsContainer {
      margin-top: 36px;
    }

    .Reg__payOptionsContainer {
      margin-top: 36px;
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
    height: 100vh;

    .Reg {
      height: 100%;
    }
    .Reg__head {
      padding: 20px 20px 16px 20px;
    }

    .Reg__selectContainer {
      padding: 24px 20px 0 20px;
      height: 616px;
    }

    .Reg__options {
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
    .Reg__headContainer {
      position: sticky;
      top: 0;
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
`;

export { CreateStep10 };
