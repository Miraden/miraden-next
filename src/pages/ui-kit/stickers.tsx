import {Sticker} from "@/components/ui";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function StickersPage() {
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
        <h1 className="Font_52_120">Stickers</h1>
        <StyledIcons>
          <Sticker theme="red">Stiker</Sticker>
          <Sticker theme="green">Stiker</Sticker>
          <Sticker theme="blue">Stiker</Sticker>
          <Sticker theme="grey">Stiker</Sticker>
          <Sticker theme="blue" withNumber>
            Stiker 1
          </Sticker>
          <Sticker theme="black">Stiker</Sticker>
          <Sticker theme="red" tag>
            Tag
          </Sticker>
          <Sticker theme="blue" tag>
            Tag
          </Sticker>
        </StyledIcons>
      </main>
    </>
  );
}

const StyledIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 70px);
  grid-gap: 20px;
`;
