import { FC, SVGAttributes } from "react";

const LikeIcon: FC<SVGAttributes<SVGElement>> = (props) => {
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
        d="M5.908 2.25c1.16.007 2.27.47 3.093 1.287a4.373 4.373 0 0 1 6.21.015 4.432 4.432 0 0 1 0 6.254l-5.677 5.722a.75.75 0 0 1-1.065 0L2.792 9.806A4.433 4.433 0 0 1 5.896 2.25h.011Zm-.003 1.5a2.932 2.932 0 0 0-2.05 4.999h.001l5.145 5.186 5.145-5.186h.001a2.933 2.933 0 0 0 0-4.14l-.002-.002a2.873 2.873 0 0 0-4.092 0l-.007.006c-.154.153-.29.325-.401.512a.75.75 0 0 1-1.287 0 2.595 2.595 0 0 0-.402-.512l-.003-.003a2.925 2.925 0 0 0-2.048-.86Z"
        fill="#7786A5"
      />
    </svg>
  );
};

export { LikeIcon };
