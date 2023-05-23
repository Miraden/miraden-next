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

  @media (max-width: 1024px) {
    margin-top: 16px;
  }

  @media (max-width: 576px) {
    margin-top: 0;
  }
`;

export { ChatRequests };
