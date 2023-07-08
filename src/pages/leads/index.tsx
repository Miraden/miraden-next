import Head from 'next/head'
import { Header } from '@/modules/Base/Header'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import React, { MouseEvent, useCallback, useEffect, useState } from 'react'
import AuthManager from '@/modules/Security/Authentication/AuthManager'
import { StyledMenu, TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import cn from 'classnames'
import styled from 'styled-components'
import { ApplicationsFilter } from '@/components/ui/ApplicationsFilter'
import { LeadsDataProvider } from '@/modules/Leads/LeadsProvider'
import { UrlManager } from '@/infrastructure/Routes/UrlManager'

enum TabsMenuState {
  All = 0,
  Similar = 1,
  MyRequests = 2,
  IamExecutant = 3,
  Favorites = 4,
}

const PAGE_KEY: string = 'p'

const authManger = new AuthManager()

export default function LeadsPage(): JSX.Element {
  const [itemPage, setItemPage] = useState<number>(1)

  const [isUserAuth, setUserAuth] = useState(false)
  useEffect(() => {
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

  const [urlManager, setUrlManager] = useState<UrlManager>(new UrlManager())

  tabsManager.setCallback(handleSelect)
  tabsManager.addItem(new TabMenuItem('Все'))
  tabsManager.addItem(new TabMenuItem('Подходящие'))
  tabsManager.addItem(new TabMenuItem('Мои отклики'))
  tabsManager.addItem(new TabMenuItem('Я исполнитель'))
  tabsManager.addItem(new TabMenuItem('Избранное'))

  const [leadsProvider, setLeadsProvider] = useState<LeadsDataProvider>(
    new LeadsDataProvider()
  )

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

  const [leadsAllData, setLeadsAllData] = useState<Object>([])
  useEffect(() => {
    leadsProvider.setPageCallback(onPageHandler)
    if (selected == TabsMenuState.All) {
      setLeadsAllData([])
      urlManager.deleteQuery(PAGE_KEY)
      leadsProvider.setIsFinished(false)
      leadsProvider.setUrl('/leads')
      leadsProvider.fetchData().then(res => {
        const page: string = urlManager.getQueryByName(PAGE_KEY) || '1'
        leadsProvider.setCurrentPage(parseInt(page))
        setLeadsAllData(res)
      })
    }

    if (selected == TabsMenuState.Similar) {
      urlManager.deleteQuery(PAGE_KEY)
      setLeadsAllData([])
    }

    if (selected == TabsMenuState.Favorites) {
      setLeadsAllData([])
      urlManager.deleteQuery(PAGE_KEY)
      leadsProvider.setIsFinished(false)
      leadsProvider.setUrl('/leads/favorites')
      leadsProvider.fetchData().then(res => {
        setLeadsAllData(res)
      })
    }

    if (selected == TabsMenuState.IamExecutant) {
      setLeadsAllData([])
      urlManager.deleteQuery(PAGE_KEY)
      leadsProvider.setIsFinished(false)
      leadsProvider.setUrl('/leads/aimexecutant')
      leadsProvider.fetchData().then(res => {
        setLeadsAllData(res)
      })
    }

    if (selected == TabsMenuState.MyRequests) {
      setLeadsAllData([])
      urlManager.deleteQuery(PAGE_KEY)
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

              <div className="Leads__content">{leadsProvider.render()}</div>
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
  }

  .Leads_empty {
    text-align: center;
    margin: 100px auto 0;
    max-width: 320px;
  }
`
