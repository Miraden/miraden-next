import {FC, SVGAttributes} from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath = "m 9,1.1992187 c -0.822015,-2e-7 -1.6445901,0.2681392 -2.3242188,0.8046876 L 2.5507813,5.2597656 C 1.6504351,5.9705573 1.125,7.0560212 1.125,8.203125 V 13.125 c 0,2.062218 1.6878347,3.75 3.75,3.75 H 6 c 0.8194384,0 1.5,-0.680451 1.5,-1.5 v -2.25 c 0,-0.423058 0.3269155,-0.75 0.75,-0.75 h 1.5 c 0.42304,0 0.75,0.32696 0.75,0.75 v 2.25 c 0,0.819561 0.680562,1.5 1.5,1.5 h 1.125 c 2.062203,0 3.75,-1.687797 3.75,-3.75 V 8.203125 c 0,-1.1470875 -0.525356,-2.2325641 -1.425781,-2.9433594 l -4.125,-3.2558593 C 10.644606,1.4673507 9.822015,1.199219 9,1.1992187 Z m 0,1.4960938 c 0.4919437,-3e-7 0.9842552,0.1624145 1.394531,0.4863281 l 4.125,3.2558594 C 15.060504,6.8645436 15.375,7.5139143 15.375,8.203125 V 13.125 c 0,1.251594 -0.998406,2.25 -2.25,2.25 H 12 v -2.25 c 0,-1.233758 -1.016242,-2.25 -2.25,-2.25 H 8.25 C 7.0162262,10.875 6,11.89126 6,13.125 v 2.25 H 4.875 c -1.2515314,0 -2.25,-0.998421 -2.25,-2.25 V 8.203125 C 2.625,7.5139307 2.9395363,6.8645472 3.4804688,6.4375 L 7.6054687,3.1816406 C 8.015769,2.8577198 8.5080563,2.6953128 9,2.6953125 Z"
const filledPath = "M2 9.04215C2 7.83006 2.5496 6.68335 3.49444 5.92411L6.49444 3.5134C7.95784 2.33745 10.0422 2.33745 11.5056 3.5134L14.5056 5.92411C15.4504 6.68335 16 7.83006 16 9.04215V12.6684C16 14.7845 14.2845 16.5 12.1684 16.5C11.6394 16.5 11.2105 16.0711 11.2105 15.5421V14C11.2105 12.8954 10.3151 12 9.21053 12H8.78947C7.68491 12 6.78947 12.8954 6.78947 14V15.5421C6.78947 16.0711 6.36061 16.5 5.83158 16.5C3.71546 16.5 2 14.7845 2 12.6684L2 9.04215Z"

const HomeIcon = (props: Props) => {
  return (
    <svg
      width={"18px"}
      height={"18px"}
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

export {HomeIcon};
