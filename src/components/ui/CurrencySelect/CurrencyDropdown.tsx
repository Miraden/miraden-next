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
            ? "CurrencyDropdown__menu_active"
            : "CurrencyDropdown__menu"
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
              <span className="CurrencyDropdown__menuItem">
                <p className="Font_14_140">{option}</p>
                <CheckIcon attr={{className: (selectedOption === option ? "CheckIcon_selected" : "CheckIcon")}}/>
              </span>
            </div>
          );
        })}
      </div>
    </StyledCurrencyDropdown>
  );
};

const StyledCurrencyDropdown = styled.div`
  .CurrencyDropdownMenu {
    position: relative;
    cursor: pointer;
  }

  .CurrencyDropdown__menu {
    display: none;
  }

  .CurrencyDropdown__menu_active {
    box-shadow: 0 0 0 2px #e1edfd inset;
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
    }

    .CheckIcon {
      display: none;
    }
  }
`;

export { CurrencyDropdown };
