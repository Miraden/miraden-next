import { FC, SVGAttributes } from 'react'

const WalletIcon: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.75 6.75a4.5 4.5 0 0 1 4.5-4.5h7.5a4.5 4.5 0 0 1 4.5 4.5v4.5a4.5 4.5 0 0 1-4.5 4.5h-7.5a4.5 4.5 0 0 1-4.5-4.5v-4.5Zm1.5 1.125v3.375a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3V7.875H2.25Zm13.477-1.5H2.273A3 3 0 0 1 5.25 3.75h7.5a3 3 0 0 1 2.977 2.625ZM3.75 11.625a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Z"
        fill="#fff"
      />
    </svg>
  )
}

export { WalletIcon }
