import { PurposeCheckIcon } from "@/icons/PurposeCheckIcon";
import { useState, useCallback } from "react";
import styled from "styled-components";
import { Accordion } from "./Accordion";
import Image from "next/image";
import { Tag } from "@/components/ui";

const ObjectLocation = () => {
  const [openAccordion, setOpenAccordion] = useState(true);

  const handleOpenAccordion = useCallback(() => {
    setOpenAccordion(!openAccordion);
  }, [openAccordion]);

  const locations = [
    { title: "Адрес", text: "Кипр / Ларнака / Маккензи / Дом 149 корпус 3" },
    { title: "Море", text: "800 м" },
    { title: "Центр города", text: "5 300 м" },
    { title: "Аэропорт", text: "16 000 м" },
    { title: "Метро Kalison", text: "1 600 м" },
    { title: "Метро Mgoosol Dosia", text: "2 300 м" },
    { title: "Марина", text: "2 500 м" },
  ];

  const tags = [
    "Школа",
    "Сад",
    "Торговый ценрт",
    "Больница",
    "Ресторан",
    "Кафе",
  ];

  return (
    <StyledObjectDescription className="ObjectDescription">
      <Accordion
        title="Расположение"
        key="Расположение"
        expanded={openAccordion}
        onChange={handleOpenAccordion}
      >
        {locations.map((location, idx) => {
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

        <Image
          src={"/images/map.png"}
          alt=""
          width={930}
          height={500}
          className="Image"
        />

        <div className="ObjectCard__indicators Font_14_16">
          {tags.map((tag, idx) => {
            return <Tag key={idx} >{tag}</Tag>;
          })}
        </div>
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

  .Image {
    padding-top: 50px;
  }

  @media (max-width: 1024px) {
    &.ContainerFull {
      padding: 0;
    }
  }
`;

export { ObjectLocation };
