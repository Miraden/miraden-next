import { Button, PayButton, RequestButton, TabButtons } from "@/components/ui";
import { StarIcon, VisaIcon } from "@/icons";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function ButtonsPage() {
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
          <RequestButton>Button</RequestButton>
          <div className="PayButtons">
            <Button header>Button</Button>
            <Button header leftIcon={<StarIcon />}>
              Button
            </Button>
            <PayButton leftIcon={<VisaIcon />}>Банковская карта</PayButton>
            <PayButton disabled leftIcon={<VisaIcon />}>
              Банковская карта
            </PayButton>
          </div>
          <div>
            <TabButtons
              tabs={[
                { label: "Text", id: "1" },
                { label: "Text", id: "2" },
              ]}
              defaultTabId={"1"}
            />
          </div>
        </StyledButtons>
      </main>
    </>
  );
}

const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;

  .PayButtons {
    padding: 30px;
    background-color: #2a344a;
    a {
      margin-top: 20px;
    }
  }
`;
