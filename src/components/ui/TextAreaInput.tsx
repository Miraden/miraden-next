import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  maxLength?: number;
}

const TextAreaInput = ({ maxLength }: Props) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    if (maxLength && inputValue.length > maxLength) {
      return;
    }
    setValue(inputValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(!!event.target.value);
  };

  return (
    <StyledTextArea>
      <StyledTextAreaField>
        {maxLength && (
          <StyledTextAreaCounter>
            {value.length}/{maxLength}
          </StyledTextAreaCounter>
        )}
        <StyledTextAreaInput
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
        />
        <StyledTextAreaLabel isFocused={isFocused}>Text</StyledTextAreaLabel>
      </StyledTextAreaField>
      {maxLength && (
        <StyledTextAreaCounter>
          {value.length}/{maxLength}
        </StyledTextAreaCounter>
      )}
    </StyledTextArea>
  );
};

const StyledTextArea = styled.div`
  max-width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledTextAreaField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledTextAreaInput = styled.textarea`
  max-width: 300px;
  min-width: 300px;
  min-height: 60px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 2px #e1edfd inset;
  border-radius: 10px;
  padding: 26px 20px 10px 20px;
  font-size: 16px;
  line-height: 24px;
  height: 150px;
  outline: none;
  transition: 0.1s;
  &:focus {
    box-shadow: 0 0 0 2px #4e6af3 inset;
  }
  &:hover {
    box-shadow: 0 0 0 2px #cddef4 inset;
  }
`;

const StyledTextAreaLabel = styled.label<{ isFocused: boolean }>`
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? "6px" : "26px")};
  left: ${({ isFocused }) => (isFocused ? "20px" : "20px")};
  transform: ${({ isFocused }) =>
    isFocused ? "translateY(0)" : "translateY(-50%)"};
  font-size: ${({ isFocused }) => (isFocused ? "12px" : "16px")};
  line-height: 20px;
  color: #7786a5;
  pointer-events: none;
  transition: 0.1s;
`;

const StyledTextAreaCounter = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  align-self: flex-end;
  margin-top: 4px;
  font-size: 12px;
  color: #808080;
`;

export { TextAreaInput };
