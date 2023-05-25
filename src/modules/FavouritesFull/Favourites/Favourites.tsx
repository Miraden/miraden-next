import { Button, Search } from "@/components/ui";
import { ApplicationsFilter } from "@/components/ui/ApplicationsFilter";
import {
  Applications,
  HomeIcon,
  KebabIcon,
  ListItemsIcon,
  PlusIcon,
} from "@/icons";
import { FilterIcon } from "@/icons/FilterIcon";
import { ObjectCard } from "@/modules/Applications/Application/components/ObjectCard";
import cn from "classnames";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
interface ApplicationProps {
  className?: string;
}
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
type Option = "objects" | "applications" | "users";

const Favourites = ({ className }: ApplicationProps) => {
  const [selected, setSelected] = useState<Option | null>("objects");
  const [selectedContent, setSelectedContent] = useState("1");
  const startY = useRef<number>(0);

  const handleTabClick = (tabId: string) => {
    setSelectedContent(tabId);
  };

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);
  const handleTouchStart = (event: TouchEvent) => {
    const touch = event.touches[0];
    startY.current = touch.pageY;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    const touch = event.changedTouches[0];
    const deltaY = touch.pageY - startY.current;

    if (deltaY > 50) {
      setShowFilter(false);
    }
  };

  const [showFilter, setShowFilter] = useState(false);
  const handleShowFilter = useCallback(() => {
    setShowFilter(!showFilter);
  }, [showFilter]);

  return (
    <StyledApplication
      className={cn(className, {
        Test: showFilter,
      })}
    >
      <div
        className={cn("Application__wrapper", {
          IsOpenFilter: showFilter,
        })}
      >
        <div className="Application__headContainer">
          <div className="Application__head">
            <h1 className="Font_32_120 lg:Font_26_120_500">Избранное</h1>
          </div>
          <div className="Application__headTabsContainer">
            <div className="Application__headTabs">
              <Button
                className={cn("Application__TabButton", {
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
                className={cn("Application__TabButton", {
                  Application__headTabButton: selected === "applications",
                })}
                onClick={() => handleSelect("applications")}
                active={selected === "applications"}
                tertiary
              >
                Заявки
              </Button>
              <Button
                className={cn("Application__TabButton", {
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

        {selected === "objects" && (
          <>
            <div>
              <Search
                options={[]}
                placeholder="Поиск"
                className={cn("Applications__searchBar", {
                  FilterOpen: !showFilter,
                })}
                rightIcon={<FilterIcon />}
                onClick={handleShowFilter}
                withFilter
              />
            </div>

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
                    href=""
                  />
                </li>
              ))}
            </ul>
          </>
        )}
        {selected === "applications" && (
          <>
            <div className="Applications__headTabsBar_whiteSpace" />

            <div className="Application__body">
              <Image src="/images/apps/4.svg" alt="" width={200} height={200} />
              <h2>Нет созданных заявок</h2>
              <p className="Color_text_grey">
                Но вы можете сделать это прямо сейчас!{" "}
              </p>
              <Button className="CreateApp__button" href="/customer/create-1">
                Создать заявку
              </Button>
            </div>
          </>
        )}
        {selected === "users" && (
          <>
            <div className="Applications__headTabsBar_whiteSpace" />

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
      </div>
      {showFilter && (
        <>
          <div className="TestFilter">
            <ApplicationsFilter
              className="Applications__filter"
              onClick={handleShowFilter}
            />
          </div>
          <div className="Applications__filterMobileContainer">
            <ApplicationsFilter
              onTabClick={handleTabClick}
              className="Applications__filterMobile"
              onClick={handleShowFilter}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            />
          </div>
        </>
      )}
      <div className="Application__Footer">
        <div className="Application__FooterButtons">
          <Button tertiary className="FooterButton Font_12_16">
            <ListItemsIcon />
            Лента
          </Button>
          <Button tertiary className="FooterButton Font_12_16">
            <Applications />
            Мои заявки
          </Button>
          <div className="PlusIconContainer">
            <Button>
              <PlusIcon width={24} height={24} />
            </Button>
          </div>
          <Button tertiary className="FooterButton Font_12_16">
            <HomeIcon width={18} height={18} />
            Объекты
          </Button>
          <Button tertiary className="FooterButton Font_12_16">
            <KebabIcon className="KebabIcon" />
            Ещё
          </Button>
        </div>
      </div>
    </StyledApplication>
  );
};

const StyledApplication = styled.section`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-gap: 30px;
  padding-left: 55px;
  padding-right: 55px;

  &.Test {
    padding-right: 0 !important;
  }
  .TabButton__counter {
    margin-left: 10px;
  }
  .Application__wrapper {
    min-width: 970px;
    max-width: 970px;
    grid-column: 5 / span 10;
  }

  .TestFilter {
    position: sticky;
    top: 94px;
    overflow: auto;
    grid-column: 16 / span 3;
    margin-top: 30px;
    margin-left: -30px;
    height: calc(100vh - 114px);
    min-width: 355px;
  }

  .Applications__filter {
    overflow: auto;

    height: calc(100vh - 114px);
  }

  .Application__headTabsBar_whiteSpace {
    width: 100%;
    height: 10px;
    border-radius: 0 0 10px 10px;
    background: #fff;
  }

  .Applications__searchBar {
    padding: 0;
    input {
      border-radius: 0 0 10px 10px;
      box-shadow: none !important;
    }

    .Search__rightIcon:hover {
      svg {
        path {
          fill: #4e6af3;
        }
      }
    }
  }

  .SingleChatInfoideBar {
    position: absolute;
    right: -420px;
    top: 94px;
  }

  .Application__headContainer {
    margin-top: 30px;
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
  .Application__TabButton {
    :active {
      background: transparent !important;
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

    p {
      color: #4e6af3;
    }

    :hover {
      background: #f1f7ff;
    }
    :focus {
      background: #fff;
    }

    :active {
      background: #e1edfd;
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
    height: 100vh;

    li:not(:first-child) {
      margin-top: 10px;
    }
  }

  .Application__Footer {
    display: none;
    position: fixed;
    width: 100%;
    border-top: 2px solid #eef1f5;
    bottom: 0;
    background: #fff;
    padding: 10px;
    border-radius: 10px 10px 0 0;
  }

  .Application__FooterButtons {
    display: flex;
    justify-content: center;

    div,
    button:not(:first-child) {
      margin-left: 64px;
    }
  }

  .PlusIconContainer {
    padding: 2px;
    background: #eef1f5;
    border-radius: 50%;
    transform: translate(0, -34px);

    button {
      background: #4e6af3;
      width: fit-content;
      height: fit-content;
      padding: 10px !important;
      border-radius: 50%;
    }
  }

  .FooterButton {
    padding: 5px 0 0 0;
    max-width: 74px;
    width: 100%;

    :hover {
      svg {
        path {
          fill: #4e6af3;
        }
      }
    }
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      svg {
        margin-bottom: 2px;
        path {
          fill: #7786a5;
        }
      }
    }
  }

  .KebabIcon {
    transform: rotate(90deg);
  }

  @media (max-width: 1660px) {
    padding-left: 0;
    padding-right: 0;
    grid-gap: 15px;
    .Application__wrapper {
      grid-column: 5 / span 10;
      width: 100%;

      &.IsOpenSidebar,
      &.IsOpenFilter {
        grid-column: 1 / span 11;
      }
    }
  }

  @media (max-width: 1441px) {
    grid-gap: 20px;
    padding-left: 0;
    padding-right: 0;
    display: flex;
    flex-direction: column;
    .Application__wrapper {
      margin: 0 auto;
      grid-column: 1 / span 14;
      width: 100%;
      max-width: 970px;
      min-width: unset;

      &.IsOpenFilter,
      &.IsOpenSidebar {
        grid-column: 1 / span 18;
        max-width: 970px;
      }
    }

    .SingleApplicationSideBar {
      grid-column: 1 / span 18;
      margin-top: 16px;
      margin-left: 0;
      height: fit-content;
      padding-bottom: 120px;
    }

    .TestFilter {
      position: fixed;
      margin-top: 0;
      margin-left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(60, 75, 97, 0.6);
      transform: translate(-20px, 0);
      backdrop-filter: blur(11px);
      z-index: 500;
      min-width: unset;
      display: flex;
      justify-content: flex-end;
    }

    .Applications__filter {
      position: relative;
      margin-right: 20px;
      margin-top: 20px;
      height: calc(100vh - 40px);
      margin-left: 0;
      max-width: 355px;
    }
  }
  .Applications__filterMobile {
    display: none;
  }
  @media (max-width: 1024px) {
    display: flex;

    flex-direction: column;
    .Application__headContainer {
      margin-top: 0;
    }

    .TestFilter {
      transform: none;
    }

    .Applications__filterMobile {
      position: relative;
      display: block;
      overflow: auto;
      height: 100vh;
    }

    .Applications__list {
      margin-top: 16px;
      padding-left: 20px;
      padding-right: 20px;
    }

    .Application__Footer {
      display: block;
    }
  }
  @media (max-width: 660px) {
    .Application__headContainer {
      padding-right: 0;
    }

    .Application__headTabsContainer {
      overflow: auto;

      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

  @media (max-width: 576px) {
    .ApplicationsList {
      padding-left: 0;
      padding-right: 0;
    }
    .TestFilter {
      display: none;
    }
    .Applications__filterMobileContainer {
      position: absolute;
      z-index: 999;
      width: 100%;
      height: 100vh;
      top: -58px;
    }
    .Application__FooterButtons {
      display: flex;
      justify-content: center;

      div,
      button:not(:first-child) {
        margin-left: 5px;
      }
    }

    .Application__headTabs {
      margin-top: 16px;
    }

    .Application__headTabsBar {
      margin-top: 8px;
    }

    .Application__headTabButton {
      ::before {
        top: 28px;
      }
    }
  }
`;

export { Favourites };
