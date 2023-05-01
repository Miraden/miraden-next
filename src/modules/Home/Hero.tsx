import { Button, Link } from "@/components/ui";
import { HomeHeroImage } from "@/images/HomeHeroImage";
import styled from "styled-components";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <StyledHero className={className}>
      <div className="Container Hero">
        <div className="Hero__content">
          <h1 className="Font_50_120">
            Риелторы и застройщики{" "}
            <mark className="Color_blue_primary">Испании</mark> сделают для вас
            персональный подбор
          </h1>
          <p className="Hero__description Font_18_160">
            Создайте анонимную заявку и получите предложения от независимых
            продавцов
          </p>
          <Button className="Hero__mainButton">Оставить заявку</Button>
          <Link href="/" className="Hero__addLink">
            Как это работает?
          </Link>
        </div>
        <div className="Hero__image">
          <HomeHeroImage />
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  background: #eef1f5;
  padding-top: 174px;
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
    max-width: 370px;
  }

  .Hero__mainButton {
    margin-top: 50px;
    max-width: 270px;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .Hero__addLink {
    display: none;
  }

  .Hero__image {
    grid-column: 8 / span 5;
  }
`;

export { Hero };
