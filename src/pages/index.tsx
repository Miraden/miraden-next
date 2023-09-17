import { LeadsList } from '@/modules/Home/Leads/LeadsList'
import { FAQ } from '@/modules/Home/FAQ'
import { Features } from '@/modules/Home/Features'
import { Hero } from '@/modules/Home/Hero/Hero'
import { HowItWorks } from '@/modules/Home/HowItWorks'
import { Reviews } from '@/modules/Home/Reviews'
import Head from 'next/head'
import { Layout } from '@/modules/Base/Layout'
import AuthManagerServer from '@/modules/Security/Authentication/AuthManagerServer.server'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'

export default function Home(pageProps: any) {
  const app = useAppContext()
  app.isUserAuth = pageProps.isUserAuth
  app.userToken = pageProps.userToken
  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Hero />
        <LeadsList />
        <HowItWorks />
        <Features />
        <Reviews />
        <FAQ />
      </Layout>
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
  return { props: { isUserAuth: isUserAuth, userToken: tokenCookie } }
}
