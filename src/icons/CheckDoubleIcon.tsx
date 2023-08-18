import { FC, SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: FC<SVGAttributes<SVGElement>>
}

const strokePath =
  'm 11.572266,4.8218352 a 0.75,0.75 0 0 0 -0.53125,0.21875 L 4.7148436,11.366758 1.816406,8.4683196 a 0.75,0.75 0 0 0 -1.06054681,0 0.75,0.75 0 0 0 0,1.0605469 L 4.1835936,12.958554 a 0.750075,0.750075 0 0 0 1.0605468,0 L 12.101562,6.1011321 a 0.75,0.75 0 0 0 0,-1.0605469 0.75,0.75 0 0 0 -0.529296,-0.21875 z m 5.140625,0 a 0.75,0.75 0 0 0 -0.529297,0.21875 L 9.3261717,11.898008 a 0.75,0.75 0 0 0 0,1.060546 0.75,0.75 0 0 0 1.0605473,0 l 6.857422,-6.8574219 a 0.75,0.75 0 0 0 0,-1.0605469 0.75,0.75 0 0 0 -0.53125,-0.21875 z'
const filledPath = ''

const CheckDoubleIcon = (props: Props) => {
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

export { CheckDoubleIcon }
