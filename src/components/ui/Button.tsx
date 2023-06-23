import cn from "classnames";
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
  active?: boolean;
  isSubmit?: boolean;
  attr?: Object;
  sort?: boolean;
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
  active,
  isSubmit,
  prefetch = true,
  attr = {},
  sort,
}) => {
  if (!href) {
    return (
      <StyledButton
        aria-label={ariaLabel}
        as="button"
        onClick={onClick}
        {...attr}
        className={cn(`${className} Font_button_medium`, {
          Button_primary: !secondary,
          Button_secondary: secondary,
          Button_tertiary: tertiary,
          Button_request: request,
          "Button_header Font_Accent_12_caps": header,
          Button_regular: !compact,
          Button_compact: compact,
          Button_narrow: narrow,
          Button_withoutLabel: !children,
          disabled: disabled,
          active: active,
          isSubmit: isSubmit,
          Button_sort: sort
        })}
        type={type}
        disabled={disabled}
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

  if (href.includes("http") || !prefetch) {
    return (
      <StyledButton
        href={href}
        {...attr}
        onClick={onClick}
        className={cn(`${className} Font_button_medium`, {
          Button_primary: !secondary,
          Button_secondary: secondary,
          Button_tertiary: tertiary,
          Button_request: request,
          "Button_header Font_Accent_12_caps": header,
          Button_regular: !compact,
          Button_compact: compact,
          Button_narrow: narrow,
          Button_withoutLabel: !children,
          disabled: disabled,
          active: active,
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
        {...attr}
        className={cn(`${className} Font_button_medium`, {
          Button_primary: !secondary,
          Button_secondary: secondary,
          Button_tertiary: tertiary,
          Button_request: request,
          "Button_header Font_Accent_12_caps": header,
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
    <StyledButton
      href={href}
      onClick={onClick}
      {...attr}
      className={cn(`${className} Font_button_medium`, {
        Button_primary: !secondary,
        Button_secondary: secondary,
        Button_tertiary: tertiary,
        Button_request: request,
        "Button_header Font_Accent_12_caps": header,
        Button_regular: !compact,
        Button_compact: compact,
        Button_narrow: narrow,
        Button_withoutLabel: !children,
        disabled: disabled,
        active: active,
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
};

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  transition: 0.2s background-color ease;
  appearance: none;

  &.active {
    color: #4e6af3 !important;
  }

  &.isSubmit {
    color: #0ab258 !important;
    background: #eafff3 !important;

    svg {
      path {
        fill: #0ab258 !important;
      }
    }
  }

  &.disabled {
    cursor: unset;
    background: ${({ theme }) => theme.colors.button.disabled.background} !important;
    color: ${({ theme }) => theme.colors.button.disabled.text} !important;

    svg path {
      fill: ${({ theme }) => theme.colors.button.disabled.text} !important;
    }
  }

  &.Button_regular {
    padding: 15px 39px;
  }

  &.Button_compact {
    padding: 10px 20px;
  }

  &.Button_header {
    padding: 11px 20px;
  }

  &.Button_primary {
    background: ${({ theme }) => theme.colors.button.primary.bg.default};
    color: ${({ theme }) => theme.colors.button.primary.text.default};

    &:hover {
      background: ${({ theme }) => theme.colors.button.primary.hover};
    }

    &:focus-visible {
      background: ${({ theme }) => theme.colors.button.primary.bg.focused};
      outline: 2px solid ${({ theme }) => theme.colors.button.primary.stroke.focused};
    }

    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.button.primary.text.default};
    }
  }

  &.Button_primary:active {
    background: ${({ theme }) => theme.colors.button.primary.bg.click};
  }

  &.Button_secondary {
    background: ${({ theme }) => theme.colors.button.secondary.bg.default};
    color: ${({ theme }) => theme.colors.button.secondary.text.default};
  }

  &.Button_tertiary {
    background: ${({ theme }) => theme.colors.button.tertiary.bg.default};
    color: ${({ theme }) => theme.colors.button.tertiary.text.default};
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.button.tertiary.text.default};
    }
  }

  &.Button_request {
    background: ${({ theme }) => theme.colors.button.request.bg.default};
    color: ${({ theme }) => theme.colors.button.request.text.default};
    padding: 15px 53px;

    &:hover {
      background: ${({ theme }) => theme.colors.button.request.bg.hover};
    }

    &:active {
      background: ${({ theme }) => theme.colors.button.request.bg.click};
    }

    &:focus-visible {
      background: ${({ theme }) => theme.colors.button.request.bg.focused};
      outline: 2px solid ${({ theme }) => theme.colors.button.request.strokeFocused};
    }
  }

  &.Button_header {
    background: ${({ theme }) => theme.colors.button.header.bg.default};
    color: ${({ theme }) => theme.colors.button.header.text.default};
  }

  &.Button_narrow {
    padding-left: 16px;
    padding-right: 16px;
  }

  &.Button_sort {
    background: ${({ theme }) => theme.colors.background.white};
    outline: 1px solid ${({ theme }) => theme.colors.stroke.divider};
    color: ${({ theme }) => theme.colors.text.grey};
    padding: 8px 13px;

    &:hover {
      background: ${({ theme }) => theme.colors.background.lightBlue};
    }

    &:focus-visible {
      background: ${({ theme }) => theme.colors.background.lightBlue};
      outline: 2px solid ${({ theme }) => theme.colors.stroke.focused}
    }

    &.active {
      background: ${({ theme }) => theme.colors.background.white};
      outline: 2px solid ${({ theme }) => theme.colors.stroke.lightGrey}
    }
  }

  &.Button_secondary:hover {
    background: ${({ theme }) => theme.colors.button.secondary.bg.hover};
    color: ${({ theme }) => theme.colors.button.secondary.text.hover};

    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.button.secondary.text.hover};
    }
  }

  &.Button_tertiary:hover {
    background: ${({ theme }) => theme.colors.button.tertiary.bg.hover};
    color: ${({ theme }) => theme.colors.button.tertiary.text.hover};
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.button.tertiary.text.hover};
    }
  }

  &.Button_header:hover {
    background: ${({ theme }) => theme.colors.button.header.bg.hover};
    color: ${({ theme }) => theme.colors.button.header.text.hover};
  }

  &.Button_secondary:active {
    background: ${({ theme }) => theme.colors.button.secondary.bg.click};
    color: ${({ theme }) => theme.colors.button.secondary.text.click};
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.button.secondary.text.click};
    }
  }

  &.Button_tertiary:active {
    background: ${({ theme }) => theme.colors.button.tertiary.bg.click};
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.button.tertiary.text.click};
    }
  }

  &.Button_header:active,
  &.Button_header.active {
    background: ${({ theme }) => theme.colors.button.header.bg.click};
    color: ${({ theme }) => theme.colors.button.header.text.active};
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.button.header.text.active};
    }
  }

  &.Button_secondary:focus-visible {
    background: ${({ theme }) => theme.colors.button.secondary.bg.focused};
    color: ${({ theme }) => theme.colors.button.secondary.text.focused};
    outline: 2px solid ${({ theme }) => theme.colors.button.secondary.stroke.focused};
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.button.secondary.text.focused};
    }
  }

  &.Button_tertiary:focus-visible {
    background: ${({ theme }) => theme.colors.button.tertiary.bg.focused};
    color: ${({ theme }) => theme.colors.button.tertiary.text.focused};
    outline: 2px solid ${({ theme }) => theme.colors.button.tertiary.stroke.focused};
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.button.tertiary.text.focused};
    }
  }

  &.Button_header:focus-visible {
    background: ${({ theme }) => theme.colors.button.header.bg.focused};
    outline: 2px solid ${({ theme }) => theme.colors.button.header.strokeFocused};
  }

  .Button__label {
    display: flex;
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

  &.Button_secondary {
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.button.secondary.text.default};
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

    padding: 0;
    width: 50px;
    height: 50px;

    &.Button_compact {
      width: 40px;
      height: 40px;
    }
  }

  &.Button_header.Button_withoutLabel {
    width: 40px;
    height: 40px;
  }
`;

export { Button };
export type { Props as ButtonProps };
