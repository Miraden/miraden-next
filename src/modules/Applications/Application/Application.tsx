import { Button, Search } from "@/components/ui";
import { ApplicationsFilter } from "@/components/ui/ApplicationsFilter";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { ArrowIcon } from "@/icons";
import { FilterIcon } from "@/icons/FilterIcon";
import cn from "classnames";
import Link from "next/link";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { ObjectCard } from "./components/ObjectCard";
import { SellerCard } from "./components/SellerCard";
import { SingleApplication } from "./components/SingleApplication";
import { SingleApplicationSideBar } from "./components/SingleApplicationSideBar";
interface ApplicationProps {
  className?: string;
}

type Option =
  | "application"
  | "requests"
  | "performers"
  | "refusals"
  | "recommended"
  | "contacts"
  | "information";

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

const Application = ({ className }: ApplicationProps) => {
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
      <div className="Application__headContainer">
        <div className="Application__head">
          <Link href="/applications-full">
            <ArrowIcon
              width={20}
              height={20}
              className="Application__headArrow"
            />
          </Link>

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
              Отклики{" "}
              <p className="TabButton__counter Color_text_grey">
                {applicationsArray.length}
              </p>
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
              <p
                className={cn("TabButton__counter Color_text_grey", {
                  Color_blue_primary: selected === "performers",
                })}
              >
                {performersArray.length}
              </p>
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
              <p className="TabButton__counter Color_text_grey">
                {refusalsArray.length}
              </p>
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

      {selected === "application" ? (
        <>
          <SingleApplication />
          <SingleApplicationSideBar className="SingleApplicationSideBar" />
        </>
      ) : (
        <>
          <div>
            <Search
              options={[]}
              placeholder="Поиск"
              className="Applications__searchBar"
              rightIcon={<FilterIcon />}
              onClick={handleShowFilter}
            />
          </div>
          {showFilter && (
            <ApplicationsFilter
              onTabClick={handleTabClick}
              className="Applications__filter"
              onClick={handleShowFilter}
            />
          )}
        </>
      )}

      {selected === "requests" && (
        <>
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
      )}

      {selected === "recommended" && (
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
      )}
    </StyledApplication>
  );
};

const StyledApplication = styled.section`
  position: relative;

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
    margin-top: 94px;
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

  .Applications__filter {
    position: absolute;
    top: 94px;
    right: -380px;
    height: calc(100vh - 114px);
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

  .Application__headContainer {
    margin-top: 94px;
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
    max-width: 380px;

    h2 {
      margin-top: 30px;
    }

    p {
      margin-top: 10px;
    }
  }

  .Applications__list {
    margin-top: 20px;
    li:not(:first-child) {
      margin-top: 10px;
    }
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

  .Application__bottomContainer {
    position: absolute;
    bottom: 0;
    background: #fff;
    padding-top: 6px;
    border-radius: 10px 10px 0 0;
  }

  .Application__bottomTabs {
    display: flex;
    justify-content: space-between;
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

  @media (max-width: 1024px) {
    .Application__headContainer {
      margin-top: 60px;
    }

    .Applications__list {
      margin-top: 16px;
    }
  }
`;

export { Application };
