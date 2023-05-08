import { Button, CreatePaymentButton, PayForm } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const paymentOptions = [
  {
    buttonTitle: "Открыть отклик для всех",
    buttonText:
      "На заявку смогут откликнуться все пользователи, а не только PRO",
    tax: 10,
  },
  {
    buttonTitle: "Закрепить вверху на 24 часа",
    buttonText:
      "Заявка будет закреплена вверху ленты. После чего сместится вниз по мере поступления новых",
    tax: 15,
  },
  {
    buttonTitle: "Поднимать каждые 3 дня",
    buttonText:
      "Заявка будет автоматически подниматься в самый верх ленты каждые 3 дня",
    tax: 20,
  },
];

const CreatePayment = ({ className }: Props) => {
  const [activeButtons, setActiveButtons] = useState(
    paymentOptions.map((option, index) => index === 0)
  );

  const handleActive = useCallback(
    (index: number) => {
      const newActiveButtons = [...activeButtons];
      newActiveButtons[index] = !newActiveButtons[index];
      setActiveButtons(newActiveButtons);
    },
    [activeButtons]
  );

  const selectedOptions = paymentOptions.filter(
    (option, index) => activeButtons[index]
  );
  const totalTax = selectedOptions.reduce((acc, option) => acc + option.tax, 0);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleCloseMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <StyledRegStep1 className={className}>
      <div className="">
        <div className="Reg__head">
          <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
            Получите больше просмотров и откликов
          </h1>
        </div>
        <div>
          <ul className="">
            {paymentOptions.map((option, index) => (
              <li key={index}>
                <CreatePaymentButton
                  onClick={() => handleActive(index)}
                  buttonTitle={option.buttonTitle}
                  buttonText={option.buttonText}
                  tax={option.tax}
                  active={activeButtons[index]}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="Reg__progressBar"></div>
        <div className="Reg__footer">
          <div className="Reg__footerBack">
            <Button
              secondary
              href="/customer/create-step-10"
              className="Reg__goBackButton"
            >
              Назад
            </Button>
            <Button
              secondary
              href="/customer/create-step-10"
              leftIcon={<ArrowIcon />}
              className="Reg__goBackButtonMobile"
            ></Button>
          </div>
          <div className="Reg__nextButtonContainer">
            <div>
              <span className="Color_text_grey Font_16_24">
                Найдено продавцов
              </span>
              <p className="Color_blue_primary Font_16_140">317</p>
            </div>

            <Button onClick={handleOpenMenu}>Оплатить {totalTax} €</Button>
          </div>
          {isOpen && <PayForm onClose={handleCloseMenu} />}
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

export { CreatePayment };
