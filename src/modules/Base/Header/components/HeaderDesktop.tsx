import { Button } from "@/components/ui";
import {
  AboutUsIcon,
  FaqIcon,
  HomeIcon,
  ListIcon,
  MiradenLogo,
  MiradenLogoMobile,
  PricingHeaderIcon,
} from "@/icons";
import { ApplicationsListIcon } from "@/icons/ApplicationsListIcon";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { HeaderLocalization } from "./HeaderLocalization";
import { HeaderUserMenu } from "./HeaderUserMenu";
import { More } from "./MoreDropdown/More";

interface Props {
  className?: string;
  isAuthorized?: boolean;
}

const HeaderDesktop = ({ className, isAuthorized }: Props) => {
  const router = useRouter();
  const currentUrl = router.pathname;
  return (
    <StyledHeaderDesktop className={className}>
      <div>
        <div className="Header__links">
          <Link href="/" className="Header__logoLink">
            <MiradenLogo className="Logo" />
            <MiradenLogoMobile className="Logo__mobile" />
          </Link>
          <Button
            header
            href="/leads"
            leftIcon={<ListIcon />}
            className="Header__navButton"
            active={currentUrl.includes("leads")}
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
                active={currentUrl.includes("application")}
              >
                мои заявки
              </Button>
              <Button
                href="/objects-plug"
                header
                leftIcon={<HomeIcon />}
                className="Header__navButton"
                active={currentUrl.includes("objects")}
              >
                мои объекты
              </Button>
              <More />
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
            <Button header className="Header__enterButton" href="/user/login">
              вход
            </Button>
            <Button className="Header__registrationButton Font_12_16_600" href="/user/register">
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

  .Logo__mobile {
    display: none;
  }

  .Header__links {
    display: flex;
    align-items: center;
  }

  .Header__logoLink {
    height: 30px;
    margin-right: 30px;
  }

  .Header__navButton:not(:first-child) {
    margin-right: 10px;
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

  @media (max-width: 1220px) {
    .Header__navButton {
      margin-left: 0 !important;
      padding: 11px 15px;
      :not(:first-child) {
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 1180px) {
    .Header__logoLink {
      margin-right: 10px;
    }
    .Header__navButton {
      svg {
        display: none;
      }
    }

    .Logo__mobile {
      display: flex;
    }

    .Logo {
      display: none;
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export { HeaderDesktop };
