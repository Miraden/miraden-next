import cn from 'classnames'
import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Dropdown } from './Dropdown'
import { ArrowsIcon } from '@/icons/ArrowsIcon'
import { WarningIcon } from '@/icons'

interface Props {
  className?: string
  disabled?: boolean
  warning?: boolean
  error?: boolean
  placeholder?: string
  options?: Forms.DropDownOption[]
  message?: string
  icon?: JSX.Element
  selected: (option: Forms.DropDownOption) => void
}

const DropdownInput: FC<Props> = ({
  className,
  disabled,
  warning,
  error,
  placeholder,
  options = [],
  message,
  icon,
  selected,
}) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false)
  const [activeOption, setActiveOption] = useState<Forms.DropDownOption>({
    label: '',
    value: 0,
  })

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown)
  }

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false)
    }
  }

  const optionSelection = (option: Forms.DropDownOption): void => {
    setActiveOption(option)
    selected(option)
  }

  return (
    <StyledDropdownInput
      className={cn(className, {
        Dropdown_disabled: disabled,
        Dropdown_warning: warning,
        Dropdown_error: error,
      })}
      disabled={disabled}
      error={error}
    >
      <button
        className={cn('DropdownInput_select Font_body_alt', {
          DropdownInput_select_active: showDropDown,
        })}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
        tabIndex={disabled ? -1 : undefined}
      >
        <div className="DropdownInput_selectLabel Font_fields_description">
          {activeOption.value ? (
            <span>{activeOption.label}</span>
          ) : (
            <span>{placeholder}</span>
          )}
          <ArrowsIcon bottom attr={{ className: 'DropdownInput__arrow' }} />
          {icon}
        </div>
        {showDropDown && (
          <Dropdown
            className="DropdownInput_selectContainer"
            options={options}
            showDropDown={true}
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

const StyledDropdownInput = styled.div<{disabled: boolean|undefined, error: boolean|undefined}>`
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

  .DropdownInput_select {
    background-color: #fff;

    &:hover {
      outline: 2px solid ${({ theme }) => theme.colors.fields.strokeHover};
    }

    outline: 2px solid ${({ theme }) => theme.colors.fields.stroke};
    width: 100%;
    max-width: 300px;
    border: none;
    border-radius: ${({ theme }) => theme.border.radius};
    background: ${props => (props.error ? '#FFF5F5' : 'auto')};
    background: ${props => (props.disabled ? '#EFF3FB' : 'auto')};
    position: relative;

    &_active {
      width: 100%;
      max-width: 300px;
      background: #fff;
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
    padding: 13px 20px;

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
      &:hover {
        background: ${({ theme }) => theme.colors.background.lightBlue};
      }
    }

    .Dropdown__menu_item {
      padding: 10px 10px 10px 15px;
      white-space: nowrap;
    }
  }
`

export { DropdownInput }
