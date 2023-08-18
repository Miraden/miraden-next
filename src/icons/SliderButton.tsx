import { FC, SVGAttributes } from 'react'

const SliderButton: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="40"
      height="40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="40"
        height="40"
        rx="20"
        transform="matrix(-1 0 0 1 40 0)"
        fill="#F1F7FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.22 25.03a.75.75 0 0 1 0-1.06L22.19 20l-3.97-3.97a.75.75 0 0 1 1.06-1.06l4.147 4.146a1.25 1.25 0 0 1 0 1.768L19.28 25.03a.75.75 0 0 1-1.06 0Z"
        fill="#2A344A"
      />
    </svg>
  )
}

export { SliderButton }
