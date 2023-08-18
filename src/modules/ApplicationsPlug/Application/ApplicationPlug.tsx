import { Button, Search } from '@/components/ui'
import { ApplicationsFilter } from '@/components/ui/ApplicationsFilter'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { BackIcon20 } from '@/icons'
import { FilterIcon } from '@/icons/FilterIcon'
import { ApplicationsFooter } from '@/modules/Base/ApplicationsFooter'
import cn from 'classnames'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { StyledMenu, TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import * as DataProvider from '@/modules/Applications/Application/DataProfiver'
import { theme } from '../../../../styles/tokens'

interface ApplicationProps {
  className?: string
}

enum TabsMenuState {
  Lead = 0,
  Requests = 1,
  Executors = 2,
  Refusals = 3,
  Recommended = 4,
}

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

const ApplicationPlug = ({ className }: ApplicationProps) => {
  const [selected, setSelected] = useState<TabsMenuState>(TabsMenuState.Lead)
  const [showFilter, setShowFilter] = useState(false)
  const [selectedContent, setSelectedContent] = useState('1')

  const handleSelect = useCallback((option: number) => {
    setSelected(option)
  }, [])

  const handleShowFilter = useCallback(() => {
    setShowFilter(!showFilter)
  }, [showFilter])

  const handleTabClick = (tabId: string) => {
    setSelectedContent(tabId)
  }

  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = useCallback(() => {
    setIsOpenModal(true)
  }, [])

  const [submit, setSubmit] = useState(false)
  useLockBodyScroll(isOpenModal)

  const [tabsManager, setTabsManager] = useState<TabsManager>(new TabsManager())
  tabsManager.setCallback(handleSelect)
  tabsManager.addItem(new TabMenuItem('Заявка', 0, <></>))
  tabsManager.addItem(
    new TabMenuItem(
      'Отклики',
      DataProvider.requestsUsers.length,
      <></>,
      (
        <Search
          sort={[
            { label: 'Сначала агентства', value: 1 },
            { label: 'Сначала PRO', value: 2 },
            { label: 'Сначала самые надежные', value: 3 },
          ]}
          placeholder="Поиск"
          className={cn('Applications__searchBar')}
          filterIcon={<FilterIcon />}
          onFilterClick={handleShowFilter}
          withSort={true}
        />
      )
    )
  )

  tabsManager.addItem(
    new TabMenuItem('Исполнители', DataProvider.executorsUsers.length, <></>)
  )

  tabsManager.addItem(
    new TabMenuItem(
      'Отказы',
      DataProvider.refusalsUsers.length,
      <></>,
      (
        <Search
          sort={[
            { label: 'Сначала агентства', value: 1 },
            { label: 'Сначала PRO', value: 2 },
            { label: 'Сначала самые надежные', value: 3 },
          ]}
          placeholder="Поиск"
          className={cn('Applications__searchBar')}
          filterIcon={<FilterIcon />}
          onFilterClick={handleShowFilter}
          withSort={true}
        />
      )
    )
  )

  tabsManager.addItem(
    new TabMenuItem(
      'Рекомендуемые',
      DataProvider.recommendUsers.length,
      <></>,
      (
        <Search
          sort={[
            { label: 'Сначала агентства', value: 1 },
            { label: 'Сначала PRO', value: 2 },
            { label: 'Сначала самые надежные', value: 3 },
          ]}
          placeholder="Поиск"
          className={cn('Applications__searchBar')}
          filterIcon={<FilterIcon />}
          onFilterClick={handleShowFilter}
          withSort={true}
        />
      )
    )
  )

  return (
    <StyledApplication
      className={cn(className, {
        Test: showFilter,
      })}
    >
      <div className={cn('Application__wrapper', { IsOpenFilter: showFilter })}>
        <StyledMenu className={cn(tabsManager.getClasses())}>
          <div className={'Menu__header Font_headline_3'}>
            <Button
              secondary
              href="/applications-full"
              className="Menu__header_backButton"
            >
              <BackIcon20
                width={20}
                height={20}
                className="Menu__header_backArrow"
              />
            </Button>
            <h1 className="Font_headline_3">
              Хочу купить 3-х комнатную квартиру на Кипре. Хочу купить 3-х
              комнатную квартиру на Кипре
            </h1>
          </div>
          {tabsManager.renderMenus(selected)}
          {tabsManager.renderMenuFooter(selected)}
        </StyledMenu>

        {tabsManager.renderContent(selected)}
      </div>

      {showFilter && (
        <div className="TestFilter">
          <ApplicationsFilter
            onTabClick={handleTabClick}
            className="Applications__filter"
            onClick={handleShowFilter}
          />
        </div>
      )}
      <ApplicationsFooter />
    </StyledApplication>
  )
}

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

  .Application__wrapper {
    min-width: 970px;
    max-width: 970px;
    grid-column: 5 / span 10;
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
      content: '';
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
    max-width: 320px;

    h2 {
      margin-top: 20px;
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

  @media (max-width: 1024px) {
    .Application__headContainer {
      margin-top: 0;
    }

    .Applications__list {
      margin-top: 16px;
      padding-left: 20px;
      padding-right: 20px;
    }

    .Application__Footer {
      display: block;
    }

    .Application__body {
      padding-top: 120px;
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

    .Application__body {
      padding-top: 40px;
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
`

export { ApplicationPlug }
