import { WarningIcon } from "@/icons";
import cn from "classnames";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";

interface Props {
  maxLength?: number;
  warning?: boolean;
  error?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
}

const TextInput = ({ maxLength, warning, error, icon, disabled }: Props) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (maxLength && inputValue.length > maxLength) {
      return;
    }
    setValue(inputValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(!!event.target.value);
  };

  return (
    <StyledTextInput>
      <StyledTextInputField
        className={cn({
          FieldInput__labelWarning: warning,
          FieldInput__labelError: error,
          FieldInput__disabled: disabled,
        })}
      >
        {maxLength && (
          <StyledTextInputCounter>
            {value.length}/{maxLength}
          </StyledTextInputCounter>
        )}
        <StyledTextInputInput
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
        />
        {icon && <div className="Icon__container">{icon}</div>}
        <StyledTextInputLabel isFocused={isFocused}>Text</StyledTextInputLabel>
      </StyledTextInputField>
      {warning && (
        <div className="Warning__message">
          <WarningIcon />
          <span className="Text_12_16">Warning</span>
        </div>
      )}
      {error && <div className="Error__message Text_12_16">Error</div>}
    </StyledTextInput>
  );
};

const StyledTextInput = styled.div`
  max-width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;

  .FieldInput__disabled {
    input {
      background: #eff3fb !important;
      box-shadow: none;
      pointer-events: none;
    }
    label {
      color: #b8c6e3 !important;
    }
    div {
      pointer-events: none;
      color: #b8c6e3 !important;
    }
    .RestorePassword {
      color: #b8c6e3;
      pointer-events: none;
    }

    .Icon__container {
      pointer-events: none;

      svg path {
        fill: #b8c6e3 !important;
      }
    }
  }

  .Icon__container {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 20px;
    top: calc(50% - 8px);
  }

  .Warning__message {
    display: flex;
    margin-top: 4px;
    span {
      margin-left: 8px;
      color: #94a5ca;
    }
  }

  .Error__message {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.error};
  }

  .FieldInput__labelWarning {
    input {
      box-shadow: 0px 0px 0px 2px #ffeac1 inset !important;
      background-color: #fffbf4;
    }
  }

  .FieldInput__labelError {
    input {
      box-shadow: 0px 0px 0px 2px #ffd8d8 inset;
      background-color: #fff5f5;
    }
  }
`;

const StyledTextInputField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledTextInputInput = styled.input`
  max-width: 300px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 2px #e1edfd inset;
  border-radius: 10px;
  padding: 18px 58px 18px 20px;
  font-size: 16px;
  line-height: 24px;
  height: 60px;
  outline: none;
  transition: 0.1s;
  &:focus {
    box-shadow: 0 0 0 2px #4e6af3 inset;
  }
  &:hover {
    box-shadow: 0 0 0 2px #cddef4 inset;
  }
`;

const StyledTextInputLabel = styled.label<{ isFocused: boolean }>`
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? "6px" : "50%")};
  left: ${({ isFocused }) => (isFocused ? "20px" : "20px")};
  transform: ${({ isFocused }) =>
    isFocused ? "translateY(0)" : "translateY(-50%)"};
  font-size: ${({ isFocused }) => (isFocused ? "12px" : "16px")};
  line-height: 20px;
  color: #7786a5;
  pointer-events: none;
  transition: 0.1s;
`;

const StyledTextInputCounter = styled.div`
  position: absolute;
  height: 50%;
  z-index: 10;
  right: 20px;
  top: 36%;
  align-self: flex-end;
  font-size: 12px;
  color: #808080;
`;

export { TextInput };
