import { FC, SVGAttributes } from 'react'

const TurkeyIcon: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="27"
      height="17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#a)">
        <path d="M27.134-1.674H-.134v20.348h27.268V-1.674Z" fill="#E30A17" />
        <path
          d="M9.523 13.588c2.51 0 4.545-2.278 4.545-5.088s-2.035-5.087-4.545-5.087S4.978 5.691 4.978 8.5c0 2.81 2.035 5.088 4.545 5.088Z"
          fill="#fff"
        />
        <path
          d="M10.66 12.569c2.007 0 3.635-1.822 3.635-4.07 0-2.247-1.628-4.068-3.636-4.068-2.007 0-3.635 1.821-3.635 4.069 0 2.247 1.628 4.069 3.635 4.069Z"
          fill="#E30A17"
        />
        <path
          d="m13.122 8.5 4.11 1.496-2.54-3.915v4.839l2.54-3.915-4.11 1.495Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="a">
          <rect width="27" height="17" rx="4" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  )
}

export { TurkeyIcon }
