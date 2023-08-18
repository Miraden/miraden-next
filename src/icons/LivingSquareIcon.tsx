import { FC, SVGAttributes } from 'react'

const LivingSquareIcon: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="0"
      height="0"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.52 3.234a2.25 2.25 0 0 0-2.79 0L2.607 6.491a2.25 2.25 0 0 0-.856 1.766v4.92A2.25 2.25 0 0 0 4 15.428h1.125v-2.25a2.25 2.25 0 0 1 2.25-2.25H9.33a.75.75 0 0 1 0 1.5H7.375a.75.75 0 0 0-.75.75v2.25a1.5 1.5 0 0 1-1.5 1.5H4a3.75 3.75 0 0 1-3.75-3.75v-4.92a3.75 3.75 0 0 1 1.426-2.944l4.125-3.256a3.75 3.75 0 0 1 4.648 0l4.125 3.256a.75.75 0 1 1-.93 1.178L9.52 3.234ZM13.85 9a.75.75 0 0 1 .75-.75h1.88c.701 0 1.27.569 1.27 1.27v1.88a.75.75 0 0 1-1.5 0v-.59l-1.51 1.51a1.025 1.025 0 0 1-.01.01l-3.92 3.92h.59a.75.75 0 0 1 0 1.5H9.52a1.27 1.27 0 0 1-1.27-1.27V14.6a.75.75 0 0 1 1.5 0v.59l3.51-3.51.01-.01 1.92-1.92h-.59a.75.75 0 0 1-.75-.75Z"
        fill="#7786A5"
      />
    </svg>
  )
}

export { LivingSquareIcon }
