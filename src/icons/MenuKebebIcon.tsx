import { FC, SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: FC<SVGAttributes<SVGElement>>
}

const strokePath =
  'M 9 4 C 8.4477206 4 8 4.4477206 8 5 C 8 5.5522794 8.4477206 6 9 6 C 9.5522794 6 10 5.5522794 10 5 C 10 4.4477206 9.5522794 4 9 4 z M 9 8 C 8.4477206 8 8 8.4477206 8 9 C 8 9.5522794 8.4477206 10 9 10 C 9.5522794 10 10 9.5522794 10 9 C 10 8.4477206 9.5522794 8 9 8 z M 9 12 C 8.4477106 12 8 12.447701 8 13 C 8 13.552299 8.4477106 14 9 14 C 9.5522794 14 10 13.552299 10 13 C 10 12.447701 9.5522794 12 9 12 z '
const filledPath = ''

const MenuKebebIcon = (props: Props) => {
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

export { MenuKebebIcon }
