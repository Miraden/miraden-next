import { ArrowIcon } from "@/icons";
import { SortIcon } from "@/icons/SortIcon";
import { FC, useState } from "react";
import styled from "styled-components";
import { SortAppsDropdown } from "./SortAppsDropdown";

interface Props {
  className?: string;
}

const SortApps: FC<Props> = ({ className }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const options = () => {
    return ["Сначала агенства", "Сначала PRO", "Сначала самые надёжные"];
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
    <StyledDropdownInput className={className}>
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
          <p>{selectedOption ? selectedOption : "Сначала более надёжные"}</p>
          <ArrowIcon className="DropdownInput_selectLabelIcon" />
          <SortIcon className="DropdownInput_selectLabelIconMobile" />
        </div>
        {showDropDown && (
          <SortAppsDropdown
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
  background: #ffffff;
  border-radius: 10px;
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
      }
    }
  }

  .DropdownInput_selectLabelIconMobile {
    display: none;
  }

  .DropdownInput_select {
    &:focus {
      /* box-shadow: 0 0 0 2px #f845fc inset; */
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

  @media (max-width: 769px) {
    .DropdownInput_selectLabel {
      p {
        display: none;
      }
    }

    .DropdownInput_selectLabelIconMobile {
      display: flex;
    }

    .DropdownInput_selectLabelIcon {
      display: none;
    }

    .DropdownInput_select {
      padding: 8px;
      border: none;
      box-shadow: none;
      div {
        svg {
          margin-left: 0;
          transform: rotate(0);
        }
      }

      &:hover {
        box-shadow: none;
        background: transparent;
      }
    }

    .DropdownInput_select_active {
      padding: 8px;
      border: none;
      box-shadow: none;
      div {
        svg {
          margin-left: 0;
        }
      }
    }

    .DropdownInput_selectLabel {
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        width: 18px;
        height: 18px;
        path {
          stroke: none !important;
        }
      }

      :hover {
        svg {
          path {
            fill: #4e6af3;
          }
        }
      }
    }
  }
`;

export { SortApps };
