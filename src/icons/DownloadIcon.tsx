import { FC, SVGAttributes } from "react";

const DownloadIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.53567 9.00331L8.5 9.98734L8.5 1.875C8.5 1.46079 8.83579 1.125 9.25 1.125C9.66422 1.125 10 1.46079 10 1.875L10 9.98734L10.9643 9.00331C11.2543 8.70747 11.7291 8.70266 12.0249 8.99258C12.3208 9.2825 12.3256 9.75735 12.0357 10.0532L10.316 11.808C9.72903 12.4069 8.77097 12.407 8.18401 11.808L6.46434 10.0532C6.17442 9.75735 6.17922 9.2825 6.47506 8.99258C6.7709 8.70266 7.24575 8.70747 7.53567 9.00331ZM2.25 9.75284C2.25 9.33862 1.91421 9.00284 1.5 9.00284C1.08579 9.00284 0.75 9.33862 0.75 9.75284V12.8141C0.75 14.9046 2.4147 16.6254 4.5 16.6254H13.5C15.5853 16.6254 17.25 14.9046 17.25 12.8141V9.75284C17.25 9.33862 16.9142 9.00284 16.5 9.00284C16.0858 9.00284 15.75 9.33862 15.75 9.75284L15.75 12.8141C15.75 14.1049 14.7284 15.1254 13.5 15.1254H4.5C3.27159 15.1254 2.25 14.1049 2.25 12.8141V9.75284Z"
        fill="#7786A5"
      />
    </svg>
  );
};

export { DownloadIcon };