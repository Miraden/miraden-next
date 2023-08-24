import React, { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui'
import cn from 'classnames'
import { ChatLeadTabs } from '@/infrastructure/Chats/ChatTabs'
import styled from 'styled-components'
import { BackIcon20 } from '@/icons'
import { useRouter } from 'next/router'

interface Props {
  className?: string
  onTabSelected?: (tab: ChatLeadTabs) => void
  lead?: Leads.LeadEntryType
}

const LeadTabs = (props: Props): JSX.Element => {
  const router = useRouter()
  const query = router.query
  const leadId: number = Number(query['id'])
  const [selectedTab, setSelectedTab] = useState<ChatLeadTabs>(
    ChatLeadTabs.Lead
  )

  useEffect(() => {
    if (props.onTabSelected) props.onTabSelected(selectedTab)
  }, [props, selectedTab])

  const handleSelect = useCallback(
    (tab: ChatLeadTabs) => {
      setSelectedTab(tab)
      if (props.onTabSelected) props.onTabSelected(tab)
    },
    [props]
  )

  return (
    <StyledTabs className={'ChatTabs'}>
      <div className="ChatTabs__head">
        <div className="ChatTabs__back">
          <Button
            secondary
            href={'/lead/' + leadId}
            className="Menu__header_backButton"
          >
            <BackIcon20
              width={20}
              height={20}
              className="Menu__header_backArrow"
            />
          </Button>
        </div>
        <div className="ChatTabs__title">
          <h2 className="Font_headline_h4">Заявка #{props.lead?.id}</h2>
          <div className="ChatTabs__titleText">{props.lead?.title}</div>
        </div>
        <div className="ChatTabs__back">true</div>
      </div>
      <div className="ChatTabs__headTabs">
        <div className="ChatTabs__links">
          <Button
            className={cn('', {
              ChatTabs__headTabButton: selectedTab === ChatLeadTabs.Lead,
            })}
            onClick={() => handleSelect(ChatLeadTabs.Lead)}
            active={selectedTab === ChatLeadTabs.Lead}
            tertiary
            compact
          >
            Заявка
          </Button>
          <Button
            className={cn('', {
              ChatTabs__headTabButton: selectedTab === ChatLeadTabs.Contacts,
            })}
            onClick={() => handleSelect(ChatLeadTabs.Contacts)}
            active={selectedTab === ChatLeadTabs.Contacts}
            tertiary
            compact
          >
            Контакты
          </Button>
          <Button
            className={cn('', {
              ChatTabs__headTabButton: selectedTab === ChatLeadTabs.Reviews,
            })}
            onClick={() => handleSelect(ChatLeadTabs.Reviews)}
            active={selectedTab === ChatLeadTabs.Reviews}
            tertiary
            compact
          >
            Отзывы
          </Button>
          <Button
            className={cn('', {
              ChatTabs__headTabButton: selectedTab === ChatLeadTabs.Info,
            })}
            onClick={() => handleSelect(ChatLeadTabs.Info)}
            active={selectedTab === ChatLeadTabs.Info}
            tertiary
            compact
          >
            Информация
          </Button>
        </div>
        <div className="ChatTabs__headTabsBar" />
      </div>
    </StyledTabs>
  )
}

const StyledTabs = styled.div`
  .ChatTabs__head {
    display: flex;
    align-items: center;
  }

  .ChatTabs__title {
    flex-grow: 1;
  }

  .Menu__header {
    display: flex;
    align-items: baseline;

    &_backButton {
      padding: 4px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-right: 10px;
      background: transparent;
      height: 28px;
      width: 28px;
    }
  }
`

export default LeadTabs
