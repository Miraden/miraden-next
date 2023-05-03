import { Button, Link } from "@/components/ui";
import { MiradenLogoFooter, PointIconFooter, TelegramPureIcon } from "@/icons";
import { FacebookIconFooter } from "@/icons/FacebookIconFooter";
import { InstagramIconFooter } from "@/icons/InstagramIconFooter";
import styled from "styled-components";

interface FooterProps {
  className?: string;
}

const linksLeft = [
  { label: "Лента заявок" },
  { label: "О нас" },
  { label: "Тарифы" },
  { label: "FAQ" },
];

const linksRight = [
  { label: "Получить подборку" },
  { label: "Подписаться на рассылку" },
  { label: "Регистрация" },
  { label: "Вход" },
];

const Footer = ({ className }: FooterProps) => {
  return (
    <StyledFooter>
      <StyledFooterTop className={className}>
        <div className="Footer">
          <div className="Footer__head Container">
            <div className="Footer__info">
              <MiradenLogoFooter className="Footer__logo" />
              <p className="Footer__description Font_14_140">
                Miraden — биржа заявок в сфере зарубежной недвижимости
              </p>
              <div className="Footer__socialLinks">
                <FacebookIconFooter />
                <InstagramIconFooter />
              </div>
            </div>
            <ul className="Footer__navLinksLeft Font_16_24 lg:Font_14_140">
              {linksLeft.map((link, index) => (
                <li key={index}>
                  <Link href="/">
                    <p>{link.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="Footer__navLinksRight Font_16_24 lg:Font_14_140">
              {linksRight.map((link, index) => (
                <li key={index}>
                  <Link href="/">
                    <p>{link.label}</p>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="Footer__contacts Font_14_140">
              <p>Заходите в наш Telegram канал и будьте в курсе новых заявок</p>
              <Button
                leftIcon={<TelegramPureIcon />}
                className="Footer__telegramLink"
              >
                Telegram
              </Button>
              <Link href="/" className="Font_16_20 lg:Font_14_140">
                info@miraden.com
              </Link>
            </div>
          </div>
        </div>
      </StyledFooterTop>
      <StyledFooterBottom>
        <div className="Container">
          <div className="Footer__addLinks">
            <p className="Footer__address">
              <PointIconFooter width={16} hanging={16} />
              <span>10314 Estonia. Tallinn 10314 Pikk tn 62-6</span>
            </p>
            <p className="Footer__rights">© 2023 Все права защищен</p>
            <a className="Footer__privacyPolicy">
              Политика конфиденциальности и обработки данных{" "}
            </a>
          </div>
        </div>
      </StyledFooterBottom>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;

const StyledFooterTop = styled.div`
  color: #7786a5;
  max-width: 1880px;
  position: relative;
  bottom: 20px;
  margin: 0 auto;
  border-radius: 10px 10px 0 0;
  background: #fff;

  .Footer__head {
    padding-top: 80px;
    padding-bottom: 80px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 30px;
  }

  .Footer__info {
    grid-column: 1 / span 3;
  }

  .Footer__socialLinks {
    display: grid;
    grid-template-columns: repeat(2, 40px);
    grid-gap: 10px;
    margin-top: 46px;
  }

  .Footer__description {
    margin-top: 10px;
  }

  .Footer__navLinksLeft {
    grid-column: 5 / span 2;
    a {
      color: #7786a5;
      padding: 0;
    }

    li:not(:first-child) {
      margin-top: 25px;
    }
  }

  .Footer__navLinksRight {
    grid-column: 7 / span 3;
    a {
      color: #7786a5;
      padding: 0;
    }
    li:not(:first-child) {
      margin-top: 25px;
    }
  }

  .Footer__contacts {
    grid-column: 11 / span 2;
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
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 12px;
      div {
        justify-content: center;
      }
    }

    .Footer__info {
      grid-column: 2 / span 2;
      text-align: center;
      /* border-bottom: 1px solid #e1edfd; */
      padding-bottom: 20px;
      margin-bottom: 32px;
      justify-self: center;
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
      padding-top: 44px;
      padding-bottom: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;

      ul {
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
      }
    }

    .Footer__contacts {
      padding-left: 20px;
      text-align: center;
    }
  }
`;

const StyledFooterBottom = styled.div`
  border-top: 1px solid #e1edfd;
  padding: 20px 0;
  max-width: 1880px;
  position: relative;
  bottom: 20px;
  margin: 0 auto;
  border-radius: 0 0 10px 10px;
  background: #fff;
  color: #7786a5;

  .Footer__addLinks {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 30px;
    align-items: center;
    a {
      display: flex;
      align-items: center;
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
    padding-left: 21px;
    grid-column: 9 / span 4;
  }

  @media (max-width: 1024px) {
    .Footer__addLinks {
      grid-gap: 20px;
    }
  }

  @media (max-width: 960px) {
    .Footer__addLinks {
      display: flex;
      flex-direction: column;
      text-align: center;
      grid-gap: 10px;
    }
  }
`;

export { Footer };
