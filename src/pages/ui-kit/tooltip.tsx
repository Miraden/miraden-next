import { TooltipComponent } from "@/components/ui/Tooltip/MyComponent";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function TooltipPage() {
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
        <h1 className="Font_52_120">Тултипы</h1>
        <StyledIcons>
          <div>
            <TooltipComponent text="Hover" />
          </div>
        </StyledIcons>
      </main>
    </>
  );
}

const StyledIcons = styled.div``;
