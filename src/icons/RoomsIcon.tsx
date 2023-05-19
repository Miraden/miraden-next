import { FC, SVGAttributes } from "react";

const RoomsIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width=""
      height=""
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.75 5.25c0-2.306 2.12-4 4.5-4h7.5c2.38 0 4.5 1.694 4.5 4v6.5c0 2.306-2.12 4-4.5 4a.75.75 0 0 1 0-1.5c1.761 0 3-1.216 3-2.5v-3.5h-2a.75.75 0 0 1 0-1.5h2v-1.5c0-1.284-1.239-2.5-3-2.5h-7.5c-1.761 0-3 1.216-3 2.5v1.5H10a.75.75 0 0 1 0 1.5H6.75v1.5a.75.75 0 0 1-1.5 0v-1.5h-3v3.5c0 1.284 1.239 2.5 3 2.5V12.5a.75.75 0 0 1 1.5 0v1.75H8a.75.75 0 0 1 .416.126l3 2a.75.75 0 1 1-.832 1.248L7.773 15.75H5.25c-2.38 0-4.5-1.694-4.5-4v-6.5Z"
        fill="#7786A5"
      />
    </svg>
  );
};

export { RoomsIcon };
