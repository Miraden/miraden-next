import { Checkbox, Radio } from "@/components/ui";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function CheckboxesPage() {
  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="description" content="Miraden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="Container">
        <Link href="/ui-kit">Go back</Link>
        <h1 className="Font_52_120">Чекбоксы</h1>
        <StyledCheckboxes>
          <Checkbox />
          <Checkbox error />
          <Checkbox disabled />

          <Radio />
          <Radio error />
          <Radio disabled />
        </StyledCheckboxes>
      </main>
    </>
  );
}

const StyledCheckboxes = styled.div`
  label {
    margin-top: 20px;
  }
`;
