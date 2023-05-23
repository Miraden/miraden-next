import { Button, RequestButton } from "@/components/ui";
import { Radio } from "@/components/ui/Radio";
import { ArrowIcon } from "@/icons";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

type Option =
  | "flat"
  | "house"
  | "penthouse"
  | "townhouse"
  | "duplex"
  | "land"
  | "hotel"
  | "office"
  | "selling"
  | "warehouse"
  | "catering"
  | "production"
  | "landing"
  | "free";

const CreateStep3 = ({ className }: Props) => {
  const [isResidentialChecked, setIsResidentialChecked] = useState(true);
  const [isCommercialChecked, setIsCommercialChecked] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const handleResidentialCheck = useCallback(() => {
    setIsResidentialChecked(true);
    setIsCommercialChecked(false);
  }, []);

  const handleCommercialCheck = useCallback(() => {
    setIsResidentialChecked(false);
    setIsCommercialChecked(true);
  }, []);

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);

  return (
    <StyledRegStep1 className={className}>
      <div className="Reg">
        <div className="Reg__headContainer">
          <div className="Reg__head">
            <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
              Укажите тип недвижимости
            </h1>
          </div>
        </div>
        <div className="Reg__radioButtons">
          <Radio
            value="Жилая"
            checked={isResidentialChecked}
            onChange={handleResidentialCheck}
          />
          <Radio
            value="Коммерческая"
            checked={isCommercialChecked}
            onChange={handleCommercialCheck}
          />
        </div>
        <div className="Reg__options ">
          {isResidentialChecked ? (
            <>
              <RequestButton
                onClick={() => handleSelect("flat")}
                active={selected === "flat"}
              >
                Квартира / апартаменты
              </RequestButton>
              <RequestButton
                onClick={() => handleSelect("house")}
                active={selected === "house"}
              >
                Дом / вилла
              </RequestButton>
              <RequestButton
                onClick={() => handleSelect("penthouse")}
                active={selected === "penthouse"}
              >
                Пентхаус
              </RequestButton>
              <RequestButton
                onClick={() => handleSelect("townhouse")}
                active={selected === "townhouse"}
              >
                Таунхаус
              </RequestButton>
              <RequestButton
                onClick={() => handleSelect("duplex")}
                active={selected === "duplex"}
              >
                Дуплекс
              </RequestButton>
              <RequestButton
                onClick={() => handleSelect("land")}
                active={selected === "land"}
              >
                Участок земли
              </RequestButton>
            </>
          ) : (
            <>
              <RequestButton
                onClick={() => handleSelect("hotel")}
                active={selected === "hotel"}
              >
                Отель
              </RequestButton>
              <RequestButton
                onClick={() => handleSelect("office")}
                active={selected === "office"}
              >
                Офис
              </RequestButton>
              <RequestButton
                onClick={() => handleSelect("selling")}
                active={selected === "selling"}
              >
                Торговля
              </RequestButton>
              <RequestButton
                onClick={() => handleSelect("warehouse")}
                active={selected === "warehouse"}
              >
                Склад
              </RequestButton>
              <RequestButton
                onClick={() => handleSelect("catering")}
                active={selected === "catering"}
              >
                Общепит
              </RequestButton>
              <RequestButton
                onClick={() => handleSelect("production")}
                active={selected === "production"}
              >
                Производство
              </RequestButton>
              <RequestButton
                onClick={() => handleSelect("landing")}
                active={selected === "landing"}
              >
                Участок земли
              </RequestButton>
              <RequestButton
                onClick={() => handleSelect("free")}
                active={selected === "free"}
              >
                Свободное назначение
              </RequestButton>
            </>
          )}
        </div>
        <div className="Reg__footerContainer">
          <div className="Reg__progressBar"></div>
          <div className="Reg__footer">
            <div className="Reg__footerBack">
              <Button
                secondary
                href="/customer/create-step-2"
                className="Reg__goBackButton"
              >
                Назад
              </Button>
              <Button
                secondary
                href="/customer/create-step-2"
                leftIcon={<ArrowIcon />}
                className="Reg__goBackButtonMobile"
              ></Button>
              <div className="Reg__footerSteps">
                <span className="Font_16_24">Шаг</span>
                <span className="Reg__footerCount Font_16_140 Color_blue_primary">
                  3
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
              {isCommercialChecked ? (
                <Button
                  disabled={!selected}
                  href="/customer/create-commercial-step-4"
                >
                  Далее
                </Button>
              ) : (
                <>
                  {selected === "land" ? (
                    <Button
                      disabled={!selected}
                      href="/customer/create-step-6-land"
                    >
                      Далее
                    </Button>
                  ) : (
                    <>
                      {selected === "duplex" ||
                      selected === "townhouse" ||
                      selected === "house" ? (
                        <Button
                          disabled={!selected}
                          href="/customer/create-step-4-full"
                        >
                          Далее
                        </Button>
                      ) : (
                        <Button
                          disabled={!selected}
                          href="/customer/create-step-4"
                        >
                          Далее
                        </Button>
                      )}
                    </>
                  )}
                </>
              )}
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

  .Reg__radioButtons {
    padding-left: 30px;
    margin-top: 36px;
    margin-left: -30px;
    display: flex;
    align-items: center;

    input {
      margin-left: 30px;
    }
  }

  .Reg__options {
    padding: 41px 30px 0 30px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-top: -20px;
    height: 374px;
    align-content: flex-start;
    overflow-y: auto;

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
      width: 27%;
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
      grid-gap: 12px;
      margin-left: 0;
      margin-top: 0;
      height: 797px;
      padding-top: 24px;
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
    margin-top: 0;
    height: 100vh;

    .Reg__radioButtons {
      margin-top: 24px;
    }

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

export { CreateStep3 };
