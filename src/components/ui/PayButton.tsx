import cn from "classnames";
import {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
  useCallback,
  useState,
} from "react";
import styled from "styled-components";

interface PayButtonProps {
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  leftIcon?: ReactNode;
  ariaLabel?: string;
  children?: ReactNode;
  disabled?: boolean;
  tax?: string;
}

const PayButton = ({
  className,
  onClick,
  children,
  leftIcon,
  disabled,
  tax,
}: PayButtonProps) => {
  const [activeButton, setActiveButton] = useState(false);

  const handleActive = useCallback(() => {
    setActiveButton(!activeButton);
  }, [activeButton]);

  return (
    <StyledButton
      onClick={handleActive}
      className={cn(`${className} Font_16_140 PayButton`, {
        disabled: disabled,
        isActive: activeButton,
      })}
    >
      <div className="Button__container">
        {leftIcon && (
          <div className="[ Button__iconContainer Button__leftIconContainer ]">
            {leftIcon}
          </div>
        )}
        {children && <span className="[ Button__label ]">{children}</span>}
      </div>
      {tax && <div className="Font_14_140 PayButton__percent">{tax}%</div>}
    </StyledButton>
  );
};

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  max-width: 315px;
  width: 100%;
  transition: 0.2s ease;
  box-shadow: inset 0 0 0 2px
    ${({ theme }) => theme.colors.button.secondary["active"]};

  .Button__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .PayButton__percent {
    color: ${({ theme }) => theme.colors.grey["textGrey"]};
  }

  &.isActive {
    background: #e1edfd !important;
  }

  &.disabled {
    cursor: unset;
    background: ${({ theme }) =>
      theme.colors.button.disabled.background} !important;
    color: ${({ theme }) => theme.colors.grey["disabled"]} !important;

    svg path {
      fill: ${({ theme }) => theme.colors.button.disabled.text} !important;
    }
  }

  &.PayButton {
    padding: 9px 15px;
    background: ${({ theme }) => theme.colors.button.pay["default"]};
  }

  &.PayButton:hover {
    background: ${({ theme }) => theme.colors.button.pay["hover"]};
  }

  &.PayButton:active {
    background: ${({ theme }) => theme.colors.button.pay["active"]};
  }

  &.PayButton:focus-visible {
    background: ${({ theme }) => theme.colors.button.pay["focused"]};
    outline: 2px solid ${({ theme }) => theme.colors.stroke.purple};
  }

  .Button__label {
    text-align: center;
  }

  .Button__iconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Button__leftIconContainer {
    margin-right: 20px;
  }

  .Button__iconContainer svg {
    width: 42px;
    height: 42px;
  }

  &.PayButton {
    .Button__iconContainer svg path {
      /* fill: ${({ theme }) => theme.colors.white}; */
    }
  }
`;

export { PayButton };
export type { PayButtonProps as ButtonProps };
