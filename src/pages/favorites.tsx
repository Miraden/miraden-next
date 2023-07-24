import { Header } from '@/modules/Base/Header'
import { FavouritesFullLayout } from '@/modules/FavouritesFull/FavouritesFullLayout'
import Head from 'next/head'
import styled from 'styled-components'
import {useState} from "react";
import useAuth from "@/hooks/useAuth";

export default function FavoritesPage() {
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
        <title>Miraden - Избранное</title>
      </Head>
      <StyledMainApplications>
        <Header isAuthorized={isUserAuth} isReady={userReady} />
        <FavouritesFullLayout />
      </StyledMainApplications>
    </>
  )
}

const StyledMainApplications = styled.main`
  background: #eef1f5;
  min-height: 100vh;
`
