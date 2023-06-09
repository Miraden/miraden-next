import { FC, SVGAttributes } from "react";

const WhatsappIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="0"
      height="0"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="42" height="42" rx="21" fill="#48C95F" />
      <path
        d="M29.323 12.666a10.95 10.95 0 0 0-7.76-3.216c-6.07 0-10.986 4.9-10.986 10.949 0 1.914.538 3.828 1.46 5.436L10.5 31.5l5.839-1.531a11.233 11.233 0 0 0 5.224 1.301c6.07 0 10.987-4.9 10.987-10.948-.077-2.833-1.152-5.589-3.227-7.656Zm-2.458 11.637c-.23.613-1.306 1.225-1.844 1.302a4.31 4.31 0 0 1-1.69-.077c-.385-.153-.922-.306-1.537-.612-2.766-1.149-4.533-3.905-4.687-4.135-.153-.153-1.152-1.454-1.152-2.832 0-1.379.691-1.991.922-2.297.23-.306.538-.306.768-.306h.538c.154 0 .384-.077.615.459.23.536.768 1.914.845 1.99a.487.487 0 0 1 0 .46 1.603 1.603 0 0 1-.308.46c-.153.152-.307.382-.384.459-.153.153-.307.306-.153.536.153.306.691 1.148 1.536 1.914 1.076.918 1.92 1.225 2.228 1.378.307.153.461.076.615-.077.154-.153.691-.765.845-1.072.154-.306.384-.23.615-.153.23.077 1.613.766 1.843.919.308.153.462.23.538.306.077.23.077.766-.153 1.378Z"
        fill="#fff"
      />
    </svg>
  );
};

export { WhatsappIcon };
