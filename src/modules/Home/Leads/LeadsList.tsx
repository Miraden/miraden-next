import { Button } from '@/components/ui'
import { SetStateAction, useEffect, useState } from 'react'
import styled from 'styled-components'
import { LeadsLastProvider } from '@/modules/Home/Leads/LeadsProvider'
import { theme } from '../../../../styles/tokens'
import cn from 'classnames'
import { LeadCard } from '@/modules/Leads/components/LeadCard'
import { useWindowSize, WindowSize } from '@/hooks/useWindowSize'

const LeadsList = (pageProps: any) => {
  const [location, setLocation] = useState<string>('')

  const handleButtonClick = (location: SetStateAction<string>) => {
    setLocation(location)
  }

  const [leadsLastProvider, setLeadsProvider] = useState<LeadsLastProvider>(
    new LeadsLastProvider()
  )
  const [leadsAllData, setLeadsAllData] = useState<Object>([])
  useEffect(() => {
    leadsLastProvider.fetchData().then(res => {
      setLeadsAllData(res)
      leadsLastProvider.setIsFinished(true)
      leadsLastProvider.setFetchedData(res)
      const firstLink = leadsLastProvider.getLinks().at(0) as string
      setLocation(firstLink)
    })
  }, [leadsLastProvider])

  const renderLeadsLocation = (windowSize: WindowSize) => {
    const items = leadsLastProvider.getLeadsByLocation(location)
    return items.map((item, key) => (
      <LeadCard
        className={'HomeLastLead LeadsList'}
        key={key}
        id={item.id}
        title={item.wishes.title}
        areas={{
          total: item.areas.total.value,
          living: item.areas.living.value,
        }}
        isTrue={item.isTrue}
        createdAt={formatCreatedDate(item.createdAt)}
        location={
          item.location.country +
          (item.location.city ? '/' + item.location.city : '/Все города')
        }
        isPublished={item.isPublished}
        rooms={item.rooms}
        rentPeriod={item.rentPeriod}
        deadlineAt={item.deadlineAt}
        buildYear={item.buildYear}
        budget={{
          currency: item.budget.currency.symbol,
          startFrom: new Intl.NumberFormat('ru').format(item.budget.startFrom),
          endTo: new Intl.NumberFormat('ru').format(item.budget.endAt),
        }}
        purchaseType={item.purchaseType}
        author={item.author}
        isPinned={item.isPinned}
        responseState={item.responseState}
        windowSize={windowSize}
        owner={item.owner}
      />
    ))
  }

  const renderLinks = () => {
    if (!leadsLastProvider.isFinished()) {
      return (
        <>
          <Button disabled>Loading...</Button>
          <Button disabled>Loading...</Button>
          <Button disabled>Loading...</Button>
          <Button disabled>Loading...</Button>
        </>
      )
    }
    const links = leadsLastProvider.getLinks()
    return links.map(name => (
      <Button
        key={name}
        request
        onClick={() => handleButtonClick(name)}
        active={location === name}
      >
        {name}
      </Button>
    ))
  }

  const s = useWindowSize()

  return (
    <StyledApplications>
      <div className="Container">
        <div className="Applications__head">
          <h2 className="Font_44_120 sm:Font_26_120">
            Новые <mark className="Color_blue_primary">заявки</mark>
          </h2>
          <div className="Applications__tabs">{renderLinks()}</div>
        </div>

        <div
          className={cn('Applications__list', {
            inProgress: !leadsLastProvider.isFinished(),
          })}
        >
          {leadsLastProvider.isFinished() && renderLeadsLocation(s)}
          {!leadsLastProvider.isFinished() && renderProgressLocations()}
        </div>

        {leadsLastProvider.isFinished() && (
          <div className="Applications__openMoreContainer">
            <Button href={'/leads'} className="Applications__openMore">
              Открыть еще {leadsLastProvider.getTotalLocations()}
            </Button>
          </div>
        )}
      </div>
    </StyledApplications>
  )
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

function formatDeadlineDate(val: string): string {
  const date = new Date(val)

  return date.getFullYear().toString()
}

function renderProgressLocations(): JSX.Element {
  return (
    <div className={'LeadInProgress'}>
      <div className={'LeadProgressItem'}>Loading...</div>
      <div className={'LeadProgressItem'}>Loading...</div>
      <div className={'LeadProgressItem'}>Loading...</div>
      <div className={'LeadProgressItem'}>Loading...</div>
    </div>
  )
}

const StyledApplications = styled.section`
  padding-top: 66px;
  padding-bottom: 75px;

  .Applications__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Applications__tabs,
  .Applications__tabsMobile {
    display: flex;

    button:not(:first-child) {
      margin-left: 10px;
    }

    button {
      padding: 10px 20px;
      width: fit-content;
      background: #fff;
    }
  }

  .Applications__list,
  .Applications__openMoreContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;

    &.inProgress {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .HomeLastLead {
    padding: 15px 20px;

    .Leads__tags {
      margin-bottom: 0;
    }

    .Lead__stats {
      grid-area: leadStats;
      align-items: center;
      justify-content: flex-end;
      font-size: 14px;
      font-weight: 400;
    }

    .Leads__price_range {
      font-size: 16px;
    }
  }

  .Applications__openMoreContainer {
    margin-top: 0;
  }

  .Applications__openMore {
    width: 100%;
    grid-column-start: 2;
    margin: 30px auto 0;
  }

  .LeadInProgress {
    display: grid;
    gap: 30px;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }

  .LeadProgressItem {
    position: relative;
    background: #fff;
    width: 100%;
    border-radius: ${theme.border.radius};
    min-height: 255px;
    align-items: center;
    align-content: center;
    justify-content: center;
    display: flex;
    color: ${theme.colors.background.lightGrey};
  }

  @media (min-width: ${theme.breakpoints.desktop.min + 'px'}) {
    .LeadProgressItem:nth-child(4n) {
      display: none;
    }
  }

  @media (max-width: 1280px) {
    .Applications__list,
    .Applications__listTablet {
      grid-gap: 12px;
    }
  }

  @media (min-width: ${theme.breakpoints.tablet.min +
    'px'}) and (max-width: ${theme.breakpoints.tablet.max + 'px'}) {
    padding-bottom: 100px;

    .Applications__list {
      grid-template-columns: repeat(2, 1fr);
    }

    .Applications__head {
      flex-direction: column;
      overflow-x: auto;
      align-items: flex-start;

      button {
        padding: 10px 15px;
      }
    }

    .Applications__tabs {
      margin-top: 20px;
    }

    .Applications__listTablet,
    .Applications__openMoreContainer {
      margin-top: 40px;
      display: grid;
      grid-gap: 12px;
      grid-template-columns: repeat(4, 1fr);
    }

    .Applications__openMoreContainer {
      margin-top: 0;

      .Applications__openMore {
        margin-top: 22px;
      }
    }

    .Applications__openMore {
      grid-column: 2 / span 2;
    }

    .LeadInProgress {
      display: grid;
      grid-gap: 12px;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: ${theme.breakpoints.mobile.min +
    'px'}) and (max-width: ${theme.breakpoints.mobile.max + 'px'}) {
    padding-top: 50px;
    .Container {
      padding-left: 0;
      padding-right: 0;
    }

    .Applications__list {
      grid-template-columns: repeat(1, 1fr);
      margin-top: 40px;
    }
    .Applications__tabsMobile {
      padding-left: 20px;
    }

    .LeadInProgress {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 12px;
    }

    .Applications__tabs {
      margin-top: 20px;
      overflow-x: auto;
      width: 100%;
    }

    .Applications__head {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 20px;
      padding-right: 20px;
    }

    .Applications__openMoreContainer {
      display: flex;
      padding-right: 20px;
      padding-left: 20px;
    }

    .LeadProgressItem:nth-child(4n),
    .LeadProgressItem:nth-child(3n) {
      display: none;
    }
  }
`

export { LeadsList }
