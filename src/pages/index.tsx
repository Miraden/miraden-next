import { Applications } from '@/modules/Home/Applications'
import { FAQ } from '@/modules/Home/FAQ'
import { Features } from '@/modules/Home/Features'
import { Hero } from '@/modules/Home/Hero/Hero'
import { HowItWorks } from '@/modules/Home/HowItWorks'
import { Reviews } from '@/modules/Home/Reviews'
import Head from 'next/head'
import { Layout } from '@/modules/Base/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Hero />
        <Applications />
        <HowItWorks />
        <Features />
        <Reviews />
        <FAQ />
      </Layout>
    </>
  )
}
