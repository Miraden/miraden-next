import {SVGAttributes} from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath = "M 9 2.25 A 0.75 0.75 0 0 0 8.25 3 L 8.25 8.25 L 3 8.25 A 0.75 0.75 0 0 0 2.25 9 A 0.75 0.75 0 0 0 3 9.75 L 8.25 9.75 L 8.25 15 A 0.75 0.75 0 0 0 9 15.75 A 0.75 0.75 0 0 0 9.75 15 L 9.75 9.75 L 15 9.75 A 0.75 0.75 0 0 0 15.75 9 A 0.75 0.75 0 0 0 15 8.25 L 9.75 8.25 L 9.75 3 A 0.75 0.75 0 0 0 9 2.25 z "
const filledPath = ""

const PlusIcon = (props: Props) => {
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

export {PlusIcon};
