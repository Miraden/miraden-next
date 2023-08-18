import { FC, SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

const DownCircleIcon: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M 9,0.75 C 4.4525354,0.75 0.75,4.4525354 0.75,9 c 0,4.547428 3.7025306,8.25 8.25,8.25 4.547433,0 8.25,-3.702567 8.25,-8.25 C 17.25,4.4525306 13.547428,0.75 9,0.75 Z m 0,1.5 c 3.736763,0 6.75,3.0131977 6.75,6.75 0,3.736758 -3.013242,6.75 -6.75,6.75 C 5.2631977,15.75 2.25,12.736763 2.25,9 2.25,5.2631929 5.2631929,2.25 9,2.25 Z m 0,3 A 0.75,0.75 0 0 0 8.25,6 v 4.189453 L 7.28125,9.21875 a 0.75,0.75 0 0 0 -1.0625,0 0.75,0.75 0 0 0 0,1.0625 L 7.9394531,12 c 0.5795031,0.579523 1.5415907,0.579523 2.1210939,0 l 1.720703,-1.71875 a 0.75,0.75 0 0 0 0,-1.0625 0.75,0.75 0 0 0 -1.0625,0 L 9.75,10.189453 V 6 A 0.75,0.75 0 0 0 9,5.25 Z"
        fill={theme.colors.text.black}
      />
    </svg>
  )
}

export { DownCircleIcon }
