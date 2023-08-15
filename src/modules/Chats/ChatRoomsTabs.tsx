import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Button } from '@/components/ui'
import cn from 'classnames'
import ChatLeadsProvider from '@/infrastructure/Chats/ChatLeadsProvider'
import styled from 'styled-components'
import { theme } from '../../../styles/tokens'
import { ChatTabs } from '@/infrastructure/Chats/ChatTabs'

interface Props {
  className?: string
  onTab?: (tab: ChatTabs) => void
}

const mobile = theme.breakpoints.mobile.max
const tablet = theme.breakpoints.tablet.max

let isInit: boolean = false

const ChatRoomsTabs = (props: PropsWithChildren<Props>): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<ChatTabs>(ChatTabs.All)

  useEffect(() => {
    if (isInit) return
    if (props.onTab) props.onTab(selectedTab)
    isInit = true
  }, [props, selectedTab])

  const handleSelect = useCallback(
    (tab: ChatTabs) => {
      setSelectedTab(tab)
      if (props.onTab) props.onTab(tab)
    },
    [props]
  )

  return (
    <StyledTabs className="ChatTabs">
      <h2 className="Font_headline_h4">Чаты</h2>
      <div className="ChatTabs__headTabs">
        <div className="ChatTabs__links">
          <Button
            className={cn('', {
              ChatTabs__headTabButton: selectedTab === ChatTabs.All,
            })}
            onClick={() => handleSelect(ChatTabs.All)}
            active={selectedTab === ChatTabs.All}
            tertiary
            compact
          >
            Все
          </Button>
          <Button
            className={cn('', {
              ChatTabs__headTabButton: selectedTab === ChatTabs.Requests,
            })}
            onClick={() => handleSelect(ChatTabs.Requests)}
            active={selectedTab === ChatTabs.Requests}
            tertiary
            compact
          >
            Отклики
          </Button>
          <Button
            className={cn('', {
              ChatTabs__headTabButton: selectedTab === ChatTabs.Executants,
            })}
            onClick={() => handleSelect(ChatTabs.Executants)}
            active={selectedTab === ChatTabs.Executants}
            tertiary
            compact
          >
            Исполнители
          </Button>
          <Button
            className={cn('', {
              ChatTabs__headTabButton: selectedTab === ChatTabs.Support,
            })}
            onClick={() => handleSelect(ChatTabs.Support)}
            active={selectedTab === ChatTabs.Support}
            tertiary
            compact
          >
            Поддержка Miraden
          </Button>
        </div>
        <div className="ChatTabs__headTabsBar" />
      </div>
    </StyledTabs>
  )
}

const StyledTabs = styled.div`
  background: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 20px 20px 10px 20px;
  color: ${({ theme }) => theme.colors.white};
  gap: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${tablet}px) {
    border-radius: 0 0 ${({ theme }) => theme.border.radius}
      ${({ theme }) => theme.border.radius};
  }

  .ChatTabs {
    &__headTabs {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex-wrap: nowrap;
      overflow-x: auto;

      button {
        white-space: nowrap;
        background: transparent;
        padding: 0 0 12px;
        position: relative;

        &.active {
          &:after {
            content: '';
            position: absolute;
            bottom: -4px;
            height: 4px;
            background: #fff;
            left: 0;
            width: 100%;
            border-radius: ${({ theme }) => theme.border.radius};
          }
        }

        &.active,
        &:hover {
          color: #fff;
          background: transparent;
        }
      }
    }

    &__links {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    &__headTabsBar {
      height: 4px;
      background: ${({ theme }) => theme.colors.text.grey};
      border-radius: ${({ theme }) => theme.border.radius};
    }
  }
`

export default ChatRoomsTabs
