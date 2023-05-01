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
              <p className="Footer__description">
                Miraden — биржа заявок в сфере зарубежной недвижимости
              </p>
              <div className="Footer__socialLinks">
                <FacebookIconFooter />
                <InstagramIconFooter />
              </div>
            </div>
            <ul className="Footer__navLinks Font_16_24">
              {linksLeft.map((link, index) => (
                <li key={index}>
                  <Link href="/">
                    <p>{link.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="Footer__navLinks Font_16_24">
              {linksRight.map((link, index) => (
                <li key={index}>
                  <Link href="/">
                    <p>{link.label}</p>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="Footer__contacts">
              <p>Заходите в наш Telegram канал и будьте в курсе новых заявок</p>
              <Button
                leftIcon={<TelegramPureIcon />}
                className="Footer__telegramLink"
              >
                Telegram
              </Button>
              <Link href="/">info@miraden.com</Link>
            </div>
          </div>
        </div>
      </StyledFooterTop>
      <StyledFooterBottom>
        <div className="Container">
          <div className="Footer__addLinks">
            <a>
              <PointIconFooter />
              <span>10314 Estonia. Tallinn 10314 Pikk tn 62-6</span>
            </a>
            <p>© 2023 Все права защищен</p>
            <a>Политика конфиденциальности и обработки данных </a>
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

  .Footer {
  }

  .Footer__head {
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
    justify-content: space-between;
  }

  .Footer__info {
    max-width: 270px;
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

  .Footer__navLinksContainer {
    display: flex;
    ul:not(:first-child) {
      margin-left: 30px;
    }
  }

  .Footer__navLinks {
    display: flex;
    flex-direction: column;
    a {
      color: #7786a5;
      padding: 0;
    }
  }

  .Footer__contacts {
    max-width: 210px;
  }

  .Footer__telegramLink {
    margin-top: 20px;
    margin-bottom: 39px;
    width: 100%;
  }
`;

const StyledFooterBottom = styled.div`
  border-top: 2px solid #e1edfd;
  padding: 20px 0;
  max-width: 1880px;
  position: relative;
  bottom: 20px;
  margin: 0 auto;
  border-radius: 0 0 10px 10px;
  background: #fff;
  color: #7786a5;

  .Footer__addLinks {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      span {
        margin-left: 5px;
      }
    }
  }
`;

export { Footer };
