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
  padding-bottom: 20px;

  @media (max-width: 1024px) {
    &.ContainerFull {
      padding: 0;
    }
  }
`;

export { ApplicationsLayoutPlug };
