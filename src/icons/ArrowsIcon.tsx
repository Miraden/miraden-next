import {SVGAttributes} from "react";
import {theme} from "../../styles/tokens";

interface Props {
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
  attr?: SVGAttributes<SVGElement>
}

const ArrowsIcon = (props: Props) => {
  return (
    <svg
      width="18px"
      height="18px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      {props.bottom && getBottom()}
      {props.top && getTop()}
      {props.left && getLeft()}
      {props.right && getRight()}
    </svg>
  );
};

function getLeft(): JSX.Element {
  return (
    <>
      <path
        d="M 10.25,3.75 A 0.75,0.75 0 0 0 9.71875,3.96875 L 5.5722656,8.1152344 c -0.481872,0.481872 -0.481872,1.2876592 0,1.7695312 L 9.71875,14.03125 a 0.75,0.75 0 0 0 1.0625,0 0.75,0.75 0 0 0 0,-1.0625 L 6.8125,9 10.78125,5.03125 a 0.75,0.75 0 0 0 0,-1.0625 A 0.75,0.75 0 0 0 10.25,3.75 Z"
        fill={theme.colors.text.black}
      />
    </>
  )
}

function getRight(): JSX.Element {
  return (
    <>
      <path
        d="m 7.21875,3.96875 a 0.75,0.75 0 0 0 0,1.0625 L 11.1875,9 7.21875,12.96875 a 0.75,0.75 0 0 0 0,1.0625 0.75,0.75 0 0 0 1.0625,0 l 4.144531,-4.1464844 c 0.481942,-0.4818427 0.481942,-1.2876885 0,-1.7695312 L 8.28125,3.96875 a 0.75,0.75 0 0 0 -1.0625,0 z"
        fill={theme.colors.text.black}
      />
    </>
  )
}

function getTop(): JSX.Element {
  return (
    <>
      <path
        d="m 9,5.2109375 c -0.3214716,0 -0.6438296,0.1203921 -0.8847656,0.3613281 L 3.96875,9.71875 a 0.75,0.75 0 0 0 0,1.0625 0.75,0.75 0 0 0 1.0625,0 L 9,6.8125 l 3.96875,3.96875 a 0.75,0.75 0 0 0 1.0625,0 0.75,0.75 0 0 0 0,-1.0625 L 9.8847656,5.5722656 C 9.6438296,5.3313296 9.3214716,5.2109375 9,5.2109375 Z"
        fill={theme.colors.text.black}
      />
    </>
  )
}

function getBottom(): JSX.Element {
  return (
    <>
      <path
        d="m 3.96875,7.21875 a 0.75,0.75 0 0 0 0,1.0625 l 4.1464844,4.144531 c 0.4818427,0.481942 1.2876885,0.481942 1.7695312,0 L 14.03125,8.28125 a 0.75,0.75 0 0 0 0,-1.0625 0.75,0.75 0 0 0 -1.0625,0 L 9,11.1875 5.03125,7.21875 a 0.75,0.75 0 0 0 -1.0625,0 z"
        fill={theme.colors.text.black}
      />
    </>
  )
}

export {ArrowsIcon};
