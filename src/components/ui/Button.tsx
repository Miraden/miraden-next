import cn from "classnames";
import NextLink from "next/link";
import { ButtonHTMLAttributes, FC, MouseEvent, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  secondary?: boolean;
  compact?: boolean;
  narrow?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  ariaLabel?: string;
  prefetch?: boolean;
  children?: ReactNode;
}

const Button: FC<Props> = ({
  className,
  onClick,
  children,
  href,
  type,
  secondary,
  compact,
  narrow,
  leftIcon,
  rightIcon,
  ariaLabel,
  prefetch = true,
}) => {
  if (!href) {
    return (
      <StyledButton
        aria-label={ariaLabel}
        as="button"
        onClick={onClick}
        className={cn(`${className} Font_16_20`, {
          Button_primary: !secondary,
          Button_secondary: secondary,
          Button_regular: !compact,
          Button_compact: compact,
          Button_narrow: narrow,
          Button_withoutLabel: !children,
        })}
        type={type}
      >
        {leftIcon && (
          <div className="[ Button__iconContainer Button__leftIconContainer ]">
            {leftIcon}
          </div>
        )}
        {children && <span className="[ Button__label ]">{children}</span>}
        {rightIcon && (
          <div className="[ Button__iconContainer Button__rightIconContainer ]">
            {rightIcon}
          </div>
        )}
      </StyledButton>
    );
  }

  if (href.includes("http") || prefetch === false) {
    return (
      <StyledButton
        href={href}
        onClick={onClick}
        className={cn(`${className} Font_18_26_600`, {
          Button_primary: !secondary,
          Button_secondary: secondary,
          Button_regular: !compact,
          Button_compact: compact,
          Button_narrow: narrow,
          Button_withoutLabel: !children,
        })}
      >
        {leftIcon && (
          <div className="[ Button__iconContainer Button__leftIconContainer ]">
            {leftIcon}
          </div>
        )}
        {children && <span className="[ Button__label ]">{children}</span>}
        {rightIcon && (
          <div className="[ Button__iconContainer Button__rightIconContainer ]">
            {rightIcon}
          </div>
        )}
      </StyledButton>
    );
  }

  return (
    <NextLink href={href} passHref>
      <StyledButton
        onClick={onClick}
        className={cn(`${className} Font_18_26_600`, {
          Button_primary: !secondary,
          Button_secondary: secondary,
          Button_regular: !compact,
          Button_compact: compact,
          Button_narrow: narrow,
          Button_withoutLabel: !children,
        })}
      >
        {leftIcon && (
          <div className="[ Button__iconContainer Button__leftIconContainer ]">
            {leftIcon}
          </div>
        )}
        {children && <span className="[ Button__label ]">{children}</span>}
        {rightIcon && (
          <div className="[ Button__iconContainer Button__rightIconContainer ]">
            {rightIcon}
          </div>
        )}
      </StyledButton>
    </NextLink>
  );
};

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  border: none;

  &.Button_regular {
    padding: 15px 36px;
  }

  &.Button_compact {
    padding: 7px 24px;
  }

  &.Button_primary {
    background: ${({ theme }) => theme.colors.blue["default"]};
    color: ${({ theme }) => theme.colors.white};
  }

  &.Button_secondary {
    background: ${({ theme }) => theme.colors.grey["default"]};
    color: ${({ theme }) => theme.colors.white};
  }

  &.Button_narrow {
    padding-left: 16px;
    padding-right: 16px;
  }

  &.Button_primary:hover {
    background: ${({ theme }) => theme.colors.blue["hover"]};
  }

  &.Button_secondary:hover {
    background: ${({ theme }) => theme.colors.grey["hover"]};
  }

  &.Button_primary:active {
    background: ${({ theme }) => theme.colors.blue["active"]};
  }

  &.Button_secondary:active {
    background: ${({ theme }) => theme.colors.grey["active"]};
  }

  &.Button_primary:focus-visible {
    background: ${({ theme }) => theme.colors.blue["focused"]};
  }

  &.Button_secondary:focus-visible {
    background: ${({ theme }) => theme.colors.grey["focused"]};
  }

  .Button__label {
    text-align: center;
  }

  .Button__iconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Button__rightIconContainer {
    margin-left: 8px;
  }

  .Button__leftIconContainer {
    margin-right: 8px;
  }

  .Button__iconContainer svg {
    width: 16px;
    height: 16px;
  }

  &.Button_primary {
    .Button__iconContainer svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  &.Button_secondary {
    .Button__iconContainer svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  &.Button_withoutLabel {
    .Button__rightIconContainer {
      margin-left: 0;
    }

    .Button__leftIconContainer {
      margin-right: 0;
    }
  }
`;

export { Button };
export type { Props as ButtonProps };
