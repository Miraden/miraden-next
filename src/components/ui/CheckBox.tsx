import cn from "classnames";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CheckboxIcon } from "@/icons";

interface CheckboxProps {
  error?: boolean;
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  isSelected?: any;
  onChange?: () => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  className?: string;
}

const Checkbox = ({
  error,
  disabled,
  checked,
  label,
  onClick,
  isSelected,
  className,
  onChange,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  useEffect(() => {
    setIsChecked(checked || false);
  }, [checked]);

  const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange();
    }
    e.preventDefault();
    e.stopPropagation();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    if (onChange) {
      onChange();
    }
  };

  return (
    <StyledModalCheckbox className={cn(className, { ErrorCheckbox: error })}>
      <label onClick={handleClick} className="Checkbox">
        <input
          className="[ Checkbox__input ]"
          type="checkbox"
          onChange={handleChange}
          checked={isChecked}
          tabIndex={0}
          disabled={disabled}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <span
          className={cn("[ Checkbox__iconContainer ]", {
            ErrorCheckbox: error,
          })}
        >
          {disabled ? null : (
            <CheckboxIcon
              className={cn("[ Checkbox__icon ]", { hidden: !isChecked })}
            />
          )}
        </span>
        <span className="Checkbox__label">{label}</span>
      </label>
    </StyledModalCheckbox>
  );
};

const StyledModalCheckbox = styled.div`
  .Checkbox {
    display: flex;
    cursor: pointer;
    width: fit-content;
    align-items: center;
  }

  .Checkbox__label {
    margin-left: 10px;
    color: #2a344a;
  }

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
    cursor: not-allowed;
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

  &.Controls__onGray {
    .Checkbox__input:disabled + .Checkbox__iconContainer {
      background: #fff;
      border-color: #C7D2E9;
    }
  }
`;

export { Checkbox };
