import { FC, SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: FC<SVGAttributes<SVGElement>>
}

const strokePath =
  'M 9,4.25 A 0.75,0.75 0 0 0 8.25,5 V 8.25 H 5 A 0.75,0.75 0 0 0 4.25,9 0.75,0.75 0 0 0 5,9.75 H 8.25 V 13 A 0.75,0.75 0 0 0 9,13.75 0.75,0.75 0 0 0 9.75,13 V 9.75 H 13 A 0.75,0.75 0 0 0 13.75,9 0.75,0.75 0 0 0 13,8.25 H 9.75 V 5 A 0.75,0.75 0 0 0 9,4.25 Z'
const filledPath = ''

const PlusSmallIcon = (props: Props) => {
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

export { PlusSmallIcon }
