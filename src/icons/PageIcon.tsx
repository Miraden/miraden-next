import { SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath =
  'M 7.5234375 15.367188 L 7.5234375 17 L 9.15625 17 L 9.15625 15.367188 L 7.5234375 15.367188 z M 11.1875 15.367188 L 11.1875 17 L 12.820312 17 L 12.820312 15.367188 L 11.1875 15.367188 z M 14.851562 15.367188 L 14.851562 17 L 16.484375 17 L 16.484375 15.367188 L 14.851562 15.367188 z '
const filledPath = ''

const PageIcon = (props: Props) => {
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

export { PageIcon }
