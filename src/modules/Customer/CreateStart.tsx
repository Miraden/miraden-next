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
    title: "Вы создаёте анонимную заявку",
    description:
      "Отвечаете на 10 простых вопросов о недвижимости, которую хотите найти",
    image: "/images/HowItWorks.svg",
    step: "1",
  },
  {
    title: "Сервис публикует заявку в ленте",
    description: "Самые подходящие исполнители получают уведомление о заявке",
    image: "/images/HowItWorks.svg",
    step: "2",
  },
  {
    title: "Исполнители делают вам предложения",
    description:
      "Получаете персональные предложения и подборки от независимых исполнителей",
    image: "/images/HowItWorks.svg",
    step: "3",
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
      <div className="">
        <div className="Reg__head">
          <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
            Как это работает?
          </h1>
        </div>
        <div className="Reg__options">
          <ul className="Reg__Steps">
            {steps.map((step, index) => (
              <li key={index} className="Reg__step">
                <div className="Reg__imageContainer">
                  <Image src={step.image} alt="" width={95} height={136} />
                  <p className="Reg__counter Font_14_140">{step.step}</p>
                </div>
                <div className="Reg__listItemContent">
                  <h3 className="Reg__listItemTitle Font_20_120 lg:Font_18_120_500">
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
                  <Image src={step.image} alt="" width={95} height={136} />
                  <p className="Reg__counter Font_14_140">{step.step}</p>
                </div>
                <div className="Reg__listItemContent">
                  <h3 className="Reg__listItemTitle Font_20_120 lg:Font_18_120_500">
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
          <Button href="/customer/reg-2">Начать</Button>
        </div>
      </div>
    </StyledCreateStep1>
  );
};

const StyledCreateStep1 = styled.section`
  background: #fff;
  border-radius: 10px;

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
    padding: 50px 80px;
    justify-content: center;
  }

  .Reg__Steps {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .Reg__StepsMobile {
    display: none;
  }

  .Reg__step {
    max-width: 230px;
  }

  .Reg__step:not(:first-child) {
    margin-left: 26px;
  }

  .Reg__imageContainer {
    display: flex;
    align-items: flex-end;
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

  @media (max-width: 960px) {
    .Reg__options {
      padding: 50px 30px;
    }

    .Reg__step {
      margin-left: 0;
      max-width: 220px;
    }
  }

  @media (max-width: 576px) {
    .slider-dots {
      display: flex;
    }

    .Reg__StepsMobile {
      display: flex;
    }

    .Reg__Steps {
      display: none;
    }

    .Reg__head {
      padding: 20px;
    }

    .Reg__options {
      padding: 48px 50px;
      padding: 0;
      display: flex;
      flex-direction: column;
      grid-gap: 12px;
      height: 566px;
    }

    .Reg__step {
      text-align: center;
    }

    .Reg__step:not(:first-child) {
      margin-left: 0;
    }

    .Reg__listItemContent {
      max-width: 260px;
      margin: 0 auto;
    }

    .Reg__imageContainer {
      flex-flow: row-reverse;
      justify-content: center;
      img {
        width: 141px;
        height: 220px;
      }
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
  }
`;

export { CreateStart };
