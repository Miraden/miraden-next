import cn from 'classnames'
import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react'
import styled from 'styled-components'
import { Checkbox } from './CheckBox'

interface CreatePaymentButtonProps {
  className?: string
  onClick?: (e: MouseEvent<HTMLElement>) => void
  href?: string
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  ariaLabel?: string
  buttonTitle?: ReactNode
  buttonText?: ReactNode
  disabled?: boolean
  price?: number
  active?: boolean
  onChange?: () => void
}

const CreatePaymentButton = ({
  className,
  onClick,
  buttonTitle,
  disabled,
  price,
  buttonText,
  active,
  onChange,
}: CreatePaymentButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      className={cn(`${className}  CreatePaymentButton`, {
        disabled: disabled,
        isActive: active,
      })}
    >
      <div className="Button__container">
        <Checkbox onChange={onChange} onClick={onClick} checked={active} />
        {buttonTitle && (
          <div className="[ Button__label ]">
            {price && (
              <div className="Font_20_120 CreatePaymentButton__percentMobile">
                {price} €
              </div>
            )}
            <h3 className="Font_16_140">{buttonTitle}</h3>
            <p className="Font_14_140">{buttonText}</p>
          </div>
        )}
      </div>
      {price && (
        <div className="Font_20_120 CreatePaymentButton__percent">
          {price} €
        </div>
      )}
    </StyledButton>
  )
}

const StyledButton = styled.a`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  width: 100%;
  transition: 0.2s ease;

  .Button__container {
    display: flex;
    align-items: flex-start;

    p {
      margin-top: 7px;
    }
  }

  .CreatePaymentButton__percent {
    color: #4e6af3;
    white-space: nowrap;
  }

  .CreatePaymentButton__percentMobile {
    display: none;
    color: #4e6af3;
    margin-top: -2px;
  }

  &.isActive {
    background: #2a344a !important;
    h3 {
      color: #fff;
    }
    p {
      color: #fff;
    }

    .CreatePaymentButton__percent,
    .CreatePaymentButton__percentMobile {
      color: #fff;
    }
  }

  &.disabled {
    cursor: unset;
    background: ${({ theme }) =>
      theme.colors.button.disabled.background} !important;
    color: ${({ theme }) => theme.colors.grey['disabled']} !important;
  }

  &.CreatePaymentButton {
    padding: 15px 20px;
    background: #f1f7ff;
  }

  &.CreatePaymentButton:hover {
    background: ${({ theme }) => theme.colors.button.pay['hover']};
  }

  &.CreatePaymentButton:active {
    background: ${({ theme }) => theme.colors.button.pay['active']};
  }

  &.CreatePaymentButton:focus-visible {
    background: ${({ theme }) => theme.colors.button.pay['focused']};
    outline: 2px solid ${({ theme }) => theme.colors.stroke.purple};
  }

  .Button__label {
  }

  @media (max-width: 576px) {
    .CreatePaymentButton__percentMobile {
      display: flex;
    }

    .CreatePaymentButton__percent {
      display: none;
    }
  }
`

export { CreatePaymentButton }
export type { CreatePaymentButtonProps as ButtonProps }
