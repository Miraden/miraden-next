import { FC, SVGAttributes } from "react";

const PlusIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.668 12a1 1 0 0 1 1-1h4.333V6.667a1 1 0 1 1 2 0V11h4.334a1 1 0 1 1 0 2H13v4.334a1 1 0 1 1-2 0V13H6.668a1 1 0 0 1-1-1Z"
        fill="#fff"
      />
    </svg>
  );
};

export { PlusIcon };
