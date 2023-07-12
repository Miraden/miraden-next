import { Button, Link } from "@/components/ui";
import {
  MiradenLogoFooter,
  MiradenLogoFooterHover,
  PointIconFooter,
  TelegramPureIcon,
} from "@/icons";
import { FacebookIconFooter } from "@/icons/FacebookIconFooter";
import { InstagramIconFooter } from "@/icons/InstagramIconFooter";
import styled from "styled-components";
import {theme} from "../../../../styles/tokens";

interface FooterProps {
  className?: string;
}

const linksLeft = [
  { label: "Лента заявок", href: "/leads" },
  { label: "О нас", href: '#about' },
  { label: "Тарифы", href: '/tariffs' },
  { label: "FAQ", href: 'https://faq.miraden.com/' },
];

const linksRight = [
  { label: "Создать заявку", href: '/lead/add' },
  { label: "Поддержка", href: 'https://t.me/miraden_support' },
  { label: "Регистрация", href: '/user/register' },
  { label: "Вход", href: '/user/login' },
];

const Year: number = new Date().getFullYear()

const Footer = ({ className }: FooterProps) => {
  return (
    <StyledFooter>
      <StyledFooterTop className={className}>
        <div className="Footer">
          <StyledFooterTopMobile>
            <div className="Footer__infoMobile">
              <a href="">
                <MiradenLogoFooter className="Footer__logo" />
                <MiradenLogoFooterHover className="Footer__logoHover" />
              </a>
              <p className="Footer__description Font_14_140">
                Miraden — биржа заявок в сфере зарубежной недвижимости
              </p>
              <div className="Footer__socialLinks">
                <a href={"https://www.facebook.com/miradencom"} target={"_blank"}>
                  <FacebookIconFooter />
                </a>
                <a href={"https://www.instagram.com/miradencom/"} target={"_blank"}>
                  <InstagramIconFooter />
                </a>
              </div>
            </div>
          </StyledFooterTopMobile>
          <div className="Footer__head Container">
            <div className="Footer__info">
              <a href="">
                <MiradenLogoFooter className="Footer__logo" />
                <MiradenLogoFooterHover className="Footer__logoHover" />
              </a>
              <p className="Footer__description Font_14_140">
                Miraden — биржа заявок в сфере зарубежной недвижимости
              </p>
              <div className="Footer__socialLinks">
                <a href={"https://www.facebook.com/miradencom"} target={"_blank"}>
                  <FacebookIconFooter />
                </a>
                <a href={"https://www.instagram.com/miradencom/"} target={"_blank"}>
                  <InstagramIconFooter />
                </a>
              </div>
            </div>
            <ul className="Footer__navLinksLeft">
              {linksLeft.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="Font_16_20 lg:Font_14_140">
                    <p>{link.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="Footer__navLinksRight">
              {linksRight.map((link, index) => (
                <li key={index} className="Font_16_20 lg:Font_14_140">
                  <Link href={link.href}>
                    <p>{link.label}</p>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="Footer__contacts Font_14_140">
              <p>Заходите в наш Telegram канал и будьте в курсе новых заявок</p>
              <Button
                leftIcon={<TelegramPureIcon />}
                className="Footer__telegramLink"
                href={"https://t.me/miradencom"}
              >
                Telegram
              </Button>
              <Link href="mailto: info@miraden.com" className="Font_16_20 lg:Font_14_140">
                info@miraden.com
              </Link>
            </div>
          </div>
        </div>
      </StyledFooterTop>

      <StyledFooterSocialMobile>
        <div className="Footer__contactsMobile Font_14_140">
          <p className="Color_text_grey">
            Заходите в наш Telegram канал <br /> и будьте в курсе новых заявок
          </p>
          <Button
            leftIcon={<TelegramPureIcon />}
            className="Footer__telegramLink"
          >
            Telegram
          </Button>
          <div className="Footer__socialLinksMobile">
            <a href={"https://www.facebook.com/miradencom"} target={"_blank"}>
              <FacebookIconFooter />
            </a>
            <a href={"https://www.instagram.com/miradencom/"} target={"_blank"}>
              <InstagramIconFooter />
            </a>
          </div>
          <Link href="/" className="Font_16_20 lg:Font_14_140">
            info@miraden.com
          </Link>
        </div>
      </StyledFooterSocialMobile>
      <StyledFooterBottom>
        <div className="Container">
          <div className="Footer__addLinks  Font_14_140 lg:Font_12_16">
            <p className="Footer__rights">&copy; {Year} Все права защищены</p>
            <p className="Footer__address">
              <PointIconFooter width={16} hanging={16} />
              <span>10314 Estonia. Tallinn 10314 Lelle Street 22</span>
            </p>
            <Link href="https://faq.miraden.com/legal/privacy-policy/" className="Footer__privacyPolicy">
              Политика конфиденциальности и обработки данных{" "}
            </Link>
          </div>
        </div>
      </StyledFooterBottom>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: relative;
`;

const StyledFooterSocialMobile = styled.div`
  display: none;
  background: #fff;
  .Footer__socialLinksMobile {
    display: none;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-bottom: 32px;

    .Footer__socialLinksMobile {
      display: grid;
      margin-top: 32px;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 12px;

      margin-bottom: 20px;
    }
  }

  .Footer__contactsMobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
  }

  .Footer__telegramLink {
    margin-top: 16px;
    width: 100%;
  }

  a {
    color: #7786a5 !important;
  }
  a:hover {
    color: #4e6af3 !important;
  }
`;

const StyledFooterTopMobile = styled.div`
  display: none;

  .Footer__logoHover {
    position: absolute;
    left: 19.5%;

    opacity: 0;

    :hover {
      opacity: 1;
    }
  }

  .Footer__logo:hover {
    opacity: 0;
  }

  @media (max-width: 960px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e1edfd;

    .Footer__socialLinks {
      justify-content: center;
    }
  }

  @media (max-width: 576px) {
    padding-top: 44px;
    padding-bottom: 32px;

    .Footer__socialLinks {
      display: none;
    }
  }
`;

const StyledFooterTop = styled.div`
  color: #7786a5;
  max-width: 1880px;
  position: relative;
  margin: 0 auto;
  border-radius: 10px 10px 0 0;
  background: #fff;
  .Footer__logoHover {
    position: absolute;
    left: 0;
    opacity: 0;

    :hover {
      opacity: 1;
    }
  }
  .Footer__head {
    padding-top: 80px;
    padding-bottom: 80px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 30px;
  }

  .Footer__info {
    position: relative;
    grid-column: 1 / span 3;
  }

  .Footer__socialLinks {
    display: grid;
    grid-template-columns: repeat(2, 40px);
    grid-gap: 10px;
    margin-top: 46px;

    svg {
      :hover {
        cursor: pointer;
        path {
          transition: 0.15s ease;

          fill: #fff;
        }
        rect {
          transition: 0.15s ease;

          fill: #4e6af3;
        }
      }
    }
  }

  .Footer__description {
    margin-top: 8px;
  }

  .Footer__navLinksLeft {
    grid-column: 5 / span 2;

    a {
      color: #7786a5;
      padding: 0;
      &:hover {
        transition: 0.15s ease;
        text-decoration: none;
        color: ${theme.colors.main};
      }
      &:focus-visible, &:focus {
        outline: none;
      }
    }

    li:not(:first-child) {
      margin-top: 30px;
    }
  }

  .Footer__navLinksRight {
    grid-column: 7 / span 3;
    a {
      color: #7786a5;
      padding: 0;
      &:hover {
        transition: 0.15s ease;
        text-decoration: none;
        color: ${theme.colors.main};
      }
      &:focus-visible &:focus, &:active {
        outline: none;
      }
    }
    li:not(:first-child) {
      margin-top: 30px;
    }
  }

  .Footer__contacts {
    grid-column: 11 / span 2;

    .Link {
      color: ${theme.colors.text.grey};
      &:hover {
        text-decoration: none;
        color: ${theme.colors.main};
      }
      &:focus {
        outline: none;
      }
    }
  }

  .Footer__telegramLink {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
  }

  @media (max-width: 1280px) {
    .Footer__contacts {
      grid-column: 10 / span 3;
    }
  }

  @media (max-width: 1024px) {
    .Footer__head {
      grid-gap: 20px;
    }

    .Footer__description {
      margin-top: 4px;
    }

    .Footer__socialLinks {
      margin-top: 20px;
    }

    .Footer__navLinksRight {
      grid-column: 6 / span 3;
    }

    .Footer__navLinksLeft {
      grid-column: 4 / span 2;
    }
  }

  @media (max-width: 960px) {
    .Container {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .Footer__head {
      padding-top: 20px;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 12px;
      padding-bottom: 34px;
      div {
        justify-content: center;
      }
    }

    .Footer__info {
      display: none;
    }

    .Footer__description {
      max-width: 230px;
    }

    .Footer__navLinksRight {
      grid-row: 2;
      grid-column: 2 / span 2;
    }

    .Footer__navLinksLeft {
      grid-row: 2;
      grid-column: 1 / span 1;
      padding-left: 20px;
    }

    .Footer__navLinksLeft:not(:first-child) {
      margin-top: -25px;
      li {
        margin-top: 25px;
      }
    }

    .Footer__navLinksRight:not(:first-child) {
      margin-top: -25px;

      li {
        margin-top: 25px;
      }
    }

    .Footer__contacts {
      grid-row: 2;
      grid-column: 4 / span 1;
      padding-right: 20px;
      text-align: start;
    }

    .Footer__telegramLink {
      margin-top: 16px;
      margin-bottom: 9px;
    }
  }

  @media (max-width: 576px) {
    .Footer__head {
      padding-top: 24px;
      padding-bottom: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid #e1edfd;

      ul {
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
      }
    }

    .Footer__navLinksLeft:not(:first-child) {
      margin-top: -20px;
      li {
        margin-top: 20px;
      }
    }

    .Footer__navLinksRight:not(:first-child) {
      margin-top: -10px;

      li {
        margin-top: 20px;
      }
    }

    .Footer__contacts {
      display: none;
      padding-left: 20px;
      text-align: center;
    }

    .Footer__socialLinks {
      display: none;
    }
  }
`;

const StyledFooterBottom = styled.div`
  border-top: 1px solid #e1edfd;
  padding: 20px 0 20px;
  max-width: 1880px;
  position: relative;
  margin: 0 auto;
  border-radius: 0 0 10px 10px;
  background: #fff;
  color: #7786a5;

  @media (max-width: 576px) {
    border-radius: 0;
  }

  .Footer__addLinks {
    display: flex;
    grid-gap: 30px;
    align-items: center;
    justify-content: space-between;

    a {
      color: ${theme.colors.text.grey};
      display: flex;
      align-items: center;

      &:hover {
        color: ${theme.colors.main};
        text-decoration: none;
      }

      span {
        margin-left: 5px;
      }
    }
  }

  .Footer__address {
    display: flex;
    align-items: center;
    grid-column: 1 / span 4;

    span {
      margin-left: 5px;
    }
  }

  .Footer__rights {
    grid-column: 6 / span 3;
  }

  .Footer__privacyPolicy {
    padding-left: 16px;
    grid-column: 9 / span 4;

    a {
      color: #7786a5;
      padding: 0;

      :hover {
        transition: 0.15s ease;

        color: #4e6af3;
      }
    }
  }

  @media (max-width: 1024px) {
    .Footer__addLinks {
      grid-gap: 20px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 576px) {
    padding-bottom: 44px;
    .Footer__addLinks {
      display: flex;
      flex-direction: column;
      text-align: center;
      grid-gap: 10px;
    }
  }
`;

export { Footer };
