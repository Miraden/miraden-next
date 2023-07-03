import { FC, SVGAttributes } from "react";
import {theme} from "../../styles/tokens";

const DangerIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="18px"
      height="18px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M 8.2871094,0.62890625 C 7.2414556,0.83803449 6.33818,1.4955502 5.8203125,2.4277344 L 1.1816406,10.779297 C 0.89854096,11.288881 0.75,11.862382 0.75,12.445313 0.75,14.33103 2.2939888,15.875 4.1796875,15.875 h 9.6406255 c 1.885655,0 3.429687,-1.54396 3.429687,-3.429687 0,-0.582942 -0.148578,-1.156452 -0.431641,-1.666016 L 12.179688,2.4277344 C 11.661781,1.4956162 10.758595,0.83803195 9.7128906,0.62890625 c -0.4707816,-0.0941588 -0.9549996,-0.0941588 -1.4257812,0 z M 8.5800781,2.0996094 c 0.2765977,-0.055321 0.5632461,-0.055321 0.8398438,0 0.6151141,0.1230139 1.1425731,0.5082602 1.4472661,1.0566406 l 4.640625,8.351563 c 0.159336,0.286834 0.242187,0.609442 0.242187,0.9375 0,1.075069 -0.854746,1.929687 -1.929687,1.929687 H 4.1796875 C 3.1046692,14.375 2.25,13.520392 2.25,12.445313 c 0,-0.328069 0.082848,-0.650686 0.2421875,-0.9375 L 7.1328125,3.15625 C 7.4374242,2.6079356 7.9650136,2.2226208 8.5800781,2.0996094 Z M 9,5 A 0.75,0.75 0 0 0 8.25,5.75 v 3 A 0.75,0.75 0 0 0 9,9.5 0.75,0.75 0 0 0 9.75,8.75 v -3 A 0.75,0.75 0 0 0 9,5 Z m 0,5.25 A 0.75,0.75 0 0 0 8.25,11 v 0.375 A 0.75,0.75 0 0 0 9,12.125 0.75,0.75 0 0 0 9.75,11.375 V 11 A 0.75,0.75 0 0 0 9,10.25 Z"
        fill={theme.colors.text.black}
      />
    </svg>
  );
};

export { DangerIcon };