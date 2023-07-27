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
  ranged?: boolean;
  activeBlue?: boolean;
}

const RequestButton = ({
  className,
  onClick,
  children,
  href,
  ranged,
  type,
  compact,
  narrow,
  ariaLabel,
  disabled,
  active,
  activeBlue,
}: RequestButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveBlue, setIsActiveBlue] = useState(false);

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
        isActiveBlue: activeBlue,
        ranged: ranged,
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
  height: fit-content;
  transition: 0.2s ease;

  &.ranged {
    background: #cddef4 !important;
  }

  &.isActive {
    background: ${({theme}) => theme.colors.button.request.bg.active};
    color: ${({theme}) => theme.colors.button.request.text.active};
  }

  &.isActiveBlue {
    background: #4e6af3 !important;
    color: #fff !important;
    box-shadow: 0 0 0 2px inset #4e6af3 !important;

    :hover {
      background: #3e56d0 !important;
      box-shadow: 0 0 0 2px inset #3e56d0 !important;
    }
  }

  &.disabled {
    cursor: unset;
    background: ${({ theme }) =>
      theme.colors.button.disabled.background} !important;
    color: ${({ theme }) => theme.colors.button.disabled.text} !important;
  }

  &.RequestButton {
    background: ${({theme}) => theme.colors.button.request.bg.default};
    color: ${({theme}) => theme.colors.button.request.text.default};

    &.isActive {
      background: ${({theme}) => theme.colors.button.request.bg.active};
      color: ${({theme}) => theme.colors.button.request.text.active};
    }

    &:hover {
      background: ${({theme}) => theme.colors.button.request.bg.hover};
    }
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
