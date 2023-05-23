import { PhoneNum2 } from "@/modules/Customer";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

export default function PhoneNum2Page() {
  const [value, setValue] = useState("");

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="description" content="Miraden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>
        <Link href="/customer">Go back</Link>
        <StyledNum1 className="Container">
          <div className="Reg">
            <PhoneNum2 onChange={handleValueChange} />
          </div>
        </StyledNum1>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  background: #eef1f5;
  min-height: 100vh;
`;

const StyledNum1 = styled.div`
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
