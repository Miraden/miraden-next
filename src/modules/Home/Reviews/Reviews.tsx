import { RequestButton } from "@/components/ui";
import { SliderButton } from "@/icons";
import { useKeenSlider } from "keen-slider/react";
import { SetStateAction, useCallback, useState } from "react";
import styled from "styled-components";
import { ReviewCard } from "./components/ReviewCard";

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
    role: "Агенство",
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
];

const Reviews = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 3.7,
      spacing: 3,
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
  const isAgency = reviews.some((rev) => rev.role.includes("Агенство"));
  const isRealtor = reviews.some((rev) => rev.role.includes("Риелтор"));
  const isBuilders = reviews.some((rev) => rev.role.includes("Застройщик"));

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
      <div className="Container">
        <div className="Applications__head">
          <h2 className="Font_44_120">Нам доверяют</h2>
          <div className="Applications__tabs">
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
        <div className="Reviews__slider keen-slider" ref={sliderRef}>
          <>{renderReviews(filteredRoles)}</>
        </div>
        <div className="Reviews__buttonsContainer">
          <button
            onClick={handleClickPrevButton}
            className="Reviews__prevButton"
          >
            <SliderButton />
          </button>
          <button onClick={handleClickNextButton}>
            <SliderButton />
          </button>
        </div>
      </div>
    </StyledReviews>
  );
};

const StyledReviews = styled.section`
  overflow: hidden;
  padding-top: 75px;
  padding-bottom: 75px;

  .Applications__head {
    display: flex;
    justify-content: space-between;
  }

  .Applications__tabs {
    display: flex;
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
  }

  .Reviews__prevButton {
    height: 40px;
    margin-right: 20px;
    transform: rotate(180deg);
  }
`;

export { Reviews };
