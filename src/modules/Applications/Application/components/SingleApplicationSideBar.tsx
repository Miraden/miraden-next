import { Button } from "@/components/ui";
import { PaymentButton } from "@/components/ui/PaymentButton";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const paymentOptions = [
  {
    buttonTitle: "Открыть отклик для всех",
    buttonText:
      "На заявку смогут откликнуться все пользователи, а не только PRO",
    tax: 10,
  },
  {
    buttonTitle: "Закрепить вверху на 24 часа",
    buttonText:
      "Заявка будет закреплена вверху ленты. После чего сместится вниз по мере поступления новых",
    tax: 15,
  },
  {
    buttonTitle: "Поднимать каждые 3 дня",
    buttonText:
      "Заявка будет автоматически подниматься в самый верх ленты каждые 3 дня",
    tax: 20,
  },
];

const SingleApplicationSideBar = ({ className }: Props) => {
  const [activeButtons, setActiveButtons] = useState(
    paymentOptions.map((option, index) => index === 0)
  );
  const [error, setError] = useState(false);

  const handleActive = useCallback(
    (index: number) => {
      if (index === 0) return;
      const newActiveButtons = [...activeButtons];
      newActiveButtons[index] = !newActiveButtons[index];
      setActiveButtons(newActiveButtons);
      setError(false);
    },
    [activeButtons]
  );

  const selectedOptions = paymentOptions.filter(
    (option, index) => index !== 0 && activeButtons[index]
  );

  const totalTax = selectedOptions.reduce((acc, option) => acc + option.tax, 0);

  const selectedTaxValues = paymentOptions
    .filter((option, index) => activeButtons[index])
    .map((option) => option.tax);

  const handleClick = () => {
    if (selectedOptions.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <StyledSingleApplicationSideBar className={className}>
      <div className="SideBar">
        <h2 className="SideBar__title Font_20_120">Увеличьте отклики</h2>
        <p className="SideBar__description Font_14_140">
          Любая выбранная опция дает вашей заявке отметку TRUE и повышенный
          интерес исполнителей
        </p>
        {error && (
          <div className="SideBar__errorMessage ">
            Пожалуйста, выберите одну или несколько опций
          </div>
        )}
        <ul className="SideBar__buttons">
          {paymentOptions.map((option, index) => (
            <li
              key={index}
              className={`SideBar__button ${
                activeButtons[index] ? "SideBar__button--active" : ""
              }`}
            >
              <PaymentButton
                onChange={() => handleActive(index)}
                onClick={() => handleActive(index)}
                buttonText={option.buttonText}
                buttonTitle={option.buttonTitle}
                tax={option.tax}
                active={activeButtons[index]}
              />
            </li>
          ))}
        </ul>
      </div>
      {selectedOptions.length > 0 ? (
        <div className="SideBar__totalTaxButton">
          <Button onClick={handleClick}>Увеличить отклики {totalTax} €</Button>
        </div>
      ) : (
        <div className="SideBar__totalTaxButton">
          <Button onClick={handleClick}>Увеличить отклики </Button>
        </div>
      )}
    </StyledSingleApplicationSideBar>
  );
};
const StyledSingleApplicationSideBar = styled.div`
  background: #fff;
  border-radius: 10px;
  position: relative;

  .SideBar {
    background: #fff;
    border-radius: 10px;
    padding-top: 20px;
  }

  .SideBar__description {
    margin-top: 15px;
    padding-right: 20px;
    padding-left: 20px;
    color: #3b4a69;
  }

  .SideBar__title {
    padding-left: 20px;
    padding-right: 20px;
  }

  .SideBar__errorMessage {
    margin-top: 20px;
    background: #fff5f5;
    color: #f34942;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .SideBar__buttons {
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .SideBar__button {
    margin-top: 20px;

    .PaymentButton {
      &.isActive {
        background: #2a344a;
      }
    }
    cursor: pointer;
    :first-child {
      pointer-events: none;
      :hover {
        cursor: default;
      }
    }
  }

  .SideBar__button {
    .Button__container {
      @media (max-width: 1441px) {
        justify-content: space-between;
      }
    }
  }

  .SideBar__button:first-child {
    .PaymentButton {
      &.isActive {
        background: #36bf76;
      }
    }

    .Button__container {
      label {
        cursor: default;
      }
    }

    .Checkbox__input:checked + .Checkbox__iconContainer {
      background: #0ab258;
      border: 2px solid #0ab258;
    }
  }

  .SideBar__totalTaxButton {
    background: #fff;
    width: 100%;
    bottom: 0;
    padding: 20px;
    border-top: 2px solid #f1f7ff;
    margin-top: 50px;
    button {
      width: 100%;
    }
  }
`;

export { SingleApplicationSideBar };
