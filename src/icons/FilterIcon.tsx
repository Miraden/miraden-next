import { FC, SVGAttributes } from "react";

const FilterIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 5.25a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm12 1.5h-7.5V4.5h7.5a.75.75 0 0 1 0 1.5Zm-1.5 6a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9.75 12v1.5h-7.5a.75.75 0 0 1 0-1.5h7.5Z"
        fill="#4E6AF3"
      />
    </svg>
  );
};

export { FilterIcon };
