import cn from "classnames";
import styled from "styled-components";
import {useCallback, useState} from "react";

interface ToggleButtonProps {
  disabled?: boolean;
  className?: string;
  label?: string;
  state: boolean
  onChange?: Function
}

const ToggleButton = ({ className, disabled, label, state, onChange }: ToggleButtonProps) => {
  const [isChecked, setChecked] = useState<boolean>(state)
  const onClick = useCallback((e: any) => {
    setChecked(!isChecked)
    if(onChange) onChange(e)
  }, [isChecked, onChange])

  return (
    <StyledToggleButton className={className}>
      <label className={cn("ToggleButton__switch", { Disabled: disabled })}>
        <input type="checkbox" checked={isChecked} disabled={disabled} onClick={onClick} />
        <span className="ToggleButton__slider Round"></span>
      </label>
      {label && <span className="ToggleButton__label">{label}</span>}
    </StyledToggleButton>
  );
};

const StyledToggleButton = styled.div`
  .Disabled {
    pointer-events: none;
    cursor: not-allowed;
    .ToggleButton__slider {
      background-color: #eff3fb;
    }
  }

  .ToggleButton__switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }

  .ToggleButton__switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .ToggleButton__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #c7d2e9;
    -webkit-transition: 0.4s;
    transition: 0.15s;
  }

  .ToggleButton__slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2.5px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.4s;
  }

  .ToggleButton__label {
    display: inline;
    margin-left: 10px;
  }

  input:checked + .ToggleButton__slider {
    background-color: #4e6af3;
  }

  input:focus + .ToggleButton__slider {
    outline: 2px solid #f845fc;
  }

  input:checked + .ToggleButton__slider:before {
    -webkit-transform: translateX(19px);
    -ms-transform: translateX(19px);
    transform: translateX(19px);
  }

  .ToggleButton__slider.Round {
    border-radius: 34px;
  }

  .ToggleButton__slider.Round:before {
    border-radius: 50%;
  }

  &.Controls__onGray {
    .ToggleButton__slider {
      background: #fff;
      &:before {
        background: #EEF1F5;
      }
    }
  }
`;

export { ToggleButton };
