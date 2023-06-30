import { FC, SVGAttributes } from "react";
import {theme} from "../../styles/tokens";

const CalendarIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="18px"
      height="18px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M 5.625,0.75 A 0.75,0.75 0 0 0 4.875,1.5 V 2.1035156 C 2.953398,2.6157783 1.5,4.2970227 1.5,6.375 v 6 c 0,2.476421 2.0236106,4.5 4.5,4.5 h 6 c 2.476414,0 4.5,-2.023586 4.5,-4.5 v -6 A 0.75,0.75 0 0 0 16.441406,6.0839844 C 16.309292,4.1412548 14.951336,2.5903814 13.125,2.1035156 V 1.5 A 0.75,0.75 0 0 0 12.375,0.75 0.75,0.75 0 0 0 11.625,1.5 V 1.875 H 6.375 V 1.5 A 0.75,0.75 0 0 0 5.625,0.75 Z m 0.75,2.625 h 5.25 V 3.75 a 0.75,0.75 0 0 0 0.75,0.75 0.75,0.75 0 0 0 0.71875,-0.6738281 C 13.902543,4.1774418 14.442517,4.765877 14.691406,5.625 H 3.3085938 C 3.5574879,4.7658786 4.0974608,4.1774431 4.90625,3.8261719 A 0.75,0.75 0 0 0 5.625,4.5 0.75,0.75 0 0 0 6.375,3.75 Z M 3,7.125 h 12 v 5.25 c 0,1.665782 -1.334218,3 -3,3 H 6 c -1.6657464,0 -3,-1.334225 -3,-3 z m 1.875,1.5 a 0.75,0.75 0 0 0 -0.75,0.75 0.75,0.75 0 0 0 0.75,0.75 h 0.75 a 0.75,0.75 0 0 0 0.75,-0.75 0.75,0.75 0 0 0 -0.75,-0.75 z m 3.75,0 a 0.75,0.75 0 0 0 -0.75,0.75 0.75,0.75 0 0 0 0.75,0.75 h 0.75 a 0.75,0.75 0 0 0 0.75,-0.75 0.75,0.75 0 0 0 -0.75,-0.75 z m 3.75,0 a 0.75,0.75 0 0 0 -0.75,0.75 0.75,0.75 0 0 0 0.75,0.75 h 0.75 a 0.75,0.75 0 0 0 0.75,-0.75 0.75,0.75 0 0 0 -0.75,-0.75 z m -7.5,3 a 0.75,0.75 0 0 0 -0.75,0.75 0.75,0.75 0 0 0 0.75,0.75 h 0.75 a 0.75,0.75 0 0 0 0.75,-0.75 0.75,0.75 0 0 0 -0.75,-0.75 z m 3.75,0 a 0.75,0.75 0 0 0 -0.75,0.75 0.75,0.75 0 0 0 0.75,0.75 h 0.75 a 0.75,0.75 0 0 0 0.75,-0.75 0.75,0.75 0 0 0 -0.75,-0.75 z m 3.75,0 a 0.75,0.75 0 0 0 -0.75,0.75 0.75,0.75 0 0 0 0.75,0.75 h 0.75 a 0.75,0.75 0 0 0 0.75,-0.75 0.75,0.75 0 0 0 -0.75,-0.75 z"
        fill={theme.colors.text.black}
      />
    </svg>
  );
};

export { CalendarIcon };