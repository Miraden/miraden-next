import { Button } from "@/components/ui";
import { MessagesIcon, MiradenLogoMobile, StarIcon } from "@/icons";
import { WalletIcon } from "@/icons/WalletIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { HeaderMenu } from "./HeaderMenu";

const HeaderUserMenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const router = useRouter();
  const currentUrl = router.pathname;
  return (
    <StyledHeaderUserMenuMobile>
      <Link href="/" className="HeaderMobile__logoLink">
        <MiradenLogoMobile />
      </Link>
      <div className="HeaderUserMenu">
        <div className="HeaderUserMenu__links">
          <Button
            href="/chats-all"
            header
            className="HeaderUserMenu__linkButton"
            leftIcon={<MessagesIcon />}
            active={currentUrl.includes("all")}
          ></Button>
          <Button
            header
            href="/favourites-full"
            className="HeaderUserMenu__linkButton"
            leftIcon={<StarIcon attr={{className: "HeaderUserMenu__favorites"}} />}
            active={currentUrl.includes("favourites")}
          ></Button>
          <Button
            header
            className="HeaderUserMenu__linkButton"
            leftIcon={<WalletIcon />}
          >
            0 €
          </Button>
        </div>
        <button onClick={handleOpenMenu}>
          <div className="User Font_16_140 Color_white">
            <span>A</span>
          </div>
        </button>
        {isOpen && <HeaderMenu isOpen={isOpen} />}
      </div>
    </StyledHeaderUserMenuMobile>
  );
};

const StyledHeaderUserMenuMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .HeaderUserMenu {
    display: flex;
  }

  .HeaderUserMenu__links,
  .HeaderUserMenu__buttons {
    display: flex;
    align-items: center;
  }

  .HeaderUserMenu__links {
    a:not(:first-child) {
      margin-left: 8px;
    }
    button:not(:first-child) {
      margin-left: 8px;
    }
  }

  .HeaderUserMenu__linkButton {
    padding: 11px;
  }

  .HeaderUserMenu__favorites {
    path {
      fill: #fff;
    }
  }

  .User {
    margin-left: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #8ec2b9;
  }
`;

export { HeaderUserMenuMobile };
