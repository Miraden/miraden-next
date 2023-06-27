import { FC, SVGAttributes } from "react";
import {theme} from "../../styles/tokens";

const InfoIcon: FC<SVGAttributes<SVGElement>> = (props, filled: boolean) => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 9a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Zm8.5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.75 7a1.25 1.25 0 1 1 2.5 0v.121c0 .364-.145.713-.402.97L8.47 9.47a.75.75 0 1 0 1.06 1.06l1.379-1.378a2.871 2.871 0 0 0 .841-2.03V7a2.75 2.75 0 1 0-5.5 0v.5a.75.75 0 0 0 1.5 0V7Z"
        fill="#4E6AF3"
      />
    </svg>
  );
};

export { InfoIcon };
