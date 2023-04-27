import { FC, SVGAttributes } from "react";

const PaperclipIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m18.263 11.899-6.717 6.718a4.5 4.5 0 0 1-6.364-6.364l8.132-8.132a3 3 0 0 1 4.242 4.243l-8.232 8.232a1.5 1.5 0 0 1-2.122-2.121l6.819-6.819"
        stroke="#7786A5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { PaperclipIcon };
