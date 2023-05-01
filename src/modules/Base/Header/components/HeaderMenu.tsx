import { Button } from "@/components/ui";
import { TelegramPureIcon } from "@/icons";
import { FacebookIcon } from "@/icons/FacebookIcon";
import { InstagramIcon } from "@/icons/InstagramIcon";
import cn from "classnames";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  className?: string;
  isOpen?: boolean;
}

const HeaderMenu = ({ className, isOpen }: Props) => {
  return (
    <StyledHeaderMenu className={cn("", className, { Test: isOpen })}>
      <div className="HeaderMenu__links Font_12_16_600">
        <Link href="/">лента заявок</Link>
        <Link href="/">о нас</Link>
        <Link href="/">тарифы</Link>
        <Link href="/">FAQ</Link>
        <Link href="/">ПОЛУЧИТЬ ПОДБОРКУ</Link>
        <Link href="/">ПОДПИСАТЬСЯ НА РАССЫЛКУ</Link>
        <Link href="/">РЕГИСТРАЦИЯ</Link>
        <Link href="/">ВХОД</Link>
      </div>
      <div className="HeaderMenu__contacts">
        <p className="HeaderMenu__telegramLink Font_14_140">
          Заходите в наш Telegram канали будьте в курсе новых заявок
        </p>
        <Button leftIcon={<TelegramPureIcon />} className="HeaderMenu__button">
          Telegram
        </Button>
        <div className="HeaderMenu__socialLinks">
          <Link href="">
            <FacebookIcon />
          </Link>
          <Link href="">
            <InstagramIcon />
          </Link>
        </div>
        <Link href="" className="HeaderMenu__emailLink Font_16_140_400">
          info@miraden.com
        </Link>
      </div>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.div`
  position: absolute;
  top: 102px;
  left: 0;
  background: #2a344a;
  width: 100%;
  border-radius: 0 0 20px 20px;
  color: #b8c6e3;
  padding-top: 12px;
  .Test {
    display: block;
  }

  .HeaderMenu__links {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;

    a {
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 20px;
      padding-bottom: 20px;
      border-top: 1px solid rgba(119, 134, 165, 0.2);
      :hover {
        background: rgba(119, 134, 165, 0.2);
      }
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
