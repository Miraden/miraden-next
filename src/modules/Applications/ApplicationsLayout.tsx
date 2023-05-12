import { ApplicationsFilter } from "@/components/ui/ApplicationsFilter";
import styled from "styled-components";
import { Application } from "./Application/Application";

const ApplicationsLayout = () => {
  return (
    <StyledApplicationsLayout>
      <Application className="Application" />
      <ApplicationsFilter className="Applications__filter" />
    </StyledApplicationsLayout>
  );
};

const StyledApplicationsLayout = styled.div`
  min-height: 100%;
  max-width: 870px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 30px;

  .Application {
    grid-column: 1 / span 9;
  }

  .Applications__filter {
    position: absolute;
    top: 94px;
    right: 20px;
  }
`;

export { ApplicationsLayout };
