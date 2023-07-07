import { Button } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const steps = [
  {
    title: (
      <div>
        <mark>Создайте </mark>
        <br /> анонимную заявку
      </div>
    ),
    description:
      "Ответьте на несколько простых вопросов о недвижимости, которую хотите найти",
    image: "/images/create/1.svg",
  },
  {
    title: (
      <div>
        <mark>Получите </mark>
        <br />
        предложения
      </div>
    ),
    description:
      "Риелторы и собственники сделают для вас персональные предложения и подборки объектов",
    image: "/images/create/2.svg",
  },
  {
    title: (
      <div>
        <mark>Выберите </mark>
        <br /> лучших исполнителей
      </div>
    ),
    description:
      "Обменяйтесь контактами с подходящими исполнителями для обсуждения деталей",
    image: "/images/create/3.svg",
  },
];

type SliderDotsProps = {
  count: number;
  currentSlide: number;
  onDotClick: any;
};

const SliderDots = ({ count, currentSlide, onDotClick }: SliderDotsProps) => {
  return (
    <div className="slider-dots">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={currentSlide === index ? "active" : ""}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};

const CreateStart = ({ className }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <StyledCreateStep1 className={className}>
      <div className="Reg">
        <div className="Reg__headContainer">
          <div className="Reg__head">
            <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
              Как это работает?
            </h1>
          </div>
        </div>
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
            onDotClick={() => {
              instanceRef.current?.moveToIdx;
            }}
          />
        </div>
        <div className="Reg__footerContainer">
          <div className="Reg__progressBar"></div>

          <div className="Reg__footer">
            <div className="Reg__footerBack">
              <Button secondary href="/" className="Reg__goBackButton">
                На главную
              </Button>
              <Button
                secondary
                href="/"
                leftIcon={<ArrowIcon />}
                className="Reg__goBackButtonMobile"
              ></Button>
            </div>
            <Button href="/lead/add/1">Далее</Button>
          </div>
        </div>
      </div>
    </StyledCreateStep1>
  );
};

const StyledCreateStep1 = styled.section`
  background: #fff;
  border-radius: 10px;
  margin-top: 150px;

  .slider-dots {
    display: flex;
    justify-content: center;
    margin-top: 64px;
    display: none;
  }

  .slider-dots button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background-color: #eff3fb;
    margin: 0 15px;
    cursor: pointer;
  }

  .slider-dots button.active {
    background-color: #4e6af3;
  }

  .Reg__head {
    padding: 30px 30px 18px 30px;
    border-bottom: 2px solid #f1f7ff;
  }

  .Reg__options {
    padding: 50px 30px 0 30px;
    height: 416px;
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

  .Reg__counter {
    margin-left: 10px;
    margin-bottom: 10px;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    padding: 4px;
    border-radius: 50%;
    background: #4e6af3;
    height: fit-content;
    color: #ffffff;
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

  .Reg__progressBar {
    position: relative;
    height: 6px;
    background-color: #d4ddee;
  }

  .Reg__footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
  }

  .Reg__footerSteps {
    margin-left: 30px;

    span:last-child {
      margin-left: 4px;
    }
  }

  .Reg__footerCount {
    margin-left: 10px;
  }

  .Reg__footerBack {
    display: flex;
    align-items: center;
  }

  .Reg__goBackButtonMobile {
    display: none;
  }

  @media (max-width: 1200px) {
    margin-top: 100px;
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
    height: 100vh;
    .Reg {
      height: 100%;
    }
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

    .Reg__head {
      padding: 20px 20px 16px 20px;
    }

    .Reg__options {
      padding: 48px 50px;
      padding: 0;
      display: flex;
      flex-direction: column;
      grid-gap: 12px;
      height: 642px;
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

    .Reg__goBackButton {
      display: none;
    }

    .Reg__footer {
      padding: 20px;
    }

    .Reg__footerSteps {
      margin-left: 20px;
    }

    .Reg__goBackButtonMobile {
      padding: 16px;
      display: flex;
      svg {
        transform: rotate(-90deg);
        path {
          fill: none !important;
        }
      }
    }
    .Reg__headContainer {
      position: sticky;
      top: 0;
      background: #fff;
      width: 100%;
    }

    .Reg__footerContainer {
      position: fixed;
      bottom: 0;
      width: 100%;
      background: #fff;
    }
  }
`;

export { CreateStart };
