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
    buttonText: 'На заявку смогут откликнуться <br/> все пользователи, а не только PRO',
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
            <li key={index} className="SideBar__button">
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
        {selectedOptions.length > 0 ? (
            <div className="SideBar__totalTaxButton">
              <Button onClick={handleClick}>Увеличить отклики {totalTax} €</Button>
            </div>
        ) : (
            <div className="SideBar__totalTaxButton">
              <Button onClick={handleClick}>Увеличить отклики </Button>
            </div>
        )}
      </div>
      <div className="SideBar__section SideBar__totalTaxButton--edit">
        <Button className="" tertiary={true}>Редактировать заявку</Button>
      </div>
    </StyledSingleApplicationSideBar>
  );
};
const StyledSingleApplicationSideBar = styled.div`
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
  }

  .SideBar__title {
    padding-left: 20px;
    padding-right: 20px;
  }

  .SideBar__errorMessage {
    margin-top: 20px;
    background: #fff5f5;
    color: #f34942;
    padding: 5px 20px;
  }

  .SideBar__buttons {
    margin-top: 31px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .SideBar__button {
    margin-top: 21px;

    .PaymentButton {
      &.isActive {
        background: #2a344a;
      }
    }

    cursor: pointer;

    :first-child {
      :hover {
        cursor: default;
      }
    }
  }
  
  .SideBar__section {
    background: #fff;
    margin-top: 10px;
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
    width: 100%;
    padding: 20px;
    border-top: 2px solid #f1f7ff;
    margin-top: 28px;

    button {
      width: 100%;
    }
  }
  
  .SideBar__totalTaxButton--edit {
    border-radius: 10px;
    button {
      padding: 22px 0;
      width: 100%;
    }
  }
`;

export { SingleApplicationSideBar };
