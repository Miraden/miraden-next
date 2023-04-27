import { FC, SVGAttributes } from "react";

const CrossIcon: FC<SVGAttributes<SVGElement>> = (props) => {
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
        d="M13.773 4.227a.75.75 0 0 1 0 1.061l-3.712 3.713 3.712 3.712a.75.75 0 1 1-1.06 1.06L9 10.062l-3.712 3.712a.75.75 0 0 1-1.06-1.06L7.938 9 4.227 5.288a.75.75 0 0 1 1.06-1.06L9 7.94l3.712-3.713a.75.75 0 0 1 1.061 0Z"
        fill="#2A344A"
      />
    </svg>
  );
};

export { CrossIcon };
