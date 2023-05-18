import styled from "styled-components";
import { ApplicationFullPlug } from "./Application/ApplicationFullPlug";

const ApplicationsFullLayoutPlug = () => {
  return (
    <StyledApplicationsLayoutPlug className="Container">
      <ApplicationFullPlug className="Application" />
    </StyledApplicationsLayoutPlug>
  );
};

const StyledApplicationsLayoutPlug = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;

  .Application {
    grid-column: 2 / span 10;
  }

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    .Application {
      grid-column: 1 / span 4;
    }
  }

  @media (max-width: 576px) {
    &.Container {
      padding: 0;
    }
  }
`;

export { ApplicationsFullLayoutPlug };
