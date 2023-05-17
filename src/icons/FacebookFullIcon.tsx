import { FC, SVGAttributes } from "react";

const FacebookFullIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="20" height="20" rx="10" fill="#0B84EE" />
      <path
        d="M10.829 10.182h1.86l.293-1.902h-2.154V7.24c0-.79.257-1.49.992-1.49H13V4.09c-.207-.028-.646-.09-1.475-.09-1.73 0-2.746.92-2.746 3.015V8.28H7v1.902h1.78v5.229c.352.053.709.089 1.075.089.331 0 .654-.03.973-.074v-5.244Z"
        fill="#fff"
      />
    </svg>
  );
};

export { FacebookFullIcon };
