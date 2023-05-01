import { FC, SVGAttributes } from "react";

const FacebookIconFooter: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="40"
      height="40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" rx="10" fill="#F1F7FF" />
      <rect x="5" y="5" width="30" height="30" rx="10" fill="#F1F7FF" />
      <path
        d="M21.243 20.274h2.791l.439-2.854h-3.23v-1.559c0-1.185.384-2.236 1.486-2.236H24.5v-2.49c-.311-.043-.97-.135-2.212-.135-2.597 0-4.119 1.38-4.119 4.522v1.898H15.5v2.854h2.669v7.842c.529.08 1.064.134 1.614.134.496 0 .981-.046 1.46-.11v-7.866Z"
        fill="#7786A5"
      />
    </svg>
  );
};

export { FacebookIconFooter };
