import { FC, SVGAttributes } from "react";

const MapIcon: FC<SVGAttributes<SVGElement>> = (props) => {
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
        d="M16.189 2.392A.75.75 0 0 1 16.5 3v10.5a.75.75 0 0 1-.513.711l-4.5 1.5a.75.75 0 0 1-.474 0l-4.263-1.42-4.263 1.42A.75.75 0 0 1 1.5 15V4.5a.75.75 0 0 1 .513-.712l4.5-1.5a.75.75 0 0 1 .474 0L11.25 3.71l4.263-1.42a.75.75 0 0 1 .676.103ZM10.5 5.04l-3-1v8.918l3 1V5.041Zm1.5 8.918 3-1V4.041l-3 1v8.918Zm-6-1V4.041l-3 1v8.918l3-1Z"
        fill="#7786A5"
      />
    </svg>
  );
};

export { MapIcon };
