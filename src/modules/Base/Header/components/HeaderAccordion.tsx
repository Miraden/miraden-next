import { useControlled } from "@/hooks/useControlled";
import { ArrowAccordionIcon } from "@/icons";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = {
  expanded?: boolean;
  className?: string;
  onChange?: (expanded: boolean) => void;
  children: any;
  title?: string;
  defaultExpanded?: boolean;
};

const HeaderAccordion = ({
  expanded: expandedProp,
  className,
  onChange,
  children,
  defaultExpanded,
  title,
}: Props) => {
  const [contentHeight, setContentHeight] = useState(0);

  const [expanded, setExpandedState] = useControlled({
    controlled: expandedProp,
    defaultValue: defaultExpanded,
  });

  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setExpandedState(!expanded);

    if (onChange) {
      onChange(!expanded);
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
          <h3 className="Font_12_16_600">{title}</h3>
        </div>
        <ArrowAccordionIcon
          height={20}
          width={20}
          className={cn("Accordion__icon", {
            Accordion__icon_rotated: expanded,
          })}
        />
      </div>

      <div className="Accordion__content">
        <div className="Accordion__contentWrapper" ref={contentRef}>
          <div className="Accordion__text Font_18_150 sm:Font_16_24">
            {children}
          </div>
        </div>
      </div>
    </StyledHeaderAccordion>
  );
};

const StyledHeaderAccordion = styled.div<{ contentWrapperHeight: number }>`
  .Accordion__head {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .Accordion__title {
    display: flex;
  }

  .Accordion__content {
    width: 100%;
    overflow: hidden;
  }

  .Accordion__contentWrapper {
    height: ${(props) => props.contentWrapperHeight}px;

    transition: height 0.175s ease;

    a {
      text-decoration: underline;

      &:hover {
      }
      &.active {
        opacity: 0.7;
      }
    }
  }

  .Accordion__text {
    a {
      text-decoration: underline;

      &:hover {
      }
      &.active {
        opacity: 0.7;
      }
    }
  }

  .Accordion__icon {
    flex-shrink: 0;
    transition: transform 0.3s;

    path {
      fill: #fff;
    }

    &_rotated {
      transform: rotate(-180deg);
    }
  }
`;

export { HeaderAccordion };
