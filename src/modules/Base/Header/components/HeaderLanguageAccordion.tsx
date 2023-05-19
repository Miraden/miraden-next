import { useControlled } from "@/hooks/useControlled";
import { ArrowAccordionIcon } from "@/icons";
import { CheckIcon } from "@/icons/CheckIcon";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = {
  expanded?: boolean;
  className?: string;
  onChange?: (expanded: boolean) => void;
  defaultExpanded?: boolean;
};

const languages = ["RU", "EN"];

const HeaderLanguageAccordion = ({
  expanded: expandedProp,
  className,
  onChange,
  defaultExpanded,
}: Props) => {
  const [contentHeight, setContentHeight] = useState(0);

  const [expanded, setExpandedState] = useControlled({
    controlled: expandedProp,
    defaultValue: defaultExpanded,
  });

  const contentRef = useRef<HTMLDivElement>(null);

  const [selectedLanguage, setSelectedLanguage] = useState("RU");

  const handleToggle = () => {
    setExpandedState(!expanded);

    if (onChange) {
      onChange(!expanded);
    }
  };

  const handleLanguageClick = (language: string) => {
    setSelectedLanguage(language);
    setExpandedState(false);

    if (onChange) {
      onChange(false);
    }
  };

  useEffect(() => {
    if (expanded && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [expanded]);

  return (
    <StyledHeaderAccordion
      contentWrapperHeight={contentHeight}
      className={className}
    >
      <div className="Accordion__head" onClick={handleToggle}>
        <div className="Accordion__title">
          <h3 className={cn("Font_12_16_600", { Color_white: expanded })}>
            {selectedLanguage}
          </h3>
        </div>
        <ArrowAccordionIcon
          height={20}
          width={20}
          className={cn("Accordion__icon", {
            Accordion__icon_rotated: expanded,
          })}
        />
      </div>

      {expanded && (
        <div className="Accordion__content">
          <div className="Accordion__contentWrapper" ref={contentRef}>
            <div className="Accordion__languages">
              {languages.map((language) => (
                <button
                  key={language}
                  className={cn("Font_12_16_600", {
                    Accordion__selectedLanguage: selectedLanguage === language,
                  })}
                  onClick={() => handleLanguageClick(language)}
                >
                  {selectedLanguage === language ? (
                    <div>
                      {language} <CheckIcon />
                    </div>
                  ) : (
                    language
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </StyledHeaderAccordion>
  );
};

const StyledHeaderAccordion = styled.div<{ contentWrapperHeight: number }>`
  width: 100%;

  cursor: pointer;
  .Accordion__head {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: 0 0 0 1px inset #303b51;
  }

  .Accordion__title {
    display: flex;
  }

  .Accordion__content {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #303b51;
  }

  .Accordion__contentWrapper {
    height: ${(props) => props.contentWrapperHeight}px;
    padding-left: 40px;
    padding-right: 40px;

    transition: height 0.175s ease;

    a {
      text-decoration: none;

      &:hover {
      }
      &.active {
        opacity: 0.7;
      }
    }
  }

  .Accordion__languages {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    margin-left: -10px;

    button {
      color: #b8c6e3;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }

  .Accordion__selectedLanguage {
    color: #fff !important;

    div {
      display: flex;
      align-items: center;
    }
    svg {
      margin-left: 10px;
      path {
        fill: #fff;
      }
    }
  }

  .Accordion__text {
    a {
      text-decoration: none;

      &:hover {
      }
      &.active {
        opacity: 0.7;
      }
    }
  }

  .Accordion__icon {
    margin-left: 10px;
    flex-shrink: 0;
    transition: transform 0.3s;

    path {
      fill: #b8c6e3;
    }

    &_rotated {
      transform: rotate(-180deg);
      path {
        fill: #fff;
      }
    }
  }
`;

export { HeaderLanguageAccordion };
