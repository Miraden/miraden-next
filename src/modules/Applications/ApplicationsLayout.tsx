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
`;

export { ApplicationsLayout };
