import { Button, Search } from "@/components/ui";
import { ApplicationsFilter } from "@/components/ui/ApplicationsFilter";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import {
  Applications,
  BackIcon20,
  HomeIcon,
  KebabIcon,
  ListItemsIcon,
  PlusIcon,
} from "@/icons";
import { FilterIcon } from "@/icons/FilterIcon";
import cn from "classnames";
import Image from "next/image";
import { useCallback, useState } from "react";
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

const ApplicationPlug = ({ className }: ApplicationProps) => {
  const [selected, setSelected] = useState<Option | null>("application");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedContent, setSelectedContent] = useState("1");

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

  return (
    <StyledApplication className={className}>
      <div
        className={cn("Application__wrapper", { IsOpenFilter: !showFilter })}
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
                className={cn("", {
                  Application__headTabButton: selected === "application",
                })}
                onClick={() => handleSelect("application")}
                active={selected === "application"}
                tertiary
              >
                Заявка
              </Button>
              <Button
                className={cn("", {
                  Application__headTabButton: selected === "requests",
                })}
                onClick={() => handleSelect("requests")}
                active={selected === "requests"}
                tertiary
              >
                Отклики
              </Button>
              <Button
                className={cn("", {
                  Application__headTabButton: selected === "performers",
                })}
                onClick={() => handleSelect("performers")}
                active={selected === "performers"}
                tertiary
              >
                Исполнители
              </Button>
              <Button
                className={cn("", {
                  Application__headTabButton: selected === "refusals",
                })}
                onClick={() => handleSelect("refusals")}
                active={selected === "refusals"}
                tertiary
              >
                Отказы
              </Button>
              <Button
                className={cn("", {
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
                width={150}
                height={120}
              />
              <h2>Вы отлично справились!</h2>
              <p className="Color_text_grey Font_16_150">
                На этом месте скоро появятся предложения от исполнителей. А пока
                вы можете посмотреть
                <Button
                  className="Application__bodyButton "
                  onClick={() => handleSelect("recommended")}
                  tertiary
                >
                  Рекомендуемые
                </Button>
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
              <h2>Исполнители не выбраны</h2>
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
              <h2>Отказы отсутствуют</h2>
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
                className="Applications__searchBar"
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
        <ApplicationsFilter
          onTabClick={handleTabClick}
          className="Applications__filter"
          onClick={handleShowFilter}
        />
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

  .Application__wrapper {
    grid-column: 5 / span 10;
  }

  .Applications__filter {
    position: sticky;
    top: 94px;
    grid-column: 16 / span 3;
    margin-top: 30px;
    margin-left: -30px;
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
    align-items: center;
    h1 {
      margin-left: 10px;
    }
  }

  .Application__headButton {
    padding: 4px !important;
    border-radius: 50%;
    :hover {
      background: #f1f7ff;
    }

    :active {
      background: #e1edfd;
    }
  }

  .Application__headTabs {
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

  .SingleApplicationSideBar {
    position: absolute;
    right: -420px;
    top: 94px;
  }

  .Application__head {
    display: flex;
    align-items: center;
    h1 {
      margin-left: 10px;
    }
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

  .Applications__searchBar {
    padding: 0;
    input {
      border-radius: 0 0 10px 10px;
      box-shadow: none !important;
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

  @media (max-width: 1440px) {
    grid-gap: 20px;
    padding-left: 0;
    padding-right: 0;

    .Application__wrapper {
      grid-column: 1 / span 14;
      width: 100%;

      &.IsOpenFilter {
        grid-column: 1 / span 18;
      }
    }

    .SingleApplicationSideBar {
      grid-column: 1 / span 18;
      margin-top: 16px;
      margin-left: 0;
      height: fit-content;
      padding-bottom: 120px;
    }
  }

  @media (max-width: 1024px) {
    display: flex;

    flex-direction: column;
    .Application__headContainer {
      margin-top: 0;
    }
    .Applications__filter {
      display: none;
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

  @media (max-width: 576px) {
    .Applications__list {
      padding-left: 0;
      padding-right: 0;
    }

    .Application__FooterButtons {
      display: flex;
      justify-content: center;

      div,
      button:not(:first-child) {
        margin-left: 5px;
      }
    }
  }
`;

export { ApplicationPlug };
