import { FC, SVGAttributes } from "react";

const TelegramIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="42"
      height="42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="42" height="42" rx="21" fill="#27A6E5" />
      <path
        d="m29.4 13.232-3.156 16.474s-.441 1.143-1.654.595l-7.281-5.781-.034-.017c.984-.915 8.61-8.016 8.943-8.337.516-.499.196-.796-.403-.42l-11.265 7.41-4.347-1.515s-.683-.252-.75-.8c-.066-.549.773-.845.773-.845l17.718-7.198s1.456-.663 1.456.434Z"
        fill="#fff"
      />
    </svg>
  );
};

export { TelegramIcon };
