import {RegStep1} from "@/modules/Customer";
import styled from "styled-components";

export default function RegisterPage() {
  return (
    <>
      <StyledMain>
        <StyledReg1 className="Container">
          <div className="Reg">
            <RegStep1/>
          </div>
        </StyledReg1>
      </StyledMain>
    </>
  )
}

const StyledMain = styled.main`
  background: #eef1f5;
  min-height: 100vh;
`;

const StyledReg1 = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;

  .Reg {
    grid-column: 2 / span 10;
  }

  @media (max-width: 960px) {
    &.Container {
      padding-left: 10px;
      padding-right: 10px;
    }
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;

    .Reg {
      grid-column: 1 / span 4;
    }
  }

  @media (max-width: 576px) {
    &.Container {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;