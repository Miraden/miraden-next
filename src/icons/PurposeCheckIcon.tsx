import { FC, SVGAttributes } from 'react'

const PurposeCheckIcon: FC<SVGAttributes<SVGElement>> = props => {
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
        d="M.75 9a8.25 8.25 0 1 1 16.5 0A8.25 8.25 0 0 1 .75 9ZM9 2.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Zm3.28 4.47a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L6.345 9.405a.75.75 0 0 1 1.06-1.06L8.5 9.439l2.72-2.72a.75.75 0 0 1 1.06 0Z"
        fill="#7786A5"
      />
    </svg>
  )
}

export { PurposeCheckIcon }
