import { PropsWithChildren } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const ProfileCommonSection = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <StyledSection className={props.className}>{props.children}</StyledSection>
  )
}

const StyledSection = styled.section`
  background: #fff;
  border-radius: ${({ theme }) => theme.border.radius};

  .SectionTitle {
    border-bottom: 2px solid ${({ theme }) => theme.colors.stroke.divider};
    padding: 20px;
  }
`

export default ProfileCommonSection
