import { FC, SVGAttributes } from "react";

const ListItemsIcon: FC<SVGAttributes<SVGElement>> = (props) => {
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
        d="M2.587 3.6a.9.9 0 1 0 0 1.8h.075a.9.9 0 1 0 0-1.8h-.075Zm0 4.5a.9.9 0 1 0 0 1.8h.075a.9.9 0 1 0 0-1.8h-.075Zm-.9 5.4a.9.9 0 0 1 .9-.9h.075a.9.9 0 0 1 0 1.8h-.075a.9.9 0 0 1-.9-.9ZM6.75 3.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Zm0 4.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Zm0 4.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
        fill="#fff"
      />
    </svg>
  );
};

export { ListItemsIcon };
