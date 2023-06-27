import { FC, SVGAttributes } from "react";
import {theme} from "../../styles/tokens";

const BuildingIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M 4.6113281 0.82226562 L 4.2910156 1.5 L 4.2890625 1.5 L 3.6328125 1.1386719 L 0.74804688 6.3984375 C 0.32307129 7.1734081 0.88694062 8.1750877 1.75 8.2441406 L 1.75 11 L 1.75 16.5 A 0.75 0.75 0 0 0 2.5 17.25 A 0.75 0.75 0 0 0 3.25 16.5 L 3.25 15.25 L 6.25 15.25 L 6.25 16.5 A 0.75 0.75 0 0 0 7 17.25 A 0.75 0.75 0 0 0 7.75 16.5 L 7.75 14.5 L 7.75 11 L 7.75 8.25 L 8 8.25 L 12.25 8.25 L 12.25 9.75 L 12.25 12 A 0.75 0.75 0 0 0 13 12.75 A 0.75 0.75 0 0 0 13.75 12 L 13.75 9.75 L 13.75 8.25 L 14.769531 8.25 C 15.375645 8.25 15.876916 7.7788142 15.990234 7.2734375 C 16.103553 6.7680608 15.850857 6.1278834 15.302734 5.8691406 L 4.6113281 0.82226562 z M 4.328125 2.9882812 L 6.6542969 6.75 L 2.5 6.75 L 2.2675781 6.75 L 4.328125 2.9882812 z M 6.2597656 3.2578125 L 13.652344 6.75 L 13 6.75 L 8.4179688 6.75 L 6.2597656 3.2578125 z M 3.25 8.25 L 6.25 8.25 L 6.25 10.25 L 3.25 10.25 L 3.25 8.25 z M 3.25 11.75 L 6.25 11.75 L 6.25 13.75 L 3.25 13.75 L 3.25 11.75 z "
        fill={theme.colors.text.black}
      />
    </svg>
  );
};

export { BuildingIcon };
