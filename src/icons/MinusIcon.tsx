import { FC, SVGAttributes } from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: FC<SVGAttributes<SVGElement>>
}

const strokePath = "M 3,8.25 A 0.75,0.75 0 0 0 2.25,9 0.75,0.75 0 0 0 3,9.75 H 15 A 0.75,0.75 0 0 0 15.75,9 0.75,0.75 0 0 0 15,8.25 Z"
const filledPath = ""

const MinusIcon = (props: Props) => {
  return (
    <svg
      width="18px"
      height="18px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      {props.filled ? getFilled() : getStroke()}
    </svg>
  );
};

function getStroke(): JSX.Element {
  return (
    <>
      <path
        d={strokePath}
        fill={theme.colors.text.black}
      />
    </>
  )
}

function getFilled(): JSX.Element {
  return (
    <>
      <path
        d={filledPath}
        fill={theme.colors.text.black}
      />
    </>
  )
}

export { MinusIcon };
