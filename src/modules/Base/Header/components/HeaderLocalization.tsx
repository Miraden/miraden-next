import { ArrowIcon } from "@/icons";
import cn from "classnames";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const HeaderLocalization = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <StyledHeaderLocalization className={className}>
      <div className="HeaderLocalization" onClick={() => setIsOpen(!isOpen)}>
        <span className="Font_12_16">{selectedLanguage}</span>

        <ArrowIcon
          className={cn("HeaderLocalization__arrowIcon", { ArrowOpen: isOpen })}
        />
      </div>
      {isOpen && (
        <Dropdown>
          <DropdownItem
            className="Font_12_16"
            onClick={() => handleLanguageSelect("EN")}
          >
            EN
          </DropdownItem>
          <DropdownItem
            className="Font_12_16"
            onClick={() => handleLanguageSelect("RU")}
          >
            RU
          </DropdownItem>
        </Dropdown>
      )}
    </StyledHeaderLocalization>
  );
};

const StyledHeaderLocalization = styled.button`
  position: relative;

  padding: 12px 16px 12px 20px;
  color: #fff;

  .HeaderLocalization {
    display: flex;
    align-items: center;

    span {
      margin-right: 5px;
      font-weight: 600;
      letter-spacing: 0.07em;
    }
  }

  .HeaderLocalization__arrowIcon {
    width: 18px;
    height: 18px;
    transform: rotate(180deg);
    transition: 0.2s ease;

    path {
      stroke: #7786a5 !important;
    }
  }

  .ArrowOpen {
    transform: rotate(0);
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: #2a344a;
  z-index: 1;
  border-radius: 0 0px 10px 10px;
  overflow: hidden;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.07em;

  &:hover {
    background-color: #3a465d;
  }
`;

export { HeaderLocalization };
