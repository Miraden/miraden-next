import cn from 'classnames'
import styled from 'styled-components'

interface Props {
  className?: string
}

const stats = [
  { text: 'Заявок на покупку и аренду недвижимости', value: '3 521' },
  { text: 'Продавцов и экспертов в сфере недвижимости', value: '908' },
  { text: 'Совершённых сделок через платформу', value: '300 +' },
  { text: 'Среднее количество предложений по заявке', value: '26' },
]

const HeroStats = ({ className }: Props) => {
  return (
    <StyledHeroStats className={cn('Container', className)}>
      <div className="HeroStats">
        <ul className="HeroStats__list">
          {stats.map((stat, index) => (
            <li key={index} className="HeroStats__listItem">
              <div className="HeroStats__statContent">
                <h2 className="Font_50_60 lg:Font_44_120 sm:Font_26_120">
                  {stat.value}
                </h2>
                <p className="HeroStats__description Font_18_160 lg:Font_16_24 Color_grey_dark">
                  {stat.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledHeroStats>
  )
}

const StyledHeroStats = styled.div`
  .HeroStats {
    background: #fff;
    padding: 40px;
    width: 100%;
    border-radius: 6px;
  }

  .HeroStats__list {
    display: flex;
    justify-content: space-between;
  }

  .HeroStats__description {
    margin-top: 10px;
  }

  .HeroStats__listItem {
    /* width: 100%; */
  }

  .HeroStats__statContent {
    max-width: 218px;
    /* width: 100%; */
  }

  .HeroStats__listItem:not(:first-child) {
    margin-left: 30px;
    padding-left: 40px;
    border-left: 2px solid #e1edfd;
  }

  @media (max-width: 1024px) {
    .HeroStats {
      background-color: transparent;
      padding: 0;
    }

    .HeroStats__list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 2;
      grid-gap: 12px;
    }

    .HeroStats__listItem {
      background: #fff;
      padding: 30px 20px;
      border-radius: 10px;
    }

    .HeroStats__listItem:not(:first-child) {
      padding: 30px 20px;
    }

    .HeroStats__description {
      max-width: 220px;
    }

    .HeroStats__listItem:not(:first-child) {
      border-left: none;
      margin-left: 0;
    }
  }

  @media (max-width: 576px) {
    &.Container {
      padding-left: 0;
      padding-right: 0;
    }

    .HeroStats {
      background-color: #fff;
      padding: 20px;
    }
    .HeroStats__list {
      display: flex;
      flex-direction: column;
      grid-gap: 0;
    }

    .HeroStats__listItem {
      padding: 0;
      border-radius: 0;
    }

    .HeroStats__listItem:nth-child(1n) {
      border-right: none;
      padding: 0;
    }

    .HeroStats__listItem:not(:first-child) {
      margin-left: 0;
      padding-left: 0;
      padding-top: 20px;
      margin-top: 20px;
      border-top: 2px solid #e1edfd;
    }

    .HeroStats__statContent {
      max-width: unset;
      display: flex;
      h2 {
        max-width: 68px;
        width: 100%;
        white-space: nowrap;
      }
    }

    .HeroStats__description {
      margin-top: 0;
      margin-left: 28px;
    }
  }
`

export { HeroStats }
