import { FC, SVGAttributes } from "react";

const CrossIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width=""
      height=""
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.187 5.813a.75.75 0 0 1 0 1.06L13.06 12l5.127 5.127a.75.75 0 1 1-1.06 1.06L12 13.061l-5.127 5.126a.75.75 0 1 1-1.06-1.06L10.939 12 5.812 6.874a.75.75 0 0 1 1.061-1.061L12 10.94l5.126-5.127a.75.75 0 0 1 1.06 0Z"
        fill="#fff"
      />
    </svg>
  );
};

export { CrossIcon };
