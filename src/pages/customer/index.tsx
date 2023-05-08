import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

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
      <StyledMain>
        <Link href="customer/reg-1">Step 1</Link>
        <Link href="customer/reg-2">Step 2</Link>
        <Link href="customer/reg-3">Step 3</Link>
        <Link href="customer/phone-1">Number 1</Link>
        <Link href="customer/phone-2">Number 2</Link>
        <Link href="customer/login">Login</Link>
        <Link href="customer/pass-recover-1">Password recover 1</Link>
        <Link href="customer/pass-recover-2">Password recover 2</Link>
        <Link href="customer/create-1">Create</Link>
        <Link href="customer/create-step-1">Create step 1</Link>
        <Link href="customer/create-step-2">Create step 2</Link>
        <Link href="customer/create-step-3">Create step 3</Link>
        <Link href="customer/create-step-4">Create step 4</Link>
        <Link href="customer/create-step-5">Create step 5</Link>
        <Link href="customer/create-step-6">Create step 6</Link>
        <Link href="customer/create-step-7">Create step 7</Link>
        <Link href="customer/create-step-8">Create step 8</Link>
        <Link href="customer/create-step-9">Create step 9</Link>
        <Link href="customer/create-step-10">Create step 10</Link>
        <Link href="customer/create-step-11">Create step 11</Link>
        <Link href="customer/create-payment">Create payment</Link>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  background: #eef1f5;
  display: flex;
  flex-direction: column;
`;
