import styled from "styled-components";

interface TooltipProps {
  visible: boolean;
  placement?: "top" | "bottom" | "right" | "left";
}

const Tooltip = styled.div<TooltipProps>`
  position: absolute;
  transform: translateX(-50%);
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
    width: 12px;
    height: 8px;
    position: absolute;
    width: 12px;
    height: 8px;
    left: 50%;
    top: -10px;
    background: #2a344a;
    transform: rotate(90deg);
    flex: none;
    order: 1;
    flex-grow: 0;
    z-index: 1;
  }
`;

export { Tooltip };
