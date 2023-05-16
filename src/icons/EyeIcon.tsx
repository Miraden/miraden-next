import { FC, SVGAttributes } from "react";

const EyeIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 5.75a6.764 6.764 0 0 0-5.942 3.521.476.476 0 0 0 0 .457A6.764 6.764 0 0 0 9 13.25a6.764 6.764 0 0 0 5.941-3.521.476.476 0 0 0 0-.457A6.764 6.764 0 0 0 9 5.75ZM1.742 8.552A8.264 8.264 0 0 1 9 4.25a8.264 8.264 0 0 1 7.258 4.302 1.976 1.976 0 0 1 0 1.896A8.264 8.264 0 0 1 9 14.75a8.264 8.264 0 0 1-7.258-4.302 1.976 1.976 0 0 1 0-1.896ZM9 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM6 9.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
        fill="#7786A5"
      />
    </svg>
  );
};

export { EyeIcon };
