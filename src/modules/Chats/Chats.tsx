import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { ChatMessages } from './components/ChatMessages'
import { useWindowSize, WindowSize } from '@/hooks/useWindowSize'
import { theme } from '../../../styles/tokens'
import ChatsList from '@/modules/Chats/components/ChatsList'

interface Props {
  className?: string
  isAppAuth: boolean
}

enum MobileStates {
  List = 'list',
  Messages = 'messages',
}

const mobile = theme.breakpoints.mobile.max
const tablet = theme.breakpoints.tablet.max

let inMobileMode: boolean = false

const Chats = (props: Props) => {
  const [mobileState, setMobileState] = useState<MobileStates>(
    MobileStates.List
  )

  useWindowSize((size: WindowSize) => {
    inMobileMode = size.width < tablet
  })

  const onRoomSelected = useCallback((e: any) => {
    setMobileState(MobileStates.Messages)
  }, [])

  const onStateChanged = useCallback((e: any) => {
    setMobileState(MobileStates.List)
  }, [])

  return (
    <StyledChats className="ContainerFull">
      <div className="Chats">
        {inMobileMode && mobileState === MobileStates.List && (
          <div className="ChatsList ChatSection">
            <ChatsList onRoomSelected={onRoomSelected} />
          </div>
        )}
        {inMobileMode && mobileState === MobileStates.Messages && (
          <div className="ChatsMessages ChatSection">
            <ChatMessages inMobileMode={inMobileMode} onStateChange={onStateChanged} />
          </div>
        )}
        {!inMobileMode && (
          <>
            <div className="ChatsList ChatSection">
              <ChatsList />
            </div>
            <div className="ChatsMessages ChatSection">
              <ChatMessages inMobileMode={false} />
            </div>
          </>
        )}
      </div>
    </StyledChats>
  )
}

const StyledChats = styled.section`
  height: 100%;
  padding-bottom: 20px;
  display: flex;

  .Chats {
    padding-top: 20px;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 40px;
    width: 100%;
    justify-content: space-between;

    &List {
      width: 35.1%;
      height: calc(100vh - 114px);
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &Messages {
      flex-grow: 1;
    }
  }

  @media (max-width: ${tablet}px) {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;

    .Chats {
      flex-direction: column;
      padding-top: 0;
      gap: 0;

      &List {
        width: 100%;
        height: 100vh;
        gap: 10px;
      }
    }
  }

  @media (max-width: ${mobile}px) {
    .Chats {
      &List {
        gap: 0;
      }
    }
  }
`

export { Chats }
