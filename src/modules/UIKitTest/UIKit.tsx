import {Link as CustomLink} from "@/components/ui";
import cn from "classnames";
import styled from "styled-components";
import UIKitHead from "@/modules/UIKitTest/UIKitHead";

interface UIKitProps {
  className?: string;
}

const UIKit = ({className}: UIKitProps) => {
  return (
    <StyledUIKit className={cn(className)}>
      <UIKitHead title={"UI KIT"} className={"Container"} backUrl={undefined}/>
      <div className="UIKit__buttons Container">
        <CustomLink href="/ui-kit/colors">Colors</CustomLink>
        <CustomLink href="/ui-kit/buttons">
          Buttons
        </CustomLink>
        <CustomLink href="/ui-kit/icons">
          Icons
        </CustomLink>
        <CustomLink href="/ui-kit/stickers">
          Stickers
        </CustomLink>
        <CustomLink href="/ui-kit/checkboxes">
          Select Controls
        </CustomLink>
        <CustomLink href="/ui-kit/links">
          Links
        </CustomLink>
        <CustomLink href="/ui-kit/fields">
          Fields
        </CustomLink>
        <CustomLink href="/ui-kit/notifications">
          Notifications
        </CustomLink>
        <CustomLink href="/ui-kit/tooltip">
          Tooltips
        </CustomLink>
        <CustomLink href="/ui-kit/dropzone">
          Dropzone
        </CustomLink>
        <CustomLink href="/ui-kit/forms">
          Forms
        </CustomLink>
        <CustomLink href="/ui-kit/components">
          Components
        </CustomLink>
        <CustomLink href="/ui-kit/typography">
          Typography
        </CustomLink>
      </div>
    </StyledUIKit>
  );
};

const StyledUIKit = styled.section`
  .UIKit__buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export {UIKit};
