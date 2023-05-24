import { Header } from "@/modules/Base/Header";
import { FavouritesFullLayout } from "@/modules/FavouritesFull/FavouritesFullLayout";
import { Inter } from "next/font/google";
import Head from "next/head";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function FavouritesFullPage() {
  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="theme-color" content="#2A344A" />

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
      <StyledMainApplications>
        <Header isAuthorized />
        <FavouritesFullLayout />
      </StyledMainApplications>
    </>
  );
}

const StyledMainApplications = styled.main`
  background: #eef1f5;
  min-height: 100vh;
`;
