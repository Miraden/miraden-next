import styled from "styled-components";
import { Application } from "./Application/Application";

const ApplicationsLayout = () => {
  return (
    <StyledApplicationsLayout className="ContainerFull">
      <Application className="Application" />
    </StyledApplicationsLayout>
  );
};

const StyledApplicationsLayout = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 1024px) {
    &.ContainerFull {
      padding: 0;
    }
  }
`;

export { ApplicationsLayout };
