import { FC, SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

const ApartmentIcon: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="18px"
      height="18px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.4855 10.7087L2.87138 11.3518H2.87138L2.4855 10.7087ZM10 4.25C9.58579 4.25 9.25 4.58579 9.25 5C9.25 5.41421 9.58579 5.75 10 5.75V4.25ZM13 5.75C13.4142 5.75 13.75 5.41421 13.75 5C13.75 4.58579 13.4142 4.25 13 4.25V5.75ZM10 7.25C9.58579 7.25 9.25 7.58579 9.25 8C9.25 8.41421 9.58579 8.75 10 8.75V7.25ZM13 8.75C13.4142 8.75 13.75 8.41421 13.75 8C13.75 7.58579 13.4142 7.25 13 7.25V8.75ZM8 2.75H15V1.25H8V2.75ZM15.25 3V15H16.75V3H15.25ZM2.75 15V11.5662H1.25V15H2.75ZM2.87138 11.3518L7.38587 8.64312L6.61413 7.35688L2.09963 10.0656L2.87138 11.3518ZM7.75 8V3H6.25V8H7.75ZM15 15.25H10V16.75H15V15.25ZM10.75 16V14H9.25V16H10.75ZM11 13.75H12V12.25H11V13.75ZM12.25 14V15.5H13.75V14H12.25ZM10 15.25H7V16.75H10V15.25ZM7 15.25H3V16.75H7V15.25ZM7.75 16V8H6.25V16H7.75ZM12 13.75C12.1381 13.75 12.25 13.8619 12.25 14H13.75C13.75 13.0335 12.9665 12.25 12 12.25V13.75ZM10.75 14C10.75 13.8619 10.8619 13.75 11 13.75V12.25C10.0335 12.25 9.25 13.0335 9.25 14H10.75ZM2.75 11.5662C2.75 11.4784 2.79607 11.397 2.87138 11.3518L2.09963 10.0656C1.57252 10.3818 1.25 10.9515 1.25 11.5662H2.75ZM1.25 15C1.25 15.9665 2.0335 16.75 3 16.75V15.25C2.86193 15.25 2.75 15.1381 2.75 15H1.25ZM15.25 15C15.25 15.1381 15.1381 15.25 15 15.25V16.75C15.9665 16.75 16.75 15.9665 16.75 15H15.25ZM15 2.75C15.1381 2.75 15.25 2.86193 15.25 3H16.75C16.75 2.0335 15.9665 1.25 15 1.25V2.75ZM8 1.25C7.0335 1.25 6.25 2.0335 6.25 3H7.75C7.75 2.86193 7.86193 2.75 8 2.75V1.25ZM10 5.75H13V4.25H10V5.75ZM10 8.75H13V7.25H10V8.75Z"
        fill={theme.colors.text.black}
      />
    </svg>
  )
}

export { ApartmentIcon }
