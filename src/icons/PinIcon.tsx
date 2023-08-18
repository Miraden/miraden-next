import { SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath = ''
const filledPath =
  'M 5.8261719 2.640625 C 4.9854927 2.640625 4.1784338 2.97392 3.5839844 3.5683594 C 2.989535 4.1628088 2.65625 4.9698677 2.65625 5.8105469 C 2.65625 6.651216 2.989535 7.458285 3.5839844 8.0527344 C 4.1784338 8.6471838 4.9855027 8.9804688 5.8261719 8.9804688 C 6.4083419 8.9804688 6.9726489 8.8193403 7.4628906 8.5234375 L 13.242188 14.302734 A 0.75 0.75 0 0 0 14.302734 14.302734 A 0.75 0.75 0 0 0 14.302734 13.242188 L 8.5273438 7.4667969 C 8.830516 6.9722651 8.9960938 6.4001278 8.9960938 5.8105469 C 8.9960938 4.9698677 8.6608457 4.1628088 8.0664062 3.5683594 C 7.4719568 2.97392 6.666841 2.640625 5.8261719 2.640625 z '

const PinIcon = (props: Props) => {
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

export { PinIcon }
