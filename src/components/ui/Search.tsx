import { CrossIcon, SearchIcon } from "@/icons";
import React, { useState } from "react";
import styled from "styled-components";

interface SearchProps {
  options: string[];
}

const Search = ({ options }: SearchProps) => {
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
    <SearchContainer>
      <SearchIcon className="Search__searchIcon" />
      <CrossIcon
        className="Search__crossIcon"
        onClick={handleClearClick}
        style={{ opacity: selectedOption ? 1 : 0 }}
      />

      <Input
        type="text"
        placeholder="Text"
        value={searchValue}
        onChange={handleSearchChange}
        onBlur={handleBlur}
        onFocus={() => setIsOptionsOpen(true)}
        className="Text_16_24"
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
  max-width: 300px;

  .Search__crossIcon {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 22px;
    right: 20px;
    z-index: 20;
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
    z-index: 20;
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
  z-index: 10;

  &:hover {
    box-shadow: 0 0 0 2px #cddef4 inset;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #4e6af3 inset;
  }
`;

const OptionsContainer = styled.ul`
  position: absolute;
  top: 48px;
  left: 0;
  right: 0;
  background-color: transparent;
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
