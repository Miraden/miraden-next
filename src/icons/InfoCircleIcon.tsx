import {FC, SVGAttributes} from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: FC<SVGAttributes<SVGElement>>
}

const strokePath = "M 9,0.75 C 4.4525354,0.75 0.75,4.4525354 0.75,9 c 0,4.547428 3.7025306,8.25 8.25,8.25 4.547433,0 8.25,-3.702567 8.25,-8.25 C 17.25,4.4525306 13.547428,0.75 9,0.75 Z m 0,1.5 c 3.736763,0 6.75,3.0131977 6.75,6.75 0,3.736758 -3.013242,6.75 -6.75,6.75 C 5.2631977,15.75 2.25,12.736763 2.25,9 2.25,5.2631929 5.2631929,2.25 9,2.25 Z M 9.375,4.5 A 0.75,0.75 0 0 0 8.625,5.25 V 6 A 0.75,0.75 0 0 0 9.375,6.75 0.75,0.75 0 0 0 10.125,6 V 5.25 A 0.75,0.75 0 0 0 9.375,4.5 Z m -1.5,3 A 0.75,0.75 0 0 0 7.125,8.25 0.75,0.75 0 0 0 7.875,9 h 0.75 v 3.75 a 0.75,0.75 0 0 0 0.75,0.75 0.75,0.75 0 0 0 0.75,-0.75 V 8.25 A 0.750075,0.750075 0 0 0 9.375,7.5 Z"
const filledPath = "M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5ZM10.125 5.25C10.125 4.83579 9.78921 4.5 9.375 4.5C8.96079 4.5 8.625 4.83579 8.625 5.25V6C8.625 6.41421 8.96079 6.75 9.375 6.75C9.78921 6.75 10.125 6.41421 10.125 6V5.25ZM7.875 7.5C7.46079 7.5 7.125 7.83579 7.125 8.25C7.125 8.66421 7.46079 9 7.875 9H8.625V12.75C8.625 13.1642 8.96079 13.5 9.375 13.5C9.78921 13.5 10.125 13.1642 10.125 12.75V8.25C10.125 7.83579 9.78921 7.5 9.375 7.5H7.875Z"

const InfoCircleIcon = (props: Props) => {
  return (
    <svg
      width="18px"
      height="18px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      {props.filled && getFilled()}
      {!props.filled && getStroke()}
    </svg>
  );
};

function getStroke() {
  return (
    <>
      <path
        d={strokePath}
        fill={theme.colors.text.black}
      />
    </>
  )
}

function getFilled() {
  return (
    <>
      <path
        d={filledPath}
        fill={theme.colors.text.black}
      />
    </>
  )
}

export {InfoCircleIcon};