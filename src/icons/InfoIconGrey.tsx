import { FC, SVGAttributes } from 'react'

const InfoIconGrey: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 9a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Z"
        stroke="#B8C6E3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="13" r="1" fill="#B8C6E3" />
      <path
        d="M7 7.5V7a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v.121c0 .563-.223 1.102-.621 1.5L9 10"
        stroke="#B8C6E3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { InfoIconGrey }
