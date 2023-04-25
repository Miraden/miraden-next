import { FC, SVGAttributes } from "react";

const PlusIcon: FC<SVGAttributes<SVGElement>> = (props) => {
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
        d="M9 4.25a.75.75 0 0 1 .75.75v3.25H13a.75.75 0 0 1 0 1.5H9.75V13a.75.75 0 0 1-1.5 0V9.75H5a.75.75 0 0 1 0-1.5h3.25V5A.75.75 0 0 1 9 4.25Z"
        fill="#2A344A"
      />
    </svg>
  );
};

export { PlusIcon };
