import { FC, SVGAttributes } from "react";
import styled from "styled-components";

const CreditCardArrowIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <StyledSvg
      width="42"
      height="42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 20.912V16.72C6 12.457 9.358 9 13.5 9h15c4.142 0 7.5 3.457 7.5 7.72v9.265c0 4.264-3.358 7.72-7.5 7.72h-7.071M6 17.494h30M14.428 34l2.353-2.421a.75.75 0 0 0 0-1.04l-2.352-2.421m2.142 2.94h-10"
        stroke="#2A344A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  &:hover {
    path {
      stroke: ${({theme}) => theme.colors.text.disabled};
    }
  }
`

export { CreditCardArrowIcon };
