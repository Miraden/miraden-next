import {
  ApplePayIcon,
  CreditCardArrowIcon,
  CreditCardPlusIcon,
  CyprusIcon,
  MontenegroIcon,
  QiwiIcon,
  RussiaIcon,
  TelegramIcon,
  TurkeyIcon,
  UnitedKingdomIcon,
  VisaIcon,
  WebMoneyIcon,
  WhatsappIcon,
  YouMoneyIcon,
} from "@/icons";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function IconsPage() {
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
        <h1 className="Font_52_120">Иконки</h1>
        <StyledIcons>
          <MontenegroIcon />
          <RussiaIcon />
          <UnitedKingdomIcon />
          <TurkeyIcon />
          <CyprusIcon />
          <QiwiIcon />
          <ApplePayIcon />
          <VisaIcon />
          <WebMoneyIcon />
          <YouMoneyIcon />
          <TelegramIcon />
          <WhatsappIcon />
          <CreditCardArrowIcon />
          <CreditCardPlusIcon />
        </StyledIcons>
      </main>
    </>
  );
}

const StyledIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-gap: 20px;
`;
