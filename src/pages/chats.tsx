import {Header} from "@/modules/Base/Header";
import Head from "next/head";
import styled from "styled-components";
import {
  Chats
} from "@/modules/Chats/Chats";
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
        <title>Miraden - Чаты</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyledMainApplications>
        <Header isAuthorized={isUserAuth} isReady={userReady} />
        {isUserAuth && <Chats isAppAuth={isUserAuth} />}
      </StyledMainApplications>
    </>
  );
}

const StyledMainApplications = styled.main`
  @media (max-width: 576px) {
    .ApplicationsChatsAllPage__header {
      display: none;
    }
  }
`;
