import { ApplicationsFooter } from '@/modules/Base/ApplicationsFooter'
import cn from 'classnames'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { StyledMenu, TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import { MyLeadsCustomerDataProvider as DataProvider } from '@/modules/ApplicationsFull/Application/LeadCustomerDataProvider'
import { useWindowSize } from '@/hooks/useWindowSize'
import LangManager from '@/infrastructure/Intl/LangManager'

interface ApplicationProps {
  className?: string
}

enum TabsMenuState {
  All = 0,
  Published = 1,
  Archived = 2,
}

const langManager = new LangManager()

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

  const s = useWindowSize()
  useEffect(() => {
    allProvider.setWindowSize(s)
    allProvider.setLang(langManager.getClientLang())
  }, [allProvider, s])
  allProvider.setWindowSize(s)

  useEffect(() => {
    if (selectedTab == TabsMenuState.All) {
      setAllData([])
      allProvider.setIsFinished(false)
      allProvider.fetchData('/leads/my').then(res => {
        setAllData(res)
        allProvider.setIsFinished(true)
        allProvider.setFetchedData(res)
      })
    }

    if (selectedTab == TabsMenuState.Published) {
      setAllData([])
      allProvider.setIsFinished(false)
      allProvider.fetchData('/leads/my?f=published').then(res => {
        setAllData(res)
        allProvider.setIsFinished(true)
        allProvider.setFetchedData(res)
      })
    }

    if (selectedTab == TabsMenuState.Archived) {
      setAllData([])
      allProvider.setIsFinished(false)
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

  .LeadsList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    position: relative;
    min-height: 200px;

    .Leads_empty {
      margin: 0 auto;
      text-align: center;
    }
  }

  .CreateApp__button {
    margin-top: 30px;
    padding: 10px 24px;
    width: fit-content;
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
`

export { ApplicationFull }
