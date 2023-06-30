import { FC, SVGAttributes } from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath = "M 8.25 1.5 C 4.5309677 1.5 1.5 4.5309677 1.5 8.25 C 1.5 11.969023 4.5309662 15 8.25 15 C 9.7464377 15 11.060635 14.41476 12.181641 13.585938 L 15.59375 16.998047 A 0.75 0.75 0 0 0 16.65625 16.998047 A 0.75 0.75 0 0 0 16.65625 15.9375 L 13.308594 12.589844 C 14.322681 11.408433 15 9.9236019 15 8.25 C 15 4.5309662 11.969023 1.5 8.25 1.5 z M 8.25 3 C 11.158363 3 13.5 5.341627 13.5 8.25 C 13.5 11.158362 11.158362 13.5 8.25 13.5 C 5.341627 13.5 3 11.158363 3 8.25 C 3 5.3416255 5.3416255 3 8.25 3 z "
const filledPath = ""

const SearchIcon = (props: Props) => {
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

export { SearchIcon };
