import { FC, SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath: string =
  'm 5.25,2.25 c -2.4763967,0 -4.5,2.0236033 -4.5,4.5 v 0.375 4.125 c 0,2.476421 2.0236106,4.5 4.5,4.5 h 7.5 c 2.476414,0 4.5,-2.023586 4.5,-4.5 V 7.125 6.75 c 0,-2.4763894 -2.023579,-4.5 -4.5,-4.5 z m 0,1.5 h 7.5 c 1.518811,0 2.638164,1.1666643 2.845703,2.625 H 2.4042969 C 2.6118408,4.9166687 3.7312219,3.75 5.25,3.75 Z m -3,4.125 h 13.5 v 3.375 c 0,1.665782 -1.334218,3 -3,3 h -7.5 c -1.6657464,0 -3,-1.334225 -3,-3 z m 2.25,3 a 0.75,0.75 0 0 0 -0.75,0.75 0.75,0.75 0 0 0 0.75,0.75 H 8.25 A 0.75,0.75 0 0 0 9,11.625 0.75,0.75 0 0 0 8.25,10.875 Z'
const filledPath: string =
  'M 5.25 2.4375 C 2.9310923 2.4375 1.0395732 4.2677623 0.94140625 6.5625 L 17.058594 6.5625 C 16.960394 4.2677623 15.068898 2.4375 12.75 2.4375 L 5.25 2.4375 z M 0.9375 7.6875 L 0.9375 11.25 C 0.9375 13.631698 2.8682724 15.5625 5.25 15.5625 L 12.75 15.5625 C 15.131698 15.5625 17.0625 13.631698 17.0625 11.25 L 17.0625 7.6875 L 0.9375 7.6875 z M 4.5 11.0625 L 8.25 11.0625 C 8.5606597 11.0625 8.8125 11.3143 8.8125 11.625 C 8.8125 11.9357 8.5606597 12.1875 8.25 12.1875 L 4.5 12.1875 C 4.1893403 12.1875 3.9375 11.9357 3.9375 11.625 C 3.9375 11.3143 4.1893403 11.0625 4.5 11.0625 z '

const CreditCardIcon = (props: Props) => {
  return (
    <svg
      width="18px"
      height="18px"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      {props.filled && getFilled()}
      {!props.filled && getStroke()}
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

export { CreditCardIcon }
