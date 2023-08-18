import cn from 'classnames'
import { FC } from 'react'
import styled from 'styled-components'
import { CheckSmallLineIcon } from '@/icons/CheckLineIcon'

type Props = {
  selectedOption: string
  setSelectedOption: (option: string) => void
  options: string[]
  showDropDown: boolean
  toggleDropDown: Function
  optionSelection: Function
  className?: string
}

const SortDropdown: FC<Props> = ({
  selectedOption,
  setSelectedOption,
  options,
  optionSelection,
  showDropDown,
  className,
}: Props): JSX.Element => {
  return (
    <StyledSortDropdown className={className}>
      <div
        className={
          showDropDown ? 'SortDropdown__menu_active' : 'SortDropdown__menu'
        }
      >
        {options.map((option: string, index: number): JSX.Element => {
          return (
            <div
              key={index}
              onClick={(): void => {
                setSelectedOption(option)
              }}
              className={cn(`${selectedOption === option ? 'selected' : ''}`)}
            >
              <span className="SortDropdown__menuItem">
                <p>{option}</p>
                <CheckSmallLineIcon attr={{}} />
              </span>
            </div>
          )
        })}
      </div>
    </StyledSortDropdown>
  )
}

const StyledSortDropdown = styled.div`
  .SortDropdownMenu {
    position: relative;
    cursor: pointer;
  }

  .SortDropdown__menu {
    display: none;
  }

  .SortDropdown__menu_active {
    box-shadow: 0 0 0 2px #e1edfd inset;
    position: absolute;
    z-index: 2;
    top: 10px;
    /* left: -20px; */
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
      background: #f1f7ff;
    }

    .SortDropdown__menuItem {
      display: flex;
      padding: 10px 50px 10px 15px;
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
    }

    .CheckIcon {
      display: none;
    }
  }
`

export { SortDropdown }
