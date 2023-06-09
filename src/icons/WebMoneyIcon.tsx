import { FC, SVGAttributes } from "react";

const WebMoneyIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="42"
      height="42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.937 5c2.581 0 5.025.585 7.202 1.624.342.158.683.331 1.025.523l-1.513 1.318-2.273-2.288-3.837 3.331-2.28-2.42-7.147 6.27 4.582 4.916-1.8 1.542 4.513 4.923-1.79 1.538 6.449 6.988 3.828-3.431 3.31 3.677c-.658.498-1.375.966-2.165 1.4A16.656 16.656 0 0 1 20.937 37C11.884 37 4.5 29.812 4.5 21c0-8.813 7.384-16 16.437-16Z"
        fill="#0068A3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m17.943 19.987 3.909-3.426 3.52 3.805-3.909 3.425-3.52-3.804ZM20.722 26.564l3.91-3.425 3.52 3.804-3.91 3.426-3.52-3.805ZM15.141 13.495l3.909-3.425 3.519 3.805-3.91 3.425-3.518-3.805ZM22.317 11.645l2.932-2.569 2.639 2.854-2.932 2.57-2.639-2.855ZM27.526 23.413l2.932-2.57 2.64 2.855-2.932 2.569-2.64-2.854ZM30.104 29.183l2.93-2.57 2.64 2.854-2.931 2.569-2.64-2.853ZM31.284 15.973l1.955-1.713 1.76 1.902-1.954 1.713-1.76-1.902ZM28.789 10.316l1.954-1.712 1.76 1.902-1.955 1.712-1.76-1.902ZM33.782 21.619l1.954-1.713 1.76 1.902-1.955 1.713-1.76-1.902ZM25.017 17.384l2.931-2.57 2.64 2.854-2.93 2.569-2.64-2.853Z"
        fill="#0068A3"
      />
    </svg>
  );
};

export { WebMoneyIcon };
