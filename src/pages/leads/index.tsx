import Head from 'next/head'
import { Header } from '@/modules/Base/Header'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import React, { useCallback, useEffect, useState } from 'react'
import AuthManager from '@/modules/Security/Authentication/AuthManager'
import { StyledMenu, TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import { Search } from '@/components/ui'
import { FilterIcon } from '@/icons/FilterIcon'
import cn from 'classnames'
import styled from 'styled-components'
import { ObjectCardLarge } from '@/modules/ApplicationsFull/Application/components/ObjectCardLarge'
import {
  leadsSampleAimExecutant,
  leadsSampleAll,
  leadsSampleFavorites,
  leadsSampleMyRequests,
  leadsSampleSimilar,
} from '@/pages/leads/LeadsProvider'
import { ApplicationsFilter } from '@/components/ui/ApplicationsFilter'
import { Pagination, Types as PaginationType } from '@/components/ui/Pagination'

enum TabsMenuState {
  All = 0,
  Similar = 1,
  MyRequests = 3,
  IamExecutant = 4,
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
  tabsManager.setCallback(handleSelect)
  tabsManager.addItem(
    new TabMenuItem(
      'Все',
      leadsSampleAll.length,
      <>{renderObject(leadsSampleAll)}</>,
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
  tabsManager.addItem(
    new TabMenuItem(
      'Подходящие',
      leadsSampleSimilar.length,
      <>{renderObject(leadsSampleSimilar)}</>
    )
  )
  tabsManager.addItem(
    new TabMenuItem(
      'Мои отклики',
      leadsSampleMyRequests.length,
      <>{renderObject(leadsSampleMyRequests)}</>
    )
  )
  tabsManager.addItem(
    new TabMenuItem(
      'Я исполнитель',
      leadsSampleAimExecutant.length,
      <>{renderObject(leadsSampleAimExecutant)}</>
    )
  )
  tabsManager.addItem(
    new TabMenuItem(
      'Избранное',
      leadsSampleFavorites.length,
      <>{renderObject(leadsSampleFavorites)}</>
    )
  )

  return (
    <>
      <Head>
        <title>Miraden</title>
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
              <StyledMenu className={cn(tabsManager.getClasses())}>
                <div className={'Menu__header Font_headline_3'}>
                  <h1 className="Font_headline_3">Лента заявок</h1>
                </div>
                {tabsManager.renderMenus(selected)}
                {tabsManager.renderMenuFooter(selected)}
              </StyledMenu>

              <div className="Leads__content">
                {tabsManager.renderContent(selected)}
                <Pagination total={10} type={PaginationType.Pages} />
              </div>
            </div>
            {showFilter && renderFilter(handleShowFilter, () => {})}
          </div>
        </StyledLeads>
      </BlankLayout>
    </>
  )
}

function renderObject(data: Array<any>): JSX.Element {
  return (
    <ul className="LeadsList">
      {data.map((application, index) => (
        <li key={index}>
          <ObjectCardLarge
            title={application.title}
            location={application.location}
            id={application.id}
            year={application.year}
            square={application.square}
            rooms={application.rooms}
            sleeps={application.sleeps}
            baths={application.baths}
            price={application.price}
            firstInstallment={application.firstInstallment}
            firstInstallmentPercent={application.firstInstallmentPercent}
            yieldCount={application.yieldCount}
            singleCost={application.singleCost}
            deal={application.deal}
            condition={application.condition}
            type={application.type}
            purpose={application.purpose}
            isPublished={application.isPublished}
            isTrue={application.isTrue}
            publishedAt={application.publishedAt}
            requestsCount={application.requestsCount}
            watched={application.watched}
            list={application.list}
            messagesCount={application.messagesCount}
            href="/applications"
          />
        </li>
      ))}
    </ul>
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
`
