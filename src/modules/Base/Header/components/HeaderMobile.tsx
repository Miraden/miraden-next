import { Button } from "@/components/ui";
import { BurgerIcon, MiradenLogoMobile } from "@/icons";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  className?: string;
}

const HeaderMobile = ({ className }: Props) => {
  return (
    <StyledHeaderMobile className={className}>
      <div className="Header__mobile">
        <button className="HeaderMobile__menuButton">
          <BurgerIcon />
        </button>
        <Link href="/" className="HeaderMobile__logoLink">
          <MiradenLogoMobile />
        </Link>
        <Button className="HeaderMobile__enterButton Font_12_16_600">
          вход
        </Button>
      </div>
    </StyledHeaderMobile>
  );
};

const StyledHeaderMobile = styled.header`
  width: 100%;
  .Header__mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .HeaderMobile__menuButton {
    padding: 8px 8px 2px 8px;
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
