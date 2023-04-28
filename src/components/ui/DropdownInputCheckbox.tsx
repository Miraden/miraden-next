import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "./CheckBox";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  placeholder?: string;
}

const DropdownInputCheckbox: React.FC<Props> = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    const index = selectedOptions.findIndex((o) => o.value === option.value);
    if (index >= 0) {
      setSelectedOptions([
        ...selectedOptions.slice(0, index),
        ...selectedOptions.slice(index + 1),
      ]);
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Select"
        value={selectedOptions.map((o) => o.label).join(", ")}
        onClick={toggleDropdown}
        readOnly
        className="Text_14_140"
      />
      {isOpen && (
        <Dropdown>
          {options.map((option) => (
            <Checkbox
              onChange={() => handleOptionClick(option)}
              key={option.value}
              checked={selectedOptions.some((o) => o.value === option.value)}
              label={option.label}
              isSelected={selectedOptions.some((o) => o.value === option.value)}
            />
          ))}
        </Dropdown>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-block;
  color: #2a344a;
`;

const Input = styled.input`
  padding: 18px 20px;
  max-width: 300px;
  width: 100%;
  box-shadow: 0 0 0 2px #e1edfd inset;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  color: #2a344a;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: none;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 0 0 2px #e1edfd inset;
  border-radius: 10px;
  z-index: 1;

  label {
    padding: 12px 20px 13px 20px;
    width: 100%;
    color: #2a344a;
    :hover {
      background: #f1f7ff;
    }
  }
`;

const Option = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 8px;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? "#f0f0f0" : "transparent"};

  &:hover {
    background-color: #f0f0f0;
  }
`;

export { DropdownInputCheckbox };
