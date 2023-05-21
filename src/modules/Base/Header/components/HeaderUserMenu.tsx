import { Button } from "@/components/ui";
import { MessagesIcon, PlusIcon, StarIcon } from "@/icons";
import { WalletIcon } from "@/icons/WalletIcon";
import styled from "styled-components";

const HeaderUserMenu = () => {
  return (
    <StyledHeaderUserMenu>
      <div className="HeaderUserMenu">
        <div className="HeaderUserMenu__links">
          <Button
            header
            className="HeaderUserMenu__linkButton"
            leftIcon={<MessagesIcon />}
          ></Button>
          <Button
            href="/favourites-full"
            header
            className="HeaderUserMenu__linkButton"
            leftIcon={<StarIcon className="HeaderUserMenu__favorites" />}
          ></Button>
          <Button
            header
            className="HeaderUserMenu__linkButton"
            leftIcon={<WalletIcon />}
          >
            0 €
          </Button>
        </div>

        <div className="HeaderUserMenu__buttons">
          <Button
            href="/customer/create-1"
            leftIcon={<PlusIcon />}
            className="HeaderUserMenu__createButton Font_12_16_600"
          >
            создать
          </Button>
          <button>
            <div className="User Font_16_140 Color_white">
              <span>A</span>
            </div>
          </button>
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

  .HeaderUserMenu__links {
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
