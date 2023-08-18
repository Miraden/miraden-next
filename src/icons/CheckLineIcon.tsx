import { FC, SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath =
  'M 15,4.25 A 0.75,0.75 0 0 0 14.46875,4.46875 L 7,11.9375 3.53125,8.46875 a 0.75,0.75 0 0 0 -1.0625,0 0.75,0.75 0 0 0 0,1.0625 l 4,4 a 0.750075,0.750075 0 0 0 1.0625,0 l 8,-8 a 0.75,0.75 0 0 0 0,-1.0625 A 0.75,0.75 0 0 0 15,4.25 Z'
const filledPath = ''

const CheckLineIcon = (props: Props) => {
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

const strokeSmall =
  'M 14 5.25 A 0.75 0.75 0 0 0 13.46875 5.46875 L 8 10.9375 L 5.53125 8.46875 A 0.75 0.75 0 0 0 4.46875 8.46875 A 0.75 0.75 0 0 0 4.46875 9.53125 L 7.46875 12.53125 A 0.750075 0.750075 0 0 0 8.53125 12.53125 L 14.53125 6.53125 A 0.75 0.75 0 0 0 14.53125 5.46875 A 0.75 0.75 0 0 0 14 5.25 z '
const filledSmall = ''

const CheckSmallLineIcon = (props: Props) => {
  return (
    <svg
      width="18px"
      height="18px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      {props.filled ? getSmallFilled() : getSmallStroke()}
    </svg>
  )
}

function getSmallStroke(): JSX.Element {
  return (
    <>
      <path d={strokeSmall} fill={theme.colors.text.black} />
    </>
  )
}

function getSmallFilled(): JSX.Element {
  return (
    <>
      <path d={filledSmall} fill={theme.colors.text.black} />
    </>
  )
}

export { CheckLineIcon, CheckSmallLineIcon }
