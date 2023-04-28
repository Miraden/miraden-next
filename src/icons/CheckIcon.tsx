import { FC, SVGAttributes } from "react";

const CheckIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="14"
      height="14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.197 3.358a.75.75 0 0 1 0 1.061l-6.222 6.222a.75.75 0 0 1-1.06 0l-3.112-3.11a.75.75 0 1 1 1.06-1.062L5.446 9.05l5.691-5.692a.75.75 0 0 1 1.061 0Z"
        fill="#4E6AF3"
      />
    </svg>
  );
};

export { CheckIcon };
