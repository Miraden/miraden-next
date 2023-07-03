import { ArrowIcon, WarningIcon } from '@/icons'
import cn from 'classnames'
import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Dropdown } from './Dropdown'
import { ArrowsIcon } from '@/icons/ArrowsIcon'
import { theme } from '../../../styles/tokens'

interface Props {
  className?: string
  disabled?: boolean
  warning?: boolean
  error?: boolean
  placeholder?: string
  options?: Array<string>
  message?: string
  optionsVisible: boolean
}

const borderRadius = theme.border.radius

const DropdownInput: FC<Props> = ({
  className,
  disabled,
  warning,
  error,
  placeholder,
  options = [],
  message,
  optionsVisible = false,
}) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(optionsVisible)
  const [activeOption, setActiveOption] = useState<string>('')

  const selectOptions = options.length ? options : ['Нет подходящих вариантов']

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown)
  }

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false)
    }
  }

  const optionSelection = (option: string): void => {
    setActiveOption(option)
  }

  return (
    <StyledDropdownInput
      className={cn(className, {
        Dropdown_disabled: disabled,
        Dropdown_warning: warning,
        Dropdown_error: error,
      })}
      optionsVisible={optionsVisible}
      disabled={disabled}
      error={error}
      warning={warning}
    >
      <button
        className={cn(
          showDropDown ? `DropdownInput_select_active` : `DropdownInput_select`
        )}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
        tabIndex={disabled ? -1 : undefined}
      >
        <div className="DropdownInput_selectLabel Font_fields_description">
          {activeOption ? (
            <span>{activeOption}</span>
          ) : (
            <span>{placeholder}</span>
          )}
          <ArrowsIcon bottom />
        </div>
        {showDropDown && (
          <Dropdown
            className="DropdownInput_selectContainer"
            options={selectOptions}
            showDropDown={optionsVisible}
            selectedOption={activeOption}
            toggleDropDown={(): void => toggleDropDown()}
            optionSelection={optionSelection}
          />
        )}{' '}
      </button>
      {warning && (
        <div className="Warning__message Font_fields_description">
          <WarningIcon />
          <span>{message}</span>
        </div>
      )}
      {error && (
        <div className="Error__message Font_fields_description">{message}</div>
      )}
    </StyledDropdownInput>
  )
}

const StyledDropdownInput = styled.div<Props>`
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};

  &.Dropdown_warning {
    .DropdownInput_select {
      background: ${({ theme }) => theme.colors.fields.bgValidation};
      outline: 2px solid ${({ theme }) => theme.colors.fields.strokeValidation};

      &:hover {
        background: ${({ theme }) => theme.colors.fields.bgValidation};
        outline: 2px solid
          ${({ theme }) => theme.colors.fields.strokeValidation};
      }
    }

    .DropdownInput_select_active {
      background: ${({ theme }) => theme.colors.fields.bgValidation};
      outline: 2px solid ${({ theme }) => theme.colors.fields.strokeValidation};
    }

    .Dropdown__menu_active {
      background: ${({ theme }) => theme.colors.fields.bgValidation};
      outline: 2px solid ${({ theme }) => theme.colors.fields.strokeValidation};
    }
  }

  &.Dropdown_error {
    .DropdownInput_select {
      background: ${({ theme }) => theme.colors.fields.bgError};
      outline: 2px solid ${({ theme }) => theme.colors.fields.strokeError};

      &:hover {
        background: ${({ theme }) => theme.colors.fields.bgError};
        outline: 2px solid ${({ theme }) => theme.colors.fields.strokeError};
      }
    }

    .DropdownInput_select_active {
      background: ${({ theme }) => theme.colors.fields.bgError};
      outline: 2px solid ${({ theme }) => theme.colors.fields.strokeError};
    }

    .Dropdown__menu_active {
      background: ${({ theme }) => theme.colors.fields.bgError};
      outline: 2px solid ${({ theme }) => theme.colors.fields.strokeError};
    }
  }

  .Warning__message {
    display: flex;
    margin-top: 4px;
    align-items: center;

    div {
      display: flex;
      align-items: center;
    }

    span {
      margin-left: 8px;
      color: #94a5ca;
    }
  }

  .Error__message {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.error};
  }

  .DropdownInput_selectContainer {
    position: relative;
    background: #fff;
    border-radius: ${({ theme }) => theme.border.radius};
  }

  .DropdownInput_select_active {
    width: 100%;
    max-width: 300px;
    background: #fff;
    padding: 21px 20px;
    border: none;
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeHover};
    border-radius: ${({ theme }) => theme.border.radius}
      ${({ theme }) => theme.border.radius} 0 0;

    .DropdownInput_selectLabel {
      svg {
        transform: rotate(180deg);
        transition: 0.2s ease-in;
        margin-left: 10px;
      }
    }
  }

  .DropdownInput_select {
    &:hover {
      outline: 2px solid ${({ theme }) => theme.colors.fields.strokeHover};
    }

    outline: 2px solid ${({ theme }) => theme.colors.fields.stroke};
    width: 100%;
    max-width: 300px;
    padding: 21px 20px;
    border: none;
    border-radius: ${({ theme }) => theme.border.radius};
    overflow: hidden;
    background: ${props => (props.error ? '#FFF5F5' : 'auto')};
    background: ${props => (props.disabled ? '#EFF3FB' : 'auto')};
    position: relative;

    svg {
      transition: 0.2s ease-in;
      margin-left: 10px;
    }
  }

  .DropdownInput_selectLabel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => (props.disabled ? '#B8C6E3' : '#7786a5')};
    font-size: 16px;

    svg path {
      fill: ${({ theme }) => theme.colors.fields.title};
    }
  }

  .DropdownInput_inputContainer {
    position: relative;
  }

  .DropdownInput_inputContainer_label {
    position: absolute;
    top: 0;
    left: 0;
  }

  .DropdownInput_input {
    width: 100%;
    padding: 11px 10px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 3px;
  }

  &.Sort {
    .DropdownInput_selectLabel {
      font-size: 14px;
      white-space: nowrap;
    }

    .DropdownInput_select {
      padding: 9px 10px 9px 15px;

      &:hover {
        background: ${({ theme }) => theme.colors.background.lightBlue};
      }
    }

    .DropdownInput_select_active {
      padding: 9px 10px 9px 15px;
    }

    .Dropdown__menu_active {
      top: 10px;
      left: auto;
      right: -10px;
      width: fit-content;
    }

    .Dropdown__menu_item {
      padding: 10px 10px 10px 15px;
      white-space: nowrap;
    }
  }
`

export { DropdownInput }
