import { Button, Search } from "@/components/ui";
import { ApplicationsFilter } from "@/components/ui/ApplicationsFilter";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import {
  Applications,
  BackIcon20,
  HomeIcon,
  KebabIcon,
  ListIcon,
  PlusIcon,
} from "@/icons";
import { FilterIcon } from "@/icons/FilterIcon";
import cn from "classnames";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { SellerCard } from "./components/SellerCard";
interface ApplicationProps {
  className?: string;
}

type Option =
  | "application"
  | "requests"
  | "performers"
  | "refusals"
  | "recommended";

const recommendArray = [
  {
    name: "Ангелина Синичкина",
    type: "seller",
    isVerified: true,
    isPro: true,
    rating: 4.8,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "HomeSweet",
    isOnline: true,
    unreadMessages: 0,
    isRefusal: true,
    isRecommend: true,
  },
  {
    name: "Андрей Макеев",
    type: "seller",
    isVerified: true,
    isPro: false,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "Realhome",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Валентина Антонова",
    type: "object",
    isVerified: true,
    isPro: false,
    rating: 5.0,
    image: "/images/avatar.jpg",
    status: "Риелтор",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Константин Гриндин",
    type: "seller",
    isVerified: true,
    isPro: true,
    image: "/images/avatar.jpg",
    status: "Собственник",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Ангелина Синичкина",
    type: "seller",
    isVerified: true,
    isPro: true,
    rating: 4.8,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "HomeSweet",
    isOnline: true,
    unreadMessages: 0,
    isRefusal: true,
    isRecommend: true,
  },
  {
    name: "Андрей Макеев",
    type: "seller",
    isVerified: true,
    isPro: false,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "Realhome",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Валентина Антонова",
    type: "object",
    isVerified: true,
    isPro: false,
    rating: 5.0,
    image: "/images/avatar.jpg",
    status: "Риелтор",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Константин Гриндин",
    type: "seller",
    isVerified: true,
    isPro: true,
    image: "/images/avatar.jpg",
    status: "Собственник",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Ангелина Синичкина",
    type: "seller",
    isVerified: true,
    isPro: true,
    rating: 4.8,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "HomeSweet",
    isOnline: true,
    unreadMessages: 0,
    isRefusal: true,
    isRecommend: true,
  },
  {
    name: "Андрей Макеев",
    type: "seller",
    isVerified: true,
    isPro: false,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "Realhome",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Валентина Антонова",
    type: "object",
    isVerified: true,
    isPro: false,
    rating: 5.0,
    image: "/images/avatar.jpg",
    status: "Риелтор",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Константин Гриндин",
    type: "seller",
    isVerified: true,
    isPro: true,
    image: "/images/avatar.jpg",
    status: "Собственник",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Ангелина Синичкина",
    type: "seller",
    isVerified: true,
    isPro: true,
    rating: 4.8,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "HomeSweet",
    isOnline: true,
    unreadMessages: 0,
    isRefusal: true,
    isRecommend: true,
  },
  {
    name: "Андрей Макеев",
    type: "seller",
    isVerified: true,
    isPro: false,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "Realhome",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Валентина Антонова",
    type: "object",
    isVerified: true,
    isPro: false,
    rating: 5.0,
    image: "/images/avatar.jpg",
    status: "Риелтор",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Константин Гриндин",
    type: "seller",
    isVerified: true,
    isPro: true,
    image: "/images/avatar.jpg",
    status: "Собственник",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
];

const ObjectPlug = ({ className }: ApplicationProps) => {
  const [selected, setSelected] = useState<Option | null>("requests");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedContent, setSelectedContent] = useState("1");
  const startY = useRef<number>(0);

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);

  const handleShowFilter = useCallback(() => {
    setShowFilter(!showFilter);
  }, [showFilter]);

  const handleTabClick = (tabId: string) => {
    setSelectedContent(tabId);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const [submit, setSubmit] = useState(false);
  useLockBodyScroll(isOpenModal);
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
            <Button
              tertiary
              href="/applications-full"
              className="Application__headButton"
            >
              <BackIcon20
                width={20}
                height={20}
                className="Application__headArrow"
              />
            </Button>

            <h1 className="Font_32_120 lg:Font_26_120_500">
              Хочу купить 3-х комнатную квартиру на Кипре
            </h1>
          </div>
          <div className="Application__headTabsContainer">
            <div className="Application__headTabs">
              <Button
                className={cn("Application__TabButton", {
                  Application__headTabButton: selected === "application",
                })}
                onClick={() => handleSelect("application")}
                active={selected === "application"}
                tertiary
              >
                Заявка
              </Button>
              <Button
                className={cn("Application__TabButton", {
                  Application__headTabButton: selected === "requests",
                })}
                onClick={() => handleSelect("requests")}
                active={selected === "requests"}
                tertiary
              >
                Отклики
              </Button>
              <Button
                className={cn("Application__TabButton", {
                  Application__headTabButton: selected === "performers",
                })}
                onClick={() => handleSelect("performers")}
                active={selected === "performers"}
                tertiary
              >
                Исполнители
              </Button>
              <Button
                className={cn("Application__TabButton", {
                  Application__headTabButton: selected === "refusals",
                })}
                onClick={() => handleSelect("refusals")}
                active={selected === "refusals"}
                tertiary
              >
                Отказы
              </Button>
              <Button
                className={cn("Application__TabButton", {
                  Application__headTabButton: selected === "recommended",
                })}
                onClick={() => handleSelect("recommended")}
                active={selected === "recommended"}
                tertiary
              >
                Рекомендуемые
                <p className="TabButton__counter Color_text_grey">
                  {recommendArray.length}
                </p>
              </Button>
            </div>
            <div className="Application__headTabsBar" />
          </div>
        </div>
        {selected === "application" && (
          <div className="Applications__headTabsBar_whiteSpace" />
        )}
        {selected === "requests" && (
          <>
            <div className="Applications__headTabsBar_whiteSpace" />
          </>
        )}
        {selected === "requests" && (
          <>
            <div className="Application__body">
              <Image
                src="/images/application.svg"
                alt=""
                width={200}
                height={200}
              />
              <h2 className="Font_20_120">Объекты отсутствуют</h2>
              <p className="Color_text_grey Font_16_150">
                На данный момент пользователи с объектами не откликнулись
                на вашу заявку
              </p>
            </div>
          </>
        )}

        {selected === "performers" && (
          <>
            <div className="Applications__headTabsBar_whiteSpace" />
            <div className="Application__body">
              <Image
                src="/images/application.svg"
                alt=""
                width={150}
                height={120}
              />
              <h2 className="Font_20_120">Исполнители не выбраны</h2>
              <p className="Color_text_grey Font_16_150">
                Вы можете выбрать одного или несколько исполнителей в разделе 
                <button
                  onClick={() => handleSelect("requests")}
                  className="Application__adaptiveButton Color_blue_primary"
                >
                  Отклики
                </button>
              </p>
            </div>
          </>
        )}

        {selected === "refusals" && (
          <>
            <div className="Applications__headTabsBar_whiteSpace" />
            <div className="Application__body">
              <Image
                src="/images/application.svg"
                alt=""
                width={150}
                height={120}
              />
              <h2 className="Font_20_120">Отказы отсутствуют</h2>
              <p className="Color_text_grey Font_16_150">
                Если предложение пользователя вас не заинтересовало, вы всегда
                <br /> можете от него отказаться
              </p>
            </div>
          </>
        )}
        {selected === "recommended" && (
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
            <ul className="Applications__list">
              {recommendArray.map((recommend, index) => (
                <li key={index}>
                  <SellerCard
                    isRecommend={recommend.isRecommend}
                    name={recommend.name}
                    isPro={recommend.isPro}
                    isVerified={recommend.isVerified}
                    rating={recommend.rating}
                    image={recommend.image}
                    status={recommend.status}
                    agencyName={recommend.agencyName}
                    isOnline={recommend.isOnline}
                    unreadMessages={recommend.unreadMessages}
                    onClick={handleOpenModal}
                    submit={submit}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {showFilter && (
        <>
          <div className="TestFilter">
            <ApplicationsFilter
              onTabClick={handleTabClick}
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
            <ListIcon />
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

  .Color_blue_primary {
    color: #4e6af3;
  }

  .Applications__list {
    margin-top: 20px;
    li:not(:first-child) {
      margin-top: 10px;
    }
  }
  .Application__headTabsBar_whiteSpace {
    width: 100%;
    height: 10px;
    border-radius: 0 0 10px 10px;
    background: #fff;
  }

  .TabButton__counter {
    margin-left: 10px;
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
    align-items: baseline;
  }

  .Application__headTabs {
    display: flex;
    margin-top: 30px;
    button {
      padding: 0;
      :hover {
        p {
          color: #4e6af3 !important;
        }
      }
    }
    button:not(:first-child) {
      margin-left: 30px;
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

    :active {
      background: transparent !important;
    }
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

  .FilterOpen {
    .Search__rightIcon {
      svg {
        path {
          fill: #7786a5;
        }
      }
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

  .Application__bodyButton {
    padding: 0;
    color: #4e6af3;
  }

  .Applications__headTabsBar {
    margin-top: 15px;
    width: 100%;
    background: #e1edfd;
    height: 4px;
    border-radius: 10px;
  }

  .Application__headButton {
    padding: 4px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 10px;
    :hover {
      background: #f1f7ff;
    }

    :active {
      background: #e1edfd;
    }
  }

  .Application__Footer {
    display: none;
    position: fixed;
    width: 100%;
    bottom: 0;
    background: #fff;
    border-top: 2px solid #eef1f5;
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

  .Application__Footer {
    display: none;
    position: fixed;
    width: 100%;
    bottom: 0;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
  }

  .Application__FooterButtons {
    display: flex;
    justify-content: center;

    div,
    button:not(:first-child) {
      margin-left: 64px;
    }
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
    .Applications__list {
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

export { ObjectPlug };
