import { RequestButton } from "@/components/ui";
import { useKeenSlider } from "keen-slider/react";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ReviewCard } from "./components/ReviewCard";
import { ReviewButtons } from "./components/ReviewSliderButtons";

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
    role: "Агентство",
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
    role: "Агентство",
    title: "Сопровождали во всем и разъясняли каждую деталь",
    text: "Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!",
    image: "/images/avatar.jpg",
  },
  {
    name: "Андрей Макеев",
    role: "Риелтор",
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
    role: "Застройщик",
    title: "Сопровождали во всем и разъясняли каждую деталь",
    text: "Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!",
    image: "/images/avatar.jpg",
  },
  {
    name: "Андрей Макеев",
    role: "Агентство",
    title: "Сопровождали во всем и разъясняли каждую деталь",
    text: "Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!",
    image: "/images/avatar.jpg",
  },
  {
    name: "Андрей Макеев",
    role: "Застройщик",
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
    role: "Агентство",
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
    role: "Агентство",
    title: "Сопровождали во всем и разъясняли каждую деталь",
    text: "Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!",
    image: "/images/avatar.jpg",
  },
  {
    name: "Андрей Макеев",
    role: "Риелтор",
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
    role: "Застройщик",
    title: "Сопровождали во всем и разъясняли каждую деталь",
    text: "Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!",
    image: "/images/avatar.jpg",
  },
  {
    name: "Андрей Макеев",
    role: "Агентство",
    title: "Сопровождали во всем и разъясняли каждую деталь",
    text: "Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!",
    image: "/images/avatar.jpg",
  },
  {
    name: "Андрей Макеев",
    role: "Застройщик",
    title: "Сопровождали во всем и разъясняли каждую деталь",
    text: "Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!",
    image: "/images/avatar.jpg",
  },
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
          perView: 1.94,
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

  const [role, setRole] = useState("Клиент");

  const filteredRoles = reviews.filter((rev) =>
    role ? rev.role.includes(role) : true
  );

  const handleButtonClick = (role: SetStateAction<string>) => {
    setRole(role);
  };

  const isClient = reviews.some((rev) => rev.role.includes("Клиент"));
  const isAgency = reviews.some((rev) => rev.role.includes("Агентство"));
  const isRealtor = reviews.some((rev) => rev.role.includes("Риелтор"));
  const isBuilders = reviews.some((rev) => rev.role.includes("Застройщик"));

  useEffect(() => {
    instanceRef.current?.update();
  }, [role, instanceRef]);

  const renderReviews = (revs: any[]) => {
    return revs.map((rev, index) => (
      <>
        <div className="keen-slider__slide">
          <ReviewCard
            key={index}
            text={rev.text}
            title={rev.title}
            role={rev.role}
            name={rev.name}
            image={rev.image}
          />
        </div>
      </>
    ));
  };

  return (
    <StyledReviews>
      <div className="Reviews__top">
        <div className="Container">
          <div className="Reviews__head">
            <h2 className="Font_44_120 sm:Font_26_120">Нам доверяют</h2>
            <div className="Reviews__tabsDesktop">
              {isClient && (
                <RequestButton
                  onClick={() => handleButtonClick("Клиент")}
                  active={role === "Клиент"}
                >
                  Клиенты
                </RequestButton>
              )}
              {isRealtor && (
                <RequestButton
                  onClick={() => handleButtonClick("Риелтор")}
                  active={role === "Риелтор"}
                >
                  Риелторы
                </RequestButton>
              )}

              {isAgency && (
                <RequestButton
                  onClick={() => handleButtonClick("Агентство")}
                  active={role === "Агентство"}
                >
                  Агентства
                </RequestButton>
              )}

              {isBuilders && (
                <RequestButton
                  onClick={() => handleButtonClick("Застройщик")}
                  active={role === "Застройщик"}
                >
                  Застройщики
                </RequestButton>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="Reviews__tabs Container">
        {isClient && (
          <RequestButton
            onClick={() => handleButtonClick("Клиент")}
            active={role === "Клиент"}
          >
            Клиенты
          </RequestButton>
        )}
        {isRealtor && (
          <RequestButton
            onClick={() => handleButtonClick("Риелтор")}
            active={role === "Риелтор"}
          >
            Риелторы
          </RequestButton>
        )}

        {isAgency && (
          <RequestButton
            onClick={() => handleButtonClick("Агентство")}
            active={role === "Агентство"}
          >
            Агентства
          </RequestButton>
        )}

        {isBuilders && (
          <RequestButton
            onClick={() => handleButtonClick("Застройщик")}
            active={role === "Застройщик"}
          >
            Застройщики
          </RequestButton>
        )}
      </div>
      <div className="Reviews__bottom">
        <div className="Container">
          <div className="Reviews__slider keen-slider" ref={sliderRef}>
            <>{renderReviews(filteredRoles)}</>
          </div>
          <div className="Reviews__buttonsContainer">
            <ReviewButtons
              currentSlide={currentSlide}
              maxSlide={maxSlide}
              handleClickPrevButton={handleClickPrevButton}
              handleClickNextButton={handleClickNextButton}
            />
          </div>
        </div>
      </div>
    </StyledReviews>
  );
};

const StyledReviews = styled.section`
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
    padding-bottom: 75px;
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
  }
`;

export { Reviews };
