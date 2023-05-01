import { FC, SVGAttributes } from "react";

const TelegramPureIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="19"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5 3.46 14.286 15.46s-.31.832-1.162.433l-5.109-4.21-.024-.013c.69-.666 6.042-5.838 6.276-6.072.362-.363.138-.58-.283-.305L6.08 10.688l-3.05-1.103s-.48-.184-.526-.583c-.047-.4.542-.615.542-.615l12.433-5.243s1.022-.482 1.022.317Z"
        fill="#fff"
      />
    </svg>
  );
};

export { TelegramPureIcon };
