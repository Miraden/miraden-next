import { Button } from "@/components/ui";
import { PaymentButton } from "@/components/ui/PaymentButton";
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

const SingleApplicationSideBar = ({ className }: Props) => {
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

  return (
    <StyledSingleApplicationSideBar className={className}>
      <div className="SideBar">
        <h2 className="Font_20_120">Увеличьте отклики</h2>
        <p className="SideBar__description Font_14_140">
          Любая выбранная опция дает вашей заявке отметку TRUE и повышенный
          интерес исполнителей
        </p>
        <div>
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
        </div>
      </div>
      <div className="SideBar__totalTaxButton">
        <Button>Увеличить отклики {totalTax} €</Button>
      </div>
    </StyledSingleApplicationSideBar>
  );
};

const StyledSingleApplicationSideBar = styled.div`
  background: #fff;
  border-radius: 10px;

  .SideBar {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
  }

  .SideBar__description {
    margin-top: 15px;
  }

  .SideBar__buttons {
    margin-top: 30px;
  }

  .SideBar__button {
    margin-top: 20px;

    .PaymentButton {
      &.isActive {
        background: #2a344a;
      }
    }
  }

  .SideBar__button:first-child {
    .PaymentButton {
      &.isActive {
        background: #36bf76;
      }
    }

    .Checkbox__input:checked + .Checkbox__iconContainer {
      background: #0ab258;
      border: 2px solid #0ab258;
    }
  }

  .SideBar__totalTaxButton {
    padding: 20px;
    border-top: 2px solid #f1f7ff;
    margin-top: 28px;
    button {
      width: 100%;
    }
  }
`;

export { SingleApplicationSideBar };
