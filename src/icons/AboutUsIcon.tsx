import { FC, SVGAttributes } from "react";

const AboutUsIcon: FC<SVGAttributes<SVGElement>> = (props) => {
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
        d="M11.25 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM9 5.25a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm-2.25 7.451c0-.328.206-.621.516-.732 2.576-.92 5.392-.92 7.968 0 .31.11.516.404.516.732v.987a.713.713 0 0 1-.814.706l-.716-.102a21 21 0 0 0-5.94 0l-.716.102a.713.713 0 0 1-.814-.706V12.7Zm8.989-2.144a13.346 13.346 0 0 0-8.978 0A2.277 2.277 0 0 0 5.25 12.7v.987a2.213 2.213 0 0 0 2.526 2.19l.716-.101a19.5 19.5 0 0 1 5.516 0l.716.102a2.213 2.213 0 0 0 2.526-2.191V12.7c0-.962-.605-1.82-1.511-2.144ZM4.487 6.248c0-.806.68-1.498 1.566-1.498a.75.75 0 0 0 0-1.5c-1.672 0-3.066 1.322-3.066 2.998 0 1.677 1.394 2.998 3.066 2.998a.75.75 0 1 0 0-1.5c-.886 0-1.566-.691-1.566-1.498Zm-.138 4.864a.75.75 0 1 0-.277-1.474c-.519.097-1.032.233-1.535.408a1.897 1.897 0 0 0-1.287 1.786v.74c0 1.147 1.036 1.981 2.142 1.828l.227-.032a.75.75 0 1 0-.206-1.486l-.227.032c-.255.035-.436-.156-.436-.343v-.74c0-.152.1-.306.278-.368.432-.15.874-.267 1.32-.35Z"
        fill="#fff"
      />
    </svg>
  );
};

export { AboutUsIcon };
