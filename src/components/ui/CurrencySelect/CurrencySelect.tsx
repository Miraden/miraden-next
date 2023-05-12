import { ArrowIcon } from "@/icons/ArrowIcon";
import cn from "classnames";
import { FC, useState } from "react";
import styled from "styled-components";
import { CurrencyDropdown } from "./CurrencyDropdown";

interface Props {
  className?: string;
  options: string[];
}

const CurrencySelect: FC<Props> = ({ className, options }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");

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
    <StyledDropdownInput className={cn({ className })} options={options}>
      <button
        className={
          showDropDown ? `DropdownInput_select_active` : `DropdownInput_select`
        }
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div className="DropdownInput_selectLabel Color_blue_primary">
          {selectedOption ? selectedOption : "евро"}
          <ArrowIcon />
        </div>
        {showDropDown && (
          <CurrencyDropdown
            className="DropdownInput_selectContainer"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            optionSelection={optionSelection}
            showDropDown={true}
            toggleDropDown={(): void => toggleDropDown()}
            options={options}
          />
        )}
      </button>
    </StyledDropdownInput>
  );
};

const StyledDropdownInput = styled.div<Props>`
  max-width: fit-content;
  position: relative;
  margin-left: 4px;
  .DropdownInput_selectContainer {
    right: 10px;
    position: relative;
  }

  .DropdownInput_select_active {
    width: 100%;
    max-width: 300px;
    border: none;
    transition: 0.15s ease-in;
    .DropdownInput_selectLabel {
      color: #4e6af3 !important;
    }
    div {
      svg {
        margin-left: 3px;
        transition: 0.15s ease-in;
      }
    }
  }

  .DropdownInput_select {
    &:focus {
      box-shadow: 0 0 0 2px #f845fc inset;
      div {
        color: #4e6af3;
      }
    }

    &:active {
      outline: none;
    }
    outline: none;
    width: 100%;
    border: none;
    overflow: hidden;

    div {
      width: 100%;
      svg {
        margin-left: 3px;
        transition: 0.2s ease-in;
        transform: rotate(-180deg);
      }
    }
  }

  .DropdownInput_selectLabel {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #4e6af3;
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

export { CurrencySelect };
