import { FC, SVGAttributes } from "react";

const RemaxLogo: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="80"
      height="80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_5649_54200)">
        <path d="M11.2207 37.3919V37.2747C11.2207 35.7508 10.7894 34.4615 9.92689 33.5823C8.95654 32.586 7.50105 32.0585 5.77591 32.0585H0.0078125V47.9412H3.29631V42.7838H5.1831L7.98625 47.9412H11.7059L8.47137 42.0805C9.71126 41.4358 11.2207 40.1465 11.2207 37.3919ZM7.93219 37.4505C7.93219 38.9157 7.01575 39.7947 5.50637 39.7947H3.29609V35.1647H5.50637C7.06971 35.1647 7.93219 35.9266 7.93219 37.4505ZM57.4206 32L51.9218 47.9415H55.2103L56.3424 44.5422H61.4636L62.5957 47.9415H65.992L60.4932 32H57.4206ZM60.4396 41.5531H57.3128L58.8762 36.6887L60.4396 41.5531ZM75.5338 39.8535L79.9004 32.1172H76.2885L73.7009 37.1575L71.1673 32.1172H67.3937L71.7064 39.9122L67.1781 48H70.7899L73.5393 42.6666L76.2887 48H80.0084L75.5338 39.8535ZM17.9587 44.8937V41.4944H23.8347V38.4469H17.9587V35.1647H24.5894V32.0585H14.7241V47.9413H20.8696L22.3791 44.8937H17.9587ZM45.9903 32.0585L42.7018 37.2159L39.3596 32.0585H39.3056L35.9633 38.9743V47.9413H39.1438V38.0951L42.5938 42.9595V43.0181H42.7556L46.2597 38.095V47.9412H49.4402V32.0584L45.9903 32.0585Z" fill="#3B4A69"/>
        <path d="M31.9276 32.0566L24.2188 47.9392H28.2079L35.9167 32.0566H31.9276Z" fill="#3B4A69"/>
      </g>
      <defs>
        <clipPath id="clip0_5649_54200">
          <rect width="80" height="80" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export { RemaxLogo };
