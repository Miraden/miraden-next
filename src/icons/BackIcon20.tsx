import { FC, SVGAttributes } from 'react'

const BackIcon20: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.098 15.707a1 1 0 0 0 0-1.414L7.805 10l4.293-4.293a1 1 0 0 0-1.415-1.414L6.037 8.939a1.5 1.5 0 0 0 0 2.122l4.646 4.646a1 1 0 0 0 1.415 0Z"
        fill="#7786A5"
      />
    </svg>
  )
}

export { BackIcon20 }
