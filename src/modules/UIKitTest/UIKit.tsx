import cn from "classnames";
import Link from "next/link";
import styled from "styled-components";

interface UIKitProps {
  className?: string;
}

const UIKit = ({ className }: UIKitProps) => {
  return (
    <StyledUIKit className={cn(className, "Container")}>
      <h1 className="Font_52_120">UI kit components</h1>
      <div className="UIKit__buttons">
        <Link type="button" href="/ui-kit/buttons">
          Buttons
        </Link>
        <Link type="button" href="/ui-kit/icons">
          Icons
        </Link>
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
    display: flex;
    flex-direction: column;

    a {
      background-color: #d4d8e1;
      margin-top: 20px;
      width: fit-content;
    }
  }
`;

export { UIKit };