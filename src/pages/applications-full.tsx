import { ApplicationsFullLayout } from "@/modules/ApplicationsFull/ApplicationsFullLayout";
import { Header } from "@/modules/Base/Header";
import Head from "next/head";
import styled from "styled-components";
import {useEffect, useState} from "react";
import AuthManager from "@/modules/Security/Authentication/AuthManager";

const authManger = new AuthManager()

export default function ApplicationsFull() {
  const [isUserAuth, setUserAuth] = useState(false);

  useEffect(() => {
    setUserAuth(authManger.isUserHasToken())
  }, [isUserAuth])

  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyledMainApplications>
        <Header isAuthorized={isUserAuth}/>
        <ApplicationsFullLayout />
      </StyledMainApplications>
    </>
  );
}

const StyledMainApplications = styled.main`
  background: #eef1f5;
  min-height: 100vh;
`;
