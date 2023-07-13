import Head from 'next/head'
import { Header } from '@/modules/Base/Header'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import React, { useCallback, useEffect, useState } from 'react'
import AuthManager from '@/modules/Security/Authentication/AuthManager'
import { StyledMenu, TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import cn from 'classnames'
import styled from 'styled-components'
import { LeadsDataProvider } from '@/modules/Leads/LeadsProvider'
import { UrlManager } from '@/infrastructure/Routes/UrlManager'
import { Search } from '@/components/ui'
import { FilterIcon } from '@/icons/FilterIcon'
import { LeadFilter } from '@/modules/Leads/LeadFilter'

enum TabsMenuState {
  All = 0,
  Similar = 1,
  MyRequests = 2,
  IamExecutant = 3,
  Favorites = 4,
}

const PAGE_KEY: string = 'p'

export default function LeadsPage(): JSX.Element {
  const [itemPage, setItemPage] = useState<number>(1)
  const [urlManager, setUrlManager] = useState<UrlManager>(new UrlManager())
  const [authManager, setAuthManager] = useState<AuthManager>(new AuthManager())

  const [isUserAuth, setUserAuth] = useState(false)
  useEffect(() => {
    setUserAuth(authManager.isUserHasToken())
  }, [isUserAuth, authManager])

  const [selected, setSelected] = useState<TabsMenuState>(TabsMenuState.All)
  const handleSelect = useCallback((option: TabsMenuState) => {
    setSelected(option)
    urlManager.deleteQuery(PAGE_KEY)
  }, [urlManager])

  const [showFilter, setShowFilter] = useState(false)
  const handleShowFilter = useCallback(() => {
    setShowFilter(!showFilter)
  }, [showFilter])

  const [tabsManager, setTabsManager] = useState<TabsManager>(new TabsManager())
  useEffect(() => {
    tabsManager.setActive(selected)
  }, [selected, tabsManager])

  const [leadsProvider, setLeadsProvider] = useState<LeadsDataProvider>(
    new LeadsDataProvider()
  )

  const filterHandler = useCallback((e: any) => {
    const form = document.getElementsByTagName('form')[0]
    const data = new FormData(form)
    // @ts-ignore
    const queryString = new URLSearchParams(data).toString()
    setLeadsAllData([])
    leadsProvider.setIsFinished(false)
    leadsProvider.setUrl('/leads?' + queryString)
    leadsProvider.fetchData().then(res => {
      const page: string = urlManager.getQueryByName(PAGE_KEY) || '1'
      leadsProvider.setCurrentPage(parseInt(page))
      setLeadsAllData(res)
      history.pushState(null, '', urlManager.getPath() + "?" + queryString)
    })
  }, [leadsProvider, urlManager])

  tabsManager.setCallback(handleSelect)
  tabsManager.addItem(new TabMenuItem('Все'))
  tabsManager.addItem(new TabMenuItem('Подходящие'))
  tabsManager.addItem(new TabMenuItem('Мои отклики'))
  tabsManager.addItem(new TabMenuItem('Я исполнитель'))
  tabsManager.addItem(new TabMenuItem('Избранное'))

  const onPageHandler = useCallback(
    (e: any) => {
      const target = e.target.closest('button')
      if (!target) return

      const page: number = target.getAttribute('data-page') as number
      setItemPage(page)
      setLeadsAllData([])
      urlManager.updatePath(urlManager.getPath())
      urlManager.updateQuery(PAGE_KEY, page)
      const newUrl: string = urlManager.getPath() + urlManager.getQuery()
      leadsProvider.setUrl(newUrl)
      leadsProvider.fetchData().then(res => {
        leadsProvider.setCurrentPage(page)
        setLeadsAllData(res)
      })
    },
    [leadsProvider, urlManager]
  )

  if(selected == TabsMenuState.All) {
    const current = tabsManager.getItem(selected)
    current?.updateMenuFooter(
      <Search
        options={['Сначала агентства', 'Сначала PRO', 'Сначала самые надежные']}
        placeholder="Поиск"
        filterIcon={<FilterIcon />}
        withSort={true}
        onFilterClick={handleShowFilter}
      />
    )
  }

  const [leadsAllData, setLeadsAllData] = useState<Object>([])
  useEffect(() => {
    leadsProvider.setPageCallback(onPageHandler)
    if (selected == TabsMenuState.All) {
      setLeadsAllData([])
      leadsProvider.setIsFinished(false)
      leadsProvider.setUrl('/leads')
      leadsProvider.fetchData().then(res => {
        const page: string = urlManager.getQueryByName(PAGE_KEY) || '1'
        leadsProvider.setCurrentPage(parseInt(page))
        setLeadsAllData(res)
      })
    }

    if (selected == TabsMenuState.Similar) {
      leadsProvider.setIsFinished(false)
      urlManager.deleteQuery(PAGE_KEY)
      setLeadsAllData([])
    }

    if (selected == TabsMenuState.Favorites) {
      setLeadsAllData([])
      leadsProvider.setIsFinished(false)
      leadsProvider.setUrl('/leads/favorites')
      leadsProvider.fetchData().then(res => {
        setLeadsAllData(res)
      })
    }

    if (selected == TabsMenuState.IamExecutant) {
      setLeadsAllData([])
      leadsProvider.setIsFinished(false)
      leadsProvider.setUrl('/leads/aimexecutant')
      leadsProvider.fetchData().then(res => {
        setLeadsAllData(res)
      })
    }

    if (selected == TabsMenuState.MyRequests) {
      setLeadsAllData([])
      leadsProvider.setIsFinished(false)
      leadsProvider.setUrl('/leads/my/requests')
      leadsProvider.fetchData().then(res => {
        setLeadsAllData(res)
      })
    }
  }, [leadsProvider, onPageHandler, selected, urlManager])

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
                {selected == TabsMenuState.All && leadsProvider.render()}
                {selected == TabsMenuState.Similar && <></>}
                {selected == TabsMenuState.MyRequests && leadsProvider.render()}
                {selected == TabsMenuState.IamExecutant && leadsProvider.render()}
                {selected == TabsMenuState.Favorites && leadsProvider.render()}
              </div>
            </div>
            {showFilter && (
              <div className="Leads__filter">
                <LeadFilter onChange={filterHandler} onCloseClick={handleShowFilter} />
              </div>
            )}
          </div>
        </StyledLeads>
      </BlankLayout>
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
  }

  .Leads_empty {
    text-align: center;
    margin: 100px auto 0;
    max-width: 320px;
  }

  @media (max-width: 1660px) {
    .LeadsWrapper {
      padding-left: 0;
      padding-right: 0;
      grid-gap: 15px;
    }

    .LeadsContent {
      grid-column: 5 / span 10;
      width: 100%;

      &.IsOpenSidebar,
      &.IsOpenFilter {
        grid-column: 1 / span 11;
      }
    }
  }

  @media (max-width: 1441px) {
    .LeadsWrapper {
      grid-gap: 20px;
      padding-left: 0;
      padding-right: 0;
      display: flex;
      flex-direction: column;
    }

    .LeadsContent {
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
  }
`
