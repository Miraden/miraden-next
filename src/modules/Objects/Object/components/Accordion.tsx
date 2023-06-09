import { ArrowAccordionIcon } from "@/icons";
import cn from "classnames";
import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useControlled } from "../../../../hooks/useControlled";

type Props = {
  title?: string;
  defaultExpanded?: boolean;
  expanded?: boolean;
  className?: string;
  onChange?: (expanded: boolean) => void;
  children: any;
};

const Accordion: FC<Props> = ({
  title,
  expanded: expandedProp,
  defaultExpanded,
  className,
  onChange,
  children,
}) => {
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
    <StyledAccordion contentWrapperHeight={contentHeight} className={className}>
      <div className="Accordion__title" onClick={handleToggle}>
        <h4
          className={cn("Font_20_120", {
            Title_expanded: expanded,
          })}
        >
          {title}
        </h4>
        <div className="Accordion__iconContainer">
          <ArrowAccordionIcon
            height={20}
            width={20}
            className={cn("Accordion__icon", {
              Accordion__icon_rotated: expanded,
            })}
          />
        </div>
      </div>
      <div className="Accordion__content">
        <div className="Accordion__contentWrapper" ref={contentRef}>
          <div className="Accordion__text">{children}</div>
        </div>
      </div>
    </StyledAccordion>
  );
};

const StyledAccordion = styled.div<{ contentWrapperHeight: number }>`
  background-color: #ffffff;
  margin-top: 10px;
  border-radius: 10px;

  &:last-of-type {
    .Accordion__content {
      border-bottom: unset;
    }
  }

  .Accordion__title {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    transition: 0.15s ease;
  }

  .Accordion__content {
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
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;

    a {
      color: #4e6af3;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      &.active {
        opacity: 0.7;
      }
    }
  }

  .Accordion__iconContainer {
    width: 28px;
    height: 28px;
  }

  .Accordion__icon {
    flex-shrink: 0;
    transition: transform 0.3s;
    margin-top: 4px;
    margin-left: 4px;

    margin-right: 4px;
    &_rotated {
      transform: rotate(-180deg);
    }
  }

  .Accordion__button {
    width: fit-content;
    margin-bottom: 32px;
  }

  @media (max-width: 576px) {
    .Accordion__title {
      h4 {
        margin-top: 2px;
      }
    }
  }
`;

export { Accordion };
