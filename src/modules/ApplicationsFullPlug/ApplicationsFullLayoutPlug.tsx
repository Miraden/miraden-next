import styled from "styled-components";
import { ApplicationFullPlug } from "./Application/ApplicationFullPlug";

const ApplicationsFullLayoutPlug = () => {
  return (
    <StyledApplicationsLayoutPlug className="ContainerFull">
      <ApplicationFullPlug className="Application" />
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

export { ApplicationsFullLayoutPlug };
