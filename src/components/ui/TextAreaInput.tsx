import { WarningIcon } from '@/icons'
import cn from 'classnames'
import React, { useState } from 'react'
import styled from 'styled-components'

interface Props {
  maxLength?: number
  disabled?: boolean
  warning?: boolean
  error?: boolean
  label?: string
  className?: string
  message?: string
  onChange?: (event: any) => void
  text?: string | null
}

const TextAreaInput = ({
  maxLength,
  disabled,
  warning,
  error,
  label,
  className,
  message,
  onChange,
  text,
}: Props) => {
  const [value, setValue] = useState(text ? text : '')
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value
    if (maxLength && inputValue.length > maxLength) {
      return
    }
    setValue(inputValue)
    if (onChange) onChange(event)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(!!event.target.value)
  }

  return (
    <StyledTextArea className={className}>
      <StyledTextAreaField
        className={cn({
          Disabled_area: disabled,
          TextArea_warning: warning,
          TextArea_error: error,
        })}
      >
        {maxLength && (
          <StyledTextAreaCounter>
            {value.length}/{maxLength}
          </StyledTextAreaCounter>
        )}
        <StyledTextAreaInput
          placeholder={label}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
          disabled={disabled}
        />
        <StyledTextAreaLabel isFocused={isFocused}></StyledTextAreaLabel>
      </StyledTextAreaField>
      {warning && (
        <div className="Warning__message Text_12_16">
          <div>
            <WarningIcon />
            <span className="Font_fields_description">{message}</span>
          </div>
          <span className="Font_fields_description">Description</span>
        </div>
      )}
      {error && (
        <div className="Error__message Font_fields_description">{message}</div>
      )}
      {maxLength && (
        <StyledTextAreaCounter>
          {value.length}/{maxLength}
        </StyledTextAreaCounter>
      )}
    </StyledTextArea>
  )
}

const StyledTextArea = styled.div`
  .TextArea_warning {
    textarea {
      outline: 2px solid ${({ theme }) => theme.colors.fields.strokeValidation};
      background-color: ${({ theme }) => theme.colors.fields.bgValidation};
    }
  }

  .TextArea_error {
    textarea {
      outline: 2px solid ${({ theme }) => theme.colors.fields.strokeError};
      background-color: ${({ theme }) => theme.colors.fields.bgError};
    }
  }

  .Warning__message {
    display: flex;
    margin-top: 4px;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
    }

    span {
      margin-left: 8px;
      color: ${({ theme }) => theme.colors.fields.description};
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
      background-color: ${({ theme }) => theme.colors.fields.strokeErrorBg};
    }
  }

  .Disabled_area {
    textarea {
      background: ${({ theme }) => theme.colors.background.disabled};
      box-shadow: none;
      pointer-events: none;
      color: ${({ theme }) => theme.colors.text.disabled};
      outline: none;
    }

    label {
      color: ${({ theme }) => theme.colors.text.disabled};
      pointer-events: none;
      user-select: none;
    }

    div {
      pointer-events: none;
      color: ${({ theme }) => theme.colors.text.disabled};
      user-select: none;
    }
  }

  position: relative;
  display: flex;
  flex-direction: column;
`

const StyledTextAreaField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const StyledTextAreaInput = styled.textarea`
  min-width: 300px;
  min-height: 60px;
  position: relative;
  border: none;
  outline: 2px solid ${({ theme }) => theme.colors.fields.stroke};
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 10px 20px 10px 20px;
  font-size: 16px;
  line-height: 24px;
  height: 150px;
  resize: none;

  ::placeholder {
    color: #7786a5;
  }

  transition: 0.1s;

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeHover};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeFocused};
  }
`

const StyledTextAreaLabel = styled.label<{ isFocused: boolean }>`
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? '6px' : '26px')};
  left: ${({ isFocused }) => (isFocused ? '20px' : '20px')};
  transform: ${({ isFocused }) =>
    isFocused ? 'translateY(0)' : 'translateY(-50%)'};
  font-size: ${({ isFocused }) => (isFocused ? '12px' : '16px')};
  line-height: 20px;
  color: #7786a5;
  pointer-events: none;
  transition: 0.1s;
`

const StyledTextAreaCounter = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  align-self: flex-end;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.grey};
`

export { TextAreaInput }
