import React, { useState } from "react";
import styled from "styled-components";
import { Tooltip } from "./Tooltip";

interface TooltipComponentProps {
  text: string;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <StyledTest onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {text}
      <Tooltip visible={showTooltip}>
        Подсказка — элемент графического интерфейса, служит дополнительным
        средством обучения пользователя
      </Tooltip>
    </StyledTest>
  );
};

const StyledTest = styled.div`
  position: relative;
  width: fit-content;
`;

export { TooltipComponent };
