import React, { useState } from "react";
import { Tooltip } from "./Tooltip";

interface MyComponentProps {
  text: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {text}
      <Tooltip visible={showTooltip}>This is a tooltip</Tooltip>
    </div>
  );
};

export default MyComponent;
