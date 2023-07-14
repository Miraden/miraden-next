import { CheckIcon } from "@/icons/CheckIcon";
import cn from "classnames";
import { FC } from "react";
import styled from "styled-components";
import {CheckSmallLineIcon} from "@/icons/CheckLineIcon";
import {OptionPrice} from "@/components/ui/CurrencySelect/CurrencySelect";
import {theme} from "../../../../styles/tokens";

type Props = {
  selectedOption: string;
  setSelectedOption: (option: OptionPrice) => void;
  options: OptionPrice[];
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
        {options.map((option: OptionPrice, index: number): JSX.Element => {
          return (
            <div
              key={index}
              onClick={(): void => {
                setSelectedOption(option);
              }}
              className={cn(`${selectedOption === option.label ? "selected" : ""}`)}
            >
              <span className="CurrencyDropdown__menuItem">
                <p className="Font_14_140">{option.label}</p>
                <CheckSmallLineIcon attr={{className: (selectedOption === option.label ? "CheckIcon_selected" : "CheckIcon")}}/>
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
`;

export { CurrencyDropdown };
