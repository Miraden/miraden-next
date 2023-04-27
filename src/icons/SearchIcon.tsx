import { FC, SVGAttributes } from "react";

const SearchIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 3a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM1.5 8.25a6.75 6.75 0 1 1 11.868 4.401l3.287 3.287a.75.75 0 1 1-1.06 1.06l-3.326-3.325A6.75 6.75 0 0 1 1.5 8.25Z"
        fill="#7786A5"
      />
    </svg>
  );
};

export { SearchIcon };
