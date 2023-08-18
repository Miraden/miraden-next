import { WarningIcon } from '@/icons'
import cn from 'classnames'
import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'

interface Props {
  maxLength?: number
  warning?: boolean
  error?: boolean
  icon?: ReactNode
  disabled?: boolean
  label?: string
  className?: string
  value?: string
  onChange?: any
}

const NumberInputNoLabel = ({
  maxLength,
  warning,
  error,
  icon,
  disabled,
  label,
  className,
  value,
  onChange,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    if (!disabled) {
      setIsFocused(true)
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setIsFocused(!!event.target.value)
    }
  }

  return (
    <StyledNumberInputNoLabel className={className}>
      <StyledNumberInputNoLabelField
        className={cn({
          FieldInput__labelWarning: warning,
          FieldInput__labelError: error,
          FieldInput__disabled: disabled,
        })}
      >
        <StyledNumberInputNoLabelInput
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
          disabled={disabled}
          inputMode="numeric"
        />
        {icon && <div className="Icon__container">{icon}</div>}
        <StyledNumberInputNoLabelLabel isFocused={isFocused}>
          {label}
        </StyledNumberInputNoLabelLabel>
      </StyledNumberInputNoLabelField>
      {warning && (
        <div className="Warning__message">
          <WarningIcon />
          <span className="Text_12_16">Warning</span>
        </div>
      )}
      {error && <div className="Error__message Text_12_16">Error</div>}
    </StyledNumberInputNoLabel>
  )
}

const StyledNumberInputNoLabel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  .FieldInput__disabled {
    input {
      background: #eff3fb !important;
      box-shadow: none;
      pointer-events: none;
    }
    label {
      color: #b8c6e3 !important;
    }
    div {
      pointer-events: none;
      color: #b8c6e3 !important;
    }
    .RestorePassword {
      color: #b8c6e3;
      pointer-events: none;
    }

    .Icon__container {
      pointer-events: none;

      svg path {
        fill: #b8c6e3 !important;
      }
    }
  }

  .Icon__container {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 20px;
    top: calc(50% - 8px);
  }

  .Warning__message {
    display: flex;
    margin-top: 4px;
    align-items: center;
    span {
      margin-left: 8px;
      color: #94a5ca;
    }
  }

  .Error__message {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.error};
  }

  .FieldInput__labelWarning {
    input {
      box-shadow: 0px 0px 0px 2px #ffeac1 inset !important;
      background-color: #fffbf4;
    }
  }

  .FieldInput__labelError {
    input {
      box-shadow: 0px 0px 0px 2px #ffd8d8 inset;
      background-color: #fff5f5;
    }
  }
`

const StyledNumberInputNoLabelField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const StyledNumberInputNoLabelInput = styled.input`
  width: 100%;
  position: relative;
  border: none;
  box-shadow: 0 0 0 2px #e1edfd inset;
  border-radius: 10px;
  padding: 18px 58px 4px 20px;
  font-size: 16px;
  line-height: 24px;
  height: 60px;
  outline: none;
  transition: 0.1s;
  cursor: text !important;
  &:hover {
    box-shadow: 0 0 0 2px #cddef4 inset;
  }
  &:focus {
    box-shadow: 0 0 0 2px #4e6af3 inset;
  }
`

const StyledNumberInputNoLabelLabel = styled.label<{ isFocused: boolean }>`
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? '6px' : '50%')};
  left: ${({ isFocused }) => (isFocused ? '20px' : '20px')};
  transform: ${({ isFocused }) =>
    isFocused ? 'translateY(0)' : 'translateY(-50%)'};
  font-size: ${({ isFocused }) => (isFocused ? '12px' : '16px')};
  line-height: 20px;
  color: #7786a5;
  pointer-events: none;
  transition: 0.1s;
  opacity: ${({ isFocused }) => (isFocused ? '0' : '1')};
`

export { NumberInputNoLabel }
