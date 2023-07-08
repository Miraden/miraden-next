import { Button } from '@/components/ui'
import { ApplicationsFooter } from '@/modules/Base/ApplicationsFooter'
import cn from 'classnames'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { StyledMenu, TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import { MyLeadsCustomerDataProvider as DataProvider } from '@/modules/ApplicationsFull/Application/LeadCustomerDataProvider'

interface ApplicationProps {
  className?: string
}

enum TabsMenuState {
  All = 0,
  Published = 1,
  Archived = 2,
}

const ApplicationFull = ({ className }: ApplicationProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0)

  const handleSelectTabs = useCallback((state: number) => {
    setSelectedTab(state)
  }, [])

  const [tabsManager, setTabsManager] = useState<TabsManager>(new TabsManager())
  tabsManager.setCallback(handleSelectTabs)
  tabsManager.addItem(new TabMenuItem('Все'))
  tabsManager.addItem(new TabMenuItem('Опубликованные'))
  tabsManager.addItem(new TabMenuItem('В архиве'))

  const [allProvider, setDataProvider] = useState<DataProvider>(
    new DataProvider()
  )
  const [allData, setAllData] = useState<Array<Object>>([])
  useEffect(() => {
    if (selectedTab == TabsMenuState.All) {
      setAllData([])
      allProvider.fetchData('/leads/my').then(res => {
        setAllData(res)
        allProvider.setIsFinished(true)
        allProvider.setFetchedData(res)
      })
    }

    if (selectedTab == TabsMenuState.Published) {
      setAllData([])
      allProvider.fetchData('/leads/my?f=published').then(res => {
        setAllData(res)
        allProvider.setIsFinished(true)
        allProvider.setFetchedData(res)
      })
    }

    if (selectedTab == TabsMenuState.Archived) {
      setAllData([])
      allProvider.fetchData('/leads/my?f=archived').then(res => {
        setAllData(res)
        allProvider.setIsFinished(true)
        allProvider.setFetchedData(res)
      })
    }
  }, [allProvider, selectedTab])

  return (
    <StyledApplication className={className}>
      <div className={cn('Application__wrapper')}>
        <>
          <StyledMenu className={cn(tabsManager.getClasses())}>
            <div className={'Menu__header Font_headline_3'}>
              <h1 className="Font_headline_3">Мои заявки</h1>
            </div>
            {tabsManager.renderMenus(selectedTab)}
            {tabsManager.renderMenuFooter(selectedTab)}
          </StyledMenu>
        </>
        {allProvider.render()}
        <ApplicationsFooter />
      </div>
    </StyledApplication>
  )
}

function renderTabPublished() {
  return (
    <>
      <div className="Application__body">
        <Image src="/images/apps/4.svg" alt="" width={200} height={200} />
        <h2>Нет созданных заявок</h2>
        <p className="Color_text_grey">
          Но вы можете сделать это прямо сейчас!{' '}
        </p>
        <Button className="CreateApp__button" compact>
          Создать заявку
        </Button>
      </div>
    </>
  )
}

function renderTabArchived() {
  return (
    <>
      <div className="Application__body">
        <Image src="/images/apps/5.svg" alt="" width={200} height={200} />
        <h2>Нет заявок в архиве</h2>
        <p className="Color_text_grey">
          Если заявка больше не актуальна, вы можете отправить ее в архив, а по
          необходимости восстановить обратно
        </p>
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

  .Application__wrapper {
    grid-column: 5 / span 10;
    min-width: 970px;
    max-width: 970px;
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
    border-radius: ${({ theme }) => theme.border.radius};
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

  .LeadsList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    position: relative;
    min-height: 200px;
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
    height: 100vh;
    margin-top: 20px;

    li:not(:first-child) {
      margin-top: 10px;
    }
  }

  .Application__Footer {
    display: none;
    border-top: 2px solid #eef1f5;

    position: fixed;
    width: 100%;
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
  }

  @media (max-width: 1024px) {
    padding-bottom: 120px;
    .Application__headContainer {
      margin-top: 0;
    }

    .ApplicationsList {
      padding-left: 20px;
      padding-right: 20px;
    }

    .Application__body {
      padding-top: 120px;
    }

    .Application__Footer {
      display: block;
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 0;
    .ApplicationsList {
      padding-left: 0;
      padding-right: 0;
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

    .Application__body {
      padding-top: 40px;
    }
  }
`

export { ApplicationFull }
