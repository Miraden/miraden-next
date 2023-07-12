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

const Cross24Icon = (props: Props) => {
  return (
    <svg
      width="24px"
      height="24px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M18.1879 5.81342C18.4808 6.10631 18.4808 6.58119 18.1879 6.87408L13.0613 12.0007L18.1878 17.1273C18.4807 17.4202 18.4807 17.895 18.1878 18.1879C17.8949 18.4808 17.42 18.4808 17.1271 18.1879L12.0006 13.0614L6.87421 18.1878C6.58132 18.4807 6.10645 18.4807 5.81355 18.1878C5.52066 17.8949 5.52066 17.42 5.81355 17.1271L10.9399 12.0007L5.81342 6.87422C5.52053 6.58133 5.52053 6.10645 5.81342 5.81356C6.10631 5.52067 6.58119 5.52067 6.87408 5.81356L12.0006 10.9401L17.1273 5.81342C17.4202 5.52053 17.895 5.52053 18.1879 5.81342Z" fill="white"/>
    </svg>
  )
}

export { CrossIcon, CrossSmallIcon, Cross24Icon };
