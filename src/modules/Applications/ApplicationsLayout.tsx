import styled from "styled-components";
import { Application } from "./Application/Application";

const ApplicationsLayout = () => {
  return (
    <StyledApplicationsLayout className="Container">
      <Application className="Application" />
    </StyledApplicationsLayout>
  );
};

const StyledApplicationsLayout = styled.div`
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

export { ApplicationsLayout };
