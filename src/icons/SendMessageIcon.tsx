import { FC, SVGAttributes } from "react";

const SendMessageIcon: FC<SVGAttributes<SVGElement>> = (props) => {
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
        d="M15.17 7.136c1.217.608 1.217 2.343 0 2.951L4.445 15.451c-1.277.638-2.707-.537-2.329-1.914L3.361 9.01a1.5 1.5 0 0 0 0-.795L2.115 3.686c-.378-1.377 1.052-2.552 2.33-1.914L15.17 7.136Zm-.67 1.61a.15.15 0 0 0 0-.269L3.773 3.114a.15.15 0 0 0-.211.174l1.245 4.528.012.046h1.853a.75.75 0 0 1 0 1.5H4.819l-.012.045-1.245 4.528a.15.15 0 0 0 .211.174L14.5 8.746Z"
        fill="#fff"
      />
    </svg>
  );
};

export { SendMessageIcon };
