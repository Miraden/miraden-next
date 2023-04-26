import cn from "classnames";
import { useState } from "react";
import styled from "styled-components";
import { CheckboxIcon } from "../../icons";

interface CheckboxProps {
  error?: boolean;
  disabled?: boolean;
}

const Checkbox = ({ error, disabled }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <StyledModalCheckbox className={cn("", { ErrorCheckbox: error })}>
      <input
        className="[ Checkbox__input ]"
        type="checkbox"
        onClick={(e: React.MouseEvent<HTMLInputElement>) => {
          setIsChecked(!isChecked);
          e.currentTarget.blur(); // Убираем фокус с элемента после клика
        }}
        checked={isChecked}
        tabIndex={0}
        disabled={disabled}
      />

      <span
        className={cn("[ Checkbox__iconContainer ]", { ErrorCheckbox: error })}
      >
        {disabled ? null : (
          <CheckboxIcon
            className={cn("[ Checkbox__icon ]", { hidden: !isChecked })}
          />
        )}
      </span>
    </StyledModalCheckbox>
  );
};

const StyledModalCheckbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;

  .ErrorCheckbox {
    border-color: ${({ theme }) => theme.colors.error};
    background-color: ${({ theme }) => theme.colors.error};
  }

  .Checkbox__input {
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
    padding: 0;
  }

  .ErrorCheckbox {
    border-color: ${({ theme }) => theme.colors.error};
    background-color: ${({ theme }) => theme.colors.error};
  }

  .Checkbox__iconContainer {
    width: 20px;
    height: 20px;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    border: 2px solid #c7d2e9;
    border-radius: 5px;
    background: white;
    transition: 0.15s ease;

    :hover {
      border: 2px solid ${({ theme }) => theme.colors.blue["default"]};
    }
  }

  .Checkbox__input:checked + .Checkbox__iconContainer {
    border: 2px solid ${({ theme }) => theme.colors.blue["default"]};
    background: ${({ theme }) => theme.colors.blue["default"]};
  }

  .Checkbox__input:focus + .Checkbox__iconContainer {
    outline: 2px solid ${({ theme }) => theme.colors.stroke["purple"]};
    border: 2px solid ${({ theme }) => theme.colors.blue["default"]};
  }

  .Checkbox__input:disabled + .Checkbox__iconContainer {
    border: 2px solid #eff3fb;
    background: #eff3fb;
  }

  &.Checkbox__valid {
    .Checkbox__iconContainer {
      width: 18px;
      height: 18px;
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      align-items: center;
      border: 2px solid #b91a1e;
      border-radius: 4px;
      background: white;
    }
  }

  .Checkbox__icon {
    width: 12px;
    height: 12px;
  }

  .Checkbox__label {
    display: inline;
    margin-left: 8px;

    * {
      display: inline;
    }
  }

  &.ErrorCheckbox {
    .Checkbox__input:checked + .Checkbox__iconContainer {
      border-color: ${({ theme }) => theme.colors.error};
      background-color: ${({ theme }) => theme.colors.error};
    }
  }
`;

export { Checkbox };
