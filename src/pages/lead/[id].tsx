import Head from 'next/head'
import React, { useCallback, useEffect, useState } from 'react'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import { Header } from '@/modules/Base/Header'
import AuthManager from '@/modules/Security/Authentication/AuthManager'
import styled from 'styled-components'
import cn from 'classnames'
import { StyledMenu, TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import { BackIcon20 } from '@/icons'
import { Button, Search } from '@/components/ui'
import { FilterIcon } from '@/icons/FilterIcon'
import * as DataProvider from '@/modules/Applications/Application/DataProfiver'
import { SellerCard } from '@/modules/Applications/Application/components/SellerCard'
import { ApplicationsFilter } from '@/components/ui/ApplicationsFilter'
import { SingleApplicationSideBar } from '@/modules/Applications/Application/components/SingleApplicationSideBar'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { ApplicationsFooter } from '@/modules/Base/ApplicationsFooter'
import { LeadEntryProvider } from '@/modules/Leads/LeadEntryProvider'
import { UrlManager } from '@/infrastructure/Routes/UrlManager'
import { NextRouter, useRouter } from 'next/router'
import LangManager from '@/infrastructure/Intl/LangManager'

enum TabsMenuState {
  Lead = 0,
  Requests = 1,
  Executants = 2,
  Refusals = 3,
  Recommended = 4,
}

const leadDataProvider = new LeadEntryProvider()
const urlManager = new UrlManager()
const tabsManager = new TabsManager()
const langManager = new LangManager()

const LeadEntry = () => {
  const router: NextRouter = useRouter()
  const query = router.query
  const leadId: number = parseInt(query['id'] as string) as number

  const [isUserAuth, setUserAuth] = useState(false)
  useEffect(() => {
    const authManger = new AuthManager()
    setUserAuth(authManger.isUserHasToken())
  }, [isUserAuth])

  const [selected, setSelected] = useState<TabsMenuState>(TabsMenuState.Lead)
  const handleSelect = useCallback((option: TabsMenuState) => {
    setSelected(option)
  }, [])

  const [showFilter, setShowFilter] = useState(false)
  const handleShowFilter = useCallback(() => {
    setShowFilter(!showFilter)
  }, [showFilter])

  const [isOpenModal, setIsOpenModal] = useState(false)
  const handleOpenModal = useCallback(() => {
    setIsOpenModal(true)
  }, [])

  const [submit, setSubmit] = useState(false)
  useLockBodyScroll(isOpenModal)

  const [mQuery, setMQuery] = useState({
    matches: typeof window !== 'undefined' && window.innerWidth <= 1440,
  })
  const handleChange = useCallback(
    (e: any) => setMQuery({ matches: e.matches }),
    []
  )

  const [showLeadSidebar, setLeadShowSidebar] = useState<boolean>(false)

  useEffect(() => {
    let mediaQuery = window.matchMedia('(max-width: 1440px)')
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [handleChange])

  useLockBodyScroll(showFilter && mQuery.matches)

  useEffect(() => {
    tabsManager.setCallback(handleSelect)
    tabsManager.addItem(new TabMenuItem('Заявка'))
    tabsManager.addItem(new TabMenuItem('Отклики'))
    tabsManager.addItem(new TabMenuItem('Исполнители'))
    tabsManager.addItem(new TabMenuItem('Отказы'))
    tabsManager.addItem(new TabMenuItem('Рекомендуемые'))
  }, [handleSelect])

  const [leadsData, setLeadsAllData] = useState<Object>({})
  useEffect(() => {
    if (selected == TabsMenuState.Lead) {
      if (!leadId) return
      setLeadsAllData({})
      leadDataProvider.setIsFinished(false)
      leadDataProvider.setLang(langManager.getClientLang())
      leadDataProvider.fetchById(leadId).then(res => {
        const payload = leadDataProvider.getPayload()
        if(payload.iamOwner) {
          setLeadShowSidebar(payload.iamOwner)
        }
        setLeadsAllData(res)
      })
    }

    if (selected == TabsMenuState.Requests) {
      const current = tabsManager.getItem(selected)
      setLeadShowSidebar(false)
      current?.updateMenuFooter(
        <Search
          sort={['Сначала агентства', 'Сначала PRO', 'Сначала самые надежные']}
          placeholder="Поиск"
          filterIcon={<FilterIcon />}
          withSort={true}
          onFilterClick={handleShowFilter}
        />
      )
    }

    if(selected == TabsMenuState.Refusals) {
      setLeadShowSidebar(false)
    }

    if(selected == TabsMenuState.Executants) {
      setLeadShowSidebar(false)
    }

    if(selected == TabsMenuState.Recommended) {
      setLeadShowSidebar(false)
    }

  }, [handleShowFilter, leadId, selected])

  return (
    <>
      <Head>
        <title>Miraden - Заявка</title>
      </Head>
      <BlankLayout>
        <Header isAuthorized={isUserAuth} />
        <StyledLead className={'ContainerFull'}>
          <div className={cn('LeadWrapper')}>
            <div
              className={cn('LeadContent', {
                IsOpenFilter: showFilter,
                IsOpenSidebar: showLeadSidebar,
              })}
            >
              <StyledMenu
                className={cn('PageHeader', tabsManager.getClasses())}
              >
                <div className={'Menu__header Font_headline_3'}>
                  <Button
                    secondary
                    href={'/leads'}
                    className="Menu__header_backButton"
                  >
                    <BackIcon20
                      width={20}
                      height={20}
                      className="Menu__header_backArrow"
                    />
                  </Button>
                  <h1 className="Font_headline_3">
                    Хочу купить 3-х комнатную квартиру на Кипре
                  </h1>
                </div>
                {tabsManager.renderMenus(selected)}
                {tabsManager.renderMenuFooter(selected)}
              </StyledMenu>

              <div className="Leads__content">
                {selected == TabsMenuState.Lead && leadDataProvider.render()}
                {selected == TabsMenuState.Requests && (
                  <div className={'PageLead'}>{renderRequests()}</div>
                )}
                {selected == TabsMenuState.Executants && (
                  <div className={'PageLead'}>{renderExecutors()}</div>
                )}
                {selected == TabsMenuState.Refusals && (
                  <div className={'PageLead'}>{renderRefusals()}</div>
                )}
                {selected == TabsMenuState.Recommended && (
                  <div className={'PageLead'}>
                    {renderRecommended(submit, handleOpenModal)}
                  </div>
                )}
              </div>
            </div>
            {showLeadSidebar && renderLeadPaymentOptions()}

            {showFilter && renderFilter(handleShowFilter, () => {})}
            {!showFilter && <ApplicationsFooter />}
          </div>
        </StyledLead>
      </BlankLayout>
    </>
  )
}

function renderRecommended(
  isSubmit: boolean,
  handleOpenModal: Function
): JSX.Element {
  return (
    <>
      <ul className="Applications__list">
        {DataProvider.recommendUsers.map((recommend, index) => (
          <li key={index}>
            <SellerCard
              isRecommend={recommend.isRecommend}
              name={recommend.name}
              isPro={recommend.isPro}
              isVerified={recommend.isVerified}
              rating={recommend.rating}
              image={recommend.image}
              status={recommend.status}
              agencyName={recommend.agencyName}
              isOnline={recommend.isOnline}
              unreadMessages={recommend.unreadMessages}
              onClick={handleOpenModal}
              submit={isSubmit}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

function renderExecutors(): JSX.Element {
  return (
    <div>
      <ul className="Applications__list">
        {DataProvider.executorsUsers.map((performer, index) => (
          <li key={index}>
            <SellerCard
              isPerformer={performer.isPerformer}
              name={performer.name}
              isPro={performer.isPro}
              isVerified={performer.isVerified}
              rating={performer.rating}
              image={performer.image}
              status={performer.status}
              agencyName={performer.agencyName}
              isOnline={performer.isOnline}
              unreadMessages={performer.unreadMessages}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

function renderRequests(): JSX.Element {
  return (
    <ul className="Applications__list">
      {DataProvider.requestsUsers.map((performer, index) => (
        <li key={index}>
          <SellerCard
            isPerformer={true}
            name={performer.name}
            isPro={performer.isPro}
            isVerified={performer.isVerified}
            rating={performer.rating}
            image={performer.image}
            status={performer.status}
            agencyName={performer.agencyName}
            isOnline={performer.isOnline}
            unreadMessages={performer.unreadMessages}
          />
        </li>
      ))}
    </ul>
  )
}

function renderFilter(handler: Function, tabHandler: Function): JSX.Element {
  return (
    <>
      <div className="Filter">
        <ApplicationsFilter
          onTabClick={tabHandler}
          className="Applications__filter"
          onClick={handler}
        />
      </div>
    </>
  )
}

function renderRefusals(): JSX.Element {
  return (
    <>
      <ul className="Applications__list">
        {DataProvider.refusalsUsers.map((refusal, index) => (
          <li key={index}>
            <SellerCard
              isRefusal={refusal.isRefusal}
              name={refusal.name}
              isPro={refusal.isPro}
              isVerified={refusal.isVerified}
              rating={refusal.rating}
              image={refusal.image}
              status={refusal.status}
              agencyName={refusal.agencyName}
              isOnline={refusal.isOnline}
              unreadMessages={refusal.unreadMessages}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

function renderLeadPaymentOptions(): JSX.Element {
  return (
    <>
      <SingleApplicationSideBar className="SingleApplicationSideBar" />
    </>
  )
}

const StyledLead = styled.div`
  max-width: calc(1920px);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  position: relative;

  .LeadWrapper {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    grid-gap: 30px;
    padding-left: 55px;
    padding-right: 55px;
  }

  .LeadContent {
    min-width: 970px;
    max-width: 970px;
    grid-column: 5 / span 10;
  }

  .PageLead {
    padding: 0;
    margin-top: 20px;
  }

  .Filter {
    position: sticky;
    top: 94px;
    overflow: auto;
    grid-column: 16 / span 3;
    margin-top: 30px;
    margin-left: -30px;
    height: calc(100vh - 114px);
    min-width: 355px;
  }

  .SingleApplicationSideBar {
    position: sticky;
    top: 94px;
    max-width: 970px;
    min-width: 355px;
    overflow: auto;
    grid-column: 16 / span 3;
    margin-top: 30px;
    margin-left: -30px;
    height: calc(-114px + 100vh);
  }

  .Applications__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 1660px) {
    .LeadWrapper {
      padding-left: 0;
      padding-right: 0;
      grid-gap: 15px;
    }

    .LeadContent {
      grid-column: 5 / span 10;
      width: 100%;

      &.IsOpenSidebar,
      &.IsOpenFilter {
        grid-column: 1 / span 11;
      }
    }
  }

  @media (max-width: 1441px) {
    .LeadWrapper {
      grid-gap: 20px;
      padding-left: 0;
      padding-right: 0;

      display: flex;
      flex-direction: column;
    }

    .LeadContent {
      margin: 0 auto;
      grid-column: 1 / span 14;
      width: 100%;
      max-width: 970px;
      min-width: unset;

      &.IsOpenSidebar,
      &.IsOpenFilter {
        grid-column: 1 / span 18;
        max-width: 970px;
      }
    }

    .Filter {
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

    .SingleApplicationSideBar {
      width: 100%;
      grid-column: 1 / span 18;
      margin: 16px auto 0;
      height: fit-content;
      padding-bottom: 120px;
    }
  }

  @media (max-width: 576px) {
    .Filter {
      display: none;
    }
  }
`

export default LeadEntry
