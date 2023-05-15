import { FC } from "react";
import styled from "styled-components";
import { RequestButton } from "../RequestButton";

type Props = {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  options: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  optionSelection: Function;
  className?: string;
  firstInstallment?: string;
  firstInstallmentPercent?: string;
  yieldCount?: number;
  yieldCountPercent?: number;
  singleCost?: string;
};
const PricingDropdown: FC<Props> = ({
  selectedOption,
  setSelectedOption,
  options,
  optionSelection,
  showDropDown,
  className,
  firstInstallment,
  yieldCount,
  singleCost,
  firstInstallmentPercent,
  yieldCountPercent,
}: Props): JSX.Element => {
  return (
    <StyledPricingDropdown className={className}>
      <div
        className={
          showDropDown
            ? "PricingDropdown__menu_active"
            : "PricingDropdown__menu"
        }
      >
        <div className="PricingDropdown__head">
          <div className="PricingDropdown__tableContainer">
            <p className="PricingDropdown__tableTitle Font_14_140 Color_text_grey">
              Первый взнос
            </p>
            <p className="PricingDropdown__price Font_16_140">
              {firstInstallment}
            </p>
            <p className="PricingDropdown__price Font_16_24 Color_text_grey">
              {firstInstallmentPercent}
            </p>
          </div>
          <div className="PricingDropdown__tableContainer">
            <p className="PricingDropdown__tableTitle Font_14_140 Color_text_grey">
              Цена за 1 м²
            </p>
            <p className="PricingDropdown__price Font_16_140">{singleCost}</p>
          </div>
          <div className="PricingDropdown__tableContainer">
            <p className="PricingDropdown__tableTitle Font_14_140 Color_text_grey">
              Доход в год
            </p>
            <p className="PricingDropdown__price Font_16_140">{yieldCount}</p>
            <p className="PricingDropdown__price Font_16_24 Color_text_grey">
              {yieldCountPercent} %
            </p>
          </div>
        </div>
        <div className="PricingDropdown__buttonsContainer">
          {options.map((option: string, index: number): JSX.Element => {
            return (
              <RequestButton
                key={index}
                onClick={(): void => {
                  setSelectedOption(option);
                }}
                active={selectedOption === option}
              >
                {option}
              </RequestButton>
            );
          })}
        </div>
      </div>
    </StyledPricingDropdown>
  );
};

const StyledPricingDropdown = styled.div`
  .PricingDropdown__head {
    display: flex;
    flex-direction: column;
    width: 100%;
    div {
      padding: 15px;
      width: 100%;
    }

    div:not(:first-child) {
      border-top: 1px solid #f1f7ff;
    }
  }

  .PricingDropdown__tableContainer {
    display: grid !important;
    grid-template-columns: 95px 63px 39px;
    grid-gap: 59px;
    white-space: nowrap;
  }

  .PricingDropdown__tableTitle {
    text-align: start;
  }

  .PricingDropdown__price {
    text-align: end;
  }

  .PricingDropdownMenu {
    position: relative;
    cursor: pointer;
  }

  .PricingDropdown__menu {
    display: none;
  }

  .PricingDropdown__menu_active {
    padding: 5px 20px 20px 20px;
    width: fit-content;
    box-shadow: 0 0 0 2px #e1edfd inset;
    position: absolute;
    z-index: 2;
    top: 4px;
    right: -20px;
    width: fit-content;
    background: #fff;
    border-radius: 10px;
    overflow-y: scroll;
    font-size: 14px;
    line-height: 140%;
    cursor: pointer;

    div {
      display: flex;
      align-items: start;

      color: #2a344a;
    }

    .PricingDropdown__menuItem {
      display: flex;
      padding: 10px 15px;
      align-items: center;
      width: 100%;

      p {
        white-space: nowrap;
      }
    }
  }

  .PricingDropdown__buttonsContainer {
    display: flex;
    margin-top: 33px;

    button {
      padding: 10px 20px;
    }
    button:not(:first-child) {
      margin-left: 10px;
    }
  }
`;

export { PricingDropdown };
