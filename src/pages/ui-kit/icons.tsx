import {
  AboutUsIcon,
  ApplePayIcon,
  Applications,
  ArrowAccordionIcon,
  ArrowIcon,
  BackIcon20,
  BathsIcon,
  BuildYearIcon,
  BurgerIcon,
  CatalogIcon,
  CheckboxIcon,
  CommunityIcon,
  CreditCardArrowIcon,
  CreditCardPlusIcon,
  CrossIcon,
  CyprusIcon,
  DealsIcon,
  DropzoneIcon,
  FaqIcon,
  HomeIcon,
  InfoIcon,
  Kebab24Icon,
  ListItemsIcon,
  MapIcon,
  MessagesIcon,
  MinusIcon,
  MiradenLogo,
  MiradenLogoFooter,
  MiradenLogoFooterHover,
  MiradenLogoMobile,
  MontenegroIcon,
  ObjectsIcon,
  PenIcon,
  PlayIcon,
  PlusIcon,
  PointIconFooter,
  PricingIcon,
  QiwiIcon,
  RussiaIcon,
  SearchIcon,
  ShowPassIcon,
  SleepsIcon,
  SliderButton,
  SquareIcon,
  StarIcon,
  TelegramIcon,
  TelegramPureIcon,
  TurkeyIcon,
  UnitedKingdomIcon,
  VerifiedIcon,
  VisaIcon,
  WarningIcon,
  WebMoneyIcon,
  WhatsappIcon,
  YouMoneyIcon,
} from "@/icons";
import styled from "styled-components";
import {BlankLayout} from "@/modules/Base/BlankLayout";
import UIKitHead from "@/modules/UIKitTest/UIKitHead";
import {BuildingIcon} from "@/icons/BuildingIcon";
import {CashIcon} from "@/icons/CashIcon";
import {CreditCardIcon} from "@/icons/CreditCardIcon";
import {DealIcon} from "@/icons/DealIcon";
import {EyeIcon} from "@/icons/EyeIcon";
import {FacebookFullIcon} from "@/icons/FacebookFullIcon";
import {FacebookIcon} from "@/icons/FacebookIcon";
import {FacebookIconFooter} from "@/icons/FacebookIconFooter";
import {FilterIcon} from "@/icons/FilterIcon";
import {InfoIconGrey} from "@/icons/InfoIconGrey";
import {InstagramFullIcon} from "@/icons/InstagramFullIcon";
import {InstagramIcon} from "@/icons/InstagramIcon";
import {InstagramIconFooter} from "@/icons/InstagramIconFooter";
import {InviteIcon} from "@/icons/InviteIcon";
import {InviteModalIcon} from "@/icons/InviteModalIcon";
import {LikeIcon} from "@/icons/LikeIcon";
import {LivingSquareIcon} from "@/icons/LivingSquareIcon";
import {LocationIcon} from "@/icons/LocationIcon";
import {MessageIcon} from "@/icons/MessageIcon";
import {PaperclipIcon} from "@/icons/PaperclipIcon";
import {PerformerIcon} from "@/icons/PerformerIcon";
import {PhoneIcon} from "@/icons/PhoneIcon";
import {PurposeCheckIcon} from "@/icons/PurposeCheckIcon";
import {RefusalIcon} from "@/icons/RefusalIcon";
import {RoomsIcon} from "@/icons/RoomsIcon";
import {SendMessageIcon} from "@/icons/SendMessageIcon";
import {SliderButtonDisabled} from "@/icons/SliderButtonDisabled";
import {SortIcon} from "@/icons/SortIcon";
import {Star16Icon} from "@/icons/Star16Icon";
import {StarIconFilled} from "@/icons/StarIconFilled";
import {UnpublishedIcon} from "@/icons/UnpublishedIcon";
import {ViberIcon} from "@/icons/ViberIcon";
import {WalletIcon} from "@/icons/WalletIcon";
import TestIcon from "@/icons/TestIcon";
import Test from "react-dropzone/typings/tests/all";

export default function IconsPage() {
  return (
     <BlankLayout className={"bodyChecker"}>
        <UIKitHead title={"Иконки"} className={"Container"} backUrl={"/ui-kit"}/>
        <StyledIcons className={"Container"}>
          <AboutUsIcon/>
          <Applications/>
          <ArrowAccordionIcon/>
          <ArrowIcon/>
          <BackIcon20/>
          <BathsIcon/>
          <BuildingIcon/>
          <BuildYearIcon/>
          <BurgerIcon/>
          <CreditCardIcon/>
          <CashIcon/>
          <CatalogIcon/>
          <CheckboxIcon/>
          <CommunityIcon/>
          <CrossIcon/>
          <CyprusIcon/>
          <DealIcon/>
          <DealsIcon/>
          <DropzoneIcon/>
          <EyeIcon/>
          <FacebookFullIcon/>
          <FacebookIcon/>
          <FacebookIconFooter/>
          <FaqIcon/>
          <FilterIcon/>
          <HomeIcon/>
          <InfoIcon/>
          <InfoIconGrey/>
          <InstagramFullIcon/>
          <InstagramIcon/>
          <InstagramIconFooter/>
          <InviteIcon/>
          <InviteModalIcon/>
          <Kebab24Icon/>
          <LikeIcon/>
          <ListItemsIcon/>
          <LivingSquareIcon/>
          <LocationIcon/>
          <MapIcon/>
          <MessageIcon/>
          <MessagesIcon/>
          <MinusIcon/>
          <MiradenLogo/>
          <MiradenLogoFooter/>
          <MiradenLogoFooterHover/>
          <MiradenLogoMobile/>
          <MontenegroIcon/>
          <ObjectsIcon/>
          <PaperclipIcon/>
          <PenIcon/>
          <PerformerIcon/>
          <PhoneIcon/>
          <PlayIcon/>
          <PlusIcon/>
          <PointIconFooter/>
          <PricingIcon/>
          <PurposeCheckIcon/>
          <RefusalIcon/>
          <RoomsIcon/>
          <RussiaIcon/>
          <SearchIcon/>
          <SendMessageIcon/>
          <ShowPassIcon/>
          <SleepsIcon/>
          <SliderButton/>
          <SliderButtonDisabled/>
          <SortIcon/>
          <SquareIcon/>
          <Star16Icon/>
          <StarIcon/>
          <StarIconFilled/>
          <TelegramIcon/>
          <TelegramPureIcon/>
          <TurkeyIcon/>
          <UnitedKingdomIcon/>
          <UnpublishedIcon/>
          <VerifiedIcon/>
          <ViberIcon/>
          <WalletIcon/>
          <WarningIcon/>
          <WhatsappIcon/>

          <CreditCardArrowIcon className={"IconPay IconPay__disabled"}/>
          <CreditCardPlusIcon className={"IconPay"}/>
          <ApplePayIcon className={"IconPay IconPay__disabled"}/>
          <QiwiIcon className={"IconPay"}/>
          <VisaIcon className={"IconPay"}/>
          <WebMoneyIcon className={"IconPay"}/>
          <YouMoneyIcon className={"IconPay"}/>
        </StyledIcons>
    </BlankLayout>
  );
}

const StyledIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-gap: 20px;
`;
