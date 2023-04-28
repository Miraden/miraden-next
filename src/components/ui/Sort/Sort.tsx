import { ArrowIcon } from "@/icons";
import cn from "classnames";
import { FC, useState } from "react";
import styled from "styled-components";
import { SortDropdown } from "./SortDropdown";

interface Props {
  className?: string;
}

const Sort: FC<Props> = ({ className }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>("");
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1); // 1. Добавляем состояние selectedOptionIndex
  const options = () => {
    return [
      "Select 1",
      "Select 2",
      "Select 3",
      "Select 4",
      "Select 5",
      "Select 6",
      "Select 7",
      "Select 8",
      "Select 9",
      "Select 10",
      "Select 11",
      "Select 12",
    ];
  };
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };
  const optionSelection = (option: string, index: number): void => {
    // 2. Обновляем состояние selectedOptionIndex
    setSelectOption(option);
    setSelectedOptionIndex(index);
  };
  return (
    <StyledDropdownInput
      className={cn({
        className,
      })}
    >
      <button
        className={
          showDropDown ? `DropdownInput_select_active` : `DropdownInput_select`
        }
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div className="DropdownInput_selectLabel Text_14_16">
          {selectOption ? selectOption : "Sort"}
          <ArrowIcon />
        </div>
        {showDropDown && (
          <SortDropdown
            className="DropdownInput_selectContainer"
            optionSelection={optionSelection}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            options={options()}
          />
        )}
      </button>
    </StyledDropdownInput>
  );
};
const StyledDropdownInput = styled.div<Props>`
  max-width: fit-content;

  .DropdownInput_selectContainer {
    right: 10px;
    top: 4px;
    position: relative;
    background: #fff;
    border-radius: 10px;
  }

  .DropdownInput_select_active {
    width: 100%;
    max-width: 300px;
    background: #fff;
    border-radius: 10px;
    padding: 10px 10px 10px 15px;
    border: none;
    transition: 0.15s ease-in;
    box-shadow: 0 0 0 2px #d4ddee inset;
    .DropdownInput_selectLabel {
      color: #2a344a;
    }
    div {
      svg {
        margin-left: 12px;
        transition: 0.15s ease-in;
        path {
          stroke: #7786a5;
        }
      }
    }
  }

  .DropdownInput_select {
    &:focus {
      box-shadow: 0 0 0 2px #f845fc inset;
      div {
        color: #2a344a;
      }
    }
    &:hover {
      box-shadow: 0 0 0 1px #cddef4 inset;
      background: #f1f7ff;
    }
    &:active {
      outline: none;
    }
    outline: none;
    width: 100%;
    max-width: 300px;
    padding: 10px 10px 10px 15px;
    border: none;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 0 1px #e1edfd inset;

    div {
      width: 100%;
      svg {
        margin-left: 12px;
        transition: 0.2s ease-in;
        transform: rotate(-180deg);
      }
    }
  }

  .DropdownInput_selectLabel {
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
`;

export { Sort };
