import { Button } from "@/components/ui";
import {
  AboutUsIcon,
  FaqIcon,
  HomeIcon,
  ListItemsIcon,
  MiradenLogo,
  PricingHeaderIcon,
} from "@/icons";
import { ApplicationsListIcon } from "@/icons/ApplicationsListIcon";
import cn from "classnames";
import Link from "next/link";
import styled from "styled-components";
import { HeaderLocalization } from "./HeaderLocalization";
import { HeaderUserMenu } from "./HeaderUserMenu";
interface Props {
  className?: string;
  isAuthorized?: boolean;
}

const HeaderDesktop = ({ className, isAuthorized }: Props) => {
  return (
    <StyledHeaderDesktop className={className}>
      <div>
        <div className="Header__links">
          <Link href="/" className="Header__logoLink">
            <MiradenLogo />
          </Link>
          <Button
            header
            leftIcon={<ListItemsIcon />}
            className="Header__navButton"
          >
            лента заявок
          </Button>
          {isAuthorized ? (
            <>
              <Button
                href="/applications-full"
                header
                leftIcon={<ApplicationsListIcon />}
                className={cn("Header__navButton")}
              >
                мои заявки
              </Button>
              <Button
                header
                leftIcon={<HomeIcon />}
                className="Header__navButton"
              >
                мои объекты
              </Button>
            </>
          ) : (
            <>
              <Button
                header
                leftIcon={<AboutUsIcon />}
                className="Header__navButton"
              >
                о нас
              </Button>
              <Button
                header
                leftIcon={<PricingHeaderIcon />}
                className="Header__navButton"
              >
                тарифы
              </Button>
              <Button
                header
                leftIcon={<FaqIcon />}
                className="Header__navButton"
              >
                FAQ
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="Header__userButtons">
        {isAuthorized ? (
          <HeaderUserMenu />
        ) : (
          <>
            <HeaderLocalization />
            <Button header className="Header__enterButton">
              вход
            </Button>
            <Button className="Header__registrationButton Font_12_16_600">
              регистрация
            </Button>
          </>
        )}
      </div>
    </StyledHeaderDesktop>
  );
};

const StyledHeaderDesktop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;

  .Header__links {
    display: flex;
    align-items: center;
  }

  .Header__logoLink {
    height: 30px;
    margin-right: 20px;
  }

  .Header__navButton {
    margin-left: 30px;
    :not(:first-child) {
      margin-left: 10px;
    }
  }

  .Header__userButtons {
    display: flex;
    align-items: center;
  }

  .Header__enterButton {
    margin-left: 16px;
  }

  .Header__registrationButton {
    margin-left: 10px;
    padding: 12px 24px;
    text-transform: uppercase;
  }

  @media (max-width: 1090px) {
    display: none;
  }
`;

export { HeaderDesktop };
