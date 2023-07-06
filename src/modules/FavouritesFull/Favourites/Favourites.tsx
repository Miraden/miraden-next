import { Button, Search } from '@/components/ui'
import { ApplicationsFilter } from '@/components/ui/ApplicationsFilter'
import { Applications, HomeIcon, KebabIcon, ListIcon, PlusIcon } from '@/icons'
import { FilterIcon } from '@/icons/FilterIcon'
import { ObjectCard } from '@/modules/Applications/Application/components/ObjectCard'
import cn from 'classnames'
import Image from 'next/image'
import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import { StyledMenu, TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import { ObjectsDataProvider } from '@/modules/Objects/ObjectsDataProvider'

interface ApplicationProps {
  className?: string
}

enum TabsMenuState {
  Objects = 0,
  Leads = 1,
  Users = 2,
}

const Favourites = ({ className }: ApplicationProps) => {
  const [selected, setSelected] = useState<TabsMenuState>(TabsMenuState.Objects)
  const [selectedContent, setSelectedContent] = useState('1')
  const startY = useRef<number>(0)

  const handleTabClick = (tabId: string) => {
    setSelectedContent(tabId)
  }

  const handleSelect = useCallback((option: number) => {
    setSelected(option)
  }, [])
  const handleTouchStart = (event: TouchEvent) => {
    const touch = event.touches[0]
    startY.current = touch.pageY
  }

  const handleTouchEnd = (event: TouchEvent) => {
    const touch = event.changedTouches[0]
    const deltaY = touch.pageY - startY.current

    if (deltaY > 50) {
      setShowFilter(false)
    }
  }

  const [showFilter, setShowFilter] = useState(false)
  const handleShowFilter = useCallback(() => {
    setShowFilter(!showFilter)
  }, [showFilter])

  const [tabsManager, setTabsManager] = useState<TabsManager>(new TabsManager())
  tabsManager.setCallback(handleSelect)
  tabsManager.addItem(
    new TabMenuItem(
      'Объекты',
      0,
      <>{renderObjects()}</>,
      (
        <Search
          options={[
            'Сначала агентства',
            'Сначала PRO',
            'Сначала самые надежные',
          ]}
          placeholder="Поиск"
          filterIcon={<FilterIcon />}
          withSort={true}
          onFilterClick={handleShowFilter}
        />
      )
    )
  )
  tabsManager.addItem(new TabMenuItem('Заявки', 0, <>{renderLeads()}</>,))
  tabsManager.addItem(new TabMenuItem('Пользователи', 0, <>{renderUsers()}</>,))

  return (
    <StyledApplication
      className={cn(className, {
        Test: showFilter,
      })}
    >
      <div
        className={cn('Application__wrapper', {
          IsOpenFilter: showFilter,
        })}
      >
        <StyledMenu className={cn(tabsManager.getClasses())}>
          <div className={'Menu__header Font_headline_3'}>
            <h1 className="Font_headline_3">Избранное</h1>
          </div>
          {tabsManager.renderMenus(selected)}
          {tabsManager.renderMenuFooter(selected)}
        </StyledMenu>
        {tabsManager.renderContent(selected)}
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
            <ListIcon />
            Лента
          </Button>
          <Button tertiary className="FooterButton Font_12_16">
            <Applications />
            Мои заявки
          </Button>
          <div className="PlusIconContainer">
            <Button>
              <PlusIcon attr={{ width: 24, height: 24 }} />
            </Button>
          </div>
          <Button tertiary className="FooterButton Font_12_16">
            <HomeIcon attr={{ width: 18, height: 18 }} />
            Объекты
          </Button>
          <Button tertiary className="FooterButton Font_12_16">
            <KebabIcon className="KebabIcon" />
            Ещё
          </Button>
        </div>
      </div>
    </StyledApplication>
  )
}

function renderObjects(): JSX.Element {
  return (
    <ul className="ApplicationsList">
      {ObjectsDataProvider.map((object, index) => (
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
  )
}

function renderLeads(): JSX.Element {
  return (
    <>
      <div className="Application__body">
        <Image src="/images/apps/4.svg" alt="" width={200} height={200} />
        <h2>Нет созданных заявок</h2>
        <p className="Color_text_grey">
          Но вы можете сделать это прямо сейчас!{' '}
        </p>
        <Button className="CreateApp__button" href="/customer/create-1">
          Создать заявку
        </Button>
      </div>
    </>
  )
}

function renderUsers(): JSX.Element {
  return (
    <>
      <div className="Application__body">
        <Image src="/images/application.svg" alt="" width={150} height={120} />
        <h2>No archived applications</h2>
        <p className="Color_text_grey">No archived</p>
      </div>
    </>
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

  .SingleChatInfoideBar {
    position: absolute;
    right: -420px;
    top: 94px;
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

  .ApplicationsList {
    margin-top: 20px;
    height: auto;

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
  }
`

export { Favourites }
