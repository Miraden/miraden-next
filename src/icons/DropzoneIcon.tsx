import { FC, SVGAttributes } from 'react'

const DropzoneIcon: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="40"
      height="36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.593 20.174c-.834-3.112 1.25-6.374 4.655-7.287l12.33-3.304c3.406-.912 6.842.87 7.676 3.983l3.02 11.269c.833 3.112-1.251 6.374-4.656 7.286l-12.33 3.304c-3.406.913-6.842-.87-7.676-3.982l-3.02-11.27Z"
        fill="#E1EDFD"
      />
      <path
        d="M31.667 13.167a5.833 5.833 0 0 0-5.833-5.833H14.167a5.833 5.833 0 0 0-5.833 5.833v11.667a5.833 5.833 0 0 0 5.833 5.833h11.667a5.833 5.833 0 0 0 5.833-5.833V13.167Z"
        fill="#fff"
      />
      <path
        d="M27 14.334a2.333 2.333 0 1 1-4.666 0 2.333 2.333 0 0 1 4.666 0Z"
        fill="#fff"
      />
      <path
        d="m31.084 25.417-2.636-1.882a2.1 2.1 0 0 0-2.706.224L24.49 25.01a1.4 1.4 0 0 1-1.98 0l-5.82-5.821a2.1 2.1 0 0 0-2.83-.128l-5.526 4.605m17.5 7H14.167a5.833 5.833 0 0 1-5.833-5.833V13.167a5.833 5.833 0 0 1 5.833-5.833h11.667a5.833 5.833 0 0 1 5.833 5.833v11.667a5.833 5.833 0 0 1-5.833 5.833ZM27 14.334a2.333 2.333 0 1 1-4.666 0 2.333 2.333 0 0 1 4.666 0Z"
        stroke="#2A344A"
        strokeWidth="1.781"
        strokeLinecap="round"
      />
      <rect
        x="1.167"
        y="1.334"
        width="14.333"
        height="14.333"
        rx="7.167"
        fill="#E1EDFD"
      />
      <path
        d="M10.591 8.646H6.37m2.111 2.111V6.535"
        stroke="#4E6AF3"
        strokeWidth="1.188"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="1.167"
        y="1.334"
        width="14.333"
        height="14.333"
        rx="7.167"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  )
}

export { DropzoneIcon }
