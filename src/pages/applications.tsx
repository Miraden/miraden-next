import {ApplicationsLayout} from "@/modules/Applications/ApplicationsLayout";
import {Header} from "@/modules/Base/Header";
import Head from "next/head";
import styled from "styled-components";

export default function Applications() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#2A344A" />

        <meta name="description" content="Miraden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <StyledMainApplications>
        <Header isAuthorized />
        <ApplicationsLayout />
      </StyledMainApplications>
    </>
  );
}

const StyledMainApplications = styled.main`
  background: #eef1f5;
  min-height: 100vh;
`;
