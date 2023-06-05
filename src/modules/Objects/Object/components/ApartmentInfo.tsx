import { PurposeCheckIcon } from "@/icons/PurposeCheckIcon";
import { useState, useCallback } from "react";
import styled from "styled-components";
import { Accordion } from "./Accordion";
import Image from "next/image";

const ApartmentInfo = () => {
  const [openAccordion, setOpenAccordion] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const locations = [
    { title: "Этаж", text: "12 из 18" },
    { title: "Общая площадь", text: "220 м2" },
    { title: "Жилая площадь", text: "180 м2" },
    { title: "Высота потолков", text: "3 м" },
    { title: "Всего комнат", text: "5" },
    { title: "Спальня", text: "1" },
    { title: "Санузел", text: "3" },
    { title: "Кухня", text: "1" },
    { title: "Гостиная", text: "1" },
    { title: "Лоджия", text: "1" },
    { title: "Some", text: "1" },
    { title: "Some", text: "1" },
  ];

  const equipments = [
    "Мебель",
    "Бытовая техника",
    "Сантехника",
    "Кондиционер",
    "Тонированные окна",
    "Французские окна",
    "Камин",
    "Умный дом",
    "Солнечные батареи",
  ];

  const handleOpenAccordion = useCallback(() => {
    setOpenAccordion(!openAccordion);
  }, [openAccordion]);

  const showLessMore = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <StyledObjectDescription className="ObjectDescription">
      <Accordion
        title="В квартире"
        key="В квартире"
        expanded={openAccordion}
        onChange={handleOpenAccordion}
      >
        {showAll
          ? locations.splice(0, locations.length - 1).map((location, idx) => {
              return (
                <div key={idx} className="SingleApplication__location">
                  <div>
                    <PurposeCheckIcon width={18} height={18} />
                    <p>{location.title}</p>
                  </div>
                  <div className="SingleApplication__locationInfo">
                    <p>{location.text}</p>
                  </div>
                </div>
              );
            })
          : locations.splice(0, 10).map((location, idx) => {
              return (
                <div key={idx} className="SingleApplication__location">
                  <div>
                    <PurposeCheckIcon width={18} height={18} />
                    <p>{location.title}</p>
                  </div>
                  <div className="SingleApplication__locationInfo">
                    <p>{location.text}</p>
                  </div>
                </div>
              );
            })}

        {!showAll ? (
          <button
            onClick={showLessMore}
            className="ApartmentInfo__showLessMoreBtn Color_blue_primary"
          >
            Открыть еще 2
          </button>
        ) : (
          <button
            onClick={showLessMore}
            className="ApartmentInfo__showLessMoreBtn Color_blue_primary"
          >
            Свернуть
          </button>
        )}

        <h2 className="ApartmentInfo__equipmentTitle Font_24_120">Оснащение</h2>

        {equipments.map((equipment, idx) => {
          return (
            <div key={idx} className="SingleApplication__location">
              <div>
                <PurposeCheckIcon width={18} height={18} />
                <p className="Color_primary">{equipment}</p>
              </div>
            </div>
          );
        })}

        <h2 className="ApartmentInfo__layoutTitle Font_24_120">Планировка</h2>

        <Image
          src={"/images/apartment.png"}
          alt=""
          width={930}
          height={500}
          className="Image2"
        />
      </Accordion>
    </StyledObjectDescription>
  );
};

const StyledObjectDescription = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 20px;

  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  padding: 30px 40px;
  width: 100%;
  transition: 0.15s ease;
  margin-top: 20px;
  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 2px inset #c7d2e9;
  }

  .ObjectDescription__title {
    margin-bottom: 30px;
  }

  .SingleApplication__location {
    display: flex;
    padding-top: 20px;
    padding-bottom: 19px;
    border-bottom: 1px solid #e1edfd;

    div {
      display: flex;
      align-items: center;
      svg {
        margin-right: 15px;
      }
    }

    div:first-child {
      min-width: 250px;
      color: #7786a5;
    }
  }

  .SingleApplication__locationInfoText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button {
      align-self: flex-start;
      margin-top: 20px;
    }
  }

  .SingleApplication__location:last-child {
    border-bottom: none;
    align-items: start;
  }

  .SingleApplication__locationInfo {
    display: flex;

    p:not(:first-child) {
      margin-left: 10px;
      border-left: 2px solid #c7d2e9;
      padding-left: 10px;
    }
  }

  .ObjectCard__indicators {
    display: flex;
    align-items: center;
    margin-top: 20px;
    div:not(:first-child) {
      margin-left: 10px;
    }
  }

  .ApartmentInfo__showLessMoreBtn {
    padding: 20px 0 50px 0;
  }

  .ApartmentInfo__equipmentTitle {
    padding-bottom: 10px;
  }

  .ApartmentInfo__layoutTitle {
    padding: 50px 0 20px 0;
  }

  @media (max-width: 1024px) {
    &.ContainerFull {
      padding: 0;
    }
  }
`;

export { ApartmentInfo };
