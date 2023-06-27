import styled from "styled-components";
import cn from "classnames";
import {BackIcon20} from "@/icons";
import {Button} from "@/components/ui";
import {ArrowsIcon} from "@/icons/ArrowsIcon";

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
            header
            href={props.backUrl}
            className="Application__headButton"
          >
            <ArrowsIcon left attr={{className: "Application__headArrow"}}/>
          </Button>
        }
        <h1 className="Font_52_120">{props.title}</h1>
      </div>
    </StyledHead>
  )
}

const StyledHead = styled.div`
  background: ${({theme}) => theme.colors.background.black};
  color: ${({theme}) => theme.colors.text.grey};
  padding: 6px 0;
  margin-bottom: 20px;

  .Application__headArrow path {
    fill: white;
  }

  .UIKit__header {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

export default UIKitHead
