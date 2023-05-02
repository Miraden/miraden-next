import cn from "classnames";
import { ButtonHTMLAttributes, MouseEvent, ReactNode, useState } from "react";
import styled from "styled-components";

interface RequestButtonProps {
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  compact?: boolean;
  narrow?: boolean;
  ariaLabel?: string;
  children?: ReactNode;
  disabled?: boolean;
  active?: boolean;
}

const RequestButton = ({
  className,
  onClick,
  children,
  href,
  type,
  compact,
  narrow,
  ariaLabel,
  disabled,
  active,
}: RequestButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  if (disabled) {
    return (
      <StyledButton
        className={cn(`${className} Font_16_20 RequestButton`, {
          Button_regular: !compact,
          Button_compact: compact,
          Button_narrow: narrow,
          Button_withoutLabel: !children,
          disabled: disabled,
        })}
      >
        {children && <span className="[ Button__label ]">{children}</span>}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      aria-label={ariaLabel}
      as="button"
      onClick={onClick}
      className={cn(`${className} Font_16_20 RequestButton`, {
        Button_regular: !compact,
        Button_compact: compact,
        Button_narrow: narrow,
        Button_withoutLabel: !children,
        disabled: disabled,
        isActive: active,
      })}
      type={type}
    >
      {children && <span className="[ Button__label ]">{children}</span>}
    </StyledButton>
  );
};

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  transition: 0.2s ease;

  &.isActive {
    background: ${({ theme }) =>
      theme.colors.button.request["isActive"]} !important;
    color: ${({ theme }) => theme.colors.white};
  }

  &.disabled {
    cursor: unset;
    background: ${({ theme }) =>
      theme.colors.button.disabled.background} !important;
    color: ${({ theme }) => theme.colors.button.disabled.text} !important;
  }

  &.RequestButton {
    background: ${({ theme }) => theme.colors.button.request["default"]};
  }

  &.Button_regular {
    padding: 15px 82px 15px 20px;
  }

  &.Button_compact {
    padding: 10px 24px;
  }

  &.Button_narrow {
    padding-left: 16px;
    padding-right: 16px;
  }

  &.RequestButton:hover {
    background: ${({ theme }) => theme.colors.button.request["hover"]};
  }

  &.RequestButton:active {
    background: ${({ theme }) => theme.colors.button.request["active"]};
  }

  &.RequestButton:focus-visible {
    background: ${({ theme }) => theme.colors.button.request["focused"]};
    outline: 2px solid ${({ theme }) => theme.colors.stroke.purple};
  }

  .Button__label {
    text-align: center;
  }
`;

export { RequestButton };
export type { RequestButtonProps as ButtonProps };
