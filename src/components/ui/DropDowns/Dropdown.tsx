import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import {theme} from "../../../../styles/tokens";
import {CheckSmallLineIcon} from "@/icons/CheckLineIcon";

type Props = {
  options: Forms.DropDownOption[]
  showDropDown: boolean
  toggleDropDown: Function
  optionSelection: Function
  className?: string
  selectedOption?: Forms.DropDownOption
}

const borderRadius = theme.border.radius

const Dropdown: FC<Props> = ({
  options,
  optionSelection,
  className,
  selectedOption,
}: Props): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(true)

  const onClickHandler = (option: Forms.DropDownOption): void => {
    optionSelection(option)
  }

  useEffect(() => {
    setShowDropDown(showDropDown)
  }, [showDropDown])

  return (
    <StyledDropdown className={className} borderRadius={borderRadius}>
      <div
        className={cn("Dropdown__menu", {
          Dropdown__menu_active: showDropDown
        })}
      >
        {options.map((option): JSX.Element => {
          return (
            <div
              key={option.value}
              data-id={option.value}
              className={cn(
                'Dropdown__menu_item',
                `${selectedOption === option ? 'Dropdown__menu_selected' : ''}`
              )}
              onClick={(): void => onClickHandler(option)}
            >
              <span>{option.label}</span>
              <CheckSmallLineIcon />
            </div>
          )
        })}
      </div>
    </StyledDropdown>
  )
}

const StyledDropdown = styled.div<{ borderRadius: string }>`
  .Order__form_dropdownMenu {
    position: relative;
    cursor: pointer;
  }

  .Dropdown__menu_active {
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeHover};

    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    border-radius: 0 0 ${borderRadius} ${borderRadius};
    max-height: 228px;
    overflow-y: auto;
    font-size: 14px;
    line-height: 140%;
    cursor: pointer;

    div {
      display: flex;
      flex-direction: row;
      align-items: start;
      padding: 12px 20px 13px 20px;
      color: ${({ theme }) => theme.colors.text.black};
    }

    div:hover {
      color: ${({ theme }) => theme.colors.main};
      background: ${({ theme }) => theme.colors.grey.lightBlue};
    }
  }

  .Dropdown__menu_item {
    padding: 10px 20px;
    display: flex;

    &:hover {
      color: ${({ theme }) => theme.colors.main};
      background: ${({ theme }) => theme.colors.grey.lightBlue};
    }
    svg {
      margin-left: 10px;
      opacity: 0;
    }
  }

  .Dropdown__menu_selected {
    span {
      color: ${({ theme }) => theme.colors.main};
    }

    svg {
      opacity: 1;

      path {
        fill: ${({ theme }) => theme.colors.main};
      }
    }
  }

  .Dropdown__menu_active::-webkit-scrollbar {
    width: 5px;
  }

  .Dropdown__menu_active {
    scrollbar-width: thin;
  }

  .Dropdown__menu_active::-webkit-scrollbar-track {
    background: transparent;
  }

  .Dropdown__menu_active::-webkit-scrollbar-thumb {
    background-color: #c7d2e9;
    height: 50px;
    border-radius: ${borderRadius};
  }
`

export { Dropdown }
