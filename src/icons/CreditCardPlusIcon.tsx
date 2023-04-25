import { FC, SVGAttributes } from "react";

const CreditCardPlusIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="42"
      height="42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35.578 22.5v-5.879c0-4.209-3.311-7.621-7.395-7.621H13.394C9.311 9 6 12.412 6 16.621v9.145c0 4.21 3.31 7.621 7.394 7.621h8.662M6 17.383h29.578M36 31.21h-4.648m0 0h-4.648m4.648 0V36m0-4.79v-4.79"
        stroke="#2A344A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { CreditCardPlusIcon };
