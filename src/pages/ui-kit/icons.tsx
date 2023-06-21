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
import styled from "styled-components";
import {BlankLayout} from "@/modules/Base/BlankLayout";
import UIKitHead from "@/modules/UIKitTest/UIKitHead";

export default function IconsPage() {
  return (
    <BlankLayout>
        <UIKitHead title={"Иконки"} className={"Container"} backUrl={"/ui-kit"}/>
        <StyledIcons className={"Container"}>
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
    </BlankLayout>
  );
}

const StyledIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-gap: 20px;
`;
