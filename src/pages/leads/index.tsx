import Head from 'next/head'
import { Header } from '@/modules/Base/Header'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import React, { useCallback, useEffect, useState } from 'react'
import { StyledMenu, TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import cn from 'classnames'
import styled from 'styled-components'
import { LeadsDataProvider } from '@/modules/Leads/LeadsProvider'
import { UrlManager } from '@/infrastructure/Routes/UrlManager'
import { Search } from '@/components/ui'
import { FilterIcon } from '@/icons/FilterIcon'
import { LeadFilter } from '@/modules/Leads/LeadFilter'
import { theme } from '../../../styles/tokens'
import LangManager from '@/infrastructure/Intl/LangManager'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ApplicationsFooter } from '@/modules/Base/ApplicationsFooter'
import useAuth from '@/hooks/useAuth'

enum TabsMenuState {
  All = 0,
  Similar = 1,
  MyRequests = 2,
  IamExecutant = 3,
  Favorites = 4,
}

const PAGE_KEY: string = 'p'

const leadsProvider = new LeadsDataProvider()
const tabsManager = new TabsManager()
const urlManager = new UrlManager()
const langManager = new LangManager()

export default function LeadsPage(): JSX.Element {
  const [itemPage, setItemPage] = useState<number>(1)
  const [isUserAuth, setIsUserAuth] = useState<boolean>(false)
  useEffect(() => {
    leadsProvider.setLang(langManager.getClientLang())
  }, [])

  useAuth({
    onSuccess: (): void => {
      setIsUserAuth(true)
      leadsProvider.setUserAuthState(true)
    },

    onFailure: (): void => {
      setIsUserAuth(false)
      leadsProvider.setUserAuthState(false)
    }
  })

  const [selected, setSelected] = useState<TabsMenuState>(TabsMenuState.All)
  const handleSelect = useCallback((option: TabsMenuState) => {
    setSelected(option)
    urlManager.deleteQuery(PAGE_KEY)
  }, [])

  const [showFilter, setShowFilter] = useState(false)
  const handleShowFilter = useCallback(() => {
    setShowFilter(!showFilter)
  }, [showFilter])

  const filterHandler = useCallback((e: string) => {
    setLeadsAllData([])
    leadsProvider.setIsFinished(false)
    leadsProvider.fetchAll('/leads?' + e).then(res => {
      const page: string = urlManager.getQueryByName(PAGE_KEY) || '1'
      leadsProvider.setCurrentPage(parseInt(page))
      setLeadsAllData(res)
      history.pushState(null, '', urlManager.getPath() + '?' + e)
    })
  }, [])

  useEffect(() => {
    tabsManager.setCallback(handleSelect)
    tabsManager.addItem(new TabMenuItem('Все'))
    tabsManager.addItem(new TabMenuItem('Подходящие'))
    tabsManager.addItem(new TabMenuItem('Мои отклики'))
    tabsManager.addItem(new TabMenuItem('Я исполнитель'))
    tabsManager.addItem(new TabMenuItem('Избранное'))
  }, [handleSelect])

  const onSearchChange = useCallback((e: string) => {
    let url = '/leads'
    const currentUrl = urlManager.getQuery()
    const uri = new URLSearchParams(currentUrl)

    if (e.length === 0) {
      uri.delete('f[search]')
      history.pushState(null, '', urlManager.getPath() + '?' + uri.toString())
      setLeadsAllData([])
      leadsProvider.setIsFinished(false)
      leadsProvider.fetchAll(url).then(res => {
        const page: string = urlManager.getQueryByName(PAGE_KEY) || '1'
        leadsProvider.setCurrentPage(parseInt(page))
        setLeadsAllData(res)
        history.pushState(null, '', urlManager.getPath() + '?' + uri.toString())
      })
      return
    }

    if (e.length < 3) {
      uri.delete('f[search]')
      history.pushState(null, '', urlManager.getPath() + '?' + uri.toString())
      return
    }

    setLeadsAllData([])
    leadsProvider.setIsFinished(false)
    if (!uri.get('f[search]')) {
      uri.append('f[search]', e)
    } else {
      uri.set('f[search]', e)
    }
    url = '/leads?' + uri.toString()
    leadsProvider.fetchAll(url).then(res => {
      const page: string = urlManager.getQueryByName(PAGE_KEY) || '1'
      leadsProvider.setCurrentPage(parseInt(page))
      setLeadsAllData(res)
      history.pushState(null, '', urlManager.getPath() + '?' + uri.toString())
    })
  }, [])

  const onSortChange = useCallback((e: any) => {
    setLeadsAllData([])
    leadsProvider.setIsFinished(false)
    const currentUrl = urlManager.getQuery()
    const uri = new URLSearchParams(currentUrl)
    if (e === 'Сначала дороже') {
      uri.set('f[sort][price]', 'desc')
    }
    if (e === 'Сначала дешевле') {
      uri.set('f[sort][price]', 'asc')
    }
    leadsProvider.fetchAll('/leads?' + uri.toString()).then(res => {
      const page: string = urlManager.getQueryByName(PAGE_KEY) || '1'
      leadsProvider.setCurrentPage(parseInt(page))
      setLeadsAllData(res)
      history.pushState(null, '', urlManager.getPath() + '?' + uri.toString())
    })
  }, [])

  const onPageHandler = useCallback((e: any) => {
    const target = e.target.closest('button')
    if (!target) return

    const page: number = target.getAttribute('data-page') as number
    setItemPage(page)
    setLeadsAllData([])
    urlManager.updatePath(urlManager.getPath())
    urlManager.updateQuery(PAGE_KEY, page)
    const newUrl: string = urlManager.getPath() + urlManager.getQuery()
    leadsProvider.fetchAll(newUrl).then(res => {
      leadsProvider.setCurrentPage(page)
      setLeadsAllData(res)
    })
  }, [])

  if (selected == TabsMenuState.All) {
    const current = tabsManager.getItem(selected)
    current?.updateMenuFooter(
      <Search
        sort={['Сначала дешевле', 'Сначала дороже']}
        placeholder="Поиск"
        filterIcon={<FilterIcon />}
        withSort={true}
        onSearchChange={onSearchChange}
        onSortChange={onSortChange}
        onFilterClick={handleShowFilter}
      />
    )
  }

  const [leadsAllData, setLeadsAllData] = useState<Object>([])
  useEffect(() => {
    leadsProvider.setPageCallback(onPageHandler)

    if (selected == TabsMenuState.All) {
      let url = '/leads'
      if (urlManager.getQuery()) {
        url += urlManager.getQuery()
      }
      setLeadsAllData([])
      leadsProvider.setIsFinished(false)
      leadsProvider.fetchAll(url).then(res => {
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
      leadsProvider.fetchFavorites('/leads/favorites').then(res => {
        setLeadsAllData(res)
      })
    }

    if (selected == TabsMenuState.IamExecutant) {
      setLeadsAllData([])
      leadsProvider.setIsFinished(false)
      leadsProvider.fetchIamExecutant('/leads/aimexecutant').then(res => {
        setLeadsAllData(res)
      })
    }

    if (selected == TabsMenuState.MyRequests) {
      setLeadsAllData([])
      leadsProvider.setIsFinished(false)
      leadsProvider.fetchMyRequests('/leads/my/requests').then(res => {
        setLeadsAllData(res)
      })
    }
  }, [onPageHandler, selected])

  const s = useWindowSize()
  useEffect(() => {
    leadsProvider.setWindowSize(s)
  }, [s])

  return (
    <>
      <Head>
        <title>Miraden - Заявки</title>
      </Head>
      <BlankLayout>
        <Header isAuthorized={isUserAuth} />
        <StyledLeads className={cn('ContainerFull', { userAuth: isUserAuth })}>
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
                {isUserAuth && tabsManager.renderMenus(selected)}
                {tabsManager.renderMenuFooter(selected)}
              </StyledMenu>

              <div className="Leads__content">
                {selected == TabsMenuState.All && leadsProvider.render()}
                {selected == TabsMenuState.Similar && <></>}
                {selected == TabsMenuState.MyRequests && leadsProvider.render()}
                {selected == TabsMenuState.IamExecutant &&
                  leadsProvider.render()}
                {selected == TabsMenuState.Favorites && leadsProvider.render()}
              </div>
            </div>
            {showFilter && (
              <div className="Leads__filter">
                <LeadFilter
                  onChange={filterHandler}
                  onCloseClick={handleShowFilter}
                />
              </div>
            )}
            <ApplicationsFooter />
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

  &:not(.userAuth) {
    .Menu__header {
      border-bottom: 4px solid ${theme.colors.stroke.divider};
      padding-bottom: 30px;
    }
  }

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
    margin-bottom: 20px;
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
