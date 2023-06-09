import { Button, Search } from "@/components/ui";
import { ApplicationsFilter } from "@/components/ui/ApplicationsFilter";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { BackIcon20 } from "@/icons";
import { FilterIcon } from "@/icons/FilterIcon";
import { ApplicationsFooter } from "@/modules/Base/ApplicationsFooter";
import cn from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ObjectCard } from "./components/ObjectCard";
import { SellerCard } from "./components/SellerCard";
import { SingleApplication } from "./components/SingleApplication";
import { SingleApplicationSideBar } from "./components/SingleApplicationSideBar";
interface ApplicationProps {
  className?: string;
}

const applicationsArray = [
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
    unreadMessages: 1,
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
  },
];

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
    isUnpublished: true,
    image1: "/images/img.jpg",
    image2: "/images/img.jpg",
    image3: "/images/img.jpg",
    firstInstallment: "34 000 $",
    singleCost: "1 200 $",
    firstInstallmentPercent: "30 %",
  },
];

const performersArray = [
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
    isPerformer: true,
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
    isPerformer: true,
  },
];

const refusalsArray = [
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
    isRefusal: true,
  },
];

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
type Option =
  | "application"
  | "requests"
  | "performers"
  | "refusals"
  | "recommended"
  | "contacts"
  | "information";

