import {FC} from "react";
import styled from "styled-components";
import cn from "classnames";
import {BackIcon20} from "@/icons";

enum Types {
  Dotted = 'dotted',
  Pages = 'pages'
}

type Props = {
  className?: string
  type?: Types
  total: number
}

const Pagination: FC<Props> = (props: Props) => {
  return (
    <StyledPagination className={cn("Pagination", props.className, "Pagination--" + props.type)}>
      {props.type === Types.Pages && (<a href={"#"} className={"Pagination__prev Pagination__button"}><BackIcon20/></a>)}
      <div className={"Pagination__nav"}>
        {[...Array(props.total)].map((x, i) =>
          <a className={"Pagination__link Pagination__button"} href={"#"} key={i}>
            {props.type === Types.Pages && i +1 }
          </a>
        )}
      </div>
      {props.type === Types.Pages && (<a href={"#"} className={"Pagination__prev Pagination__button"}><BackIcon20/></a>)}
    </StyledPagination>
  )
}

const StyledPagination = styled.div`
  display: flex;
  gap: 10px;

  .Pagination__nav {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  &.Pagination--pages {
    .Pagination__nav {
      gap: 10px;
    }

    .Pagination__button {
      width: 30px;
      height: 30px;
      background: transparent;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: ${({theme}) => theme.colors.button.secondary.bg.hover};
      }

      &:active, &.active {
        background: ${({theme}) => theme.colors.main};
        color: white;
      }

      &:focus-visible {
        outline: 2px solid ${({theme}) => theme.colors.stroke.focused};
        background: ${({theme}) => theme.colors.fields.stroke};
      }
    }
  }

  &.Pagination--dotted {
    .Pagination__nav {
      gap: 15px;
    }

    .Pagination__button {
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background: ${({theme}) => theme.colors.background.disabled};

      &:hover {
        background: ${({theme}) => theme.colors.main};
      }

      &:active, &.active {
        background: ${({theme}) => theme.colors.main};
      }

      &:focus-visible {
        outline: 2px solid ${({theme}) => theme.colors.stroke.focused};
        background: ${({theme}) => theme.colors.fields.stroke};
      }
    }
  }
`

export {Pagination, Types}
