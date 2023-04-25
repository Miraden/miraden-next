import cn from "classnames";
import { useState } from "react";
import styled from "styled-components";
import { CheckboxIcon } from "../../icons";

interface CheckboxProps {
  error?: boolean;
}

const Checkbox = ({ error }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <StyledModalCheckbox className={cn("", {})}>
      <input
        className="[ Checkbox__input ]"
        type="checkbox"
        onClick={() => {
          setIsChecked(!isChecked);
        }}
        checked={isChecked}
      />

      <span
        className={cn("[ Checkbox__iconContainer ]", { ErrorCheckbox: error })}
      >
        <CheckboxIcon
          className={cn("[ Checkbox__icon ]", { hidden: !isChecked })}
        />
      </span>
    </StyledModalCheckbox>
  );
};

const StyledModalCheckbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;

  .Checkbox__input {
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
    padding: 0;
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

  .Checkbox__input:disabled + .Checkbox__iconContainer {
    border: 1px solid #c3c2c1;
    background: #c3c2c1;
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
`;

export { Checkbox };
