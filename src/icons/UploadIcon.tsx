import { FC, SVGAttributes } from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: FC<SVGAttributes<SVGElement>>
}

const strokePath = "M 9 1.2578125 C 8.6111341 1.2578125 8.2218606 1.4050565 7.9335938 1.6992188 L 6.2148438 3.453125 A 0.75 0.75 0 0 0 6.2246094 4.5136719 A 0.75 0.75 0 0 0 7.2851562 4.5039062 L 8.25 3.5195312 L 8.25 11.632812 A 0.75 0.75 0 0 0 9 12.382812 A 0.75 0.75 0 0 0 9.75 11.632812 L 9.75 3.5195312 L 10.714844 4.5039062 A 0.75 0.75 0 0 0 11.775391 4.5136719 A 0.75 0.75 0 0 0 11.785156 3.453125 L 10.066406 1.6992188 C 9.7781397 1.4050565 9.3888659 1.2578125 9 1.2578125 z M 1.5 9.1269531 A 0.75 0.75 0 0 0 0.75 9.8769531 L 0.75 12.939453 C 0.75 15.027366 2.429538 16.75 4.5 16.75 L 13.5 16.75 C 15.5705 16.75 17.25 15.027351 17.25 12.939453 L 17.25 9.8769531 A 0.75 0.75 0 0 0 16.5 9.1269531 A 0.75 0.75 0 0 0 15.75 9.8769531 L 15.75 12.939453 C 15.75 14.232948 14.743294 15.25 13.5 15.25 L 4.5 15.25 C 3.2567686 15.25 2.25 14.232934 2.25 12.939453 L 2.25 9.8769531 A 0.75 0.75 0 0 0 1.5 9.1269531 z "
const filledPath = ""

const UploadIcon = (props: Props) => {
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

export { UploadIcon };
