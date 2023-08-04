import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../styles/tokens'
import cn from 'classnames'

interface Props {
  className?: string
}

const desktop: string = theme.breakpoints.desktop.max + 'px'
const tablet: string = theme.breakpoints.tablet.max + 'px'
const mobile: string = theme.breakpoints.mobile.max + 'px'

const StepCommonLayout = (
  props: React.PropsWithChildren<Props>
): JSX.Element => {
  return (
    <StyledLayout className={cn(props.className, 'StepCommonLayout')}>
      {props.children}
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  .WideButtons {
    button.Button_request,
    button.Button_compact {
      padding: 15px 20px;
    }
  }

  .WideButton,
  button.Button_request.WideButton,
  button.Button_compact.WideButton {
    padding: 15px 20px;
  }

  @media (max-width: ${tablet}) {
    gap: 35px;
  }

  @media (max-width: ${mobile}) {
    padding: 20px 24px;
    gap: 35px;
  }
`

export default StepCommonLayout
