import { Button } from "@/components/ui";
import { ObjectCard } from "@/modules/Applications/Application/components/ObjectCard";
import cn from "classnames";
import Image from "next/image";
import { useCallback, useState } from "react";
import styled from "styled-components";
interface ApplicationProps {
  className?: string;
}

type Option = "objects" | "applications" | "users";

const Favourites = ({ className }: ApplicationProps) => {
  const [selected, setSelected] = useState<Option | null>("objects");

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);

  const objectsArray = [
    {
      title: "3-х комнатная квартира на Кипре для ВНЖ",
      location: "Северный Кипр",
      id: "1445",
      cashBack: 6,
      yieldCount: 8,
      year: "2022",
      square: "294",
      rooms: 10,
      sleeps: 6,
      baths: 2,
      price: "158 000",
      status: "Собственник",
      name: "Анастасия Петрова",
      image: "/images/avatar.jpg",
      isBooked: false,
      isUnpublished: false,
      image1: "/images/img.jpg",
      image2: "/images/img.jpg",
      image3: "/images/img.jpg",
      firstInstallment: "34 000 $",
      singleCost: "1 200 $",
      firstInstallmentPercent: "30 %",
    },
    {
      title: "3-х комнатная квартира на Кипре для ВНЖ",
      location: "Северный Кипр",
      id: "1445",
      cashBack: 6,
      yieldCount: 8,
      year: "2022",
      square: "294",
      rooms: 10,
      sleeps: 6,
      baths: 2,
      price: "158 000",
      status: "Собственник",
      name: "Анастасия Петрова",
      image: "/images/avatar.jpg",
      isBooked: true,
      isUnpublished: false,
      image1: "/images/img.jpg",
      image2: "/images/img.jpg",
      image3: "/images/img.jpg",
      firstInstallment: "34 000 $",
      singleCost: "1 200 $",
      firstInstallmentPercent: "30 %",
    },
  ];
  return (
    <StyledApplication className={className}>
      <div className="Application__headContainer">
        <div className="Application__head">
          <h1 className="Font_32_120 lg:Font_26_120_500">Избранное</h1>
        </div>
        <div className="Application__headTabsContainer">
          <div className="Application__headTabs">
            <Button
              className={cn("", {
                Application__headTabButton: selected === "objects",
              })}
              onClick={() => handleSelect("objects")}
              active={selected === "objects"}
              tertiary
            >
              Объекты{" "}
              <p className="TabButton__counter Color_text_grey">
                {objectsArray.length}
              </p>
            </Button>
            <Button
              className={cn("", {
                Application__headTabButton: selected === "applications",
              })}
              onClick={() => handleSelect("applications")}
              active={selected === "applications"}
              tertiary
            >
              Заявки
            </Button>
            <Button
              className={cn("", {
                Application__headTabButton: selected === "users",
              })}
              onClick={() => handleSelect("users")}
              active={selected === "users"}
              tertiary
            >
              Пользователи
            </Button>
          </div>
          <div className="Application__headTabsBar" />
        </div>
      </div>
      <div className="Applications__headTabsBar_whiteSpace" />

      {selected === "objects" && (
        <ul className="ApplicationsList">
          {objectsArray.map((object, index) => (
            <li key={index}>
              <ObjectCard
                title={object.title}
                location={object.location}
                image1={object.image1}
                image2={object.image2}
                image3={object.image3}
                id={object.id}
                firstInstallment={object.firstInstallment}
                firstInstallmentPercent={object.firstInstallmentPercent}
                singleCost={object.singleCost}
                sleeps={object.sleeps}
                baths={object.baths}
                year={object.year}
                square={object.square}
                rooms={object.rooms}
                yieldCount={object.yieldCount}
                price={object.price}
                name={object.name}
                image={object.image}
                status={object.status}
              />
            </li>
          ))}
        </ul>
      )}
      {selected === "applications" && (
        <>
          <div className="Application__body">
            <Image
              src="/images/application.svg"
              alt=""
              width={150}
              height={120}
            />
            <h2>No published applications</h2>
            <p className="Color_text_grey">No published</p>
          </div>
        </>
      )}

      {selected === "users" && (
        <>
          <div className="Application__body">
            <Image
              src="/images/application.svg"
              alt=""
              width={150}
              height={120}
            />
            <h2>No archived applications</h2>
            <p className="Color_text_grey">No archived</p>
          </div>
        </>
      )}
    </StyledApplication>
  );
};

const StyledApplication = styled.section`
  position: relative;

  .TabButton__counter {
    margin-left: 10px;
  }

  .Application__headTabsBar_whiteSpace {
    width: 100%;
    height: 10px;
    border-radius: 0 0 10px 10px;
    background: #fff;
  }

  .SingleChatInfoideBar {
    position: absolute;
    right: -420px;
    top: 94px;
  }

  .Application__headContainer {
    margin-top: 20px;
    padding: 20px 20px 0 20px;
    background: #fff;
    border-radius: 10px 10px 0 0;
  }

  .Application__head {
    display: flex;
    align-items: center;
  }

  .Application__headTabs {
    display: flex;
    margin-top: 30px;
    button {
      padding: 0;
    }
    button:not(:first-child) {
      margin-left: 30px;
    }
  }

  .Application__headTabButton {
    position: relative;
    p {
      color: #4e6af3 !important;
    }
    ::before {
      position: absolute;
      top: 35px;
      content: "";
      background: #4e6af3;
      width: 100%;
      height: 4px;
      border-radius: 10px;
    }
  }

  .Application__headTabsBar {
    margin-top: 15px;
    width: 100%;
    background: #e1edfd;
    height: 4px;
    border-radius: 10px;
  }

  .Applications__headTabsBar_whiteSpace {
    width: 100%;
    height: 10px;
    border-radius: 0 0 10px 10px;
    background: #fff;
  }

  .Application__headContainer {
    margin-top: 20px;
    padding: 20px 20px 0 20px;
    background: #fff;
    border-radius: 10px 10px 0 0;
  }

  .Application__head {
    display: flex;
    align-items: center;
  }

  .Applications__headTabs {
    display: flex;
    margin-top: 30px;
    overflow: auto;
    button {
      padding: 0;
    }
    button:not(:first-child) {
      margin-left: 30px;
    }
  }

  .Applications__headTabButton {
    position: relative;
    ::before {
      position: absolute;
      top: 35px;
      content: "";
      background: #4e6af3;
      width: 100%;
      height: 4px;
      border-radius: 10px;
    }
  }

  .Application__body {
    padding-top: 100px;
    margin: 0 auto;
    text-align: -webkit-center;
    max-width: 370px;

    h2 {
      margin-top: 30px;
    }

    p {
      margin-top: 10px;
    }
  }

  .CreateApp__button {
    margin-top: 30px;
    padding: 10px 24px;
    width: fit-content;
  }

  .Application__headArrow {
    transform: rotate(-90deg);

    path {
      stroke: #7786a5;
    }
  }

  .Applications__headTabsBar {
    margin-top: 15px;
    width: 100%;
    background: #e1edfd;
    height: 4px;
    border-radius: 10px;
  }

  .ApplicationsList {
    margin-top: 20px;

    li:not(:first-child) {
      margin-top: 10px;
    }
  }

  @media (max-width: 1024px) {
    .Application__headContainer {
      margin-top: 60px;
    }
  }
`;

export { Favourites };
