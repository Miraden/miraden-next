import { Button } from "@/components/ui";
import { StarIcon } from "@/icons";
import { Inter } from "next/font/google";
import Head from "next/head";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function UIKitPage() {
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
      <main className="Container">
        <Button href="/ui-kit">Go back</Button>
        <h1 className="Font_52_120">Кнопки</h1>
        <StyledButtons>
          <Button>Button</Button>
          <Button rightIcon={<StarIcon />}>Button</Button>
          <Button leftIcon={<StarIcon />}>Button</Button>
          <Button compact>Button</Button>
          <Button compact rightIcon={<StarIcon />}>
            Button
          </Button>
          <Button compact leftIcon={<StarIcon />}>
            Button
          </Button>
          <Button disabled>Button</Button>{" "}
          <Button disabled rightIcon={<StarIcon />}>
            Button
          </Button>{" "}
          <Button disabled leftIcon={<StarIcon />}>
            Button
          </Button>
          <Button secondary className="UIKit__buttonSecondary">
            Button
          </Button>
          <Button
            secondary
            rightIcon={<StarIcon />}
            className="UIKit__buttonSecondary"
          >
            Button
          </Button>
          <Button
            secondary
            leftIcon={<StarIcon />}
            className="UIKit__buttonSecondary"
          >
            Button
          </Button>
          <Button secondary compact>
            Button
          </Button>
          <Button secondary compact rightIcon={<StarIcon />}>
            Button
          </Button>
          <Button secondary compact leftIcon={<StarIcon />}>
            Button
          </Button>
          <Button tertiary>Button</Button>
          <Button tertiary rightIcon={<StarIcon />}>
            Button
          </Button>
          <Button tertiary leftIcon={<StarIcon />}>
            Button
          </Button>
          <Button tertiary compact>
            Button
          </Button>
          <Button request>Button</Button>
          <Button request compact>
            Button
          </Button>
          <div className="Header__buttons">
            <Button header>Button</Button>
          </div>
        </StyledButtons>
      </main>
    </>
  );
}

const StyledButtons = styled.div`
  button:not(:first-child) {
    margin-top: 12px;
  }
`;
