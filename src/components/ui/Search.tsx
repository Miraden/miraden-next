import { CrossIcon, SearchIcon } from "@/icons";
import cn from "classnames";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { SortApps } from "./SortApps/SortApps";

interface SearchProps {
  options: string[];
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  rightIcon?: ReactNode;
  onClick?: any;
  withFilter?: boolean;
}

const Search = ({
  options,
  disabled,
  className,
  placeholder,
  rightIcon,
  onClick,
  withFilter,
}: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isFocused, setFocused] = useState(false)

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
    setFocused(false)
  };

  const handleClearClick = () => {
    setSelectedOption("");
    setSearchValue("");
  };

  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    !disabled && setIsOptionsOpen(true)
    setFocused(true)
  }

  return (
    <SearchContainer className={cn(className, {
      Search_container_disabled: disabled,
      Search_focused: isFocused
    })}>
      <SearchIcon
        attr={{
          className: "Search__searchIcon"
        }}
      />
      {!rightIcon && (
        <CrossIcon
          attr={{
            className: "Search__crossIcon",
            onClick:handleClearClick,
            style:{ opacity: selectedOption ? 1 : 0 }
        }}
        />
      )}
      {rightIcon && (
        <>
          <CrossIcon
            attr={{
              className: "Search__crossIconWithButton",
              onClick: handleClearClick,
              style:{ opacity: selectedOption ? 1 : 0 },
              width: 18,
              height: 18
            }}
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
        onFocus={onFocus}
        className={cn("Text_16_24", { Search_disabled: disabled })}
        disabled={disabled}
      />
      {withFilter && <SortApps className="SortContainer" />}
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
  cursor: pointer;

  &.Search_focused {
    .Search__searchIcon path {
      fill: ${({theme}) => theme.colors.main}
    }
  }

  .Search__rightIcon {
    height: 18px;
  }

  .Search__rightIcon,
  .Search__crossIconWithButton {
    position: absolute;
    top: 21px;
    right: 20px;
    z-index: 21;
  }

  .SortContainer {
    position: absolute;
    top: 12px;
    right: 58px;
    z-index: 40;
  }

  .Search__crossIconWithButton {
    right: 80px;
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
      fill: ${({theme}) => theme.colors.fields.title}
    }
  }

  .Search__searchIcon {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 22px;
    left: 20px;
    z-index: 21;

    path {
      fill: ${({theme}) => theme.colors.fields.title}
    }
  }

  :focus-within .Search__crossIcon {
    opacity: 1 !important;
  }

  &.Search_container_disabled {
    .Search__searchIcon {
      path {
        fill: ${({theme}) => theme.colors.text.disabled};
      }
    }
  }

  .Search_disabled {
    background: ${({theme}) => theme.colors.background.disabled};
    box-shadow: none;
    pointer-events: none;
    outline: none;
    color: ${({theme}) => theme.colors.text.disabled};

    &:focus-within {
      pointer-events: none;
    }

    &::placeholder {
      color: ${({theme}) => theme.colors.text.disabled};
    }
  }
`;

const Input = styled.input`
  position: relative;
  height: 60px;
  padding: 18px 20px 18px 48px;
  outline: 2px solid ${({theme}) => theme.colors.fields.stroke};
  font-size: 16px;
  border: none;
  border-radius: 10px;
  width: 100%;
  background: #fff;
  z-index: 20;

  &::placeholder {
    color: ${({theme}) => theme.colors.fields.title};
    opacity: 1;
    outline: 2px solid ${({theme}) => theme.colors.text.grey};
  }

  &:hover {
    outline: 2px solid ${({theme}) => theme.colors.fields.strokeHover};
  }

  &:focus {
    outline: 2px solid ${({theme}) => theme.colors.fields.strokeFocused};

    &::placeholder {
      outline: 2px solid ${({theme}) => theme.colors.text.grey};
      color: transparent;
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
  border-radius: 0 0 10px 10px;
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
