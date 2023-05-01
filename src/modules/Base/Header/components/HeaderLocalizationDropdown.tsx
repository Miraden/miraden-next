import { CheckIcon } from "@/icons/CheckIcon";
import cn from "classnames";
import { FC, useState } from "react";
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

const HeaderLocalizationDropdown: FC<Props> = ({
  selectedOption,
  setSelectedOption,
  options,
  optionSelection,
  showDropDown,
  className,
}: Props): JSX.Element => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(
    options.findIndex((option) => option === selectedOption)
  );

  const handleOptionClick = (option: string, index: number): void => {
    setSelectedOption(option);
    setSelectedOptionIndex(index);
    optionSelection(option, index);
  };

  return (
    <StyledHeaderLocalizationDropdown className={className}>
      <div
        className={
          showDropDown
            ? "HeaderLocalizationDropdown__menu_active"
            : "HeaderLocalizationDropdown__menu"
        }
      >
        {options.map((option: string, index: number): JSX.Element => {
          return (
            <div
              key={index}
              onClick={(): void => handleOptionClick(option, index)}
              className={cn(
                `${selectedOptionIndex === index ? "selected" : ""}`
              )}
            >
              <span className="HeaderLocalizationDropdown__menuItem">
                <p className="Font_14_140">{option}</p>
                {selectedOptionIndex === index && (
                  <CheckIcon className="CheckIcon_selected" />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </StyledHeaderLocalizationDropdown>
  );
};

const StyledHeaderLocalizationDropdown = styled.div`
  .HeaderLocalizationDropdownMenu {
    position: relative;
    cursor: pointer;
  }

  .HeaderLocalizationDropdown__menu {
    display: none;
  }

  .HeaderLocalizationDropdown__menu_active {
    position: absolute;
    z-index: 2;
    top: 10px;
    right: -20px;
    width: fit-content;
    background: #2a344a;
    border-radius: 10px;
    max-height: 228px;
    overflow-y: scroll;
    font-size: 14px;
    line-height: 140%;
    cursor: pointer;

    div {
      display: flex;
      align-items: start;

      color: #fff;
    }

    div:hover {
      background: #3a465d;
    }

    .HeaderLocalizationDropdown__menuItem {
      display: flex;
      padding: 10px 20px;
      align-items: center;
      width: 100%;

      p {
        white-space: nowrap;
      }
    }

    .selected {
      display: flex !important;
      flex-wrap: nowrap;
    }
    .CheckIcon_selected {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-left: 10px;
      path {
        fill: #fff !important;
      }
    }

    .CheckIcon {
      display: none;
    }
  }
`;

export { HeaderLocalizationDropdown };
