import { FC, SVGAttributes } from "react";

const PlayIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="45" cy="45" r="45" fill="#4E6AF3" />
      <path
        d="M58.488 42.542c1.706 1.194 1.706 3.722 0 4.916L41.97 59.018c-1.988 1.39-4.72-.032-4.72-2.459V33.441c0-2.427 2.732-3.85 4.72-2.458l16.518 11.56Z"
        fill="#fff"
      />
    </svg>
  );
};

export { PlayIcon };
