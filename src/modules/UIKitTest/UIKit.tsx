import cn from "classnames";
import styled from "styled-components";

interface UIKitProps {
  className?: string;
}

const UIKit = ({ className }: UIKitProps) => {
  return (
    <StyledUIKit className={cn(className, "Container")}>
      <h1 className="Font_52_120">UI kit components</h1>
    </StyledUIKit>
  );
};

const StyledUIKit = styled.section``;

export { UIKit };
