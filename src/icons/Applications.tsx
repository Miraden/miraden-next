import { FC, SVGAttributes } from "react";

const Applications: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.16425 2.0655L11.931 2.0625C14.019 2.0625 15.3113 3.42975 15.3113 5.51775V12.4148C15.3113 14.4923 14.0287 15.855 11.9587 15.8678L6.192 15.87C4.104 15.87 2.8125 14.5028 2.8125 12.4148V5.51775C2.8125 3.44025 4.09425 2.07825 6.16425 2.0655ZM6.37179 5.39453C6.09565 5.39453 5.87179 5.61839 5.87179 5.89453C5.87179 6.17067 6.09565 6.39453 6.37179 6.39453H8.43804C8.71418 6.39453 8.93804 6.17067 8.93804 5.89453C8.93804 5.61839 8.71418 5.39453 8.43804 5.39453H6.37179ZM6.3717 8.52738C6.09556 8.52738 5.8717 8.75124 5.8717 9.02738C5.8717 9.30353 6.09556 9.52738 6.3717 9.52738H11.7867C12.0628 9.52738 12.2867 9.30353 12.2867 9.02738C12.2867 8.75124 12.0628 8.52738 11.7867 8.52738H6.3717ZM6.3717 11.6672C6.09556 11.6672 5.8717 11.891 5.8717 12.1672C5.8717 12.4433 6.09556 12.6672 6.3717 12.6672H11.7867C12.0628 12.6672 12.2867 12.4433 12.2867 12.1672C12.2867 11.891 12.0628 11.6672 11.7867 11.6672H6.3717Z"
        fill="#4E6AF3"
      />
    </svg>
  );
};

export { Applications };
