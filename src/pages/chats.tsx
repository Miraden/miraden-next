import {Header} from "@/modules/Base/Header";
import Head from "next/head";
import styled from "styled-components";
import {
  ApplicationsChatsAll
} from "@/modules/ApplicationsChatsAll/ApplicationsChatsAll";
import {useState} from "react";
import useAuth from "@/hooks/useAuth";

export default function ApplicationsChatsAllPage() {
  const [isUserAuth, setUserAuth] = useState<boolean>(false)
  const [userReady, setUserReady] = useState<boolean>(false)

  useAuth({
    onSuccess: (): void => {
      setUserAuth(true)
    },

    onFailure: (): void => {
      setUserAuth(false)
    },

    onResponse: (): void => {
      setUserReady(true)
    }
  })

  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyledMainApplications>
        <Header isAuthorized={isUserAuth} isReady={userReady} />
        <ApplicationsChatsAll />
      </StyledMainApplications>
    </>
  );
}

const StyledMainApplications = styled.main`
  background: #eef1f5;
  min-height: 100vh;

  @media (max-width: 576px) {
    .ApplicationsChatsAllPage__header {
      display: none;
    }
  }
`;
