import React, { useState } from "react";
import styled from "styled-components";
import { Tooltip } from "./Tooltip";

interface TooltipComponentProps {
  trigger: any;
  text?: string;
  className?: string;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({
  trigger,
  text,
  className,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <StyledTest
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {trigger}
      <Tooltip visible={showTooltip}>{text}</Tooltip>
    </StyledTest>
  );
};

const StyledTest = styled.div`
  position: relative;
  width: fit-content;
`;

export { TooltipComponent };
