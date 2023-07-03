import styled from "styled-components";
import { ApplicationPlug } from "./Application/ApplicationPlug";

const ApplicationsLayoutPlug = () => {
  return (
    <StyledApplicationsLayoutPlug className="ContainerFull">
      <ApplicationPlug className="Application" />
    </StyledApplicationsLayoutPlug>
  );
};

const StyledApplicationsLayoutPlug = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 1024px) {
    &.ContainerFull {
      padding: 0;
    }
  }
`;

export { ApplicationsLayoutPlug };
