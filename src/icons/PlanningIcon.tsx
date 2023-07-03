import {FC, SVGAttributes} from "react";
import {theme} from "../../styles/tokens";

const PlanningIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={theme.colors.text.black}
        d="m 5.25,1.25 c -2.4223522,0 -4.5,1.7373855 -4.5,4 v 2.25 4.25 c 0,2.262592 2.0776406,4 4.5,4 H 6 7.7734375 l 2.8105465,1.875 A 0.75,0.75 0 0 0 11.625,17.416016 0.75,0.75 0 0 0 11.416016,16.375 l -3.0000004,-2 A 0.750075,0.750075 0 0 0 8,14.25 H 6.75 V 12.5 A 0.75,0.75 0 0 0 6,11.75 0.75,0.75 0 0 0 5.25,12.5 v 1.75 c -1.7197764,0 -3,-1.172796 -3,-2.5 v -3.5 h 3 v 1.5 A 0.75,0.75 0 0 0 6,10.5 0.75,0.75 0 0 0 6.75,9.75 V 8.25 H 10 A 0.75,0.75 0 0 0 10.75,7.5 0.75,0.75 0 0 0 10,6.75 h -4 -0.75 -3 v -1.5 c 0,-1.3272419 1.2802163,-2.5 3,-2.5 h 7.5 c 1.719819,0 3,1.1727497 3,2.5 v 1.5 h -2 A 0.75,0.75 0 0 0 13,7.5 0.75,0.75 0 0 0 13.75,8.25 h 2 v 3.5 c 0,1.327212 -1.280188,2.5 -3,2.5 A 0.75,0.75 0 0 0 12,15 a 0.75,0.75 0 0 0 0.75,0.75 c 2.422384,0 4.5,-1.737416 4.5,-4 V 7.5 5.25 c 0,-2.2626061 -2.077623,-4 -4.5,-4 z"/>
    </svg>
  )
}

export {PlanningIcon}