import { ArrowIcon, WarningIcon } from "@/icons";
import cn from "classnames";
import { FC, useState } from "react";
import styled from "styled-components";
import { DropdownLocation } from "./DropdownLocation";

interface Option {
  label: string;
  subOptions: string[];
}

interface Props {
  className?: string;
  disabled?: boolean;
  warning?: boolean;
  error?: boolean;
  placeholder?: string;
  options?: Option[];
}

const DropdownLocationInput: FC<Props> = ({
  className,
  disabled,
  warning,
  error,
  placeholder,
  options = [],
}) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const toggleDropDown = (): void => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const optionSelection = (option: string): void => {
    setSelectedValue(option);
  };

  return (
    <StyledDropdownLocationInput
      className={cn(className, {
        Dropdown_disabled: disabled,
      })}
      disabled={disabled}
      error={error}
      warning={warning}
    >
      <button
        className={
          showDropDown
            ? `DropdownLocationInput_select_active`
            : `DropdownLocationInput_select`
        }
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
        tabIndex={disabled ? -1 : undefined}
      >
        <div className="DropdownLocationInput_selectLabel Text_16_24">
          {selectedValue ? selectedValue : placeholder}
          <ArrowIcon width={18} height={18} />
        </div>
        {showDropDown && (
          <DropdownLocation
            className="DropdownLocationInput_selectContainer"
            options={options}
            showDropDown={false}
            toggleDropDown={toggleDropDown}
            optionSelection={optionSelection}
          />
        )}
      </button>
      {warning && (
        <div className="Warning__message Text_12_16">
          <WarningIcon />
          <span>Warning</span>
        </div>
      )}
      {error && <div className="Error__message Text_12_16">Error</div>}
    </StyledDropdownLocationInput>
  );
};

const StyledDropdownLocationInput = styled.div<Props>`
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  .Warning__message {
    display: flex;
    margin-top: 4px;
    align-items: center;
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

  .DropdownLocationInput_selectContainer {
    position: relative;
    background: #fff;
    border-radius: 10px;
  }

  .DropdownLocationInput_select_active {
    width: 100%;
    max-width: 300px;
    background: #fff;
    border-radius: 10px;
    padding: 18px 20px;
    border: none;
    transition: 0.15s ease-in;
    box-shadow: 0 0 0 2px #e1edfd inset;

    div {
      svg {
        transition: 0.15s ease-in;
        path {
          stroke: #7786a5;
        }
      }
    }
  }

  .DropdownLocationInput_select {
    &:focus {
      box-shadow: 0 0 0 2px #4e6af3 inset;
      div {
        color: #2a344a;
      }
    }
    &:hover {
      box-shadow: 0 0 0 2px #cddef4 inset;
    }
    outline: none;
    width: 100%;
    max-width: 300px;
    padding: 18px 20px;
    border: none;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 0 2px #e1edfd inset;
    box-shadow: ${(props) =>
      props.error ? "0 0 0 2px #FFD8D8 inset !important" : "none"};
    box-shadow: ${(props) =>
      props.warning ? "0 0 0 2px #FFEAC1 inset !important" : "none"};
    box-shadow: ${(props) =>
      props.disabled ? "none" : "0 0 0 2px #e1edfd inset"};
    background: ${(props) => (props.error ? "#FFF5F5" : "auto")};
    background: ${(props) => (props.warning ? "#FFFBF4" : "auto")};
    background: ${(props) => (props.disabled ? "#EFF3FB" : "auto")};

    div {
      width: 100%;
      svg {
        transition: 0.2s ease-in;
        transform: rotate(-180deg);
        path {
          stroke: ${(props) => (props.disabled ? "#B8C6E3" : "#7786a5")};
        }
      }
    }
  }

  .DropdownLocationInput_selectLabel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => (props.disabled ? "#B8C6E3" : "#7786a5")};
    font-size: 16px;
  }

  .DropdownLocationInput_inputContainer {
    position: relative;
  }

  .DropdownLocationInput_inputContainer_label {
    position: absolute;
    top: 0;
    left: 0;
  }

  .DropdownLocationInput_input {
    width: 100%;
    padding: 11px 10px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 3px;
  }
`;

export { DropdownLocationInput };
