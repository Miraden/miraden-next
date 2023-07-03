import { Header } from '@/modules/Base/Header'
import { FavouritesFullLayout } from '@/modules/FavouritesFull/FavouritesFullLayout'
import Head from 'next/head'
import styled from 'styled-components'

export default function FavouritesFullPage() {
  return (
    <>
      <Head>
        <title>Miraden</title>
      </Head>
      <StyledMainApplications>
        <Header isAuthorized />
        <FavouritesFullLayout />
      </StyledMainApplications>
    </>
  )
}

const StyledMainApplications = styled.main`
  background: #eef1f5;
  min-height: 100vh;
`
