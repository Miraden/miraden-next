import { FC, SVGAttributes } from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath = "M 6 3.3144531 C 5.6145421 3.3144531 5.2292044 3.4602389 4.9394531 3.75 L 3.21875 5.46875 A 0.75 0.75 0 0 0 3.21875 6.5292969 A 0.75 0.75 0 0 0 4.28125 6.5292969 L 5.25 5.5605469 L 5.25 13.5 A 0.75 0.75 0 0 0 6 14.25 A 0.75 0.75 0 0 0 6.75 13.5 L 6.75 5.5605469 L 7.71875 6.5292969 A 0.75 0.75 0 0 0 8.78125 6.5292969 A 0.75 0.75 0 0 0 8.78125 5.46875 L 7.0605469 3.75 C 6.7707956 3.4602389 6.3854579 3.3144531 6 3.3144531 z M 12.75 4.5 A 0.75 0.75 0 0 0 12 5.25 L 12 13.189453 L 11.03125 12.21875 A 0.75 0.75 0 0 0 9.96875 12.21875 A 0.75 0.75 0 0 0 9.96875 13.279297 L 11.689453 15 C 12.268973 15.579519 13.231098 15.57925 13.810547 15 L 15.53125 13.279297 A 0.75 0.75 0 0 0 15.53125 12.21875 A 0.75 0.75 0 0 0 14.46875 12.21875 L 13.5 13.189453 L 13.5 5.25 A 0.75 0.75 0 0 0 12.75 4.5 z "
const filledPath = ""

const SwapIcon = (props: Props) => {
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

export { SwapIcon };
