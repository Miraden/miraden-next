import { FC, SVGAttributes } from "react";

const BuildYearIcon: FC<SVGAttributes<SVGElement>> = (props) => {
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
        d="M5.61.822a.75.75 0 0 0-.977.317L1.749 6.4A1.25 1.25 0 0 0 2.75 8.247V16.5a.75.75 0 0 0 1.5 0v-1.25h3v1.25a.75.75 0 0 0 1.5 0V8.25h4.5V12a.75.75 0 0 0 1.5 0V8.25h1.02c1.334 0 1.74-1.81.533-2.38L5.611.822ZM14 6.75h.655L7.26 3.26l2.158 3.49H14Zm-6.75 1.5h-3v2h3v-2ZM3.5 6.75h4.155L5.329 2.989 3.267 6.75H3.5Zm3.75 7h-3v-2h3v2Z"
        fill="#7786A5"
      />
    </svg>
  );
};

export { BuildYearIcon };
