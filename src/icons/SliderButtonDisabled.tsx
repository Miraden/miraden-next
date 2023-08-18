import { FC, SVGAttributes } from 'react'

const SliderButtonDisabled: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="40"
      height="40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" rx="20" fill="#F1F7FF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.78 25.03a.75.75 0 0 0 0-1.06L17.81 20l3.97-3.97a.75.75 0 0 0-1.06-1.06l-4.147 4.146a1.25 1.25 0 0 0 0 1.768l4.147 4.146a.75.75 0 0 0 1.06 0Z"
        fill="#B8C6E3"
      />
    </svg>
  )
}

export { SliderButtonDisabled }
