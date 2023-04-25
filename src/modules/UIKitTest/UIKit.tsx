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
      <div className="UIKit__buttons">
        <Button type="button" href="/ui-kit/buttons">
          Buttons
        </Button>
      </div>

      {/* <div>
        <Checkbox />
        <Checkbox error />
        <Checkbox disabled />
      </div> */}
    </StyledUIKit>
  );
};

const StyledUIKit = styled.section`
  .UIKit__buttons {
    width: fit-content;
  }
`;

export { UIKit };
