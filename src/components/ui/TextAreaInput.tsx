import { WarningIcon } from "@/icons";
import cn from "classnames";
import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  maxLength?: number;
  disabled?: boolean;
  warning?: boolean;
  error?: boolean;
  label?: string;
  className?: string;
}

const TextAreaInput = ({
  maxLength,
  disabled,
  warning,
  error,
  label,
  className,
}: Props) => {
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
    <StyledTextArea className={className}>
      <StyledTextAreaField
        className={cn({
          Disabled_area: disabled,
          TextArea_warning: warning,
          TextArea_error: error,
        })}
      >
        {maxLength && (
          <StyledTextAreaCounter>
            {value.length}/{maxLength}
          </StyledTextAreaCounter>
        )}
        <StyledTextAreaInput
          placeholder={label}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
          disabled={disabled}
        />
        <StyledTextAreaLabel isFocused={isFocused}></StyledTextAreaLabel>
      </StyledTextAreaField>
      {warning && (
        <div className="Warning__message Text_12_16">
          <div>
            <WarningIcon />
            <span>Warning</span>
          </div>
          <span>Description</span>
        </div>
      )}
      {error && <div className="Error__message Text_12_16">Error</div>}
      {maxLength && (
        <StyledTextAreaCounter>
          {value.length}/{maxLength}
        </StyledTextAreaCounter>
      )}
    </StyledTextArea>
  );
};

const StyledTextArea = styled.div`
  .TextArea_warning {
    textarea {
      box-shadow: 0px 0px 0px 2px #ffeac1 inset !important;
      background-color: #fffbf4;
    }
  }

  .TextArea_error {
    textarea {
      box-shadow: 0px 0px 0px 2px #ffd8d8 inset;
      background-color: #fff5f5;
    }
  }

  .Warning__message {
    display: flex;
    margin-top: 4px;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
    }
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

  .Disabled_area {
    textarea {
      background: #eff3fb !important;
      box-shadow: none;
      pointer-events: none;
      color: #b8c6e3 !important;
    }
    label {
      color: #b8c6e3 !important;
      pointer-events: none;
      user-select: none;
    }
    div {
      pointer-events: none;
      color: #b8c6e3 !important;
      user-select: none;
    }
  }

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
  min-width: 300px;
  min-height: 60px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 2px #e1edfd inset;
  border-radius: 10px;
  padding: 20px 20px 10px 20px;
  font-size: 16px;
  line-height: 24px;
  height: 150px;
  outline: none;
  resize: none;
  ::placeholder {
    color: #7786a5;
  }
  transition: 0.1s;
  &:hover {
    box-shadow: 0 0 0 2px #cddef4 inset;
  }
  &:focus {
    box-shadow: 0 0 0 2px #4e6af3 inset;
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
