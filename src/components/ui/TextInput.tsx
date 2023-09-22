import { WarningIcon } from '@/icons'
import cn from 'classnames'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface Props {
  maxLength?: number
  warning?: boolean
  error?: boolean
  icon?: ReactNode
  disabled?: boolean
  label?: string
  className?: string
  values?: any
  onChange?: any
  onKeyPress?: any
  onBlur?: Function
  isRequired?: boolean
  name?: string
  message?: string
  placeholder?: string
}

const TextInput = ({
  maxLength,
  warning,
  error,
  icon,
  disabled,
  label,
  className,
  onChange,
  onKeyPress,
  values,
  isRequired = false,
  name,
  message,
  placeholder,
  onBlur,
}: Props) => {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const hasLabel: boolean = label !== undefined
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    if (maxLength && inputValue.length > maxLength) {
      return
    }
    if (onChange) onChange(event)
    setValue(inputValue)
  }

  const handleFocus = () => {
    if (!disabled) {
      setIsFocused(true)
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setIsFocused(!!event.target.value)
      if (onBlur) onBlur(event)
    }
  }

  return (
    <StyledTextInput
      className={cn(
        className,
        isRequired && 'TextInput__IsRequired',
        hasLabel && 'TextInput__hasLabel'
      )}
    >
      <StyledTextInputField
        className={cn({
          FieldInput__labelWarning: warning,
          FieldInput__labelError: error,
          FieldInput__disabled: disabled,
        })}
      >
        {maxLength && (
          <StyledTextInputCounter hasLabel={hasLabel}>
            {value.length}/{maxLength}
          </StyledTextInputCounter>
        )}
        <StyledTextInputInput
          name={name}
          value={values}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
          disabled={disabled}
          className="TextInput"
          isRequired={isRequired}
          hasLabel={hasLabel}
          placeholder={placeholder}
          ref={ref}
        />
        {icon && <div className="Icon__container">{icon}</div>}
        <StyledTextInputLabel isFocused={isFocused} className="TextInput">
          {label}
        </StyledTextInputLabel>
      </StyledTextInputField>
      {warning && (
        <div className="Warning__message">
          <WarningIcon />
          <span className="Font_fields_description">{message}</span>
        </div>
      )}
      {error && (
        <div className="Error__message Font_fields_description">{message}</div>
      )}
    </StyledTextInput>
  )
}

const StyledTextInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;

  &.TextInput__IsRequired .TextInput::after {
    content: '*';
    color: ${({ theme }) => theme.colors.text.error};
    margin-right: 5px;
  }

  .Icon__container {
    svg path {
      fill: ${({ theme }) => theme.colors.fields.title};
    }
  }

  .FieldInput__disabled {
    input {
      background: #eff3fb !important;
      box-shadow: none;
      pointer-events: none;
      outline: none;
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
    right: 28px;
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
      outline: 2px solid ${({ theme }) => theme.colors.fields.strokeValidation};
      background-color: ${({ theme }) => theme.colors.fields.bgValidation};
    }
  }

  .FieldInput__labelError {
    input {
      outline: 2px solid ${({ theme }) => theme.colors.fields.strokeError};
      background-color: ${({ theme }) => theme.colors.fields.bgError};
    }
  }
`

const StyledTextInputField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;
`

const StyledTextInputInput = styled.input<{
  isRequired: boolean
  hasLabel: boolean
}>`
  position: relative;
  border: none;
  width: 100%;
  border-radius: ${({ theme }) => theme.border.radius};
  padding: ${({ isRequired }) =>
    isRequired ? '18px 18px 4px 20px;' : '18px 18px 4px 20px;'};
  padding: ${({ hasLabel }) =>
    hasLabel ? '18px 18px 4px 20px;' : '18px 18px 18px 20px;'};
  font-size: 16px;
  line-height: 24px;
  outline: 2px solid ${({ theme }) => theme.colors.fields.stroke};
  transition: 0.1s;
  color: ${({ theme }) => theme.colors.fields.text};
  height: 60px;

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeHover};
    cursor: text;
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeFocused};
  }
  .TextInput::before {
    content: '*';
    color: red;
    margin-right: 5px;
  }
`

const StyledTextInputLabel = styled.label<{ isFocused: boolean }>`
  &.TextInput {
    position: absolute;
    top: ${({ isFocused }) => (isFocused ? '6px' : '50%')};
    left: ${({ isFocused }) => (isFocused ? '20px' : '20px')};
    transform: ${({ isFocused }) =>
      isFocused ? 'translateY(0)' : 'translateY(-50%)'};
    font-size: ${({ isFocused }) => (isFocused ? '12px' : '16px')};
    line-height: 20px;
    color: ${({ theme }) => theme.colors.fields.title};
    pointer-events: none;
    transition: 0.1s;
  }
`

const StyledTextInputCounter = styled.div<{ hasLabel: boolean }>`
  position: absolute;
  height: 50%;
  z-index: 10;
  right: 20px;
  top: ${({ hasLabel }) => (hasLabel ? '36%' : '32%')};
  align-self: flex-end;
  font-size: 12px;
  color: #808080;
`

export { TextInput }
