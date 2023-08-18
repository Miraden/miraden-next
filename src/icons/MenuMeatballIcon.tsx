import { FC, SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: FC<SVGAttributes<SVGElement>>
}

const strokePath =
  'M 5 8 C 4.4477206 8 4 8.4477206 4 9 C 4 9.5522794 4.4477206 10 5 10 C 5.5522794 10 6 9.5522794 6 9 C 6 8.4477206 5.5522794 8 5 8 z M 9 8 C 8.4477206 8 8 8.4477206 8 9 C 8 9.5522794 8.4477206 10 9 10 C 9.5522794 10 10 9.5522794 10 9 C 10 8.4477206 9.5522794 8 9 8 z M 13 8 C 12.447701 8 12 8.4477206 12 9 C 12 9.5522794 12.447701 10 13 10 C 13.552299 10 14 9.5522794 14 9 C 14 8.4477206 13.552299 8 13 8 z '
const filledPath = ''

const MenuMeatBallIcon = (props: Props) => {
  return (
    <svg
      width="18px"
      height="18px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      {props.filled ? getFilled() : getStroke()}
    </svg>
  )
}

function getStroke(): JSX.Element {
  return (
    <>
      <path d={strokePath} fill={theme.colors.text.black} />
    </>
  )
}

function getFilled(): JSX.Element {
  return (
    <>
      <path d={filledPath} fill={theme.colors.text.black} />
    </>
  )
}

export { MenuMeatBallIcon }
