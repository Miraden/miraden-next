import { Button } from "@/components/ui";
import cn from "classnames";
import styled from "styled-components";

interface UIKitProps {
  className?: string;
}

const UIKit = ({ className }: UIKitProps) => {
  return (
    <StyledUIKit className={cn(className, "Container")}>
      <h1 className="Font_52_120">UI kit components</h1>
      <div className="UIKit__buttonsList">
        <div>
          <Button>Button</Button>
          <Button compact>Button</Button>
        </div>
        <div>
          <Button secondary className="UIKit__buttonSecondary">
            Button
          </Button>
          <Button secondary compact>
            Button
          </Button>
        </div>
        <div>
          <Button tertiary>Button</Button>
          <Button tertiary compact>
            Button
          </Button>
        </div>
        <div>
          <Button request>Button</Button>
          <Button request compact>
            Button
          </Button>
        </div>

        <div className="Header__buttons">
          <Button header>Button</Button>
        </div>
      </div>
    </StyledUIKit>
  );
};

const StyledUIKit = styled.section`
  .UIKit__buttonsList {
    div {
      margin-top: 16px;
      width: 100%;
    }

    button {
      :not(:first-child) {
        margin-top: 16px;
      }
    }
  }

  .Header__buttons {
    background: #2a344a;
  }
`;

export { UIKit };
