import { Button } from "@/components/ui";
import { TelegramPureIcon } from "@/icons";
import { FacebookIcon } from "@/icons/FacebookIcon";
import { InstagramIcon } from "@/icons/InstagramIcon";
import cn from "classnames";
import Link from "next/link";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { HeaderAccordion } from "./HeaderAccordion";
import { HeaderLanguageAccordion } from "./HeaderLanguageAccordion";

interface Props {
  className?: string;
  isOpen?: boolean;
}

const HeaderMenu = ({ className, isOpen }: Props) => {
  const [expanded, setExpanded] = useState();

  const handleChange = useCallback(
    (panelId: any) => (isExpanded: boolean) =>
      isExpanded ? setExpanded(panelId) : setExpanded(undefined),
    []
  );

  return (
    <StyledHeaderMenu className={cn("", className)}>
      <div className="HeaderMenu__links Font_12_16_600">
        <Link href="/leads">лента заявок</Link>
        <HeaderAccordion
          className="HeaderMenu__accordion Font_12_16_600"
          title="о нас"
          expanded={expanded}
          onChange={handleChange}
        >
          <Link href="#about">о miraden</Link>
          <Link href="/">философия</Link>
          <Link href="/">команда</Link>
        </HeaderAccordion>
        <Link href="/tariffs">тарифы</Link>
        <Link href="https://faq.miraden.com">FAQ</Link>
        <Link href="/lead/add">Создать заявку</Link>
        <Link href="/">ПОДПИСАТЬСЯ НА РАССЫЛКУ</Link>
        <Link href="/user/register">РЕГИСТРАЦИЯ</Link>
        <Link href="/user/login">ВХОД</Link>
        <HeaderLanguageAccordion />
      </div>
      <div className="HeaderMenu__contacts">
        <p className="HeaderMenu__telegramLink Font_14_140">
          Заходите в наш Telegram канал
          <br />
          и будьте в курсе новых заявок
        </p>
        <Button
          leftIcon={<TelegramPureIcon />}
          className="HeaderMenu__button"
          href={"https://t.me/miradencom"}
        >
          Telegram
        </Button>
        <div className="HeaderMenu__socialLinks">
          <Link href="https://www.facebook.com" target={"_blank"}>
            <FacebookIcon />
          </Link>
          <Link href="https://www.instagram.com" target={"_blank"}>
            <InstagramIcon />
          </Link>
        </div>
        <Link href="mailto: info@miraden.com" className="HeaderMenu__emailLink Font_16_140_400">
          info@miraden.com
        </Link>
      </div>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  background: #2a344a;
  width: 100%;
  border-radius: 0 0 20px 20px;
  color: #b8c6e3;
  padding-top: 12px;

  .HeaderMenu__links {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;

    a {
      display: flex;
      width: 100%;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 20px;
      padding-bottom: 20px;
      border-top: 1px solid rgba(119, 134, 165, 0.2);
      :hover {
        background: rgba(119, 134, 165, 0.2);
      }
    }
  }

  .HeaderMenu__accordion {
    border-top: 1px solid #3a465d;
    width: 100%;
    display: flex;
    align-items: start;
    flex-direction: column;
    a {
      border: none;
      font-size: 12px;
      line-height: 16px;
      font-weight: 600;
      letter-spacing: 0.07em;
      text-decoration: none;
      border-bottom: none;
    }
  }

  .HeaderMenu__contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    padding: 0 20px 57px 20px;
  }

  .HeaderMenu__telegramLink {
    color: #b8c6e3;
  }

  .HeaderMenu__button {
    margin-top: 16px;
  }

  .HeaderMenu__socialLinks {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 50px;
    margin-bottom: 20px;
    transition: 0.15s ease;
    a:hover {
      opacity: 0.8;
    }
  }

  .HeaderMenu__emailLink {
    color: #7786a5;
  }

  @media (max-width: 576px) {
    .HeaderMenu__links {
      align-items: start;
    }

    .HeaderMenu__button {
      width: 100%;
    }
  }
`;

export { HeaderMenu };
