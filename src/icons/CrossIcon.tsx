import { FC, SVGAttributes } from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath = "m 13.242188,4.0078125 a 0.75,0.75 0 0 0 -0.529297,0.21875 L 9,7.9394531 5.2871094,4.2265625 a 0.75,0.75 0 0 0 -1.0605469,0 0.75,0.75 0 0 0 0,1.0605469 L 7.9394531,9 4.2265625,12.712891 a 0.75,0.75 0 0 0 0,1.060547 0.75,0.75 0 0 0 1.0605469,0 L 9,10.060547 l 3.712891,3.712891 a 0.75,0.75 0 0 0 1.060547,0 0.75,0.75 0 0 0 0,-1.060547 L 10.060547,9 13.773438,5.2871094 a 0.75,0.75 0 0 0 0,-1.0605469 0.75,0.75 0 0 0 -0.53125,-0.21875 z"
const filledPath = ""

const CrossIcon = (props: Props) => {
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

const strokeSmallPath = "M 6.171875 5.078125 A 0.75 0.75 0 0 0 5.640625 5.2988281 A 0.75 0.75 0 0 0 5.640625 6.359375 L 7.9394531 8.65625 L 5.640625 10.955078 A 0.75 0.75 0 0 0 5.640625 12.015625 A 0.75 0.75 0 0 0 6.7011719 12.015625 L 9 9.7167969 L 11.298828 12.015625 A 0.75 0.75 0 0 0 12.359375 12.015625 A 0.75 0.75 0 0 0 12.359375 10.955078 L 10.060547 8.65625 L 12.359375 6.359375 A 0.75 0.75 0 0 0 12.359375 5.2988281 A 0.75 0.75 0 0 0 11.298828 5.2988281 L 9 7.5976562 L 6.7011719 5.2988281 A 0.75 0.75 0 0 0 6.171875 5.078125 z "
const filledSmallPath = ""

const CrossSmallIcon = (props: Props) => {
  return (
    <svg
      width="18px"
      height="18px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      {props.filled ? getSmallFilled() : getSmallStroke()}
    </svg>
  )
}

function getSmallStroke(): JSX.Element {
  return (
    <>
      <path
        d={strokeSmallPath}
        fill={theme.colors.text.black}
      />
    </>
  )
}

function getSmallFilled(): JSX.Element {
  return (
    <>
      <path
        d={filledSmallPath}
        fill={theme.colors.text.black}
      />
    </>
  )
}

export { CrossIcon, CrossSmallIcon };
