import { WarningIcon } from '@/icons'
import cn from 'classnames'
import React, { ReactNode, useCallback, useState } from 'react'
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

const NumberInput = ({
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
  const [val, setValue] = useState<string | undefined>(value)
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

  const onChangeCallback = useCallback(
    (e: any) => {
      const value = e.target.value.replace(/\D+/g, '')
      setValue(value)
      onChange(e)
    },
    [onChange]
  )

  return (
    <StyledNumberInput className={className}>
      <StyledNumberInputField
        className={cn({
          FieldInput__labelWarning: warning,
          FieldInput__labelError: error,
          FieldInput__disabled: disabled,
        })}
      >
        <StyledNumberInputInput
          value={val}
          onChange={onChangeCallback}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
          disabled={disabled}
          inputMode="numeric"
        />
        {icon && <div className="Icon__container">{icon}</div>}
        <StyledNumberInputLabel isFocused={isFocused}>
          {label}
        </StyledNumberInputLabel>
      </StyledNumberInputField>
      {warning && (
        <div className="Warning__message">
          <WarningIcon />
          <span className="Text_12_16">Warning</span>
        </div>
      )}
      {error && <div className="Error__message Text_12_16">Error</div>}
    </StyledNumberInput>
  )
}

const StyledNumberInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  .FieldInput__disabled {
    input {
      background: #eff3fb !important;
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

const StyledNumberInputField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const StyledNumberInputInput = styled.input`
  width: 100%;
  position: relative;
  border: none;
  border-radius: 10px;
  padding: 18px 58px 4px 20px;
  font-size: 16px;
  line-height: 24px;
  height: 60px;
  transition: 0.1s;
  outline: 2px solid ${({ theme }) => theme.colors.fields.stroke};

  &:hover {
    cursor: text;
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeHover};
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeFocused};
  }
`

const StyledNumberInputLabel = styled.label<{ isFocused: boolean }>`
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
`

const StyledNumberInputCounter = styled.div`
  position: absolute;
  height: 50%;
  z-index: 10;
  right: 20px;
  top: 36%;
  align-self: flex-end;
  font-size: 12px;
  color: #808080;
`

export { NumberInput }
