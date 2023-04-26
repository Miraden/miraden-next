import { useFormField } from "@/hooks/useFormField";
import { WarningIcon } from "@/icons";
import cn from "classnames";
import { ReactNode } from "react";
import styled from "styled-components";
import { Input } from "./Input";

interface Props {
  warning?: boolean;
  error?: boolean;
  icon?: ReactNode;
}

const FieldInput = ({ warning, error, icon }: Props) => {
  const text = useFormField({ initialValue: "" });

  return (
    <StyledFieldInput>
      <div
        className={cn("FieldInput__fieldContainer", {
          FieldInput__labelWarning: warning,
          FieldInput__labelError: error,
        })}
      >
        <label
          htmlFor="phone"
          className={cn("[ FieldInput__label ] [ Text_16_24 ]", {
            FieldInput__labelFocus: text.isFocus,
            FieldInput__labelFocusNoVisible: !text.isFocus && text.value,
            FieldInput__labelInvalid: !text.isValid,
          })}
        >
          {text.isValid ? "Text" : "Error"}
        </label>
        <Input
          id="phone"
          value={text.value}
          onChange={text.onChange}
          isValid={text.isValid}
          onFocus={text.onFocus}
          onBlur={text.onBlur}
          className="[ FieldInput__input ] [ Text_16_24 ]"
        />
        {icon && <div className="Icon__container">{icon}</div>}
      </div>
      {warning && (
        <div className="Warning__message">
          <WarningIcon />
          <span className="Text_12_16">Warning</span>
        </div>
      )}
      {error && <div className="Error__message Text_12_16">Error</div>}
    </StyledFieldInput>
  );
};

const StyledFieldInput = styled.div`
  max-width: 300px;

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
      box-shadow: 0px 0px 0px 2px #ffeac1 inset;
      background-color: #fffbf4;
    }
  }

  .FieldInput__labelError {
    input {
      box-shadow: 0px 0px 0px 2px #ffd8d8 inset;
      background-color: #fff5f5;
    }
  }

  .FieldInput__fieldContainer {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    position: relative;
  }

  .FieldInput__label {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    padding-left: 20px;
    color: #7786a5;
    line-height: 1em;
    pointer-events: none;
    transition: 0.1s;
    font-size: 16px;
    z-index: 10;
  }

  .FieldInput__labelFocus,
  .FieldInput__labelInvalid,
  .FieldInput__selectFocus {
    font-size: 12px;
    z-index: 1;
    border-radius: 2px;
    top: 10px;
    transform: translate(0, 0);
  }

  .FieldInput__labelFocusNoVisible {
    display: none;
  }

  .FieldInput__labelInvalid,
  .FieldInput__selectInvalid {
    display: block;
    background-color: red;
  }

  .FieldInput__input {
    position: relative;
    height: 60px;
    width: 100%;
    padding: 18px 20px;
    box-shadow: 0px 0px 0px 2px #e1edfd inset;
    border-radius: 8px;
    border: none;
    background: transparent;
  }

  .FieldInput__select {
    position: relative;
    height: 60px;
    width: 100%;
    padding: 8px 28px 8px 12px;
    box-shadow: 0px 0px 0px 2px #000000 inset;
    border-radius: 8px;
    border: none;
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
  }

  .FieldInput__select {
    option:not([disabled]) {
      color: #2a344a;
    }
  }

  .FieldInput__selectTransparent {
    color: transparent;
  }

  .FieldInput__arrowSelect {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .FieldInput__button {
    margin-top: 32px;
  }
`;

export { FieldInput };
