import { RequestButton } from "@/components/ui";
import { useKeenSlider } from "keen-slider/react";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { ReviewCard } from "./components/ReviewCard";
import { ReviewButtons } from "./components/ReviewSliderButtons";
import { BerkshireLogo } from "./components/logos/BerkshireLogo";
import { BetterHomesLogo } from "./components/logos/BetterHomesLogo";
import { CenturyLogo } from "./components/logos/CenturyLogo";
import { ColdwellLogo } from "./components/logos/ColdwellLogo";
import { ColliersLogo } from "./components/logos/ColliersLogo";
import { CrbeLogo } from "./components/logos/CrbeLogo";
import { CushmanLogo } from "./components/logos/CushmanLogo";
import { EraLogo } from "./components/logos/EraLogo";
import { JllLogo } from "./components/logos/JllLogo";
import { KnightLogo } from "./components/logos/KnightLogo";
import { LevelsLogo } from "./components/logos/LevelsLogo";
import { RealStateLogo } from "./components/logos/RealStateLogo";
import { RealtyLogo } from "./components/logos/RealtyLogo";
import { RemaxLogo } from "./components/logos/RemaxLogo";
import { SothebysLogo } from "./components/logos/SothebysLogo";

const reviews = [
  {
    name: "Андрей Макеев",
    role: "Клиент",
    title: "Сопровождали во всем и разъясняли каждую деталь",
    text: "Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!",
    image: "/images/avatar.jpg",
  },
  {
    name: "Андрей Макеев",
    role: "Клиент",
    title: "Сопровождали во всем и разъясняли каждую деталь",
    text: "Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!",
    image: "/images/avatar.jpg",
  },
  {
    name: "Андрей Макеев",
    role: "Клиент",
    title: "Сопровождали во всем и разъясняли каждую деталь",
    text: "Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!",
    image: "/images/avatar.jpg",
  },
  {
    name: "Андрей Макеев",
    role: "Клиент",
    title: "Сопровождали во всем и разъясняли каждую деталь",
    text: "Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!",
    image: "/images/avatar.jpg",
  },
  {
    name: "Андрей Макеев",
    role: "Клиент",
    title: "Сопровождали во всем и разъясняли каждую деталь",
    text: "Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!",
    image: "/images/avatar.jpg",
  },
  {
    name: "Андрей Макеев",
    role: "Клиент",
    title: "Сопровождали во всем и разъясняли каждую деталь",
    text: "Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!",
    image: "/images/avatar.jpg",
  },
  {
    name: "Андрей Макеев",
    role: "Клиент",
    title: "Сопровождали во всем и разъясняли каждую деталь",
    text: "Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!",
    image: "/images/avatar.jpg",
  },
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
  { logo: <EraLogo /> },
  { logo: <ColliersLogo /> },
  { logo: <RealStateLogo /> },
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
              <RequestButton onClick={handleClickClient} active={!isAgency}>
                Клиенты
              </RequestButton>

              <RequestButton onClick={handleClickAgency}>
                Агентства недвижимости
              </RequestButton>
            </div>
          </div>
        </div>
      </div>
      <div className="Reviews__tabs Container">
        <RequestButton onClick={handleClickClient} active={!isAgency}>
          Клиенты
        </RequestButton>

        <RequestButton onClick={handleClickAgency} active={isAgency}>
          Агентства недвижимости
        </RequestButton>
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
  padding-top: 70px;
  padding-left: 20px;
  padding-right: 20px;

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
    /* display: flex;
    border-radius: 10px;
    overflow: hidden; */
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
    display: none !important;
    background: #ffffff;
    display: flex;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
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
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
    margin-top: 50px;
  }

  .Reviews__agencyCard {
    padding-top: 24px;
    padding-bottom: 24px;
    box-shadow: 0 0 0 2px inset #f1f7ff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Reviews__agencyCard:nth-child(13) {
    grid-column: 1 / span 2;
  }
  .Reviews__agencyCard:nth-child(14) {
    grid-column: 3 / span 2;
  }
  .Reviews__agencyCard:nth-child(15) {
    grid-column: 5 / span 2;
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

  @media (max-width: 1024px) {
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
      display: flex !important;
      padding-top: 20px;
      overflow-x: scroll;

      button {
        padding: 10px 15px;
      }
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
      grid-template-columns: repeat(3, 1fr);
    }

    .Reviews__agencyCard:nth-child(13),
    .Reviews__agencyCard:nth-child(14),
    .Reviews__agencyCard:nth-child(15) {
      grid-column: auto;
    }
  }

  @media (max-width: 576px) {
    padding-top: 65px;
    .Reviews__agencys {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export { Reviews };
