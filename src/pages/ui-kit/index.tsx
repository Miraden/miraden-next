import {UIKit} from "@/modules/UIKitTest";
import Head from "next/head";

export default function UIKitPage() {
  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="description" content="Miraden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <UIKit />
      </main>
    </>
  );
}
