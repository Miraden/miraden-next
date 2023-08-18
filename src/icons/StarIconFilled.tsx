import { FC, SVGAttributes } from 'react'

const StarIconFilled: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m9.564 2.225 1.829 3.685c.09.186.267.315.471.346l4.094.593c.166.022.316.11.417.243a.611.611 0 0 1-.067.817l-2.965 2.88a.598.598 0 0 0-.179.55l.715 4.06a.623.623 0 0 1-.514.706.675.675 0 0 1-.408-.064l-3.65-1.913a.61.61 0 0 0-.586 0l-3.675 1.927a.639.639 0 0 1-.846-.26.63.63 0 0 1-.064-.396l.715-4.06a.622.622 0 0 0-.179-.55L1.683 7.91a.624.624 0 0 1-.001-.883l.001-.001c.1-.09.224-.152.357-.176l4.094-.593a.644.644 0 0 0 .472-.346l1.829-3.685a.625.625 0 0 1 .843-.283c.123.062.223.16.286.283Z"
        fill="#4E6AF3"
      />
    </svg>
  )
}

export { StarIconFilled }
