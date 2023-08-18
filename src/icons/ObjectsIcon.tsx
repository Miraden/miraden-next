import { FC, SVGAttributes } from 'react'

const ObjectsIcon: FC<SVGAttributes<SVGElement>> = props => {
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
        d="M10.394 3.181a2.25 2.25 0 0 0-2.788 0L3.48 6.438a2.25 2.25 0 0 0-.856 1.766v4.921a2.25 2.25 0 0 0 2.25 2.25H6v-2.25a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v2.25h1.125a2.25 2.25 0 0 0 2.25-2.25V8.204a2.25 2.25 0 0 0-.856-1.766L10.394 3.18ZM6.676 2.004a3.75 3.75 0 0 1 4.648 0l4.125 3.257a3.75 3.75 0 0 1 1.426 2.943v4.921a3.75 3.75 0 0 1-3.75 3.75H12a1.5 1.5 0 0 1-1.5-1.5v-2.25a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v2.25a1.5 1.5 0 0 1-1.5 1.5H4.875a3.75 3.75 0 0 1-3.75-3.75V8.204A3.75 3.75 0 0 1 2.551 5.26l4.125-3.257Z"
        fill="#fff"
      />
    </svg>
  )
}

export { ObjectsIcon }
