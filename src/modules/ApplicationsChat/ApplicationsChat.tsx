import styled from "styled-components";
import { ApplicationInfo } from "./components/ApplicationInfo";
import { ChatContainer } from "./components/ChatContainer";
import { ContactInfo } from "./components/ContactInfo";

const ApplicationsChat = () => {
  return (
    <StyledApplicationsChat className="ContainerFull">
      <div className="ApplicationsChat">
        <div className="AppInfo">
          <ApplicationInfo className="ApplicationInfo" />
          <ContactInfo className="ContactInfo" />
        </div>

        <ChatContainer className="ChatContainer" />
      </div>
    </StyledApplicationsChat>
  );
};

const StyledApplicationsChat = styled.section`
  margin-top: 20px;
  height: calc(100vh - 76px);

  .ApplicationsChat {
    padding-bottom: 20px;
    display: flex;
  }

  .ContactInfo {
  }

  .AppInfo {
  }
`;

export { ApplicationsChat };
