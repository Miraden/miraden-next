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
        <div className="Button__container--detail">
          <Checkbox
            onChange={handleCheckboxChange}
            checked={active}
            onClick={(e) => {
              e.stopPropagation(); // Остановить всплытие клика, чтобы не вызывался handleButtonClick
            }}
          />
          <h3 className="Font_16_140">{buttonTitle}</h3>
        </div>
        {tax && (
          <div className="Font_20_120 PaymentButton__percent">{tax} €</div>
        )}
      </div>
      {buttonTitle && (
        <div className="[ Button__label ] Button__container--label">
          <h3 className="Font_16_140">{buttonTitle}</h3>
          <p className="Font_14_140">{buttonText}</p>
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

  .Button__container--label {
    @media (max-width: 1441px) {
      width: calc(100% - 57px);
      margin: auto;
      p {
        margin-top: 0 !important;
      }
      h3 {
        display: none;
      }
    }

    @media (max-width: 360px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      h3 {
        display: block;
      }
    }
  }

  .Button__container {
    display: flex;
    align-items: center;

    @media (max-width: 360px) {
      justify-content: flex-start !important;
    }

    .Button__container--detail {
      display: flex;
      align-items: center;
      @media (max-width: 360px) {
        h3 {
          display: none;
        }
      }
      @media (min-width: 1441px) {
        h3 {
          display: none;
        }
      }
    }

    p {
      margin-top: 7px;
    }
  }

  .PaymentButton__percent {
    white-space: nowrap;
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
    @media (min-width: 1441px) {
      margin-top: 10px;
    }
    margin-top: 5px;

    p {
      margin-top: 5px;
    }
  }
`;

export { PaymentButton };
export type { PaymentButtonProps as ButtonProps };
