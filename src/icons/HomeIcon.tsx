import { FC, SVGAttributes } from "react";

const HomeIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.272 4.818a3.667 3.667 0 0 0-4.544 0L5.312 9.884a3.667 3.667 0 0 0-1.395 2.877v7.656a3.667 3.667 0 0 0 3.667 3.666h1.75a.167.167 0 0 0 .166-.166v-3.5a3.333 3.333 0 0 1 3.334-3.334h2.333a3.333 3.333 0 0 1 3.333 3.334v3.5c0 .092.075.166.167.166h1.75a3.667 3.667 0 0 0 3.667-3.666V12.76a3.667 3.667 0 0 0-1.395-2.877l-6.417-5.066Zm-5.783-1.57a5.667 5.667 0 0 1 7.023 0l6.416 5.066a5.667 5.667 0 0 1 2.156 4.447v7.656a5.667 5.667 0 0 1-5.667 5.666h-1.75a2.167 2.167 0 0 1-2.167-2.166v-3.5c0-.737-.597-1.334-1.333-1.334h-2.333c-.737 0-1.334.597-1.334 1.334v3.5c0 1.196-.97 2.166-2.166 2.166h-1.75a5.667 5.667 0 0 1-5.667-5.666V12.76c0-1.734.794-3.373 2.155-4.447l6.417-5.066Z"
        fill="#3B4A69"
      />
    </svg>
  );
};

export { HomeIcon };