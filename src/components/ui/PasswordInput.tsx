import { WarningIcon } from "@/icons";
import cn from "classnames";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";

interface Props {
  warning?: boolean;
  error?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
}

const PasswordInput = ({ warning, error, icon, disabled }: Props) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setValue(inputValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(!!event.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledPasswordInput>
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
        />
        {icon && (
          <button onClick={togglePassword} className="Icon__container">
            {icon}
          </button>
        )}
        <StyledPasswordInputLabel disabled isFocused={isFocused}>
          Password
        </StyledPasswordInputLabel>
      </StyledPasswordInputField>
      <div
        className={cn("PasswordInput__bottom", {
          PasswordInput__labelWarning: warning,
          PasswordInput__labelError: error,
          PasswordInput__disabled: disabled,
        })}
      >
        <Link href="" className="Text_12_16 RestorePassword">
          Напомнить пароль
        </Link>
        {warning && (
          <div className="Warning__message">
            <WarningIcon />
            <span className="Text_12_16">Warning</span>
          </div>
        )}
        {error && <div className="Error__message Text_12_16">Error</div>}
      </div>
    </StyledPasswordInput>
  );
};

const StyledPasswordInput = styled.div`
  max-width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;

  .PasswordInput__disabled {
    input {
      background: #eff3fb !important;
      box-shadow: none;
      pointer-events: none;
    }
    label {
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
      color: #94a5ca;
    }
  }

  .Error__message {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.error};
  }

  .PasswordInput__labelWarning {
    input {
      box-shadow: 0px 0px 0px 2px #ffeac1 inset !important;
      background-color: #fffbf4;
    }
  }

  .PasswordInput__labelError {
    input {
      box-shadow: 0px 0px 0px 2px #ffd8d8 inset;
      background-color: #fff5f5;
    }
  }
`;

const StyledPasswordInputField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledPasswordInputInput = styled.input`
  max-width: 300px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 2px #e1edfd inset;
  border-radius: 10px;
  padding: 18px 20px;
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

const StyledPasswordInputLabel = styled.label<{
  isFocused: boolean;
  disabled?: boolean;
}>`
  max-width: 270px;
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? "6px" : "50%")};
  left: ${({ isFocused }) => (isFocused ? "20px" : "20px")};
  display: ${({ isFocused }) => (isFocused ? "none" : "block")};
  transform: ${({ isFocused }) =>
    isFocused ? "translateY(0)" : "translateY(-50%)"};
  font-size: ${({ isFocused }) => (isFocused ? "12px" : "16px")};
  line-height: 20px;
  color: #7786a5;
  pointer-events: none;
  transition: 0.1s;
`;

export { PasswordInput };
