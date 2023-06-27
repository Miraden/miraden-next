import { FC, SVGAttributes } from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: FC<SVGAttributes<SVGElement>>
}

const strokePath = "M 2.5878906 3.5996094 A 0.89999998 0.89999998 0 0 0 1.6875 4.5 A 0.89999998 0.89999998 0 0 0 2.5878906 5.4003906 L 2.6621094 5.4003906 A 0.89999998 0.89999998 0 0 0 3.5625 4.5 A 0.89999998 0.89999998 0 0 0 2.6621094 3.5996094 L 2.5878906 3.5996094 z M 6.75 3.75 A 0.75 0.75 0 0 0 6 4.5 A 0.75 0.75 0 0 0 6.75 5.25 L 15.75 5.25 A 0.75 0.75 0 0 0 16.5 4.5 A 0.75 0.75 0 0 0 15.75 3.75 L 6.75 3.75 z M 2.5878906 8.0996094 A 0.89999998 0.89999998 0 0 0 1.6875 9 A 0.89999998 0.89999998 0 0 0 2.5878906 9.9003906 L 2.6621094 9.9003906 A 0.89999998 0.89999998 0 0 0 3.5625 9 A 0.89999998 0.89999998 0 0 0 2.6621094 8.0996094 L 2.5878906 8.0996094 z M 6.75 8.25 A 0.75 0.75 0 0 0 6 9 A 0.75 0.75 0 0 0 6.75 9.75 L 15.75 9.75 A 0.75 0.75 0 0 0 16.5 9 A 0.75 0.75 0 0 0 15.75 8.25 L 6.75 8.25 z M 2.5878906 12.599609 A 0.89999998 0.89999998 0 0 0 1.6875 13.5 A 0.89999998 0.89999998 0 0 0 2.5878906 14.400391 L 2.6621094 14.400391 A 0.89999998 0.89999998 0 0 0 3.5625 13.5 A 0.89999998 0.89999998 0 0 0 2.6621094 12.599609 L 2.5878906 12.599609 z M 6.75 12.75 A 0.75 0.75 0 0 0 6 13.5 A 0.75 0.75 0 0 0 6.75 14.25 L 15.75 14.25 A 0.75 0.75 0 0 0 16.5 13.5 A 0.75 0.75 0 0 0 15.75 12.75 L 6.75 12.75 z "
const filledPath = ""

const ListIcon = (props: Props) => {
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

export { ListIcon };
