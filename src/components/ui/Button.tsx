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
  tertiary?: boolean;
  request?: boolean;
  header?: boolean;
  compact?: boolean;
  narrow?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  ariaLabel?: string;
  prefetch?: boolean;
  children?: ReactNode;
  disabled?: boolean;
}

const Button: FC<Props> = ({
  className,
  onClick,
  children,
  href,
  type,
  secondary,
  tertiary,
  request,
  header,
  compact,
  narrow,
  leftIcon,
  rightIcon,
  ariaLabel,
  disabled,
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
          Button_tertiary: tertiary,
          Button_request: request,
          Button_header: header,
          Button_regular: !compact,
          Button_compact: compact,
          Button_narrow: narrow,
          Button_withoutLabel: !children,
          disabled: disabled,
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
        className={cn(`${className} Font_16_20`, {
          Button_primary: !secondary,
          Button_secondary: secondary,
          Button_tertiary: tertiary,
          Button_request: request,
          Button_header: header,
          Button_regular: !compact,
          Button_compact: compact,
          Button_narrow: narrow,
          Button_withoutLabel: !children,
          disabled: disabled,
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

  if (disabled) {
    return (
      <StyledButton
        href={href}
        onClick={onClick}
        className={cn(`${className} Font_16_20`, {
          Button_primary: !secondary,
          Button_secondary: secondary,
          Button_tertiary: tertiary,
          Button_request: request,
          Button_header: header,
          Button_regular: !compact,
          Button_compact: compact,
          Button_narrow: narrow,
          Button_withoutLabel: !children,
          disabled: disabled,
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
        className={cn(`${className} Font_16_20`, {
          Button_primary: !secondary,
          Button_secondary: secondary,
          Button_tertiary: tertiary,
          Button_request: request,
          Button_header: header,
          Button_regular: !compact,
          Button_compact: compact,
          Button_narrow: narrow,
          Button_withoutLabel: !children,
          disabled: disabled,
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
  transition: 0.2s ease;

  &.disabled {
    cursor: unset;
    background: ${({ theme }) =>
      theme.colors.button.disabled.background} !important;
    color: ${({ theme }) => theme.colors.button.disabled.text} !important;

    svg path {
      fill: ${({ theme }) => theme.colors.button.disabled.text} !important;
    }
  }

  &.Button_regular {
    padding: 15px 36px;
  }

  &.Button_compact {
    padding: 10px 24px;
  }

  &.Button_header {
    padding: 11px 20px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
  }

  &.Button_primary {
    background: ${({ theme }) => theme.colors.button.primary["default"]};
    color: ${({ theme }) => theme.colors.white};
  }

  &.Button_secondary {
    background: ${({ theme }) => theme.colors.grey["default"]};
    color: ${({ theme }) => theme.colors.black};
  }

  &.Button_tertiary {
    background: ${({ theme }) => theme.colors.transparent};
    color: ${({ theme }) => theme.colors.black};
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.black} !important;
    }
  }

  &.Button_request {
    background: ${({ theme }) => theme.colors.button.request["default"]};
    color: ${({ theme }) => theme.colors.black};
  }

  &.Button_header {
    background: ${({ theme }) => theme.colors.transparent};
    color: ${({ theme }) => theme.colors.white};
  }

  &.Button_narrow {
    padding-left: 16px;
    padding-right: 16px;
  }

  &.Button_primary:hover {
    background: ${({ theme }) => theme.colors.button.primary["hover"]};
  }

  &.Button_secondary:hover {
    background: ${({ theme }) => theme.colors.grey["hover"]};
    color: ${({ theme }) => theme.colors.blue["hover"]};

    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.blue["default"]};
    }
  }

  &.Button_tertiary:hover {
    background: ${({ theme }) => theme.colors.transparent};
    color: ${({ theme }) => theme.colors.blue["hover"]};
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.blue["default"]} !important;
    }
  }

  &.Button_request:hover {
    background: ${({ theme }) => theme.colors.button.request["hover"]};
  }

  &.Button_header:hover {
    background: ${({ theme }) => theme.colors.button.header["hover"]};
  }

  &.Button_primary:active {
    background: ${({ theme }) => theme.colors.button.primary["active"]};
  }

  &.Button_secondary:active {
    background: ${({ theme }) => theme.colors.grey["active"]};
    color: ${({ theme }) => theme.colors.blue["default"]};
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.blue["default"]};
    }
  }

  &.Button_tertiary:active {
    background: ${({ theme }) => theme.colors.grey["active"]};
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.blue["default"]} !important;
    }
  }

  &.Button_request:active {
    background: ${({ theme }) => theme.colors.button.request["active"]};
  }

  &.Button_header:active {
    background: ${({ theme }) => theme.colors.button.header["active"]};
  }

  &.Button_primary:focus-visible {
    background: ${({ theme }) => theme.colors.button.primary["focused"]};
    outline: 2px solid ${({ theme }) => theme.colors.stroke.purple};
  }

  &.Button_secondary:focus-visible {
    background: ${({ theme }) => theme.colors.grey["focused"]};
    color: ${({ theme }) => theme.colors.blue["default"]};
    outline: 2px solid ${({ theme }) => theme.colors.stroke.purple};
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.blue["default"]};
    }
  }

  &.Button_tertiary:focus-visible {
    background: ${({ theme }) => theme.colors.transparent};
    color: ${({ theme }) => theme.colors.blue["default"]};
    outline: 2px solid ${({ theme }) => theme.colors.stroke.purple};
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.blue["default"]} !important;
    }
  }

  &.Button_request:focus-visible {
    background: ${({ theme }) => theme.colors.button.request["focused"]};
    outline: 2px solid ${({ theme }) => theme.colors.stroke.purple};
  }

  &.Button_header:focus-visible {
    background: ${({ theme }) => theme.colors.button.header["focused"]};
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

  .Button__rightIconContainer {
    margin-left: 10px;
  }

  .Button__leftIconContainer {
    margin-right: 10px;
  }

  .Button__iconContainer svg {
    width: 18px;
    height: 18px;
  }

  &.Button_primary {
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  &.Button_secondary {
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.black};
      transition: 0.2s ease;
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
