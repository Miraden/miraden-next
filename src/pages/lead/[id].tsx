import Head from 'next/head'
import React, { useCallback, useEffect, useState } from 'react'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import { Header } from '@/modules/Base/Header'
import styled from 'styled-components'
import cn from 'classnames'
import { StyledMenu, TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import { BackIcon20 } from '@/icons'
import { Button, Notification, Search } from '@/components/ui'
import { FilterIcon } from '@/icons/FilterIcon'
import { SellerCard } from '@/modules/Applications/Application/components/SellerCard'
import { ApplicationsFilter } from '@/components/ui/ApplicationsFilter'
import { SingleApplicationSideBar } from '@/modules/Applications/Application/components/SingleApplicationSideBar'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { ApplicationsFooter } from '@/modules/Base/ApplicationsFooter'
import { LeadEntryProvider } from '@/modules/Leads/LeadEntryProvider'
import { UrlManager } from '@/infrastructure/Routes/UrlManager'
import { NextRouter, useRouter } from 'next/router'
import LangManager from '@/infrastructure/Intl/LangManager'
import { theme } from '../../../styles/tokens'
import LeadOwnerCard from '@/modules/Leads/LeadOwnerCard'
import useAuth from '@/hooks/useAuth'

enum TabsMenuState {
  Lead = 0,
  Requests = 1,
  Executants = 2,
  Rejected = 3,
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
  useAuth({
    onSuccess: (): void => {
      setUserAuth(true)
    },

    onFailure: (): void => {
      setUserAuth(false)
    }
  })

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

  const [showOwnerSidebar, setShowOwnerSidebar] = useState<boolean>(false)
  const [showGuestSidebar, setGuestSidebar] = useState<boolean>(false)

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
  const [notifyVisible, setNotifyVisible] = useState<boolean>(false)
  const [leadVisibilityStatus, setLeadVisibilityStatus] = useState<boolean>(false)
  const [leadTitle, setLeadTitle] = useState<string>("")
  const [IamLeadOwner, setIamLeadOwner] = useState<boolean>(false)
  const [sellersRequests, setSellersRequests] = useState<Object[]>([])
  const [executants, setExecutants] = useState<Object[]>([])
  const [rejectedUsers, setRejectedUsers] = useState<Object[]>([])
  const [recommendedUsers, setRecommendedUsers] = useState<Object[]>([])
  useEffect(() => {
    if (selected == TabsMenuState.Lead) {
      if (!leadId) return
      setLeadsAllData({})
      leadDataProvider.setIsFinished(false)
      leadDataProvider.setLang(langManager.getClientLang())
      leadDataProvider.fetchById(leadId).then(res => {
        const payload = leadDataProvider.getPayload()
        if (!payload) {
          leadDataProvider.setIsFinished(true)
          setLeadsAllData([])
        }
        if (payload) {
          if (payload.iamOwner) {
            setShowOwnerSidebar(payload.iamOwner)
            setIamLeadOwner(true)
          }
          setGuestSidebar(!payload.iamOwner)
          setLeadTitle(payload.wishes.title)
          setLeadsAllData(res)
        }
      })
      leadDataProvider.onToggleEvent((e: any) => {
        setNotifyVisible(true)
        const payload = leadDataProvider.getPayload()
        setLeadVisibilityStatus(payload.isHidden)
        setTimeout(() => {
          setNotifyVisible(false)
        }, 3000)
      })
    }

    if (selected == TabsMenuState.Requests) {
      if (!leadId) return
      setLeadsAllData([])
      const current = tabsManager.getItem(selected)
      setShowOwnerSidebar(false)
      setGuestSidebar(false)
      current?.updateMenuFooter(
        <Search
          sort={['Сначала агентства', 'Сначала PRO', 'Сначала самые надежные']}
          placeholder="Поиск"
          filterIcon={<FilterIcon />}
          withSort={true}
          onFilterClick={handleShowFilter}
        />
      )
      leadDataProvider.setIsFinished(false)
      leadDataProvider.fetchSellersRequests(leadId).then((res) => {
        leadDataProvider.setLang(langManager.getClientLang())
        leadDataProvider.setIsFinished(true)
        const payload = res.payload as Object[]
        setSellersRequests(payload)
      })
    }

    if (selected == TabsMenuState.Rejected) {
      if (!leadId) return
      setLeadsAllData([])
      setShowOwnerSidebar(false)
      setGuestSidebar(false)
      leadDataProvider.setIsFinished(false)
      leadDataProvider.fetchRejected(leadId).then((res) => {
        leadDataProvider.setLang(langManager.getClientLang())
        leadDataProvider.setIsFinished(true)
        const payload = res.payload as Object[]
        setRejectedUsers(payload)
      })
    }

    if (selected == TabsMenuState.Executants) {
      if (!leadId) return
      setLeadsAllData([])
      setShowOwnerSidebar(false)
      setGuestSidebar(false)
      leadDataProvider.setIsFinished(false)
      leadDataProvider.fetchExecutants(leadId).then((res) => {
        leadDataProvider.setLang(langManager.getClientLang())
        const payload = res.payload as Object[]
        setExecutants(payload)
        leadDataProvider.setIsFinished(true)
      })
    }

    if (selected == TabsMenuState.Recommended) {
      if (!leadId) return
      setLeadsAllData([])
      setShowOwnerSidebar(false)
      setGuestSidebar(false)
      leadDataProvider.setIsFinished(false)
      leadDataProvider.fetchRecommended(leadId).then((res) => {
        leadDataProvider.setLang(langManager.getClientLang())
        leadDataProvider.setIsFinished(true)
        const payload = res.payload as Object[]
        setRecommendedUsers(payload)
      })
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
                IsOpenSidebar: showOwnerSidebar || showGuestSidebar,
                IamLeadOwner: IamLeadOwner
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
                  <h1 className="Font_headline_3">{leadTitle}</h1>
                </div>
                {IamLeadOwner && (
                  <>
                  {tabsManager.renderMenus(selected)}
                  {tabsManager.renderMenuFooter(selected)}
                  </>
                )}
              </StyledMenu>

              <div className="Leads__content">
                {selected == TabsMenuState.Lead && leadDataProvider.render()}
                {selected == TabsMenuState.Requests && (
                  <div className={'PageLead'}>{renderUsers(sellersRequests)}</div>
                )}
                {selected == TabsMenuState.Executants && (
                  <div className={'PageLead'}>{renderUsers(executants)}</div>
                )}
                {selected == TabsMenuState.Rejected && (
                  <div className={'PageLead'}>{renderUsers(rejectedUsers)}</div>
                )}
                {selected == TabsMenuState.Recommended && (
                  <div className={'PageLead'}>{renderUsers(recommendedUsers)}</div>
                )}
              </div>
            </div>
            {showOwnerSidebar && renderLeadPaymentOptions()}
            {showGuestSidebar && <LeadOwnerCard leadId={leadId}/>}

            {showFilter && renderFilter(handleShowFilter, () => {})}
            {!showFilter && <ApplicationsFooter />}
          </div>
          {notifyVisible && (
            <div className={'Notifications'}>
              <Notification
                success
                title={'Доступ к заявке'}
                message={
                  leadVisibilityStatus
                    ? 'Заявку видят все'
                    : 'Заявка доступна только вам'
                }
              />
            </div>
          )}
        </StyledLead>
      </BlankLayout>
    </>
  )
}

function renderUsers(data: any): JSX.Element {
  return (
    <ul className="Applications__list">
      {data.map((performer: any, index: number) => (
        <li key={index}>
          <SellerCard
            isPerformer={true}
            name={performer.name}
            surname={performer.surname}
            isPro={performer.isRolePro}
            isVerified={performer.isPassportVerified}
            rating={performer.rating}
            image={performer.photo}
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

  .Leads__content {
    margin-bottom: 20px;
  }

  .IamLeadOwner {
    &.LeadContent {
      grid-gap: 20px;
    }

    .PageLead {
      border-radius: ${theme.border.radius};
    }

    .PageHeader {
      border-radius: ${theme.border.radius};
    }

    .SingleApplication__head {
      border-top: none;
    }
  }

  .SingleApplication__head {
    border-top: 1px solid ${theme.colors.stroke.divider};
    padding: 15px 22px;
  }

  .PageLead {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .PageHeader {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .LeadContent {
    min-width: 970px;
    max-width: 970px;
    grid-column: 5 / span 10;
    grid-gap: 0;
    display: grid;
    height: fit-content;

    &:not(.IamLeadOwner) {
      .PageHeader {
        padding-bottom: 20px;
      }
    }
  }

  .PageLead {
    padding: 0;
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

  .Notifications {
    position: absolute;
    z-index: 1000;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
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
      display: flex;
      flex-direction: column;

      &.IsOpenSidebar,
      &.IsOpenFilter {
        display: flex;
        flex-direction: column;
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

    .SingleApplicationSideBar {
      min-width: 100%;
    }
  }
`

export default LeadEntry
