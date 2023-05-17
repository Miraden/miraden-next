import { FC, SVGAttributes } from "react";

const BuildingIcon: FC<SVGAttributes<SVGElement>> = (props) => {
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
        d="M6.25 3c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 15 16.75H3A1.75 1.75 0 0 1 1.25 15v-3.434c0-.615.323-1.184.85-1.5l4.15-2.49V3Zm0 6.325-3.379 2.027a.25.25 0 0 0-.121.214V15c0 .138.112.25.25.25h3.25V9.325Zm1.5 5.925h1.5V14c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75v1.25H15a.25.25 0 0 0 .25-.25V3a.25.25 0 0 0-.25-.25H8a.25.25 0 0 0-.25.25v12.25Zm4.5 0V14a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25v1.25h1.5ZM9.25 5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 9.25 5Zm0 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 9.25 8Z"
        fill="#7786A5"
      />
    </svg>
  );
};

export { BuildingIcon };
