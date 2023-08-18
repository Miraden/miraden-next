import { FC, SVGAttributes } from 'react'

const FaqIcon: FC<SVGAttributes<SVGElement>> = props => {
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
        d="M.75 9a8.25 8.25 0 1 1 16.5 0A8.25 8.25 0 0 1 .75 9ZM9 2.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM10 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.75 7a1.25 1.25 0 1 1 2.5 0v.121c0 .364-.145.713-.402.97L8.47 9.47a.75.75 0 1 0 1.06 1.06l1.379-1.378a2.871 2.871 0 0 0 .841-2.03V7a2.75 2.75 0 1 0-5.5 0v.5a.75.75 0 1 0 1.5 0V7Z"
        fill="#fff"
      />
    </svg>
  )
}

export { FaqIcon }
