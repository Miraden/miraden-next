import ChatRoomsListLayout from '@/modules/Chats/ChatRoomsListLayout'
import ChatRoomsTabs from '@/modules/Chats/ChatRoomsTabs'
import { useCallback, useEffect, useState } from 'react'
import { DropdownInput } from '@/components/ui/DropDowns/DropdownInput'
import cn from 'classnames'
import styled from 'styled-components'
import { ChatTabs } from '@/infrastructure/Chats/ChatTabs'
import { Preloader } from '@/components/ui/Preloader'
import { theme } from '../../../../styles/tokens'
import LangManager from '@/infrastructure/Intl/LangManager'
import useUpdater from '@/hooks/useUpdater'
import { ChatRoom } from '@/modules/Chats/components/ChatRoom'

interface Props {
  className?: string
  onRoomSelected?: (room: number, lead: number) => void
  onLeadSelected?: (lead: number) => void
  onTabSelected?: (tab: ChatTabs) => void
  roomsList: Chat.RoomsList[]
  leadsList: Chat.Leads[]
  leadsReset: boolean
}

const mobile = theme.breakpoints.mobile.max
const tablet = theme.breakpoints.tablet.max

const langManager: LangManager = new LangManager()

const ChatsList = (props: Props): JSX.Element => {
  const [selectedRoom, setSelectedRoom] = useState<number>(0)
  const [roomsListBusy, setRoomsListBusy] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<ChatTabs>(ChatTabs.All)

  const onRoom = useCallback(
    (e: any) => {
      const target = e.target.closest('li')
      if (!target) return
      const keyId: number = Number(target.getAttribute('data-room'))
      const leadId: number = Number(target.getAttribute('data-lead'))
      setSelectedRoom(keyId)
      if (props.onRoomSelected) props.onRoomSelected(keyId, leadId)
    },
    [props]
  )

  const onTab = useCallback(
    (tab: ChatTabs) => {
      setActiveTab(tab)
      if (props.onTabSelected) props.onTabSelected(tab)
    },
    [props]
  )

  return (
    <div className={'ChatSidebar'}>
      <ChatRoomsTabs onTab={onTab} />
      <ChatRoomsListLayout className={cn({ isBusy: roomsListBusy })}>
        {roomsListBusy && <Preloader />}
        {!roomsListBusy && (
          <StyledAllChatsContainer className={props.className}>
            {props.leadsList.length > 0 && (
              <DropdownInput
                reset={props.leadsReset}
                className={'ChatSelector'}
                placeholder={'Все заявки'}
                selected={(e: Forms.DropDownOption) => {
                  if (props.onLeadSelected)
                    props.onLeadSelected(Number(e.value))
                }}
                options={leadsTransformToDropDownOptions(props.leadsList)}
              />
            )}

            <ul className="List" onClick={onRoom}>
              {props.roomsList.map((room, index) => (
                <li
                  data-room={room.roomId}
                  data-lead={room.leadId}
                  key={index}
                  className={cn('ListItem', {
                    ListItem__IsActive: selectedRoom === room.roomId,
                  })}
                >
                  <ChatRoom
                    preview={room}
                    locale={langManager.getClientLang()}
                  />
                </li>
              ))}
            </ul>
          </StyledAllChatsContainer>
        )}
      </ChatRoomsListLayout>
    </div>
  )
}

function leadsTransformToDropDownOptions(
  list: Chat.Leads[]
): Forms.DropDownOption[] {
  let result: Forms.DropDownOption[] = []
  list.map(item => {
    result.push({ label: item.title, value: item.id })
  })

  return result
}

const StyledAllChatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .List {
    .ListItem {
      &__IsActive {
        background: ${({ theme }) => theme.colors.background.lightBlue};
      }

      &:hover {
        background: ${({ theme }) => theme.colors.background.lightBlue};
        cursor: pointer;
      }
    }
  }

  @media (max-width: ${mobile}px) {
    .List {
      margin-top: 0;
    }
  }
`

export default ChatsList
