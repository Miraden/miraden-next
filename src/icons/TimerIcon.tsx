import { FC, SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: FC<SVGAttributes<SVGElement>>
}

const strokePath: string =
  'M 9 0.75 C 4.4436546 0.75 0.75 4.4436546 0.75 9 C 0.75 13.556295 4.4436546 17.25 9 17.25 C 13.556295 17.25 17.25 13.556295 17.25 9 C 17.25 4.4436546 13.556295 0.75 9 0.75 z M 9 2.25 C 12.727896 2.25 15.75 5.2720837 15.75 9 C 15.75 12.727896 12.727896 15.75 9 15.75 C 5.2720837 15.75 2.25 12.727896 2.25 9 C 2.25 5.2720837 5.2720837 2.25 9 2.25 z M 9 5.25 C 8.5857904 5.25 8.25 5.5857904 8.25 6 L 8.25 8.7988281 C 8.25 9.1749677 8.4370303 9.5276783 8.75 9.7363281 L 10.833984 11.123047 C 11.178584 11.352847 11.643347 11.260715 11.873047 10.916016 C 12.102847 10.571416 12.010715 10.10474 11.666016 9.875 L 9.75 8.5976562 L 9.75 6 C 9.75 5.5857904 9.4142096 5.25 9 5.25 z '
const filledPath: string = ''

const TimerIcon = (props: Props) => {
  return (
    <svg
      width="18"
      height="18"
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

export default TimerIcon
