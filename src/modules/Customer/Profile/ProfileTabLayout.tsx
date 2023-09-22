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

  .EditGroup {
    line-height: 1;
  }

  .table-item {
    border-bottom: 1px solid ${({ theme }) => theme.colors.stroke.divider};
  }

  .table-item-value {
    height: 64px;
    justify-content: space-between;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile.max}px) {
    .table-item-value {
      height: auto;
    }
  }
`

export default ProfileTabLayout
