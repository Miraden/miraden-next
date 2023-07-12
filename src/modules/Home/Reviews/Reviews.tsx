import {Button, RequestButton} from "@/components/ui";
import { useKeenSlider } from "keen-slider/react";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { ReviewCard } from "./components/ReviewCard";
import { ReviewButtons } from "./components/ReviewSliderButtons";
import { BerkshireLogo } from "./components/logos/BerkshireLogo";
import { BetterHomesLogo } from "./components/logos/BetterHomesLogo";
import { CenturyLogo } from "./components/logos/CenturyLogo";
import { ColdwellLogo } from "./components/logos/ColdwellLogo";
import { CrbeLogo } from "./components/logos/CrbeLogo";
import { CushmanLogo } from "./components/logos/CushmanLogo";
import { JllLogo } from "./components/logos/JllLogo";
import { KnightLogo } from "./components/logos/KnightLogo";
import { LevelsLogo } from "./components/logos/LevelsLogo";
import { RealtyLogo } from "./components/logos/RealtyLogo";
import { RemaxLogo } from "./components/logos/RemaxLogo";
import { SothebysLogo } from "./components/logos/SothebysLogo";
import {theme} from "../../../../styles/tokens";

const reviews = [
  {
    name: "Анна Петрова",
    role: "Клиент",
    title: "Меня приятно удивил персональный каталог",
    text: "Изначально думала что это портал зарубежной недвижимости, но оказалось что это что-то новое ). Оставила заявки на подбор объектов неделю назад, но до сих пор мне каждый день поступают новые интересные предложения от продавцов. ",
    image: "/images/user_01.jpg",
    isVerified: true,
    isPro: false
  },
  {
    name: "Андрей Макеев",
    role: "Клиент",
    title: "Доволен работой сервиса",
    text: "Я очень доволен, что на этом сайте познакомился с риэлтором Daniil Velnekov. Он оказал полное сопровождение в поиске и аренде 3-х комнатной виллы на Бали. Если ищите недвижимость за границей, значит вы по адресу!",
    image: "/images/user_02.jpg",
    isVerified: false,
    isPro: true
  },
  {
    name: "Екатерина Цюпка",
    role: "Клиент",
    title: "Предоставили широкий выбор недвижимости в Черногории.",
    text: "Узнала о сайте от знакомых. У меня остались хорошие впечатления после использования этого сервиса. Получила больше 30 вариантов недвижимости от разных агентов и собственников. На каждой странице недвижимости есть подробная информация, фото, видео и удобный чат с продавцами.",
    image: "/images/user_03.jpg",
    rating: "5.0",
    isVerified: true,
    isPro: true
  },
  {
    name: "Светлана Гридасова",
    role: "Клиент",
    title: "Нашла студию в Дубае!",
    text: "Хороший портал по поиску агентов, застройщиков и самой недвижимости. Хочу отметить то, что объекты продавцов можно удобно отфильтровать, чтобы найти подходящий вариант... Также я была довольна работой агентства, которое нашла на сайте. Спасибо Lihoms!!!",
    image: "/images/user_04.jpg",
    rating: "4.9",
    isVerified: false,
    isPro: true
  },
  {
    name: "Евгений Поляков",
    role: "Клиент",
    title: "Спасибо за удобный сервис поиска недвижимости",
    text: "Искал апартаменты на С. Кипре для инвестиций. Miraden оказался тем сайтом, где я получил больше всего предложений и быстро нашел то, что надо! Еще хочу отметить работу поддержки. Возникли вопросы по оплате брони, но мне быстро ответили и помогли.",
    image: "/images/user_05.jpg",
    isVerified: false,
    isPro: false
  },
  {
    name: "Александр Антонов",
    role: "Клиент",
    title: "Нашел участок на Пхукете с шикарным видом!",
    text: "Понравилось то, что можно оставить заявку с подробным описанием один раз и больше не тратить время на одинаковые разговоры. Причем размещение заявки бесплатно, но я заказал дополнительную рекламу и это дало свой результат!",
    image: "/images/user_06.jpg",
    isVerified: true,
    isPro: true
  }
];

