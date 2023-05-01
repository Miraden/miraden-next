import { MiradenLogo } from "@/icons";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <div className="Header">
        <MiradenLogo />
        <h2>Header</h2>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  position: fixed;

  .Header {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1880px;
    padding: 12px 20px;
    border-radius: 10px;
    color: white;
    background-color: #2a344a;
  }
`;

export { Header };
