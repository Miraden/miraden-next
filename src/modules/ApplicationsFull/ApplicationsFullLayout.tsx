import styled from 'styled-components'
import { ApplicationFull } from './Application/ApplicationFull'

const ApplicationsFullLayout = () => {
  return (
    <StyledApplicationsLayout className="ContainerFull">
      <ApplicationFull className="Application" />
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

export { ApplicationsFullLayout }
