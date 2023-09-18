import { PropsWithChildren } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const ProfileTabLayout = (props: PropsWithChildren<Props>): JSX.Element => {
  return <StyledTab>{props.children}</StyledTab>
}

const StyledTab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default ProfileTabLayout
