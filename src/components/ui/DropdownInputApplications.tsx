import { ArrowIcon } from '@/icons'
import cn from 'classnames'
import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Dropdown } from '@/components/ui/DropDowns/Dropdown'

interface Props {
  className?: string
  disabled?: boolean
  warning?: boolean
  error?: boolean
  placeholder?: string
  options?: Forms.DropDownOption[]
}

const DropdownInputApplications: FC<Props> = ({
  className,
  disabled,
  warning,
  error,
  placeholder,
  options = [],
}) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false)
  const [selectOption, setSelectOption] = useState<Forms.DropDownOption>({
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
    setSelectOption(option)
  }

  return (
    <StyledDropdownInputApplications
      className={cn(className, {
        Dropdown_disabled: disabled,
      })}
    >
      <button
        className={
          showDropDown
            ? `DropdownInputApplications_select_active`
            : `DropdownInputApplications_select`
        }
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
        tabIndex={disabled ? -1 : undefined}
      >
        <p className="Font_16_20 Color_blue_primary">Все заявки</p>
        <div className="DropdownInputApplications_selectLabel Text_16_24">
          {selectOption.value ? selectOption.value : placeholder}
          <ArrowIcon width={18} height={18} />
        </div>
        {showDropDown && (
          <Dropdown
            className="DropdownInputApplications_selectContainer"
            options={options}
            showDropDown={false}
            selectedOption={selectOption}
            toggleDropDown={(): void => toggleDropDown()}
            optionSelection={optionSelection}
          />
        )}{' '}
      </button>
    </StyledDropdownInputApplications>
  )
}

const StyledDropdownInputApplications = styled.div<Props>`
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  position: relative;
  background: #fff;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .DropdownInputApplications_selectContainer {
    position: absolute;
    background: #fff;
    top: 60px;
    border-radius: 10px;
    width: 100%;
  }

  .DropdownInputApplications_select_active {
    width: 100%;
    background: #fff;
    border-radius: 10px;
    padding: 18px 20px;
    border: none;
    transition: 0.15s ease-in;

    div {
      svg {
        transition: 0.15s ease-in;
        path {
          stroke: #7786a5;
        }
      }
    }
  }

  .DropdownInputApplications_select {
    &:focus {
      box-shadow: 0 0 0 2px #4e6af3 inset;
      div {
        color: #2a344a;
      }
    }
    &:hover {
    }
    outline: none;
    width: 100%;
    padding: 18px 20px;
    border: none;
    overflow: hidden;
    border-bottom: 4px solid #e1edfd;
    background: ${props => (props.error ? '#FFF5F5' : 'auto')};
    background: ${props => (props.warning ? '#FFFBF4' : 'auto')};
    background: ${props => (props.disabled ? '#EFF3FB' : 'auto')};

    div {
      svg {
        transition: 0.2s ease-in;
        transform: rotate(-180deg);
        path {
          stroke: ${props => (props.disabled ? '#B8C6E3' : '#7786a5')};
        }
      }
    }
  }

  .DropdownInputApplications_selectLabel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => (props.disabled ? '#B8C6E3' : '#7786a5')};
    font-size: 16px;
  }

  .DropdownInputApplications_inputContainer {
    position: relative;
  }

  .DropdownInputApplications_inputContainer_label {
    position: absolute;
    top: 0;
    left: 0;
  }

  .DropdownInputApplications_input {
    padding: 11px 10px;
    background: rgba(255, 255, 255, 0.85);
  }
`

export { DropdownInputApplications }
