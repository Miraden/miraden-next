import { FC, SVGAttributes } from "react";
import {theme} from "../../styles/tokens";

const ArchiveIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="18px"
      height="18px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M 6.5,0.75 C 3.3332519,0.75 0.75,3.3332519 0.75,6.5 v 5 c 0,3.166731 2.5832482,5.75 5.75,5.75 h 5 c 3.166735,0 5.75,-2.583265 5.75,-5.75 v -5 C 17.25,3.3332482 14.666731,0.75 11.5,0.75 H 6.75 Z m 1,1.5 h 3 V 5.7109375 L 9.2363281,5.2890625 a 0.750075,0.750075 0 0 0 -0.4726562,0 L 7.5,5.7109375 Z M 6,2.3496094 V 6.75 A 0.750075,0.750075 0 0 0 6.9863281,7.4609375 L 9,6.7910156 11.013672,7.4609375 A 0.750075,0.750075 0 0 0 12,6.75 V 2.3496094 C 14.106562,2.6060544 15.75,4.3214906 15.75,6.5 v 5 c 0,2.35606 -1.89394,4.25 -4.25,4.25 h -5 c -2.3560827,0 -4.25,-1.893937 -4.25,-4.25 v -5 C 2.25,4.3214873 3.8934232,2.606054 6,2.3496094 Z M 7.5,12 A 0.75,0.75 0 0 0 6.75,12.75 0.75,0.75 0 0 0 7.5,13.5 h 3 A 0.75,0.75 0 0 0 11.25,12.75 0.75,0.75 0 0 0 10.5,12 Z"
        fill={theme.colors.text.black}
      />
    </svg>
  );
};

export { ArchiveIcon };
