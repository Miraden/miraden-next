import styled from 'styled-components'
import { PropsWithChildren } from 'react'
import cn from 'classnames'
import { theme } from '../../../styles/tokens'

interface Props {
  className?: string
  inModal?: boolean
}

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

const AuthFormLayout = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Styled
      className={cn('AuthFormLayout', props.className, {
        inModal: props.inModal,
      })}
    >
      {props.children}
    </Styled>
  )
}

const Styled = styled.div`
  width: 100%;
  height: 100%;
  max-width: 970px;
  margin: 150px auto 0;

  &.inModal {
    margin-top: 0;
  }

  @media (max-width: ${tablet}) {
    margin-top: 0;
  }
`

export default AuthFormLayout
