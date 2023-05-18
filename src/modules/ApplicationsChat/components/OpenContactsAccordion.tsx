import { Link } from "@/components/ui";
import { useControlled } from "@/hooks/useControlled";
import { ArrowAccordionIcon } from "@/icons";
import cn from "classnames";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = {
  expanded?: boolean;
  className?: string;
  onChange?: (expanded: boolean) => void;
  defaultExpanded?: boolean;
};

const OpenContactsAccordion = ({
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
      <div className="Accordion__head Font_14_140" onClick={handleToggle}>
        <div className="Accordion__title">
          <p className="Accordion__status Color_text_grey">Статус</p>
          <p className="Accordion__agency Font_14_140">
            Агент — <mark>RealEstate</mark>
          </p>
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
              <p className="Accordion__status Color_text_grey">
                Название компании
              </p>

              <div className="Accordion__agency">
                <Image
                  src="/images/avatar1.png"
                  alt=""
                  width={48}
                  height={48}
                />
                <Link href="" className="AgencyLink">
                  Агентство недвижимости — RealEstate
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </StyledHeaderAccordion>
  );
};

const StyledHeaderAccordion = styled.div<{ contentWrapperHeight: number }>`
  cursor: pointer;
  .Accordion__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e1edfd;
  }

  .Accordion__status {
    min-width: 150px;
  }

  .Accordion__title {
    display: flex;
  }

  .Accordion__agency {
    display: flex;
    align-items: center;
    margin-left: 30px;

    mark {
      background: none;
      color: #4e6af3;
    }

    .AgencyLink {
      margin-left: 15px;
    }
  }

  .Accordion__content {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e1edfd;
  }

  .Accordion__contentWrapper {
    height: ${(props) => props.contentWrapperHeight}px;
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
    width: 100%;
  }

  .Accordion__selectedLanguage {
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
    }
  }
`;

export { OpenContactsAccordion };
