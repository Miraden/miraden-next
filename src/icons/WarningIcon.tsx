import { FC, SVGAttributes } from 'react'

const WarningIcon: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.35 1.365a3.316 3.316 0 0 1 3.548 1.641l4.124 7.423a3.133 3.133 0 0 1-2.738 4.654H3.716A3.133 3.133 0 0 1 .977 10.43l4.124-7.423a3.316 3.316 0 0 1 2.249-1.64Zm1.006 1.471a1.816 1.816 0 0 0-1.943.899l-4.124 7.423a1.633 1.633 0 0 0 1.427 2.425h8.568a1.633 1.633 0 0 0 1.427-2.425L9.587 3.735a1.816 1.816 0 0 0-1.231-.899ZM8 5.25a.75.75 0 0 1 .75.75v2.667a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 8 5.25Zm0 4.667a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0v-.333a.75.75 0 0 1 .75-.75Z"
        fill="#FFD64C"
      />
    </svg>
  )
}

export { WarningIcon }
