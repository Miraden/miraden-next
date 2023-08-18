import { FC, SVGAttributes } from 'react'

const RefusalIcon: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 16.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm-.97-9.53a.75.75 0 0 0-1.06 1.06l1.06 1.061-1.06 1.061a.75.75 0 0 0 1.06 1.06l1.061-1.06 1.06 1.06a.75.75 0 1 0 1.061-1.06l-1.06-1.06 1.06-1.061a.75.75 0 0 0-1.06-1.061l-1.06 1.06L8.03 6.97Z"
        fill="#B8C6E3"
      />
    </svg>
  )
}

export { RefusalIcon }
