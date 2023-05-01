import { FC, SVGAttributes } from "react";

const BurgerIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 9.333a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 7a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1Z"
        fill="#fff"
      />
    </svg>
  );
};

export { BurgerIcon };
