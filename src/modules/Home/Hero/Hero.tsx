import { Button } from '@/components/ui'
import styled from 'styled-components'
import { HeroStats } from './HeroStats'
import { theme } from '../../../../styles/tokens'
import Image from 'next/image'

interface HeroProps {
  className?: string
}

const Hero = ({ className }: HeroProps) => {
  return (
    <StyledHero className={className}>
      <div className="Container Hero">
        <div className="Hero__content">
          <h1 className="Font_headline_1 HeroTitle">
            Персональный подбор от{' '}
            <mark className="Color_blue_primary">риелторов и застройщиков</mark>{' '}
            <span className="nobr">из 7 стран</span> мира
          </h1>
          <p className="Hero__description Font_body_base">
            Создайте анонимную заявку и получите предложения от независимых
            продавцов
          </p>
          <Button href={'/lead/add'} className="Hero__mainButton">
            Оставить заявку
          </Button>
        </div>
        <Image
          alt="Hero"
          src="/images/HomeHero.png"
          width={470}
          height={360}
          className="Hero__image"
        />
      </div>
      <HeroStats className="Hero__stats" />
    </StyledHero>
  )
}

const StyledHero = styled.section`
  background: #eef1f5;
  padding-top: 110px;
  padding-bottom: 80px;

  .Hero {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 30px;
  }

  .HeroTitle {
    font-weight: 700;
    font-size: 50px;
  }

  .Hero__content {
    grid-column: 1 / span 7;
  }

  .Hero__description {
    margin-top: 25px;
    max-width: 470px;
    font-size: 22px;
    color: #3b4a69;
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
    width: 470px;
    height: 360px;
    object-fit: contain;

    img {
      flex-shrink: 0;
    }
  }

  .Hero__stats {
    margin-top: 80px;
  }

  @media (min-width: ${theme.breakpoints.desktop.min +
    'px'}) and (max-width: ${theme.breakpoints.desktop.max + 'px'}) {
    .Hero {
      grid-gap: 20px;
    }

    .Hero__content {
      grid-column: 1 / span 7;
    }

    .Hero__image {
      grid-column: 8 / span 5;
    }
  }

  @media (min-width: ${theme.breakpoints.tablet.min +
    'px'}) and (max-width: ${theme.breakpoints.tablet.max + 'px'}) {
    padding-top: 80px;
    padding-bottom: 34px;

    .Hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      grid-gap: 0;
    }

    .HeroTitle {
      font-size: 50px;
    }

    .Hero__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 0 20px;
    }

    .Hero__description {
      max-width: 460px;
      font-size: 22px;
    }

    .Hero__mainButton {
      max-width: 270px;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .Hero__image {
      margin-top: 60px;
      width: 350px;
      height: 286px;
    }
  }

  @media (min-width: ${theme.breakpoints.mobile.min +
    'px'}) and (max-width: ${theme.breakpoints.mobile.max + 'px'}) {
    padding-top: 60px;
    padding-bottom: 50px;

    .Hero {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

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

    .HeroTitle {
      font-size: 32px;
    }

    .Hero__description {
      font-size: 16px;
    }

    .Hero__image {
      width: 274px;
      height: 210px;
      margin: 0 auto;
    }
  }
`

export { Hero }
