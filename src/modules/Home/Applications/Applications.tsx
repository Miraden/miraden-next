import { Button } from '@/components/ui'
import { SetStateAction, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ApplicationsCard } from './components/ApplicationsCard'
import { LeadsLastProvider } from '@/modules/Home/Applications/LeadsProvider'
import { theme } from '../../../../styles/tokens'
import cn from 'classnames'

const Applications = () => {
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

  const renderLeadsLocation = () => {
    const items = leadsLastProvider.getLeadsByLocation(location)
    return items.map(lead => (
      <ApplicationsCard
        className="Card"
        href={'/lead/' + lead.id}
        key={lead.id}
        application={[]}
        title={lead.wishes.title}
        year={2022}
        sleeps={lead.rooms.beds}
        square={lead.areas.total.value}
        baths={lead.rooms.bathroom}
        price={
          lead.budget.startFrom +
          ' - ' +
          lead.budget.endAt +
          ' ' +
          lead.budget.currency.symbol
        }
        location={lead.city.country + ' / ' + lead.city.name}
        createdAt={formatCreatedDate(lead.createdAt)}
      />
    ))
  }

  const renderLinks = () => {
    if (!leadsLastProvider.isFinished()) {
      return <Button disabled>Loading...</Button>
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

  return (
    <StyledApplications>
      <div className="Container">
        <div className="Applications__head">
          <h2 className="Font_44_120 sm:Font_26_120">
            Новые <mark className="Color_blue_primary">заявки</mark>
          </h2>
          <div className="Applications__tabs">{renderLinks()}</div>
        </div>

        <div className="Applications__tabsMobile sm:FullBleed">
          {renderLinks()}
        </div>

        <div
          className={cn('Applications__list', {
            inProgress: !leadsLastProvider.isFinished(),
          })}
        >
          {leadsLastProvider.isFinished() && renderLeadsLocation()}
          {!leadsLastProvider.isFinished() && renderProgressLocations()}
        </div>

        <div
          className={cn('Applications__listTablet sm:FullBleed', {
            inProgress: !leadsLastProvider.isFinished(),
          })}
        >
          {leadsLastProvider.isFinished() && renderLeadsLocation()}
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

function renderProgressLocations(): JSX.Element {
  return (
    <div className={'LeadInProgress'}>
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

  .Applications__tabsMobile {
    display: none;
  }

  .Applications__list,
  .Applications__listTablet,
  .Applications__openMoreContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;

    &.inProgress {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .Applications__listTablet {
    display: none;
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
    display: flex;
    gap: 30px;
    width: 100%;
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

  @media (max-width: 1280px) {
    .Applications__list,
    .Applications__listTablet {
      grid-gap: 12px;
    }
  }

  @media (max-width: 1024px) {
    padding-bottom: 100px;
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

    .Applications__list {
      display: none;
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

    .Card {
      grid-column: span 2;
    }

    .Applications__openMore {
      grid-column: 2 / span 2;
    }
  }

  @media (max-width: 720px) {
    .Applications__listTablet,
    .Applications__openMoreContainer {
      display: flex;
      flex-direction: column;
    }

    .Applications__tabs {
      display: none;
    }

    .Applications__tabsMobile {
      display: flex;
      margin-top: 20px;
      overflow-x: scroll;
    }
  }

  @media (max-width: 576px) {
    .Applications__tabsMobile {
      padding-left: 20px;
    }
  }
`

export { Applications }
