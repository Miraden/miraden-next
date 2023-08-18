import { SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath = ''
const filledPath =
  'M16 3.46053L13.7855 15.4588C13.7855 15.4588 13.4756 16.2907 12.6244 15.8917L7.51495 11.6814L7.49126 11.669C8.18143 11.0029 13.5333 5.83145 13.7673 5.59703C14.1294 5.23398 13.9046 5.01785 13.4841 5.2921L5.57869 10.6876L2.52879 9.5847C2.52879 9.5847 2.04882 9.40122 2.00265 9.00226C1.95587 8.60264 2.54458 8.38651 2.54458 8.38651L14.9781 3.14449C14.9781 3.14449 16 2.66195 16 3.46053Z'

const TelegramIcon = (props: Props) => {
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

const TelegramRoundIcon = (props: Props) => {
  return (
    <svg
      width="42px"
      height="42px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      <path
        fill="#27a6e5"
        d="M 21,0 C 32.634,0 42,9.366 42,21 42,32.634 32.634,42 21,42 9.366,42 0,32.634 0,21 0,9.366 9.366,0 21,0 Z"
      />
      <path
        d="M29.4 13.2319L26.2443 29.7065C26.2443 29.7065 25.8027 30.8487 24.5898 30.3009L17.3088 24.5198L17.275 24.5028C18.2585 23.5883 25.885 16.4874 26.2183 16.1655C26.7343 15.667 26.4139 15.3703 25.8148 15.7468L14.5496 23.1552L10.2035 21.6409C10.2035 21.6409 9.51952 21.389 9.45372 20.8412C9.38706 20.2925 10.226 19.9957 10.226 19.9957L27.9437 12.798C27.9437 12.798 29.4 12.1354 29.4 13.2319Z"
        fill="white"
      />
    </svg>
  )
}

export { TelegramIcon, TelegramRoundIcon }
