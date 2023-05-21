import { ArrowIcon } from "@/icons";
import cn from "classnames";
import { FC, useState } from "react";
import styled from "styled-components";
import { MoreDropdown } from "./MoreDropdown";

interface Props {
  className?: string;
}

const More: FC<Props> = ({ className }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>("RU");
  const [selectedOption, setSelectedOption] = useState<string>(selectOption);
  const options = () => {
    return ["EN", "RU"];
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
    setSelectedOption(option);
    setSelectOption(option);
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
          Ещё
          <ArrowIcon />
        </div>
        {showDropDown && (
          <MoreDropdown
            className="DropdownInput_selectContainer"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            optionSelection={optionSelection}
            showDropDown={true}
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
  position: relative;
  color: #fff;
  user-select: none;
  outline: none;
  .DropdownInput_selectContainer {
    right: 10px;
    top: 10px;
    position: relative;
    color: #fff;
    border-radius: 10px;
  }

  .DropdownInput_select_active {
    width: 100%;
    max-width: 300px;
    background: #3a465d;
    border-radius: 10px;
    padding: 10px 10px 10px 15px;
    border: none;
    transition: 0.15s ease-in;
    .DropdownInput_selectLabel {
      color: #fff;
    }
    div {
      svg {
        margin-left: 5px;
        transition: 0.15s ease-in;
      }
    }
  }

  .DropdownInput_select {
    overflow-y: hidden; // тестово для сколла
    &:focus-visible {
      box-shadow: 0 0 0 2px #f845fc;
      div {
        color: #fff;
      }
    }
    &:hover {
      background: #414d65;
    }
    &:active {
      outline: none;
    }
    outline: none;
    width: 100%;
    max-width: 300px;
    padding: 12px 10px 12px 15px;
    border: none;
    border-radius: 10px;
    overflow: hidden;

    div {
      width: 100%;
      svg {
        margin-left: 5px;
        transition: 0.2s ease-in;
        transform: rotate(-180deg);
      }
    }
  }

  .DropdownInput_selectLabel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.07em;
    color: #fff;
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

export { More };
