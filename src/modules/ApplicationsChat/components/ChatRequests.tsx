import styled from "styled-components";

interface Props {
  className?: string;
}

const ChatRequests = ({ className }: Props) => {
  return (
    <StyledChatRequests className={className}>
      <div className="ChatInfo__headTabsContainer">
        <h2>Requests</h2>
      </div>
    </StyledChatRequests>
  );
};

const StyledChatRequests = styled.div`
  background: #fff;
  border-radius: 10px;
  margin-top: 10px;

  .ChatInfo__headTabs {
    padding: 20px 30px 0 30px;
  }

  .ChatInfo__headTabsBar_whiteSpace {
    width: 100%;
    height: 10px;
    border-radius: 0 0 10px 10px;
    background: #fff;
  }

  .SingleChatInfoideBar {
    position: absolute;
    right: -420px;
    top: 94px;
  }

  .Application__headContainer {
    margin-top: 20px;
    padding: 20px 20px 0 20px;
    background: #fff;
    border-radius: 10px 10px 0 0;
  }

  .Application__head {
    display: flex;
    align-items: center;
    h1 {
      margin-left: 10px;
    }
  }

  .ChatInfo__headTabs {
    display: flex;
    button {
      padding: 0;
    }
    button:not(:first-child) {
      margin-left: 30px;
    }
  }

  .ChatInfo__headTabButton {
    position: relative;
    ::before {
      position: absolute;
      top: 35px;
      content: "";
      background: #4e6af3;
      width: 100%;
      height: 4px;
      border-radius: 10px;
    }
  }

  .ChatInfo__headTabsBar {
    margin-top: 12px;
    width: 100%;
    background: #e1edfd;
    height: 4px;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
    margin-top: 16px;
  }

  @media (max-width: 576px) {
    .ChatInfo__headTabsBar {
      margin-top: 8px;
    }
  }
`;

export { ChatRequests };
