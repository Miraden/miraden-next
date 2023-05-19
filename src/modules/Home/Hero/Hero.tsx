import { Button } from "@/components/ui";
import styled from "styled-components";
import { HeroStats } from "./HeroStats";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <StyledHero className={className}>
      <div className="Container Hero">
        <div className="Hero__content">
          <h1 className="Font_50_120 sm:Font_26_120">
            Риелторы и застройщики{" "}
            <mark className="Color_blue_primary">Испании</mark> сделают для вас
            персональный подбор
          </h1>
          <p className="Hero__description Font_22_160 sm:Font_16_24 Color_grey_dark">
            Создайте анонимную заявку и получите предложения от независимых
            продавцов
          </p>
          <Button className="Hero__mainButton">Оставить заявку</Button>
        </div>
        <img
          alt=""
          src="./images/HomeHero.svg"
          width={468}
          height={385}
          className="Hero__image"
        />
      </div>
      <HeroStats className="Hero__stats" />
    </StyledHero>
  );
};

const StyledHero = styled.section`
  background: #eef1f5;
  padding-top: 110px;
  padding-bottom: 80px;

  .Hero {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 30px;
  }

  .Hero__content {
    grid-column: 1 / span 7;
  }

  .Hero__description {
    margin-top: 25px;
    max-width: 470px;
  }

  .Hero__mainButton {
    margin-top: 50px;
    max-width: 270px;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .Hero__image {
    grid-column: 8 / span 5;
    img {
      flex-shrink: 0;
    }
  }

  .Hero__stats {
    margin-top: 80px;
  }

  @media (max-width: 1440px) {
    .Hero {
      grid-gap: 20px;
    }

    .Hero__content {
      grid-column: 1 / span 6;
    }

    .Hero__image {
      grid-column: 7 / span 6;
    }
  }

  @media (max-width: 1024px) {
    padding-top: 140px;
    padding-bottom: 34px;

    .Hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      grid-gap: 0;
    }

    .Hero__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .Hero__description {
      max-width: 460px;
    }

    .Hero__mainButton {
      max-width: 270px;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .Hero__image {
      margin-top: 70px;
      width: 460px;
      height: 355px;
    }
  }

  @media (max-width: 576px) {
    padding-top: 60px;

    .Hero__stats {
      margin-top: 50px;
    }

    .Hero__description {
      margin-top: 20px;
    }

    .Hero__mainButton {
      margin-top: 40px;
      padding-top: 15px;
      padding-bottom: 15px;
      max-width: unset;
    }

    .Hero__image {
      margin-top: 48px;
      width: 274px;
      height: 210px;
    }
  }
`;

export { Hero };
