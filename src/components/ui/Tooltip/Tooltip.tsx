import styled from "styled-components";

interface TooltipProps {
  visible: boolean;
  placement?: "top" | "bottom" | "right" | "left";
}

const Tooltip = styled.div<TooltipProps>`
  position: absolute;
  max-width: 250px;
  width: 250px;
  transform: translateX(-50%);
  z-index: 10;
  left: 50%;
  padding: 10px;
  border-radius: 10px;
  background-color: #2a344a;
  color: white;
  font-size: 12px;
  line-height: 16px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
  transition: opacity 0.2s ease-in-out;

  ::after {
    content: "";
    z-index: -10;
    position: absolute;
    width: 24px;
    height: 16px;
    top: 0;
    left: calc(50% - 12px);
    transform: rotate(45deg);
    border-radius: 2px;
    background-color: #2a344a;
    animation: fade-in 300ms;
  }
`;

export { Tooltip };
