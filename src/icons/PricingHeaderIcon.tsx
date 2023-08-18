import { FC, SVGAttributes } from 'react'

const PricingHeaderIcon: FC<SVGAttributes<SVGElement>> = props => {
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
        d="M.75 4.5A3.75 3.75 0 0 1 4.5.75H6c1.393 0 2.608.76 3.255 1.886a3.751 3.751 0 0 1 4.753.455l1.06 1.06a3.752 3.752 0 0 1 .63 4.47 3 3 0 0 1 1.552 2.629v2.25a3.75 3.75 0 0 1-3.75 3.75h-9A3.75 3.75 0 0 1 .75 13.5v-9Zm4.5 11.25H6a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 6 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v9a2.25 2.25 0 0 0 2.25 2.25h.75Zm3.75 0h4.5a2.25 2.25 0 0 0 2.25-2.25v-2.25a1.5 1.5 0 0 0-1.046-1.43l-5.067 5.067-.11-.11c-.127.352-.306.68-.527.973ZM9.75 4.5c0-.108-.005-.214-.013-.32l.029-.028a2.25 2.25 0 0 1 3.182 0l1.06 1.06a2.25 2.25 0 0 1 0 3.182L9.75 12.652V4.5Z"
        fill="#fff"
      />
    </svg>
  )
}

export { PricingHeaderIcon }
