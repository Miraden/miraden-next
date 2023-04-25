import { FC, SVGAttributes } from "react";

const KebabIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM9 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM9 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
        fill="#2A344A"
      />
    </svg>
  );
};

export { KebabIcon };
