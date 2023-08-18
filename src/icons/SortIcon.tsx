import { FC, SVGAttributes } from 'react'

const SortIcon: FC<SVGAttributes<SVGElement>> = props => {
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
        d="M13.06 3.75a1.5 1.5 0 0 0-2.12 0L9.22 5.47a.75.75 0 0 0 1.06 1.06l.97-.97v7.94a.75.75 0 0 0 1.5 0V5.56l.97.97a.75.75 0 1 0 1.06-1.06l-1.72-1.72Zm-7.81.75a.75.75 0 0 0-.75.75v7.94l-.97-.97a.75.75 0 0 0-1.06 1.06L4.19 15a1.5 1.5 0 0 0 2.12 0l1.72-1.72a.75.75 0 1 0-1.06-1.06l-.97.97V5.25a.75.75 0 0 0-.75-.75Z"
        fill="#7786A5"
      />
    </svg>
  )
}

export { SortIcon }
