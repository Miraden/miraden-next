import { FC, SVGAttributes } from "react";

const ApplicationsListIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.93 1.313h.001c1.212 0 2.264.4 3.012 1.172.745.769 1.118 1.834 1.118 3.033v6.897c0 1.193-.37 2.253-1.11 3.02-.74.771-1.784 1.175-2.988 1.183H9.072l-1.98.002h-.899l-.001-.75v.75c-1.212 0-2.264-.401-3.011-1.173-.745-.769-1.119-1.833-1.119-3.032V5.518c0-1.194.371-2.253 1.11-3.02.741-.771 1.784-1.175 2.988-1.182h.254l.655-.001 1.982-.001 1.98-.001h.899l.001.75v-.75Zm.001 1.5h-.899l-1.98.001-2.885.002c-.866.005-1.498.289-1.914.721-.42.437-.69 1.097-.69 1.98v6.898c0 .889.272 1.552.695 1.989.42.433 1.058.716 1.934.716m5.74-12.307c.875 0 1.513.282 1.934.716.423.437.695 1.1.695 1.989v6.897c0 .884-.27 1.544-.69 1.98-.417.434-1.05.717-1.915.723H9.071l-1.98.002h-.899m-.57-9.225a.75.75 0 0 1 .75-.75h2.066a.75.75 0 1 1 0 1.5H6.372a.75.75 0 0 1-.75-.75Zm0 3.133a.75.75 0 0 1 .75-.75h5.415a.75.75 0 0 1 0 1.5H6.372a.75.75 0 0 1-.75-.75Zm0 3.14a.75.75 0 0 1 .75-.75h5.415a.75.75 0 0 1 0 1.5H6.372a.75.75 0 0 1-.75-.75Z"
        fill="#fff"
      />
    </svg>
  );
};

export { ApplicationsListIcon };