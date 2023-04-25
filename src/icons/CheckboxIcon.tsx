import { FC, SVGAttributes } from "react";

const CheckboxIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="12"
      height="12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.53 2.803a.75.75 0 0 1 0 1.06L5.197 9.197a.75.75 0 0 1-1.06 0L1.47 6.53a.75.75 0 0 1 1.06-1.06l2.137 2.136L9.47 2.803a.75.75 0 0 1 1.06 0Z"
        fill="#fff"
      />
    </svg>
  );
};

export { CheckboxIcon };
