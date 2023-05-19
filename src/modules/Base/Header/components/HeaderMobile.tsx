import { Button } from "@/components/ui";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { BurgerIcon, CrossIcon, MiradenLogo, MiradenLogoMobile } from "@/icons";
import Link from "next/link";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderUserMenuMobile } from "./HeaderUserMenuMobile";

interface Props {
  className?: string;
  isAuthorized?: boolean;
}

const HeaderMobile = ({ className, isAuthorized }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useLockBodyScroll(isOpen);

  return (
    <StyledHeaderMobile className={className}>
      <div className="Header__mobile">
        {isAuthorized ? (
          <HeaderUserMenuMobile />
        ) : (
          <>
            <button
              className="HeaderMobile__menuButton"
              onClick={handleOpenMenu}
            >
              {isOpen ? (
                <CrossIcon className="HeaderMobile__closeIcon" />
              ) : (
                <BurgerIcon />
              )}
            </button>
            {isOpen && <HeaderMenu isOpen={isOpen} />}
            {isOpen ? (
              <div className="MiradenLogoContainer">
                <MiradenLogo />
              </div>
            ) : (
              <>
                <Link href="/" className="HeaderMobile__logoLink">
                  <MiradenLogoMobile />
                </Link>
                <Button className="HeaderMobile__enterButton Font_12_16_600">
                  вход
                </Button>
              </>
            )}
          </>
        )}
      </div>
    </StyledHeaderMobile>
  );
};

const StyledHeaderMobile = styled.header`
  overflow: hidden;
  width: 100%;
  .Header__mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .MiradenLogoContainer {
    margin: 0 auto;
    display: flex;

    svg {
      margin-left: -40px;
    }
  }

  .HeaderMobile__menuButton {
    padding: 8px 8px 2px 8px;
  }

  .HeaderMobile__closeIcon {
    width: 24px !important;
    height: 24px;

    path {
      fill: #fff;
    }
  }

  .HeaderMobile__logoLink {
    height: 32px;
  }

  .HeaderMobile__enterButton {
    padding: 12px 24px;
    text-transform: uppercase;
  }
`;

export { HeaderMobile };
