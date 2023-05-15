import cn from "classnames";
import { useMemo } from "react";
import styled from "styled-components";

interface RadioProps {
  value?: string;
  disabled?: boolean;
  error?: boolean;
  checked?: any;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement
    >
  ) => void;
}
const Radio = ({ value, disabled, error, checked, onChange }: RadioProps) => {
  const inputId = useMemo(() => Math.random().toString(36).substr(2, 9), []);

  const handleMouseDown = (event: any) => {
    event.preventDefault();
  };

  return (
    <StyledRadio>
      <input
        type="radio"
        id={inputId}
        className={cn("Radio__input", { Radio__input_error: error })}
        onChange={onChange}
        checked={checked}
        tabIndex={0}
        disabled={disabled}
        onMouseDown={handleMouseDown}
      />
      <Label className="Font_16_24" htmlFor={inputId}>
        {value}
      </Label>
    </StyledRadio>
  );
};

const StyledRadio = styled.div`
  display: flex;
  align-items: center;

  .Radio__input {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #c7d2e9;
    border-radius: 50%;
    transition: 0.15s ease;
    outline: none;
    ::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 2px;
    }

    :hover {
      border: 3px solid #4e6af3;
    }
    &:focus-within {
      box-shadow: 0 0 0 2px #f845fc;
    }
    :checked {
      border: 3px solid #4e6af3;

      ::after {
        background-color: #4e6af3;
      }
      :hover {
        background-color: white;
        border: 3px solid #4e6af3;
        ::after {
          background-color: #4e6af3;
        }
      }
    }

    :disabled {
      cursor: not-allowed;
      border: 3px solid #c7d2e9;
      background-color: #c7d2e9;
      :hover {
        ::after {
          background-color: #c7d2e9;
        }
      }
      :checked {
        ::after {
          background-color: white;
          background-color: #c7d2e9;
        }
      }
    }
  }

  .Radio__input_error {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    width: 20px;
    height: 20px;
    border: 3px solid red;
    border-radius: 50%;
    transition: 0.15s ease;
    outline: none; /* добавлено свойство outline: none */
    ::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 2px;
    }

    :hover {
      border: 3px solid red;
    }
    &:focus-within {
      box-shadow: 0 0 0 2px #f845fc;
    }
    :checked {
      border: 3px solid red;

      ::after {
        background-color: red;
      }
      :hover {
        background-color: white;
        border: 3px solid red;
        ::after {
          background-color: red;
        }
      }
    }
  }
`;

export const RadioButton = styled.input``;

export const Label = styled.label<{ disabled?: boolean }>`
  cursor: pointer;
  margin-left: 10px;
`;
export { Radio };
