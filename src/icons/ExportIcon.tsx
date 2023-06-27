import { FC, SVGAttributes } from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: FC<SVGAttributes<SVGElement>>
}

const strokePath = "M 9.25 1.25 A 0.75 0.75 0 0 0 8.5 2 L 8.5 10.113281 L 7.5351562 9.1289062 A 0.75 0.75 0 0 0 6.4746094 9.1171875 A 0.75 0.75 0 0 0 6.4648438 10.177734 L 8.1835938 11.933594 C 8.7601167 12.521926 9.7398889 12.520035 10.316406 11.931641 L 12.035156 10.177734 A 0.75 0.75 0 0 0 12.025391 9.1171875 A 0.75 0.75 0 0 0 10.964844 9.1289062 L 10 10.113281 L 10 2 A 0.75 0.75 0 0 0 9.25 1.25 z M 1.5 9.1289062 A 0.75 0.75 0 0 0 0.75 9.8789062 L 0.75 12.939453 C 0.75 15.027366 2.429538 16.75 4.5 16.75 L 13.5 16.75 C 15.5705 16.75 17.25 15.027351 17.25 12.939453 L 17.25 9.8789062 A 0.75 0.75 0 0 0 16.5 9.1289062 A 0.75 0.75 0 0 0 15.75 9.8789062 L 15.75 12.939453 C 15.75 14.232948 14.743294 15.25 13.5 15.25 L 4.5 15.25 C 3.2567686 15.25 2.25 14.232934 2.25 12.939453 L 2.25 9.8789062 A 0.75 0.75 0 0 0 1.5 9.1289062 z "
const filledPath = ""

const ExportIcon = (props: Props) => {
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

export { ExportIcon };
