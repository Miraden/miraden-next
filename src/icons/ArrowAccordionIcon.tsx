import { FC, SVGAttributes } from "react";

const ArrowAccordionIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.47 8.081a.75.75 0 0 1 1.06 0l4.47 4.47 4.47-4.47a.75.75 0 1 1 1.06 1.06l-4.646 4.647a1.25 1.25 0 0 1-1.768 0L4.47 9.142a.75.75 0 0 1 0-1.061Z"
        fill="#3B4A69"
      />
    </svg>
  );
};

export { ArrowAccordionIcon };
