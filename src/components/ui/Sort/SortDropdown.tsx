import { FC, useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  options: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  optionSelection: Function;
  className?: string;
};

const SortDropdown: FC<Props> = ({
  options,
  optionSelection,
  className,
}: Props): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const onClickHandler = (option: string): void => {
    setSelectedOption(option);
    optionSelection(option);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <StyledDropdown className={className}>
      <div
        className={showDropDown ? `Dropdown__menu` : `Dropdown__menu_active`}
      >
        {options.map((option: string, index: number): JSX.Element => {
          return (
            <p
              key={index}
              onClick={(): void => {
                onClickHandler(option);
              }}
              className={selectedOption === option ? "selected" : ""}
            >
              {option}
            </p>
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
    p {
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 10px 15px;
      color: #2a344a;
    }

    p:hover {
      color: #4e6af3;
      background: #f1f7ff;
    }

    .selected {
      color: red;
    }
  }
`;

export { SortDropdown };
