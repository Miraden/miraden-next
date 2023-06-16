import {Button, Search} from "@/components/ui";
import {useLockBodyScroll} from "@/hooks/useLockBodyScroll";
import {BackIcon20} from "@/icons";
import {FilterIcon} from "@/icons/FilterIcon";
import {ApplicationsFooter} from "@/modules/Base/ApplicationsFooter";
import cn from "classnames";
import {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {SellerCard} from "./components/SellerCard";
import {SingleApplication} from "./components/SingleApplication";
import {SingleApplicationSideBar} from "./components/SingleApplicationSideBar";
import {TabMenuItem, TabsManager} from "@/components/ui/TabsMenu";
import {ApplicationsFilter} from "@/components/ui/ApplicationsFilter";
import {ObjectCard} from "./components/ObjectCard";
import * as DataProvider from "./DataProfiver";

const BaseClassName: string = "Application"

interface ApplicationProps {
  className?: string;
}

enum TabsMenuState {
  Lead = 0,
  Requests = 1,
  Executors = 2,
  Refusals = 3,
  Recommended = 4
}

const Application = ({className}: ApplicationProps) => {
  const [selected, setSelected] = useState<TabsMenuState>(TabsMenuState.Lead);
  const handleSelect = useCallback((option: TabsMenuState) => {
    setSelected(option);
  }, []);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const [submit, setSubmit] = useState(false);
  useLockBodyScroll(isOpenModal);

  const [mQuery, setMQuery] = useState({
    matches: typeof window !== "undefined" && window.innerWidth <= 1440,
  });
  const handleChange = useCallback(
    (e: any) => setMQuery({matches: e.matches}),
    []
  );

  const [showFilter, setShowFilter] = useState(false);
  const handleShowFilter = useCallback(() => {
    setShowFilter(!showFilter);
  }, [showFilter]);

  const [selectedContent, setSelectedContent] = useState("1");
  const handleTabClick = (tabId: string) => {
    setSelectedContent(tabId);
  };

  useEffect(() => {
    let mediaQuery = window.matchMedia("(max-width: 1440px)");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [handleChange]);

  useLockBodyScroll(showFilter && mQuery.matches);

  const tabsManager = new TabsManager([], handleSelect)
  tabsManager.addItem(new TabMenuItem('Заявка', 0, (<>{renderLead()}</>)))
  tabsManager.addItem(new TabMenuItem('Отклики', DataProvider.requestsUsers.length, (<>{renderUsersSearch(handleShowFilter)}{renderRequests(selectedContent)}</>)))
  tabsManager.addItem(new TabMenuItem('Исполнители', DataProvider.executorsUsers.length, (<>{renderUsersSearch(handleShowFilter)}{renderExecutors()}</>)))
  tabsManager.addItem(new TabMenuItem('Отказы', DataProvider.refusalsUsers.length, (<>{renderRefusals()}</>)))
  tabsManager.addItem(new TabMenuItem('Рекомендуемые', DataProvider.recommendUsers.length, (<>{renderUsersSearch(handleShowFilter)}{renderRecommended(submit, handleOpenModal)}</>)))
  const activeState: TabsMenuState = statesFromNumber(parseInt(selected))

  const showLeadSidebar = activeState === TabsMenuState.Lead
  const isShowFilter = activeState !== TabsMenuState.Lead && showFilter

  return (
    <>
      <StyledApplication
        className={cn(className, stateToClassName(activeState))}>
        <div
          className={cn("Application__wrapper", {
            IsOpenSidebar: showLeadSidebar,
            IsOpenFilter: isShowFilter
          })}>
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
                Хочу купить 3-х комнатную квартиру на Кипре
              </h1>
            </div>
            {tabsManager.renderMenus(selected)}
          </div>

          {tabsManager.renderContent(selected)}
        </div>

        {showLeadSidebar && renderLeadPaymentOptions()}

        {isShowFilter && renderFilter(handleShowFilter, handleTabClick)}

        {!isShowFilter && <ApplicationsFooter/>}
      </StyledApplication>
    </>
  );
};

function renderRecommended(isSubmit: boolean, handleOpenModal: Function): JSX.Element {
  return (
    <>
      <ul className="Applications__list">
        {DataProvider.recommendUsers.map((recommend, index) => (
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
              submit={isSubmit}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

function renderRefusals(): JSX.Element {
  return (
    <>
      <ul className="Applications__list">
        {DataProvider.refusalsUsers.map((refusal, index) => (
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
  )
}

function renderExecutors(): JSX.Element {
  return (
    <div>
      <ul className="Applications__list">
        {DataProvider.executorsUsers.map((performer, index) => (
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
  )
}

function renderUsersSearch(handler: Function): JSX.Element {
  return (
    <Search
      options={[]}
      placeholder="Поиск"
      className={cn("Applications__searchBar")}
      rightIcon={<FilterIcon/>}
      onClick={handler}
      withFilter/>
  )
}

function renderRequests(selected: string): JSX.Element {
  return (
    <div>
      {selected === "1" && (
        <ul className="Applications__list">
          {DataProvider.requestsUsers.map((performer, index) => (
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
      )}

      {selected === "2" && (
        <ul className="Applications__list">
          {DataProvider.objects.map((object, index) => (
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

    </div>
  )
}

function renderLeadPaymentOptions(): JSX.Element {
  return (
    <>
      <SingleApplicationSideBar className="SingleApplicationSideBar"/>
    </>
  )
}

function renderLead(): JSX.Element {
  return (
    <>
      <SingleApplication/>
    </>
  )
}

function renderFilter(handler: Function, tabHandler: Function): JSX.Element {
  return (
    <>
      <div className="TestFilter">
        <ApplicationsFilter
          onTabClick={tabHandler}
          className="Applications__filter"
          onClick={handler}
        />
      </div>
    </>
  )
}

function statesFromNumber(val: number): TabsMenuState {
  let found = TabsMenuState.Lead

  switch (val) {
    case 0:
      found = TabsMenuState.Lead
      break
    case 1:
      found = TabsMenuState.Requests
      break
    case 2:
      found = TabsMenuState.Executors
      break
    case 3:
      found = TabsMenuState.Refusals
      break
    case 4:
      found = TabsMenuState.Recommended
      break
    default:
      found = TabsMenuState.Lead
      break
  }

  return found
}

function stateToClassName(val: TabsMenuState): string {
  let found: string = BaseClassName + "__Lead"
  switch (val) {
    case TabsMenuState.Lead:
      found = BaseClassName + "__Lead"
      break
    case TabsMenuState.Recommended:
      found = BaseClassName + "__Recommended"
      break
    case TabsMenuState.Refusals:
      found = BaseClassName + "__Refusals"
      break
    case TabsMenuState.Executors:
      found = BaseClassName + "__Executors"
      break
    case TabsMenuState.Requests:
      found = BaseClassName + "__Requests"
      break
  }

  return found
}

const StyledApplication = styled.section`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-gap: 30px;
  padding-left: 55px;
  padding-right: 55px;

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

  &.Application__Requests, &.Application__Recommended, &.Application__Executors {
    .Application__headContainer {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      padding-bottom: 0;
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
    padding: 20px 20px 10px 20px;
    background: #fff;
    border-radius: 10px;
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

  .Application__TabButton {
    :active {
      background: transparent !important;
    }
  }

  .Application__headTabButton {
    position: relative;

    ::before {
      position: absolute;
      top: 32px;
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
    margin-top: 12px;
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

    .SingleApplicationSideBar {
      width: 100%;
      grid-column: 1 / span 18;
      margin: 16px auto 0;
      height: fit-content;
      padding-bottom: 120px;
    }
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

export {Application};
