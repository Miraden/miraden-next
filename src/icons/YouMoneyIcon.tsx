import { FC, SVGAttributes } from 'react'
import styled from 'styled-components'

const YouMoneyIcon: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <StyledSvg
      width="42"
      height="42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.267 25.364c2.356 0 4.266-1.954 4.266-4.364s-1.91-4.364-4.266-4.364C22.91 16.636 21 18.59 21 21s1.91 4.364 4.267 4.364Zm0 7.636C31.747 33 37 27.627 37 21S31.747 9 25.267 9s-11.734 5.373-11.734 12 5.254 12 11.734 12Z"
        fill="#8941FF"
      />
      <path d="M5 13.364h8.533v16.363H9.267L5 13.364Z" fill="#8941FF" />
    </StyledSvg>
  )
}

const StyledSvg = styled.svg`
  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.text.disabled};
    }
  }
`

export { YouMoneyIcon }
