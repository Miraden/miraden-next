import styled from 'styled-components'
import { ApplicationPlug } from './Application/ApplicationPlug'

const ApplicationPlugLayout = () => {
  return (
    <StyledApplicationsLayout className="ContainerFull">
      <ApplicationPlug className="Application" />
    </StyledApplicationsLayout>
  )
}

const StyledApplicationsLayout = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 20px;

  @media (max-width: 1024px) {
    &.ContainerFull {
      padding: 0;
    }
  }
`

export { ApplicationPlugLayout }
