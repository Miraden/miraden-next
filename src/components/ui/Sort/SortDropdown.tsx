import { CheckIcon } from "@/icons/CheckIcon";
import cn from "classnames";
import { FC } from "react";
import styled from "styled-components";

type Props = {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  options: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  optionSelection: Function;
  className?: string;
};

const SortDropdown: FC<Props> = ({
  selectedOption,
  setSelectedOption,
  options,
  optionSelection,
  showDropDown,
  className,
}: Props): JSX.Element => {
  return (
    <StyledDropdown className={className}>
      <div
        className={showDropDown ? "Dropdown__menu_active" : "Dropdown__menu"}
      >
        {options.map((option: string, index: number): JSX.Element => {
          return (
            <div
              key={index}
              onClick={(): void => {
                setSelectedOption(option);
              }}
              className={cn(`${selectedOption === option ? "selected" : ""}`)}
            >
              <span className="Dropdown__menuItem">
                <p>{option}</p>
                <CheckIcon
                  className={
                    selectedOption === option
                      ? "CheckIcon_selected"
                      : "CheckIcon"
                  }
                />
              </span>
            </div>
          );
        })}
      </div>
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  .Order__form_dropdownMenu {
    position: relative;
    cursor: pointer;
  }

  .Dropdown__menu {
    display: none;
  }

  .Dropdown__menu_active {
    box-shadow: 0 0 0 2px #e1edfd inset;
    position: absolute;
    z-index: 2;
    top: 10px;
    left: -20px;
    width: calc(100% + 40px);
    background: #fff;
    border-radius: 10px;
    max-height: 228px;
    overflow-y: scroll;
    font-size: 14px;
    line-height: 140%;
    cursor: pointer;

    div {
      display: flex;
      align-items: start;
      padding: 10px 15px;
      color: #2a344a;
    }

    div:hover {
      color: #4e6af3;
      background: #f1f7ff;
    }

    .Dropdown__menuItem {
      display: flex;
      width: fit-content;

      span {
        word-break: normal;
      }
    }

    .selected {
      color: #4e6af3;
      display: flex !important;
      flex-wrap: nowrap;
    }
    .CheckIcon_selected {
      display: flex;
      flex-shrink: 0;
    }

    .CheckIcon {
      display: none;
    }
  }
`;

export { SortDropdown };
