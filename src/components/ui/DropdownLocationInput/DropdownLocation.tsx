import { MapIcon } from "@/icons";
import { FC, useState } from "react";
import styled from "styled-components";

type Option = {
  label: string;
  subOptions: string[];
};

type Props = {
  options: Option[];
  showDropDown: boolean;
  toggleDropDown: Function;
  optionSelection: Function;
  className?: string;
};

const DropdownLocation: FC<Props> = ({
  options,
  optionSelection,
  className,
}: Props): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedSubOption, setSelectedSubOption] = useState<string | null>(
    null
  );

  const onMouseEnterHandler = (option: string): void => {
    setSelectedOption(option);
    setShowDropDown(true);
  };

  const onMouseLeaveHandler = (): void => {
    setSelectedOption(null);
    setSelectedSubOption(null);
    setShowDropDown(false);
  };

  const onClickHandler = (option: string, subOption?: string): void => {
    if (subOption) {
      optionSelection(`${option}, ${subOption}`);
      setSelectedOption(option);
      setSelectedSubOption(subOption);
    } else {
      optionSelection(option);
      setSelectedOption(option);
      setSelectedSubOption(null);
    }
    setShowDropDown(false);
  };

  return (
    <StyledDropdownLocation className={className}>
      <div className="DropdownLocation__menu">
        <div className="DropdownLocation__list">
          <div className="DropdownLocation__menu_active">
            <p
              className={selectedOption === "Все страны" ? "active" : ""}
              onMouseEnter={(): void => {
                onMouseEnterHandler("Все страны");
              }}
              onMouseLeave={onMouseLeaveHandler}
              onClick={(): void => onClickHandler("Все страны")}
            >
              Все страны
            </p>

            {options.map((option: Option, index: number): JSX.Element => {
              return (
                <div
                  key={index}
                  onMouseEnter={(): void => {
                    onMouseEnterHandler(option.label);
                  }}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <div className="Options">
                    <p
                      className={
                        selectedOption === option.label ? "active" : ""
                      }
                      onClick={(): void => onClickHandler(option.label)}
                    >
                      {option.label}
                    </p>
                    {showDropDown && selectedOption === option.label && (
                      <div className="SubOptions">
                        {option.subOptions.map(
                          (
                            subOption: string,
                            subIndex: number
                          ): JSX.Element => {
                            return (
                              <p
                                key={subIndex}
                                className={
                                  selectedSubOption === subOption
                                    ? "active"
                                    : ""
                                }
                                onClick={(): void =>
                                  onClickHandler(option.label, subOption)
                                }
                              >
                                {subOption}
                              </p>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="MapButton__container ">
              <a className="MapButton">
                <MapIcon className="MapIcon " />
                <span>На карте</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledDropdownLocation>
  );
};

const StyledDropdownLocation = styled.div`
  .DropdownLocation__menu_active p.active {
    color: #4e6af3;
  }

  .Options {
    display: flex;
  }

  .SubOptions {
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    border-left: 1px solid #e1edfd;
    p:first-child {
      margin-top: 44px;
    }
  }

  .MapButton__container {
    border-top: 1px solid #e1edfd;
    width: 100%;
  }

  .MapButton {
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #7786a5;

    span {
      margin-left: 10px;
    }

    :hover {
      color: #4e6af3;

      svg {
        path {
          fill: #4e6af3 !important;
        }
      }
    }
  }

  .MapIcon {
    path {
      fill: #7786a5 !important;
      stroke: none !important;
    }
  }

  .DropdownLocation__menu_active {
    box-shadow: 0 0 0 2px #e1edfd inset;

    position: absolute;
    z-index: 2;
    top: 14px;
    left: -20px;
    width: calc(100% + 40px);
    background: #fff;
    border-radius: 10px;
    overflow-y: auto;
    font-size: 14px;
    line-height: 140%;
    cursor: pointer;
    p {
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 12px 20px 13px 20px;
      color: #2a344a;
    }

    p:hover {
      color: #4e6af3;
    }
  }

  .DropdownLocation__list {
    display: flex;
    flex-direction: column;
  }

  .DropdownLocation__menu_active::-webkit-scrollbar {
    width: 5px;
  }

  .DropdownLocation__menu_active {
    scrollbar-width: thin;
  }

  .DropdownLocation__menu_active::-webkit-scrollbar-track {
    background: transparent;
  }

  .DropdownLocation__menu_active::-webkit-scrollbar-thumb {
    background-color: #c7d2e9;
    height: 50px;
    border-radius: 10px;
  }
`;

export { DropdownLocation };
