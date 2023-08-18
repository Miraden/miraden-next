import { FC, SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: FC<SVGAttributes<SVGElement>>
}

const strokePath =
  'M 9 1 C 7.3105617 1 5.6636536 1.5343247 4.296875 2.5273438 C 2.9300964 3.5203728 1.9126845 4.9206054 1.390625 6.5273438 C 0.94636744 7.8946224 0.88152969 9.3520351 1.1933594 10.746094 C 1.2841193 11.151793 1.7120223 11.368734 2.1074219 11.240234 C 2.5028215 11.111735 2.7147024 10.686896 2.6328125 10.279297 C 2.4139727 9.189878 2.4782591 8.0569264 2.8242188 6.9921875 C 3.2480283 5.6878288 4.0740349 4.5522329 5.1835938 3.7460938 C 6.2931526 2.9399446 7.6285114 2.5058594 9 2.5058594 C 10.371499 2.5058594 11.706907 2.9399546 12.816406 3.7460938 C 13.926005 4.5522429 14.751982 5.6878288 15.175781 6.9921875 C 15.599581 8.2965462 15.599581 9.7034438 15.175781 11.007812 C 14.751982 12.312211 13.926005 13.447807 12.816406 14.253906 C 11.910707 14.911906 10.855632 15.322572 9.7519531 15.451172 C 9.3389935 15.499172 9 15.832347 9 16.248047 C 9 16.663846 9.3380435 17.003944 9.7519531 16.964844 C 11.174152 16.830644 12.540026 16.317755 13.703125 15.472656 C 15.069924 14.479657 16.087276 13.079455 16.609375 11.472656 C 17.131374 9.8659479 17.131374 8.1340921 16.609375 6.5273438 C 16.087276 4.9206054 15.069924 3.5203728 13.703125 2.5273438 C 12.336326 1.5343247 10.689398 1 9 1 z '
const filledPath = ''

const LoadingIcon = (props: Props) => {
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

export { LoadingIcon }
