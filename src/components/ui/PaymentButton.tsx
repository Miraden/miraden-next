import cn from "classnames";
import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import styled from "styled-components";
import { Checkbox } from "./CheckBox";

interface PaymentButtonProps {
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  ariaLabel?: string;
  buttonTitle?: ReactNode;
  buttonText?: ReactNode;
  disabled?: boolean;
  tax?: number;
  active?: boolean;
  onChange?: () => void;
}

const baseClass = "PaymentButton"

const PaymentButton = ({
  className,
  onClick,
  buttonTitle,
  disabled,
  tax,
  buttonText,
  active,
  onChange,
}: PaymentButtonProps) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  const handleCheckboxChange = () => {
    if (onChange) {
      onChange();
    }
  };

  return (
    <StyledButton
      onClick={handleButtonClick}
      className={cn(`${className}  PaymentButton`, {
        disabled: disabled,
        isActive: active,
      })}
    >
      <div className="Button__container">
        <Checkbox
          onChange={handleCheckboxChange}
          checked={active}
          className={`${baseClass}__checkbox`}
          onClick={(e) => {
            e.stopPropagation(); // Остановить всплытие клика, чтобы не вызывался handleButtonClick
          }}
        />
        {tax && (
          <div className="Font_20_120 PaymentButton__percent">{tax} €</div>
        )}
      </div>
      {buttonTitle && (
        <div className="[ Button__label ]">
          <h3 className="Font_16_140">{buttonTitle}</h3>
          <p className="Font_14_140" dangerouslySetInnerHTML={{__html: buttonText}}/>
        </div>
      )}
    </StyledButton>
  );
};

const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: none;
  width: 100%;
  transition: 0.2s ease;

  .${baseClass}__checkbox {
    margin-right: 7px;
  }

  .Button__container {
    display: flex;
    align-items: center;
    margin-left: -3px;

    p {
      margin-top: 7px;
    }
  }

  .PaymentButton__percent {
    color: #4e6af3;
  }

  .PaymentButton__percentMobile {
    display: none;
    color: #4e6af3;
    margin-top: -2px;
  }

  &.isActive {
    background: #2a344a;
    h3 {
      color: #fff;
    }
    p {
      color: #fff;
    }

    .PaymentButton__percent,
    .PaymentButton__percentMobile {
      color: #fff;
    }
  }

  &.disabled {
    cursor: unset;
    background: ${({ theme }) =>
      theme.colors.button.disabled.background} !important;
    color: ${({ theme }) => theme.colors.grey["disabled"]} !important;
  }

  &.PaymentButton {
    padding: 15px 20px;
    background: #f1f7ff;
  }

  &.PaymentButton:hover {
    background: ${({ theme }) => theme.colors.button.pay["hover"]};
  }

  &.PaymentButton:active {
    background: ${({ theme }) => theme.colors.button.pay["active"]};
  }

  &.PaymentButton:focus-visible {
    background: ${({ theme }) => theme.colors.button.pay["focused"]};
    outline: 2px solid ${({ theme }) => theme.colors.stroke.purple};
  }

  .Button__label {
    margin-top: 10px;

    p {
      margin-top: 5px;
    }
  }
`;

export { PaymentButton };
export type { PaymentButtonProps as ButtonProps };
