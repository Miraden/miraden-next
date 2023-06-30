import {WarningIcon} from "@/icons";
import cn from "classnames";
import React, {ReactNode, useState} from "react";
import styled from "styled-components";
import {HideIcon} from "@/icons/HideIcon";
import {EyeIcon} from "@/icons/EyeIcon";

interface Props {
  warning?: boolean;
  error?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
  label?: string;
  onChange?: any;
  name?: string
  message?: string
}

const PasswordInput = ({ warning, error, icon, disabled, className, label, onChange, name, message }: Props) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if(onChange) onChange(event)

    setValue(inputValue);
  };

  const handleFocus = () => {
    if (!disabled) {
      setIsFocused(true);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setIsFocused(!!event.target.value);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledPasswordInput className={cn(className, (label ? "" : "PasswordInput__noLabel"))}>
      <StyledPasswordInputField
        className={cn({
          PasswordInput__labelWarning: warning,
          PasswordInput__labelError: error,
          PasswordInput__disabled: disabled,
        })}
      >
        <StyledPasswordInputInput
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={showPassword ? "text" : "password"}
          disabled={disabled}
          name={name}
          isPasswordView={showPassword}
        />
        <button onClick={togglePassword} type={"button"} className="Icon__container">
          {showPassword ? (<EyeIcon />) : (<HideIcon/>)}
        </button>
        {label && (
          <StyledPasswordInputLabel disabled isFocused={isFocused}>
            {label}
          </StyledPasswordInputLabel>
        )}
      </StyledPasswordInputField>
      <div
        className={cn("PasswordInput__bottom", {
          PasswordInput__labelWarning: warning,
          PasswordInput__labelError: error,
          PasswordInput__disabled: disabled,
        })}
      >
        {warning && (
          <div className="Warning__message">
            <WarningIcon />
            <span className="Font_fields_description">{message}</span>
          </div>
        )}
        {error && <div className="Error__message Font_fields_description">{message}</div>}
      </div>
    </StyledPasswordInput>
  );
};

const StyledPasswordInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  &.PasswordInput__noLabel {
    input {
      padding: 18px 18px 18px 20px;
    }
  }

  .PasswordInput__disabled {
    input {
      background: ${({ theme }) => theme.colors.background.disabled};
      outline: none;
      box-shadow: none;
      pointer-events: none;
    }
    label {
      color: #b8c6e3 !important;
    }

    .RestorePassword {
      color: ${({ theme }) => theme.colors.text.disabled};
      pointer-events: none;
    }

    .Icon__container {
      pointer-events: none;

      svg path {
        fill: ${({ theme }) => theme.colors.text.disabled};
      }
    }
  }

  .Icon__container {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 20px;
    top: calc(50% - 8px);

    svg path {
      fill: ${({ theme }) => theme.colors.fields.title};
    }
  }

  .PasswordInput__bottom {
    text-align: end;
    margin-top: 4px;
    width: 100%;
  }

  .RestorePassword {
    color: ${({ theme }) => theme.colors.blue["default"]};
  }

  .Warning__message {
    display: flex;
    margin-top: 4px;
    span {
      margin-left: 8px;
      color: ${({ theme }) => theme.colors.fields.description};
    }
  }

  .Error__message {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.error};
  }

  .PasswordInput__labelWarning {
    input {
      outline: 2px solid ${({ theme }) => theme.colors.fields.strokeValidation};
      background-color: ${({ theme }) => theme.colors.fields.bgValidation};
    }
  }

  .PasswordInput__labelError {
    input {
      outline: 2px solid ${({ theme }) => theme.colors.fields.strokeError};
      background-color: ${({ theme }) => theme.colors.fields.strokeErrorBg};
    }
  }
`;

const StyledPasswordInputField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledPasswordInputInput = styled.input<{isPasswordView: boolean}>`
  position: relative;
  border: none;
  outline: 2px solid ${({ theme }) => theme.colors.fields.stroke};
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 18px 18px 4px 20px;
  font-size: 16px;
  line-height: 24px;
  height: 60px;
  transition: 0.1s;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeFocused};
  }
  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeHover};
  }
`;

const StyledPasswordInputLabel = styled.label<{
  isFocused: boolean;
  disabled?: boolean;
}>`
  max-width: 270px;
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? "6px" : "50%")};
  left: ${({ isFocused }) => (isFocused ? "20px" : "20px")};
  transform: ${({ isFocused }) => isFocused ? "translateY(0)" : "translateY(-50%)"};
  font-size: ${({ isFocused }) => (isFocused ? "12px" : "16px")};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.fields.title};
  pointer-events: none;
  transition: 0.1s;
`;

export { PasswordInput };
