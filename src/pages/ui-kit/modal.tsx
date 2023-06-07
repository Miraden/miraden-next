import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui";
import { InviteModal } from "@/modules/Applications/Application/components/InviteModal";

export default function ModalPage() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="description" content="Miraden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="Container">
        <Link href="/ui-kit">Go back</Link> 
        <h1 className="Font_52_120">Modal</h1>

        <Button onClick={() => setIsOpenModal(true)}>Open Modal</Button>  
        {isOpenModal && (
          <InviteModal closeModal={() => setIsOpenModal(false)} />
        )}
      </main>
    </>
  );
}
