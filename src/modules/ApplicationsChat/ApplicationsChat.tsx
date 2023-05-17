import styled from "styled-components";
import { ApplicationInfo } from "./components/ApplicationInfo";
import { ContactInfo } from "./components/ContactInfo";

const ApplicationsChat = () => {
  return (
    <StyledApplicationsChat className="ContainerFull">
      <div>
        <ApplicationInfo />
        <ContactInfo />
      </div>
    </StyledApplicationsChat>
  );
};

const StyledApplicationsChat = styled.section`
  margin-top: 94px;
`;

export { ApplicationsChat };
