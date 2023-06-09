import { ArrowIcon } from "@/icons/ArrowIcon";
import cn from "classnames";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { PricingDropdown } from "./PricingDropdown";
import OutsideClickHandler from "react-outside-click-handler";

interface Props {
  className?: string;
  options: string[];
  price?: string;
  firstInstallment?: string;
  firstInstallmentPercent?: string;
  yieldCount?: number;
  yieldCountPercent?: number;
  singleCost?: string;
  onClick?: any;
}

const PricingSelect: FC<Props> = ({
  className,
  options,
  price,
  firstInstallment,
  firstInstallmentPercent,
  yieldCount,
  singleCost,
  onClick,
  yieldCountPercent,
}) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    setSelectedOption(options[0]);
  }, [options]);

  const toggleDropDown = () => {
    setShowDropDown(true);
  };

  const optionSelection = (option: string, index: number): void => {
    setSelectedOption(option);
    setSelectOption(option);
  };

  return (
    <StyledDropdownInput
      className={cn({ className })}
      options={options}
      onClick={onClick}
    >
      <button
        className={
          showDropDown ? `DropdownInput_select_active` : `DropdownInput_select`
        }
        onClick={(): void => toggleDropDown()}
      >
        <div className="DropdownInput_selectLabel Color_blue_primary sm:Font_14_16_600">
          <p>{price + selectedOption ? price + selectedOption : price}</p>
          <ArrowIcon />
        </div>

        {showDropDown && (
          <OutsideClickHandler onOutsideClick={() => setShowDropDown(false)}>
            <PricingDropdown
              className="DropdownInput_selectContainer"
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              optionSelection={optionSelection}
              showDropDown={true}
              toggleDropDown={(): void => toggleDropDown()}
              options={options}
              yieldCount={yieldCount}
              yieldCountPercent={yieldCountPercent}
              singleCost={singleCost}
              firstInstallment={firstInstallment}
              firstInstallmentPercent={firstInstallmentPercent}
            />
          </OutsideClickHandler>
        )}
      </button>
    </StyledDropdownInput>
  );
};

const StyledDropdownInput = styled.div<Props>`
  max-width: fit-content;
  position: relative;
  margin-left: 4px;
  .DropdownInput_selectContainer {
    right: 10px;
    position: relative;
  }

  .DropdownInput_select_active {
    width: 100%;
    max-width: 300px;
    border: none;
    transition: 0.15s ease-in;
    .DropdownInput_selectLabel {
      color: #4e6af3 !important;
    }
    div {
      svg {
        margin-left: 10px;
        transition: 0.15s ease-in;
      }
    }
  }

  .DropdownInput_select {
    &:focus {
      box-shadow: none;
      div {
        color: #4e6af3;
      }
    }

    &:active {
      outline: none;
    }
    outline: none;
    width: 100%;
    border: none;
    overflow: hidden;

    div {
      width: 100%;
      svg {
        margin-left: 10px;
        transition: 0.2s ease-in;
        transform: rotate(-180deg);
      }
    }
  }

  .DropdownInput_selectLabel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    white-space: nowrap;
    color: #4e6af3;
    line-height: initial;

    @media (max-width: 768px) {
      font-size: 26px;
    }

    @media (max-width: 576px) {
      font-size: 22px;
    }

    svg {
      min-width: 16px;
      height: 16px;
      path {
        stroke: #7786a5;
      }
    }
  }

  .DropdownInput_inputContainer {
    position: relative;
  }

  .DropdownInput_inputContainer_label {
    position: absolute;
    top: 0;
    left: 0;
  }

  .DropdownInput_input {
    width: 100%;
    padding: 11px 10px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 3px;
  }
`;

export { PricingSelect };
