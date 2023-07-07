import { Button, RequestButton } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

type Option =
  | "business"
  | "another"
  | "rent"
  | "sell"
  | "register"
  | "citizenship";

const CreateCommercialStep6 = ({ className }: Props) => {
  const [selected, setSelected] = useState<Option[]>([]);

  const handleSelect = useCallback(
    (option: Option) => {
      if (selected.includes(option)) {
        setSelected(selected.filter((item) => item !== option));
      } else {
        setSelected([...selected, option]);
      }
    },
    [selected]
  );

  return (
    <StyledRegStep1 className={className}>
      <div className="Reg">
        <div className="Reg__headContainer">
          <div className="Reg__head">
            <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
              Укажите цель покупки
            </h1>
          </div>
        </div>

        <div className="Reg__options">
          <RequestButton
            onClick={() => handleSelect("rent")}
            active={selected.includes("rent")}
          >
            Для инвестиций (сдавать)
          </RequestButton>
          <RequestButton
            onClick={() => handleSelect("sell")}
            active={selected.includes("sell")}
          >
            Для инвестиций (перепродать)
          </RequestButton>
          <RequestButton
            onClick={() => handleSelect("register")}
            active={selected.includes("register")}
          >
            Для ВНЖ / ПМЖ
          </RequestButton>
          <RequestButton
            onClick={() => handleSelect("citizenship")}
            active={selected.includes("citizenship")}
          >
            Для гражданства
          </RequestButton>
          <RequestButton
            onClick={() => handleSelect("business")}
            active={selected.includes("business")}
          >
            Для своего бизнеса
          </RequestButton>
          <RequestButton
            onClick={() => handleSelect("another")}
            active={selected.includes("another")}
          >
            Другое
          </RequestButton>
        </div>
        <div className="Reg__footerContainer">
          <div className="Reg__progressBar"></div>

          <div className="Reg__footer">
            <div className="Reg__footerBack">
              <Button
                secondary
                href="/lead/add/5&commercial"
                className="Reg__goBackButton"
              >
                Назад
              </Button>
              <Button
                secondary
                href="/lead/add/5&commercial"
                leftIcon={<ArrowIcon />}
                className="Reg__goBackButtonMobile"
              ></Button>
              <div className="Reg__footerSteps">
                <span className="Font_16_24">Шаг</span>
                <span className="Reg__footerCount Font_16_140 Color_blue_primary">
                  6
                </span>
                <span className="Font_16_140 Color_text_grey">/ 10</span>
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
                disabled={selected.length === 0}
                href="lead/add/8"
              >
                Далее
              </Button>
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
    padding: 30px 30px 20px 30px;
    border-bottom: 2px solid #f1f7ff;
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
      max-width: 340px;
      width: 100%;
      margin-left: 20px;
      margin-top: 20px;

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
      width: 60%;
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
    margin-top: 0;
    height: 100vh;

    .Reg {
      height: 100%;
    }
    .Reg__head {
      padding: 20px 20px 16px 20px;
    }

    .Reg__options {
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      grid-gap: 12px;
      height: 566px;
      button {
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

export { CreateCommercialStep6 };
