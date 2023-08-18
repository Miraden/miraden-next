import { CheckIcon } from '@/icons/CheckIcon'
import cn from 'classnames'
import { FC } from 'react'
import styled from 'styled-components'
import { CheckSmallLineIcon } from '@/icons/CheckLineIcon'
import { theme } from '../../../../styles/tokens'
import { CurrencyStruct } from '@/infrastructure/Currencies/CurrencyProvider'

type Props = {
  selectedOption: string
  setSelectedOption: (option: CurrencyStruct) => void
  options: CurrencyStruct[]
  showDropDown: boolean
  toggleDropDown: Function
  optionSelection: Function
  className?: string
}

const CurrencyDropdown: FC<Props> = ({
  selectedOption,
  setSelectedOption,
  options,
  optionSelection,
  showDropDown,
  className,
}: Props): JSX.Element => {
  return (
    <StyledCurrencyDropdown className={className}>
      <div
        className={
          showDropDown
            ? 'CurrencyDropdown__menu_active'
            : 'CurrencyDropdown__menu'
        }
      >
        {options.map((option: CurrencyStruct, index: number): JSX.Element => {
          return (
            <div
              key={index}
              onClick={(): void => {
                setSelectedOption(option)
                optionSelection(option)
              }}
              className={cn(
                `${selectedOption === option.code ? 'selected' : ''}`
              )}
            >
              <span className="CurrencyDropdown__menuItem">
                <p className="Font_14_140">
                  {option.label}, {option.symbol}
                </p>
                <CheckSmallLineIcon
                  attr={{
                    className:
                      selectedOption === option.code
                        ? 'CheckIcon_selected'
                        : 'CheckIcon',
                  }}
                />
              </span>
            </div>
          )
        })}
      </div>
    </StyledCurrencyDropdown>
  )
}

const StyledCurrencyDropdown = styled.div`
  .CurrencyDropdownMenu {
    position: relative;
    cursor: pointer;
  }

  .CurrencyDropdown__menu {
    display: none;
  }

  .CurrencyDropdown__menu_active {
    outline: 2px solid #e1edfd;
    position: absolute;
    z-index: 2;
    top: 4px;
    right: -20px;
    width: fit-content;
    background: #fff;
    border-radius: 10px;
    max-height: 228px;
    overflow-y: auto;
    font-size: 14px;
    line-height: 140%;
    cursor: pointer;

    div {
      display: flex;
      align-items: start;

      color: #2a344a;
    }

    div:hover {
      color: #4e6af3;
      background: #f1f7ff;
    }

    .CurrencyDropdown__menuItem {
      display: flex;
      padding: 10px 15px;
      align-items: center;
      width: 100%;

      p {
        white-space: nowrap;
      }
    }

    .selected {
      color: #4e6af3;
      display: flex !important;
      flex-wrap: nowrap;
    }
    .CheckIcon_selected {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-left: 10px;

      path {
        fill: ${theme.colors.main};
      }
    }

    .CheckIcon {
      display: none;
    }
  }
`

export { CurrencyDropdown }
