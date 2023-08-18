import { FC, SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: FC<SVGAttributes<SVGElement>>
}

const strokePath =
  'M 14.046875 4.8105469 C 13.854925 4.8105469 13.662075 4.8848002 13.515625 5.03125 L 9.2734375 9.2734375 L 5.03125 13.515625 C 4.7383606 13.808525 4.7383606 14.283272 5.03125 14.576172 C 5.3241394 14.869072 5.7989075 14.869072 6.0917969 14.576172 L 14.576172 6.0917969 C 14.869072 5.7988975 14.869072 5.3241394 14.576172 5.03125 C 14.429722 4.8848002 14.238825 4.8105469 14.046875 4.8105469 z M 13.515625 9.5839844 C 13.3237 9.5839844 13.130825 9.6562845 12.984375 9.8027344 L 9.8027344 12.984375 C 9.5098447 13.277275 9.5098447 13.753975 9.8027344 14.046875 C 10.095634 14.339775 10.570382 14.339775 10.863281 14.046875 L 14.046875 10.863281 C 14.339775 10.570382 14.339775 10.095674 14.046875 9.8027344 C 13.900425 9.6562845 13.70755 9.5839844 13.515625 9.5839844 z '
const filledPath = ''

const StretchIcon = (props: Props) => {
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

export { StretchIcon }
