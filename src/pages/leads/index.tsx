import Head from 'next/head'
import { Header } from '@/modules/Base/Header'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import React, { useCallback, useEffect, useState } from 'react'
import AuthManager from '@/modules/Security/Authentication/AuthManager'
import { StyledMenu, TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import cn from 'classnames'
import styled from 'styled-components'
import { leadsGetAll, leadsSampleAll } from '@/modules/Leads/LeadsProvider'
import { ApplicationsFilter } from '@/components/ui/ApplicationsFilter'
import { Search } from '@/components/ui'
import { FilterIcon } from '@/icons/FilterIcon'
import {
  ApiResponse,
  ApiResponseStructure,
  HttpCodes,
} from '@/infrastructure/Network/Http/ApiResponse'
import { LeadCard } from '@/modules/Leads/components/LeadCard'

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

  const [leadsAll, setLeadsAll] = useState<typeof ApiResponseStructure>()
  useEffect(() => {
    const data = leadsGetAll()
    data.then(async res => {
      const response = new ApiResponse()
      const a = response.makeFromString(res)

      if (a.code === HttpCodes.OK) {
        setLeadsAll(a)
      }
    })
  }, [selected])

  tabsManager.setCallback(handleSelect)
  tabsManager.addItem(new TabMenuItem('Все'))
  tabsManager.addItem(new TabMenuItem('Подходящие'))
  tabsManager.addItem(new TabMenuItem('Мои отклики'))
  tabsManager.addItem(new TabMenuItem('Я исполнитель'))
  tabsManager.addItem(new TabMenuItem('Избранное'))

  if (selected === TabsMenuState.All) {
    const currentItem = tabsManager.getItem(TabsMenuState.All)
    // @ts-ignore
    const count = leadsAll?.metadata.pages.items

    currentItem?.updateCount(count)
    currentItem?.updateMenuFooter(
      <Search
        options={['Сначала агентства', 'Сначала PRO', 'Сначала самые надежные']}
        placeholder="Поиск"
        filterIcon={<FilterIcon />}
        withSort={true}
        onFilterClick={handleShowFilter}
      />
    )
  }

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
                {selected == TabsMenuState.All && <>{renderLead(leadsAll)}</>}

                {selected == TabsMenuState.Similar && <>similar</>}
                {selected == TabsMenuState.MyRequests && <>my requests</>}
                {selected == TabsMenuState.IamExecutant && <>aim</>}
                {selected == TabsMenuState.Favorites && <>favorites</>}
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

function renderLead(
  data: typeof ApiResponseStructure | undefined
): JSX.Element {
  const payload = data?.payload as Array<any>
  if (typeof payload == 'undefined') return <></>
  return (
    <ul className="LeadsList">
      {payload.map((item, index) => (
        <li key={index}>
          <LeadCard
            id={item.id}
            title={item.wishes.title}
            areas={{
              total: item.areas.total.value,
              living: item.areas.living.value,
            }}
            isTrue={true}
            createdAt={formatCreatedDate(item.createdAt)}
            location={item.city.country + ' / ' + item.city.name}
            isPublished={true}
            type={typeTranslate(item.type)}
            status={statusTranslate(item.status)}
            deadlineAt={formatDeadlineDate(item.deadlineAt)}
            rooms={item.rooms}
            purpose={item.purpose}
            readyDeal={item.readyDeal}
            rentPeriod={item.rentPeriod}
            format={item.format}
            budget={{
              currency: item.budget.currency.symbol,
              startFrom: item.budget.startFrom,
              endTo: item.budget.endAt,
            }}
            purchaseType={'purchase'}
          />
        </li>
      ))}
    </ul>
  )
}

function statusTranslate(val: string): string {
  switch (val) {
    case 'secondary':
      return 'Вторичная'
    case 'new':
      return 'Новая'
    case 'any':
      return 'Любая'
  }
  return ''
}

function typeTranslate(val: Object): Array<string> {
  return ['Коммерческая', 'Апартаменты']
}

function formatDeadlineDate(val: string): string {
  const date = new Date(val)

  return date.getFullYear().toString()
}

function formatCreatedDate(val: string): string {
  const date = new Date(val)
  const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ]
  return date.getDate() + ' ' + months[date.getMonth()]
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
