import { Button } from "@/components/ui";
import { MessagesIcon, PlusIcon, StarIcon } from "@/icons";
import { WalletIcon } from "@/icons/WalletIcon";
import { useRouter } from "next/router";
import styled from "styled-components";

const HeaderUserMenu = () => {
  const router = useRouter();
  const currentUrl = router.pathname;
  return (
    <StyledHeaderUserMenu>
      <div className="HeaderUserMenu">
        <div className="HeaderUserMenu__links">
          <Button
            header
            className="HeaderUserMenu__linkButton"
            leftIcon={<MessagesIcon />}
            active={currentUrl === '/chats'}
            href="/chats"
          ></Button>
          <Button
            href="/favorites"
            header
            className="HeaderUserMenu__linkButton"
            active={currentUrl === '/favorites'}
            leftIcon={<StarIcon attr={{className: "HeaderUserMenu__favorites"}} />}
          ></Button>
          <Button
            header
            className="HeaderUserMenu__linkButton"
            leftIcon={<WalletIcon />}
          >
            0 €
          </Button>
        </div>

        <div className="HeaderUserMenu__buttons">
          <Button
            href="/lead/add"
            leftIcon={<PlusIcon />}
            className="HeaderUserMenu__createButton Font_12_16_600"
          >
            создать
          </Button>
          <Button href={"/profile"} className={"UserName"}>
            <div className="User Font_16_140 Color_white">
              <span>A</span>
            </div>
          </Button>
        </div>
      </div>
    </StyledHeaderUserMenu>
  );
};

const StyledHeaderUserMenu = styled.div`
  .HeaderUserMenu,
  .HeaderUserMenu__links,
  .HeaderUserMenu__buttons {
    display: flex;
    align-items: center;
  }

  .HeaderUserMenu__buttons {
    gap: 20px;
  }

  .Button_regular.UserName {
    padding: 0;
  }

  .HeaderUserMenu__links {
    a:not(:first-child),
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

  .HeaderUserMenu__buttons {
    margin-left: 10px;
    button:not(:first-child) {
      margin-left: 20px;
    }
  }

  .HeaderUserMenu__createButton {
    text-transform: uppercase;
    padding: 11px 24px;
  }

  .HeaderUserMenu__wallet {
    path {
      stroke: #fff;
    }
  }

  .User {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #8ec2b9;
  }
`;

export { HeaderUserMenu };
