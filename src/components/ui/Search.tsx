import { CrossIcon, SearchIcon } from "@/icons";
import cn from "classnames";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";

interface SearchProps {
  options: string[];
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  rightIcon?: ReactNode;
  onClick?: any;
}

const Search = ({
  options,
  disabled,
  className,
  placeholder,
  rightIcon,
  onClick,
}: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchValue(searchValue);

    const filteredOptions = options.filter((option) =>
      option.toLowerCase().startsWith(searchValue.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
    setIsOptionsOpen(true);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setSearchValue(option);
    setIsOptionsOpen(false);
  };

  const handleBlur = () => {
    if (selectedOption === "") {
      setSearchValue("");
    }
    setIsOptionsOpen(false);
  };

  const handleClearClick = () => {
    setSelectedOption("");
    setSearchValue("");
  };

  return (
    <SearchContainer className={cn(className, { Search_disabled: disabled })}>
      <SearchIcon className="Search__searchIcon" />
      {!rightIcon && (
        <CrossIcon
          className="Search__crossIcon"
          onClick={handleClearClick}
          style={{ opacity: selectedOption ? 1 : 0 }}
        />
      )}
      {rightIcon && (
        <>
          <CrossIcon
            className="Search__crossIconWithButton"
            onClick={handleClearClick}
            width={18}
            height={18}
            style={{ opacity: selectedOption ? 1 : 0 }}
          />
          <button className="Search__rightIcon" onClick={onClick}>
            {rightIcon}
          </button>
        </>
      )}

      <Input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleSearchChange}
        onBlur={handleBlur}
        onFocus={() => !disabled && setIsOptionsOpen(true)}
        className={cn("Text_16_24", { Search_disabled: disabled })}
        disabled={disabled}
      />

      {isOptionsOpen && searchValue && (
        <OptionsContainer>
          {filteredOptions.map((option) => (
            <Option key={option} onMouseDown={() => handleOptionClick(option)}>
              {option
                .split(new RegExp(`(${searchValue})`, "gi"))
                .map((substring, index) =>
                  substring.toLowerCase() === searchValue.toLowerCase() ? (
                    <HighlightedSubstring key={index}>
                      {substring}
                    </HighlightedSubstring>
                  ) : (
                    <span key={index}>{substring}</span>
                  )
                )}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  position: relative;

  .Search_disabled .Search__searchIcon {
    svg path {
      fill: red !important;
    }
  }

  .Search__rightIcon,
  .Search__crossIconWithButton {
    position: absolute;
    top: 21px;
    right: 20px;
    z-index: 21;
  }

  .Search__crossIconWithButton {
    right: 80px;
  }

  .Search_disabled {
    background: #eff3fb !important;
    box-shadow: none;
    pointer-events: none;
    color: "#B8C6E3" !important;
    :focus-within {
      pointer-events: none;
    }

    &::placeholder {
      color: #b8c6e3;
    }

    .Search__searchIcon {
      svg path {
        fill: #b8c6e3 !important;
      }
    }
  }

  .Search__crossIcon {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 22px;
    right: 20px;
    z-index: 21;
    opacity: 0;
    path {
      fill: #2a344a !important;
    }
  }

  .Search__searchIcon {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 22px;
    left: 20px;
    z-index: 21;
  }

  :focus-within .Search__crossIcon {
    opacity: 1 !important;
  }
`;

const Input = styled.input`
  position: relative;
  height: 60px;
  padding: 18px 20px 18px 48px;
  box-shadow: 0 0 0 2px #e1edfd inset;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  width: 100%;
  background: #fff;
  z-index: 20;

  &::placeholder {
    color: #7786a5;
  }

  &:hover {
    box-shadow: 0 0 0 2px #cddef4 inset;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #4e6af3 inset;

    &::placeholder {
      color: #2a344a;
    }
  }
`;

const OptionsContainer = styled.ul`
  position: absolute;
  z-index: 19;
  top: 48px;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 0 0px 10px 10px;
  box-shadow: 0 0 0 2px #e1edfd inset;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Option = styled.li`
  padding: 12px 20px 13px 20px;
  cursor: pointer;
  color: #b8c6e3;

  &:hover {
    background-color: #d4ddee;
  }
  :first-child {
    margin-top: 12px;
  }
`;

const HighlightedSubstring = styled.span`
  color: #2a344a;
`;

export { Search };
