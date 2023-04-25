import { FC, SVGAttributes } from "react";

const MinusIcon: FC<SVGAttributes<SVGElement>> = (props) => {
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
        d="M2.25 9A.75.75 0 0 1 3 8.25h12a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Z"
        fill="#2A344A"
      />
    </svg>
  );
};

export { MinusIcon };
