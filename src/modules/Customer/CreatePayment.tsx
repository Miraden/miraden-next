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
  const selectedTaxValues = paymentOptions
    .filter((option, index) => activeButtons[index])
    .map((option) => option.tax);

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
        <div className="Reg__link Color_blue_primary">
          <span>
            Важно! Любая выбранная опция даёт вашей заявке отметку TRUE
            и повышенный интерес исполнителей
          </span>
        </div>
        <ul className="Reg__paymentOptions">
          {paymentOptions.map((option, index) => (
            <li key={index}>
              <CreatePaymentButton
                onChange={() => handleActive(index)}
                onClick={() => handleActive(index)}
                buttonTitle={option.buttonTitle}
                buttonText={option.buttonText}
                tax={option.tax}
                active={activeButtons[index]}
              />
            </li>
          ))}
          {isOpen && (
            <PayForm
              onClose={handleCloseMenu}
              totalTax={totalTax}
              openToEveryone={selectedTaxValues[0]}
              additionalRequests={selectedTaxValues[1]}
              getUp={selectedTaxValues[2]}
            />
          )}
        </ul>
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

  .Reg__link {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 30px;
    background: #f1f7ff;
  }

  .Reg__paymentOptions {
    max-width: 840px;
    padding: 41px 30px 0 30px;
    height: 386px;
    overflow: scroll;

    li:not(:first-child) {
      margin-top: 20px;
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

  @media (max-width: 1200px) {
    margin-top: 100px;
  }

  @media (max-width: 960px) {
    margin-top: 10px;
    .Reg__paymentOptions {
      height: 775px;
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

    .Reg__paymentOptions {
      height: 599px;
      padding: 36px 20px 0 20px;
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
