import { Header } from "@/modules/Base/Header";
import { ObjectsLayoutPlug } from "@/modules/ObjectsPlug/ObjectsPlugLayout";
import Head from "next/head";
import styled from "styled-components";

export default function ObjectsPlug() {
  return (
    <>
      <Head>
        <title>Miraden</title>
      </Head>
      <StyledMainApplications>
        <Header isAuthorized />
        <ObjectsLayoutPlug />
      </StyledMainApplications>
    </>
  );
}

const StyledMainApplications = styled.main`
  background: #eef1f5;
  min-height: 100vh;
`;
