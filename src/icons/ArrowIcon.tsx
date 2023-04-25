import { FC, SVGAttributes } from "react";

const ArrowIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m4.5 10.25 4.146-4.146a.5.5 0 0 1 .708 0L13.5 10.25"
        stroke="#2A344A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { ArrowIcon };