const agecnyReviews = [
  { logo: <RemaxLogo /> },
  { logo: <CenturyLogo /> },
  { logo: <LevelsLogo /> },
  { logo: <SothebysLogo /> },
  { logo: <KnightLogo /> },
  { logo: <JllLogo /> },
  { logo: <BetterHomesLogo /> },
  { logo: <CrbeLogo /> },
  { logo: <ColdwellLogo /> },
  { logo: <BerkshireLogo /> },
  { logo: <CushmanLogo /> },
  { logo: <RealtyLogo /> },
];

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(reviews.length);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 3,
      spacing: 30,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
      setMaxSlide(slider.track.details.maxIdx);
    },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: {
          perView: 2,
          spacing: 24,
        },
      },
      "(max-width: 1024px)": {
        slides: {
          perView: 1.83,
          spacing: 12,
        },
      },
      "(max-width: 767px)": {
        slides: {
          perView: 1.04,
          spacing: 12,
        },
      },
    },
  });

  const handleClickPrevButton = useCallback(
    () => instanceRef.current?.prev(),
    [instanceRef]
  );
  const handleClickNextButton = useCallback(
    () => instanceRef.current?.next(),
    [instanceRef]
  );

  const [isAgency, setIsAgency] = useState(false);

  const handleClickAgency = useCallback(() => {
    setIsAgency(true);
  }, []);

  const handleClickClient = useCallback(() => {
    setIsAgency(false);
  }, []);

  return (
    <StyledReviews>
      <div className="Reviews__top">
        <div className="Container">
          <div className="Reviews__head">
            <h2 className="Font_44_120 sm:Font_26_120">Нам доверяют</h2>
            <div className="Reviews__tabsDesktop">
              <Button request onClick={handleClickClient} active={!isAgency}>
                Клиенты
              </Button>

              <Button request onClick={handleClickAgency} active={isAgency}>
                Агентства недвижимости
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="Reviews__tabs Container">
        <Button request onClick={handleClickClient} active={!isAgency}>
          Клиенты
        </Button>

        <Button request onClick={handleClickAgency} active={isAgency}>
          Агентства недвижимости
        </Button>
      </div>
      <div className="Reviews__bottom">
        <div className="Container">
          {isAgency ? (
            <div className="Reviews__agencys">
              {agecnyReviews.map((review, index) => (
                <div className="Reviews__agencyCard" key={index}>
                  {review.logo}
                </div>
              ))}
            </div>
          ) : (
            <div className="Reviews__slider keen-slider" ref={sliderRef}>
              {reviews.map((review, index) => (
                <div className="keen-slider__slide" key={index}>
                  <ReviewCard
                    text={review.text}
                    title={review.title}
                    role={review.role}
                    name={review.name}
                    image={review.image}
                    rating={review.rating}
                    isPro={review.isPro}
                    isVerified={review.isVerified}
                  />
                </div>
              ))}
            </div>
          )}
          {isAgency ? null : (
            <div className="Reviews__buttonsContainer">
              <ReviewButtons
                currentSlide={currentSlide}
                maxSlide={maxSlide}
                handleClickPrevButton={handleClickPrevButton}
                handleClickNextButton={handleClickNextButton}
              />
            </div>
          )}
        </div>
      </div>
    </StyledReviews>
  );
};

const StyledReviews = styled.section`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 26px;

  .Reviews__top {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  .Reviews__top,
  .Reviews__bottom {
    background: #ffffff;
    padding-top: 75px;
    max-width: 1880px;
    width: 100%;
    margin: 0 auto;
  }

  .Reviews__bottom {
    overflow: hidden;
    padding-top: 0;
    padding-bottom: 70px;
    border-radius: 0 0 10px 10px;
  }

  .Reviews__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Reviews__tabsDesktop {
    display: flex;
    button:not(:first-child) {
      margin-left: 10px;
    }

    button {
      padding: 10px 20px;
      width: fit-content;
    }
  }

  .Reviews__tabs {
    background: #ffffff;
    display: none;
    white-space: nowrap;
    overflow-x: hidden;
    button:not(:first-child) {
      margin-left: 10px;
    }

    button {
      padding: 10px 20px;
      width: fit-content;
    }
  }

  .Reviews__slider {
    display: flex;
    margin-top: 50px;
  }

  .Reviews__agencys {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 30px;
    margin-top: 50px;
  }

  .Reviews__agencyCard {
    grid-column: span 2;
    padding-top: 24px;
    padding-bottom: 24px;
    outline: 2px solid ${theme.colors.stroke.divider};
    border-radius: ${theme.border.radius};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Reviews__buttonsContainer {
    margin-top: 30px;
    button:not(:first-child) {
      margin-left: 20px;
    }
  }

  .Reviews__prevButton {
    height: 40px;
    margin-right: 20px;
    transform: rotate(180deg);
  }

  @media (min-width: ${theme.breakpoints.tablet.min + "px"}) and (max-width: ${theme.breakpoints.tablet.max + "px"}) {
    margin-top: 0;

    .Reviews__head {
      flex-direction: column;
      align-items: start;
    }

    .Reviews__top {
      padding-top: 20px;
    }

    .Reviews__bottom {
      padding-bottom: 20px;
    }

    .Reviews__tabsDesktop {
      display: none;
    }

    .Reviews__tabs {
      display: flex;
      padding-top: 20px;

      button {
        padding: 10px 15px;
      }
    }

    .Reviews__agencys {
      grid-gap: 10px;
    }

  }

  @media (max-width: 960px) {
    .Reviews__agencys {
      grid-gap: 10px;

      grid-template-columns: repeat(4, 1fr);
    }

    .Reviews__agencyCard {
      grid-column: span 1;
    }
  }

  @media (max-width: 767px) {
    padding-left: 0;
    padding-right: 0;

    .Reviews__slider {
      margin-top: 40px;
    }

    .Reviews__agencys {
      margin-top: 40px;
      grid-template-columns: repeat(4, 1fr);
    }

    .Reviews__agencyCard {
      grid-column: span 1;
    }
  }

  @media (min-width: ${theme.breakpoints.mobile.min + "px"}) and (max-width: ${theme.breakpoints.mobile.max + "px"}) {
    padding-top: 65px;
    margin-top: 0;

    .Reviews__tabs {
      display: flex;
    }

    .Reviews__agencys {
      grid-template-columns: repeat(2, 1fr);
    }

    .Reviews__buttonsContainer {
      display: none;
    }

    .Reviews__tabsDesktop {
      display: none;
    }

    .Reviews__bottom {
      padding-bottom: 22px;
    }

    .Reviews__top {
      padding-top: 20px;
    }

    .Reviews__head {
      padding-bottom: 20px;
    }
  }
`;

export { Reviews };
