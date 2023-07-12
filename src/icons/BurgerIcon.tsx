import {SVGAttributes} from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath = "M3 9.333a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 7a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1Z"
const filledPath = ""


const BurgerIcon = (props: Props) => {
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

const Burger24Icon = (props: Props) => {
  return (
    <svg
      width="24px"
      height="24px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M3 9.33398C3 8.7817 3.44772 8.33398 4 8.33398H12C12.5523 8.33398 13 8.7817 13 9.33398C13 9.88627 12.5523 10.334 12 10.334H4C3.44772 10.334 3 9.88627 3 9.33398ZM3 16.334C3 15.7817 3.44772 15.334 4 15.334H12H20C20.5523 15.334 21 15.7817 21 16.334C21 16.8863 20.5523 17.334 20 17.334H12H4C3.44772 17.334 3 16.8863 3 16.334Z" fill="white"/>
    </svg>
  )
}

export { BurgerIcon, Burger24Icon };
