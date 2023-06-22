import styled from "styled-components";
import cn from "classnames";
import {BackIcon20} from "@/icons";
import {Button} from "@/components/ui";

interface Props {
  className?: string,
  title: string,
  backUrl?: string
}

const DefaultProps: Object = {
  className: null,
  title: "",
  backUrl: "/ui-kit",
}

function UIKitHead(args: Props) {
  const props = Object.assign(DefaultProps, args)
  return (
    <StyledHead>
      <div className={cn("UIKit__header", props.className)}>
        {
          props.backUrl &&
          <Button
            tertiary
            href={props.backUrl}
            className="Application__headButton"
          >
            <BackIcon20
              width={20}
              height={20}
              className="Application__headArrow"
            />
          </Button>
        }
        <h1 className="Font_52_120">{props.title}</h1>
      </div>
    </StyledHead>
  )
}

const StyledHead = styled.div`
  background: ${({theme}) => theme.colors.background.grey};
  color: ${({theme}) => theme.colors.text.grey};
  padding: 6px 0;
  margin-bottom: 20px;

  .UIKit__header {
    display: flex;
    align-items: center;
  }
`

export default UIKitHead
