import { FC, SVGAttributes } from "react";

const SquareIcon: FC<SVGAttributes<SVGElement>> = (props) => {
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
        d="M.75 5.25a4.5 4.5 0 0 1 4.5-4.5h7.5a4.5 4.5 0 0 1 4.5 4.5v7.5a4.5 4.5 0 0 1-4.5 4.5h-7.5a4.5 4.5 0 0 1-4.5-4.5v-7.5Zm4.5-3a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3h-7.5ZM9.85 5a.75.75 0 0 1 .75-.75h1.88c.701 0 1.27.569 1.27 1.27V7.4a.75.75 0 0 1-1.5 0v-.59l-1.51 1.51a.398.398 0 0 1-.01.01l-3.92 3.92h.59a.75.75 0 0 1 0 1.5H5.52a1.27 1.27 0 0 1-1.27-1.27V10.6a.75.75 0 0 1 1.5 0v.59l3.51-3.51a.814.814 0 0 1 .01-.01l1.92-1.92h-.59A.75.75 0 0 1 9.85 5Z"
        fill="#7786A5"
      />
    </svg>
  );
};

export { SquareIcon };
