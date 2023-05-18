import { Button } from "@/components/ui";
import cn from "classnames";
import Image from "next/image";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { ObjectCardLarge } from "./components/ObjectCardLarge";
interface ApplicationProps {
  className?: string;
}

type Option = "all" | "published" | "archived";

const ApplicationFull = ({ className }: ApplicationProps) => {
  const [selected, setSelected] = useState<Option | null>("all");

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);

  const applicationsArray = [
    {
      title: "Куплю 3-х комнатную квартиру на Кипре для инвестиций и ВНЖ",
      location: "Кипр / Лимассол / Все районы",
      id: "1445",
      price: "158 000 – 230 000",
      year: "2022",
      square: "294 м²",
      rooms: 10,
      sleeps: 6,
      baths: 2,
      yieldCount: 8,
      firstInstallment: "12000 €",
      firstInstallmentPercent: "20%",
      singleCost: "120 €",
      deal: "Покупка",
      type: "Жилая | Квартира / апартаменты",
      condition: "Новая",
      purpose: "Для инвестиций (сдавать в аренду)",
      isPublished: true,
      isTrue: true,
      publishedAt: "Создана 12 января",
      requestsCount: 5,
      watched: 264,
      list: 1268,
    },
    {
      title: "Куплю 3-х комнатную квартиру на Кипре для инвестиций и ВНЖ",
      location: "Кипр / Лимассол / Все районы",
      id: "1445",
      price: "158 000 – 230 000",
      year: "2022",
      square: "294 м²",
      rooms: 10,
      sleeps: 6,
      baths: 2,
      yieldCount: 8,
      firstInstallment: "12000 €",
      firstInstallmentPercent: "20%",
      singleCost: "120 €",
      deal: "Покупка",
      type: "Жилая | Квартира / апартаменты",
      condition: "Новая",
      purpose: "Для инвестиций (сдавать в аренду)",
      isPublished: true,
      isTrue: true,
      publishedAt: "Создана 12 января",
      watched: 264,
      list: 1268,
      messagesCount: 10,
    },
    {
      title: "Куплю 3-х комнатную квартиру на Кипре для инвестиций и ВНЖ",
      location: "Кипр / Лимассол / Все районы",
      id: "1445",
      price: "158 000 – 230 000",
      year: "2022",
      square: "294 м²",
      rooms: 10,
      sleeps: 6,
      baths: 2,
      yieldCount: 8,
      firstInstallment: "12000 €",
      firstInstallmentPercent: "20%",
      singleCost: "120 €",
      deal: "Покупка",
      type: "Жилая | Квартира / апартаменты",
      condition: "Новая",
      purpose: "Для инвестиций (сдавать в аренду)",
      isPublished: true,
      isTrue: false,
      publishedAt: "Создана 12 января",
      watched: 264,
      list: 1268,
    },
  ];

  return (
    <StyledApplication className={className}>
      <div className="Application__headContainer">
        <div className="Application__head">
          <h1 className="Font_32_120 lg:Font_26_120_500">Мои заявки </h1>
        </div>
        <div className="Application__headTabsContainer">
          <div className="Application__headTabs">
            <Button
              className={cn("", {
                Application__headTabButton: selected === "all",
              })}
              onClick={() => handleSelect("all")}
              active={selected === "all"}
              tertiary
            >
              Все
            </Button>
            <Button
              className={cn("", {
                Application__headTabButton: selected === "published",
              })}
              onClick={() => handleSelect("published")}
              active={selected === "published"}
              tertiary
            >
              Опубликованные
            </Button>
            <Button
              className={cn("", {
                Application__headTabButton: selected === "archived",
              })}
              onClick={() => handleSelect("archived")}
              active={selected === "archived"}
              tertiary
            >
              В архиве
            </Button>
          </div>
          <div className="Application__headTabsBar" />
        </div>
      </div>
      <div className="Applications__headTabsBar_whiteSpace" />

      {selected === "all" && (
        <ul className="ApplicationsList">
          {applicationsArray.map((application, index) => (
            <li key={index}>
              <ObjectCardLarge
                title={application.title}
                location={application.location}
                id={application.id}
                year={application.year}
                square={application.square}
                rooms={application.rooms}
                sleeps={application.sleeps}
                baths={application.baths}
                price={application.price}
                firstInstallment={application.firstInstallment}
                firstInstallmentPercent={application.firstInstallmentPercent}
                yieldCount={application.yieldCount}
                singleCost={application.singleCost}
                deal={application.deal}
                condition={application.condition}
                type={application.type}
                purpose={application.purpose}
                isPublished={application.isPublished}
                isTrue={application.isTrue}
                publishedAt={application.publishedAt}
                requestsCount={application.requestsCount}
                watched={application.watched}
                list={application.list}
                messagesCount={application.messagesCount}
                href="/applications"
              />
            </li>
          ))}
        </ul>
      )}
      {selected === "published" && (
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

      {selected === "archived" && (
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

export { ApplicationFull };
