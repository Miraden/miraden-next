import Head from 'next/head'
import { Header } from '@/modules/Base/Header'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import React, { useCallback, useEffect, useState } from 'react'
import AuthManager from '@/modules/Security/Authentication/AuthManager'
import { StyledMenu, TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import cn from 'classnames'
import styled from 'styled-components'
import { ApplicationsFilter } from '@/components/ui/ApplicationsFilter'
import {
  LeadsAllProvider,
  LeadsFavoritesProvider,
} from '@/modules/Leads/LeadsProvider'

enum TabsMenuState {
  All = 0,
  Similar = 1,
  MyRequests = 2,
  IamExecutant = 3,
  Favorites = 4,
}

export default function LeadsPage(): JSX.Element {
  const [isUserAuth, setUserAuth] = useState(false)
  useEffect(() => {
    const authManger = new AuthManager()
    setUserAuth(authManger.isUserHasToken())
  }, [isUserAuth])

  const [selected, setSelected] = useState<TabsMenuState>(TabsMenuState.All)
  const handleSelect = useCallback((option: TabsMenuState) => {
    setSelected(option)
  }, [])

  const [showFilter, setShowFilter] = useState(false)
  const handleShowFilter = useCallback(() => {
    setShowFilter(!showFilter)
  }, [showFilter])

  const [tabsManager, setTabsManager] = useState<TabsManager>(new TabsManager())
  useEffect(() => {
    tabsManager.setActive(selected)
  }, [selected, tabsManager])

  tabsManager.setCallback(handleSelect)
  tabsManager.addItem(new TabMenuItem('Все'))
  tabsManager.addItem(new TabMenuItem('Подходящие'))
  tabsManager.addItem(new TabMenuItem('Мои отклики'))
  tabsManager.addItem(new TabMenuItem('Я исполнитель'))
  tabsManager.addItem(new TabMenuItem('Избранное'))

  const [leadsAllProvider, setLeadsProvider] = useState<LeadsAllProvider>(
    new LeadsAllProvider()
  )
  const [leadsFavoritesProvider, setFavoritesProvider] =
    useState<LeadsFavoritesProvider>(new LeadsFavoritesProvider())
  const [leadsAllData, setLeadsAllData] = useState<Object>([])
  const [leadsFavoriteData, setLeadsFavoriteData] = useState<Object>([])
  useEffect(() => {
    if (selected == TabsMenuState.All) {
      leadsAllProvider.fetchData().then(res => {
        setLeadsAllData(res)
        leadsAllProvider.setIsFinished(true)
        leadsAllProvider.setFetchedData(res)
      })
    }

    if (selected == TabsMenuState.Favorites) {
      leadsFavoritesProvider.fetchData().then(res => {
        setLeadsFavoriteData(res)
        leadsFavoritesProvider.setIsFinished(true)
        leadsFavoritesProvider.setFetchedData(res)
      })
    }
  }, [leadsAllProvider, leadsFavoritesProvider, selected])

  return (
    <>
      <Head>
        <title>Miraden - Заявки</title>
      </Head>
      <BlankLayout>
        <Header isAuthorized={isUserAuth} />
        <StyledLeads className={'ContainerFull'}>
          <div className={'LeadsWrapper'}>
            <div
              className={cn('LeadsContent', {
                isOpenFilter: showFilter,
              })}
            >
              <StyledMenu className={cn('Menu', tabsManager.getClasses())}>
                <div className={'Menu__header Font_headline_3'}>
                  <h1 className="Font_headline_3">Лента заявок</h1>
                </div>
                {tabsManager.renderMenus(selected)}
                {tabsManager.renderMenuFooter(selected)}
              </StyledMenu>

              <div className="Leads__content">
                {selected == TabsMenuState.All && (
                  <>{leadsAllProvider.render()}</>
                )}

                {selected == TabsMenuState.Similar && <>similar</>}
                {selected == TabsMenuState.MyRequests && <>my requests</>}
                {selected == TabsMenuState.IamExecutant && <>aim</>}
                {selected == TabsMenuState.Favorites && (
                  <>{leadsFavoritesProvider.render()}</>
                )}
              </div>
            </div>
            {showFilter &&
              selected == TabsMenuState.All &&
              renderFilter(handleShowFilter, () => {})}
          </div>
        </StyledLeads>
      </BlankLayout>
    </>
  )
}

function renderFilter(handler: Function, tabHandler: Function): JSX.Element {
  return (
    <>
      <div className="Leads__filter">
        <ApplicationsFilter />
      </div>
    </>
  )
}

const StyledLeads = styled.div`
  max-width: calc(1920px);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  position: relative;

  .Leads__filter {
    position: sticky;
    top: 94px;
    overflow: auto;
    grid-column: 16 / span 3;
    margin-top: 30px;
    margin-left: -30px;
    height: calc(-114px + 100vh);
    min-width: 355px;
  }

  .LeadsWrapper {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    gap: 30px;
    padding-left: 55px;
    padding-right: 55px;
  }

  .LeadsContent {
    grid-column: 5 / span 10;
    min-width: 970px;
    max-width: 970px;
  }

  .LeadsList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    position: relative;
    min-height: 200px;
  }

  .Leads__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .Pagination {
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;
  }
`
