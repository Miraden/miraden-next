import { FC, SVGAttributes } from 'react'

const MessagesIcon: FC<SVGAttributes<SVGElement>> = props => {
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
        d="M2.25 9a6.75 6.75 0 1 1 3.482 5.908 1.544 1.544 0 0 0-1.262-.113l-1.892.668a.15.15 0 0 1-.192-.191l.697-1.97a1.544 1.544 0 0 0-.09-1.22A6.718 6.718 0 0 1 2.25 9ZM9 .75a8.25 8.25 0 0 0-7.341 12.018.082.082 0 0 1 .01.034l-.697 1.97c-.462 1.308.798 2.568 2.106 2.106l1.89-.669h.006c.007.001.018.004.031.01A8.25 8.25 0 1 0 9 .75ZM6.225 9.037a.938.938 0 1 1-1.875 0 .938.938 0 0 1 1.875 0Zm3.75 0a.938.938 0 1 1-1.875 0 .938.938 0 0 1 1.875 0Zm2.813.938a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875Z"
        fill="#fff"
      />
    </svg>
  )
}

export { MessagesIcon }
