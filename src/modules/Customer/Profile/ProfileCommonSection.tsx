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

  .table {
    display: flex;
    flex-direction: column;

    &-item {
      padding: 20px;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid ${({ theme }) => theme.colors.stroke.divider};

      &:last-of-type {
        border-bottom: none;
      }

      &-key {
        width: 217px;
        display: flex;
        align-items: center;
        gap: 15px;
        color: ${({ theme }) => theme.colors.grey.textGrey};

        svg path {
          fill: ${({ theme }) => theme.colors.grey.textGrey};
        }
      }

      &-value {
        flex-grow: 1;
      }
    }
  }
`

export default ProfileCommonSection
