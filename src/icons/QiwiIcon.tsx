import { FC, SVGAttributes } from "react";

const QiwiIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="42"
      height="42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.897 25.12c.517.229.738.988.738 1.367.074.608-.074.912-.295.912-.221 0-.517-.228-.811-.76-.296-.531-.443-1.063-.296-1.366.222-.152.443-.228.664-.152ZM26.874 27.473c.295 0 .664.152 1.033.456.59.531.81 1.139.516 1.594-.148.228-.516.38-.811.38-.37 0-.738-.152-.96-.38-.59-.531-.737-1.29-.368-1.746.074-.152.295-.304.59-.304Z"
        fill="#F28A1A"
      />
      <path
        d="M19.867 33.473C12.196 33.473 6 27.095 6 19.274 6 11.454 12.196 5 19.867 5c7.67 0 13.866 6.378 13.866 14.274 0 2.658-.737 5.163-1.918 7.29-.073.075-.147.075-.147-.076-.516-3.493-2.582-5.391-5.532-5.999-.295-.076-.295-.227.074-.227.959-.076 2.212-.076 2.95.075.074-.38.074-.759.074-1.063 0-5.163-4.13-9.415-9.146-9.415-5.016 0-9.146 4.252-9.146 9.415 0 5.163 4.13 9.415 9.146 9.415h.442c-.147-.835-.22-1.67-.147-2.581 0-.608.147-.683.369-.228 1.254 2.278 3.098 4.252 6.638 5.087 2.877.684 5.753 1.443 8.925 5.467.295.38-.148.76-.443.456-3.172-2.886-6.048-3.873-8.703-3.873-3.32.076-5.311.456-7.302.456Z"
        fill="#F28A1A"
      />
    </svg>
  );
};

export { QiwiIcon };