const Application = ({ className }: ApplicationProps) => {
  const [selected, setSelected] = useState<Option | null>("application");
  const [showFilter, setShowFilter] = useState(false);
  const startY = useRef<number>(0);

  const [selectedContent, setSelectedContent] = useState("1");
  const [sideBar, setSideBar] = useState(true);

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);

    if (option !== "application") {
      setSideBar(false);
    } else {
      setSideBar(true);
      setShowFilter(false);
    }
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

  const [mQuery, setMQuery] = useState({
    matches:
      typeof window !== "undefined" && window.innerWidth <= 1440 ? true : false,
  });

  const handleChange = useCallback(
    (e: any) => setMQuery({ matches: e.matches }),
    []
  );

  useEffect(() => {
    let mediaQuery = window.matchMedia("(max-width: 1440px)");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [handleChange]);

  useLockBodyScroll(showFilter && mQuery.matches);

  return (
    <>
      <StyledApplication
        className={cn(className, {
          Test: showFilter || sideBar || selected === "application",
        })}
      >
        <div
          className={cn("Application__wrapper", {
            IsOpenSidebar: sideBar,
            IsOpenFilter: showFilter,
          })}
        >
          <div className="Application__headContainer">
            <div className="Application__head">
              <Button
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
                  Предложения{" "}
                  <p className="TabButton__counter Color_text_grey">
                    {applicationsArray.length}
                  </p>
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
                  <p
                    className={cn("TabButton__counter Color_text_grey", {
                      Color_blue_primary: selected === "performers",
                    })}
                  >
                    {performersArray.length}
                  </p>
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
                  <p className="TabButton__counter Color_text_grey">
                    {refusalsArray.length}
                  </p>
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

          {selected === "application" && (
            <>
              <SingleApplication />
            </>
          )}
          {selected === "performers" && (
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
            </>
          )}

          {selected === "requests" && (
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

              {selectedContent === "1" && (
                <ul className="Applications__list">
                  {applicationsArray.map((appItem, index) => (
                    <li key={index}>
                      <SellerCard
                        name={appItem.name}
                        isPro={appItem.isPro}
                        isVerified={appItem.isVerified}
                        rating={appItem.rating}
                        image={appItem.image}
                        status={appItem.status}
                        agencyName={appItem.agencyName}
                        isOnline={appItem.isOnline}
                        unreadMessages={appItem.unreadMessages}
                      />
                    </li>
                  ))}
                </ul>
              )}
              {selectedContent === "2" && (
                <ul className="Applications__list">
                  {objectsArray.map((object, index) => (
                    <li key={index}>
                      <ObjectCard
                        href="/"
                        title={object.title}
                        location={object.location}
                        id={object.id}
                        cashBack={object.cashBack}
                        year={object.year}
                        yieldCount={object.yieldCount}
                        sleeps={object.sleeps}
                        square={object.square}
                        rooms={object.rooms}
                        baths={object.baths}
                        price={object.price}
                        isBooked={object.isBooked}
                        isUnpublished={object.isUnpublished}
                        name={object.name}
                        status={object.status}
                        image1={object.image1}
                        image2={object.image2}
                        image3={object.image3}
                        image={object.image}
                        firstInstallment={object.firstInstallment}
                        firstInstallmentPercent={object.firstInstallmentPercent}
                        singleCost={object.singleCost}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}

          {selected === "performers" && (
            <div>
              <ul className="Applications__list">
                {performersArray.map((performer, index) => (
                  <li key={index}>
                    <SellerCard
                      isPerformer={performer.isPerformer}
                      name={performer.name}
                      isPro={performer.isPro}
                      isVerified={performer.isVerified}
                      rating={performer.rating}
                      image={performer.image}
                      status={performer.status}
                      agencyName={performer.agencyName}
                      isOnline={performer.isOnline}
                      unreadMessages={performer.unreadMessages}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selected === "refusals" && (
            <>
              <div className="Applications__headTabsBar_whiteSpace" />

              <ul className="Applications__list">
                {refusalsArray.map((refusal, index) => (
                  <li key={index}>
                    <SellerCard
                      isRefusal={refusal.isRefusal}
                      name={refusal.name}
                      isPro={refusal.isPro}
                      isVerified={refusal.isVerified}
                      rating={refusal.rating}
                      image={refusal.image}
                      status={refusal.status}
                      agencyName={refusal.agencyName}
                      isOnline={refusal.isOnline}
                      unreadMessages={refusal.unreadMessages}
                    />
                  </li>
                ))}
              </ul>
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

        {selected === "application" && (
          <>
            {" "}
            {sideBar && (
              <div className="SingleApplicationSideBar">
                <SingleApplicationSideBar />
                <Button className="SideBar__totalTaxButton--edit">
                  Редактировать{" "}
                </Button>
              </div>
            )}
          </>
        )}
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

        {!showFilter && <ApplicationsFooter />}
      </StyledApplication>
    </>
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

  .Application__headButton {
    padding: 4px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 10px;
    background: #fff;
    .Application__headArrow {
      background: transparent;
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
    /* position: sticky;
    top: 94px;
    overflow: auto;
    grid-column: 16 / span 3;
    margin-top: 30px;
    margin-left: -30px; */
    overflow: auto;
    height: calc(100vh - 114px);
  }

  .Color_blue_primary {
    color: #4e6af3;
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

    @media (max-width: 1023px) {
      border-radius: 0;
    }
  }

  .Application__head {
    display: flex;
    align-items: baseline;
    @media (max-width: 576px) {
      display: block;
      h1 {
        font-size: 22px;
      }
      a {
        float: left;
      }
    }
  }

  .Application__headTabs {
    display: flex;
    margin-top: 20px;
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
  .Application__body {
    padding-top: 100px;
    margin: 0 auto;
    text-align: -webkit-center;
    max-width: 380px;

    h2 {
      margin-top: 30px;
    }

    p {
      margin-top: 10px;
    }
  }

  /* хром, сафари */
  .Applications__headTabs::-webkit-scrollbar {
    width: 0;
  }

  /* ie 10+ */
  .Applications__headTabs {
    -ms-overflow-style: none;
  }

  /* фф (свойство больше не работает, других способов тоже нет)*/
  .Applications__headTabs {
    overflow: -moz-scrollbars-none;
  }

  .SingleApplicationSideBar {
    position: sticky;
    top: 94px;
    max-width: 970px;
    min-width: 355px;
    overflow: auto;
    grid-column: 16 / span 3;
    margin-top: 30px;
    margin-left: -30px;
    height: calc(100vh - 114px);
    border-radius: 10px;

    .SideBar__totalTaxButton--edit {
      width: 100%;
      margin-top: 15px;
      background: #fff;
      color: #7786a5;
      font-size: 14px;
      font-weight: 400;
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
  .Applications__list {
    margin-top: 20px;
    li:not(:first-child) {
      margin-top: 10px;
    }
  }

  .PlusIcon__container {
    background: #4e6af3;
    padding: 10px;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    svg {
      path {
        fill: #fff;
      }
    }
  }

  .Application__Footer {
    display: none;
    border-top: 2px solid #eef1f5;
    position: fixed;
    width: 100%;
    bottom: 0;
    background: #fff;
    padding: 10px 10px 0 0;
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
    grid-gap: 16px;
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

    .SingleApplicationSideBar {
      width: 100%;
      margin: 0 auto;
      grid-column: 1 / span 18;
      height: fit-content;
      padding-bottom: 120px;
    }
  }

  .Applications__filterMobile {
    display: none;
  }

  @media (max-width: 1024px) {
    display: flex;

    flex-direction: column;
    padding-bottom: 80px;
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

export { Application };
