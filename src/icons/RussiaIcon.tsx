import { FC, SVGAttributes } from 'react'

const RussiaIcon: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="27"
      height="17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#a)">
        <path d="M27.134-1.673H-.134V8.5h27.268V-1.673Z" fill="#fff" />
        <path d="M27.134 8.5H-.134v10.173h27.268V8.5Z" fill="#D52B1E" />
        <path d="M27.134 5.11H-.134v6.783h27.268V5.11Z" fill="#0039A6" />
      </g>
      <defs>
        <clipPath id="a">
          <rect width="27" height="17" rx="4" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  )
}

export { RussiaIcon }
