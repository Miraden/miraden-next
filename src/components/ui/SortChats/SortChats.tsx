import { ArrowIcon } from '@/icons'
import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { SortChatsDropdown } from './SortChatsDropdown'

interface Props {
  className?: string
}

const SortChats: FC<Props> = ({ className }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false)
  const [selectOption, setSelectOption] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<string>('')
  const options = () => {
    return [
      'Все заявки',
      'Заявка #15 - Хочу купить',
      'Заявка #16 - Хочу купить',
      'Заявка #17 - Хочу купить',
    ]
  }

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown)
  }

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false)
    }
  }
  const optionSelection = (option: string, index: number): void => {
    setSelectedOption(option)
    setSelectOption(option)
  }

  return (
    <StyledSortChats className={className}>
      <button
        className={
          showDropDown
            ? `SortChats_select_active Font_16_20 `
            : `SortChats_select Font_16_20 `
        }
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div className="SortChats_selectLabel Font_16_20 ">
          <p className="Font_16_20 Color_blue_primary">
            {selectedOption ? selectedOption : 'Все заявки'}
          </p>
          <ArrowIcon className="SortChats_selectLabelIcon" />
        </div>
      </button>
      {showDropDown && (
        <SortChatsDropdown
          className="SortChats_selectContainer"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          optionSelection={optionSelection}
          showDropDown={true}
          toggleDropDown={(): void => toggleDropDown()}
          options={options()}
        />
      )}
    </StyledSortChats>
  )
}
const StyledSortChats = styled.div<Props>`
  position: sticky;
  top: 0;
  z-index: 200;
  background: #ffffff;
  width: 100%;

  .SortChats_selectContainer {
    right: 10px;
    top: 4px;
    position: relative;
    background: #fff;
    width: 100%;
  }

  .SortChats_select_active {
    min-width: 100%;
    background: #fff;
    padding: 20px 30px 12px 30px;
    border: none;
    transition: 0.15s ease-in;
    border-bottom: 4px solid #e1edfd;

    .SortChats_selectLabel {
      color: #2a344a;
    }

    div {
      svg {
        margin-left: 12px;
        transition: 0.15s ease-in;
      }
    }
  }

  .SortChats_selectLabelIconMobile {
    display: none;
  }

  .SortChats_select {
    width: 100%;

    &:focus {
      /* box-shadow: 0 0 0 2px #f845fc inset; */

      div {
        color: #2a344a;
      }
    }

    &:hover {
      background: #f1f7ff;
    }

    &:active {
      outline: none;
    }

    outline: none;
    width: 100%;
    padding: 20px 30px 12px 30px;
    border: none;
    overflow: hidden;
    border-bottom: 4px solid #e1edfd;

    div {
      width: 100%;

      svg {
        margin-left: 12px;
        transition: 0.2s ease-in;
        transform: rotate(-180deg);
      }
    }
  }

  .SortChats_selectLabel {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    line-height: 16px;
    color: #7786a5;

    svg {
      width: 16px;
      height: 16px;

      path {
        stroke: #7786a5;
      }
    }
  }

  .SortChats_inputContainer {
    position: relative;
    width: 100%;
  }

  .SortChats_inputContainer_label {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
  }

  .SortChats_input {
    width: 100%;
    padding: 11px 10px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 3px;
  }

  @media (max-width: 769px) {
    .SortChats_select {
      box-shadow: none;
    }

    &:hover {
      box-shadow: none;
      background: transparent;
    }
  }

  .SortChats_select_active {
    box-shadow: none;

    div {
      svg {
        margin-left: 0;
      }
    }
  }

  .SortChats_selectLabel {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      width: 18px;
      height: 18px;
    }

    :hover {
      svg {
      }
    }
  }

  @media (max-width: 576px) {
    .SortChats_selectLabel {
      justify-content: flex-start;
    }
  }
`

export { SortChats }
