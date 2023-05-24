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

const SortChatsDropdown: FC<Props> = ({
  selectedOption,
  setSelectedOption,
  options,
  optionSelection,
  showDropDown,
  className,
}: Props): JSX.Element => {
  return (
    <StyledSortChatsDropdown className={className}>
      <div
        className={
          showDropDown
            ? "SortChatsDropdown__menu_active"
            : "SortChatsDropdown__menu"
        }
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
              <span className="SortChatsDropdown__menuItem">
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
    </StyledSortChatsDropdown>
  );
};

const StyledSortChatsDropdown = styled.div`
  .SortChatsDropdownMenu {
    position: relative;
    cursor: pointer;
  }

  .SortChatsDropdown__menu {
    display: none;
  }

  .SortChatsDropdown__menu_active {
    width: 100%;
    position: absolute;
    z-index: 2;
    top: -4px;
    left: 10px;
    background: #fff;
    max-height: 228px;
    overflow-y: auto;
    font-size: 14px;
    border-bottom: 2px solid #d4ddee;
    line-height: 140%;
    cursor: pointer;

    div {
      width: 100%;

      display: flex;
      align-items: start;

      color: #2a344a;
    }

    div:hover {
      background: #f1f7ff;
    }

    .SortChatsDropdown__menuItem {
      width: 100%;

      display: flex;
      padding: 12px 30px;
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
`;

export { SortChatsDropdown };
