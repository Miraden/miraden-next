import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function ApplicationPage1() {
  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="description" content="Miraden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <StyledMainApplications className=" Font_20_120">
        <div className="Pages Container">
          <Link href="/applications-plug">Отклики / Продавцы_заглушка</Link>
          <Link href="/applications">Отклики / Продавцы</Link>
          <Link href="/applications-plug">Отклики / Объекты_заглушка</Link>
        </div>
      </StyledMainApplications>
    </>
  );
}

const StyledMainApplications = styled.main`
  background: #eef1f5;
  min-height: 100vh;
  .Pages {
    display: flex;
    flex-direction: column;
  }

  a {
    margin-top: 20px;
  }
`;
