import { Header } from '@/modules/Base/Header'
import { FavouritesFullLayout } from '@/modules/FavouritesFull/FavouritesFullLayout'
import Head from 'next/head'
import styled from 'styled-components'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'
import AuthManagerServer from '@/modules/Security/Authentication/AuthManagerServer.server'

export default function FavoritesPage(pageProps: any) {
  const appContext = useAppContext()

  return (
    <>
      <Head>
        <title>Miraden - Избранное</title>
      </Head>
      <StyledMainApplications>
        <Header isAuthorized={pageProps.isUserAuth} isReady={true} />
        <FavouritesFullLayout />
      </StyledMainApplications>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const tokenCookie: string | undefined = context.req.cookies.token
  if (!tokenCookie) {
    return { props: { isUserAuth: false, userToken: '' } }
  }
  const authManager = new AuthManagerServer()
  const isUserAuth = await authManager.validateToken(tokenCookie)
  let userProfile: User.PublicProfile | null = null
  if (isUserAuth) {
    userProfile = await authManager.getMyProfile(tokenCookie)
  }
  return {
    props: {
      isUserAuth: isUserAuth,
      userToken: tokenCookie,
      userProfile: userProfile,
    },
  }
}

const StyledMainApplications = styled.main`
  background: #eef1f5;
  min-height: 100vh;
`
