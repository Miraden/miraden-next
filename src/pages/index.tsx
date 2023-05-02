import { Applications } from "@/modules/Home/Applications";
import { Hero } from "@/modules/Home/Hero/Hero";
import { HowItWorks } from "@/modules/Home/HowItWorks";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Layout } from "../modules/Base/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="description" content="Miraden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Hero />
        <Applications />
        <HowItWorks />
      </Layout>
    </>
  );
}
