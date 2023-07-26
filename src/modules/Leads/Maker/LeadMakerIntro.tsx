import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import styled from 'styled-components'

const steps = [
  {
    title: (
      <div>
        <mark>Создайте</mark>
        <br /> анонимную заявку
      </div>
    ),
    description:
      'Ответьте на несколько простых вопросов о недвижимости, которую хотите найти',
    image: '/images/create/1.svg',
  },
  {
    title: (
      <div>
        <mark>Получите</mark>
        <br />
        предложения
      </div>
    ),
    description:
      'Риелторы и собственники сделают для вас персональные предложения и подборки объектов',
    image: '/images/create/2.svg',
  },
  {
    title: (
      <div>
        <mark>Выберите</mark>
        <br /> лучших исполнителей
      </div>
    ),
    description:
      'Обменяйтесь контактами с подходящими исполнителями для обсуждения деталей',
    image: '/images/create/3.svg',
  },
]

type SliderDotsProps = {
  count: number
  currentSlide: number
  onDotClick: any
}

const SliderDots = ({ count, currentSlide, onDotClick }: SliderDotsProps) => {
  return (
    <div className="slider-dots">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={currentSlide === index ? 'active' : ''}
          onClick={() => onDotClick(index)}
        >
          <span></span>
        </button>
      ))}
    </div>
  )
}

const LeadMakerIntro = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <StyledIntro>
      <div className="Reg__options">
        <ul className="Reg__Steps">
          {steps.map((step, index) => (
            <li key={index} className="Reg__step">
              <div className="Reg__imageContainer">
                <Image src={step.image} alt="" width={140} height={140} />
              </div>
              <div className="Reg__listItemContent">
                <h3 className="Reg__listItemTitle Font_20_24_500 lg:Font_18_120_500">
                  {step.title}
                </h3>
                <p className="Reg__listItemDescription Font_16_24 Color_text_grey">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="Reg__StepsMobile keen-slider" ref={sliderRef}>
          {steps.map((step, index) => (
            <li key={index} className="Reg__step keen-slider__slide">
              <div className="Reg__imageContainer">
                <Image src={step.image} alt="" width={200} height={200} />
              </div>
              <div className="Reg__listItemContent">
                <h3 className="Reg__listItemTitle Font_20_120 lg:Font_18_120_500 sm:Font_18_120_500">
                  {step.title}
                </h3>
                <p className="Reg__listItemDescription Font_16_24 Color_text_grey">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <SliderDots
          count={steps.length}
          currentSlide={currentSlide}
          onDotClick={(e: number) => {
            instanceRef.current?.moveToIdx(e)
          }}
        />
      </div>
    </StyledIntro>
  )
}

const StyledIntro = styled.section`
  .slider-dots {
    justify-content: center;
    margin-top: 36px;
    display: none;
  }

  .slider-dots button {
    background: none;
    padding: 16px;

    span {
      width: 8px;
      height: 8px;
      display: block;
      border-radius: 50%;
      border: none;
      background-color: #eff3fb;
      cursor: pointer;
    }

    &.active span {
      background-color: #4e6af3;
    }
  }

  .Reg__options {
    padding: 50px 30px 0 30px;
    justify-content: center;
  }

  .Reg__Steps {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  .Reg__StepsMobile {
    display: none;
  }

  .Reg__step {
    max-width: 250px;
    width: 100%;
  }

  .Reg__step:not(:first-child) {
    margin-left: 60px;
  }

  .Reg__imageContainer {
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
  }

  .Reg__listItemTitle {
    margin-top: 10px;

    mark {
      background: none;
      color: #4e6af3;
    }
  }

  .Reg__listItemDescription {
    margin-top: 10px;
  }

  @media (max-width: 960px) {
    margin-top: 10px;
    .Reg__options {
      padding: 50px 30px 50px 30px;
      height: auto;
    }

    .Reg__Steps {
      flex-direction: column;
    }

    .Reg__step {
      margin-left: 0;
      display: flex;
      max-width: unset;
    }

    .Reg__listItemContent {
      max-width: 320px;
      margin-left: 60px;
    }

    .Reg__step:not(:first-child) {
      border-top: 2px solid #e1edfd;
      margin-left: 0;
      padding-top: 30px;
      margin-top: 28px;
    }
  }

  @media (max-width: 576px) {
    margin-top: 0;
    .slider-dots {
      display: flex;
    }

    .Reg__StepsMobile {
      display: flex;
      overflow: hidden;
    }

    .Reg__Steps {
      display: none;
    }

    .Reg__options {
      padding: 48px 50px;
      display: flex;
      flex-direction: column;
      grid-gap: 12px;
      flex-grow: 1;
    }

    .Reg__step {
      text-align: center;
      flex-direction: column;
    }

    .Reg__step:not(:first-child) {
      border-top: none;
      margin-left: 0;
      padding-top: 0;
      margin-top: 0;
    }

    .Reg__listItemContent {
      max-width: 260px;
      margin: 0 auto;
    }

    .Reg__imageContainer {
      flex-flow: row-reverse;
      justify-content: center;
    }
  }
`

export default LeadMakerIntro
