import ChatRoomsListLayout from '@/modules/Chats/ChatRoomsListLayout'
import ChatRoomsTabs from '@/modules/Chats/ChatRoomsTabs'
import { useCallback, useEffect, useState } from 'react'
import { DropdownInput } from '@/components/ui/DropDowns/DropdownInput'
import cn from 'classnames'
import { ChatRoom } from '@/modules/Chats/components/ChatRoom'
import styled from 'styled-components'
import { ChatTabs } from '@/infrastructure/Chats/ChatTabs'
import ChatLeadsProvider from '@/infrastructure/Chats/ChatLeadsProvider'
import { Preloader } from '@/components/ui/Preloader'
import { theme } from '../../../../styles/tokens'
import ChatRoomsProvider from '@/infrastructure/Chats/ChatRoomsProvider'
import LangManager from '@/infrastructure/Intl/LangManager'
import useUpdater from '@/hooks/useUpdater'

interface Props {
  className?: string
  onRoomSelected?: (room: number, lead: number) => void
  newMessage?: Chat.Message
}

const mobile = theme.breakpoints.mobile.max
const tablet = theme.breakpoints.tablet.max

const chatsLeadsProvider: ChatLeadsProvider = new ChatLeadsProvider()
const chatRoomsProvider: ChatRoomsProvider = new ChatRoomsProvider()
const langManager: LangManager = new LangManager()
let roomsList: Chat.Preview[] = []

const ChatsList = (props: Props): JSX.Element => {
  const [selectedRoom, setSelectedRoom] = useState<number>(-1)
  const [leadsList, setLeadsList] = useState<Forms.DropDownOption[]>([])
  const [roomsListBusy, setRoomsListBusy] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<ChatTabs>(ChatTabs.All)

  const update = useUpdater()

  const onRoom = useCallback(
    (e: any) => {
      const target = e.target.closest('li')
      if(!target) return
      const keyId: number = Number(target.getAttribute('data-room'))
      const leadId: number  = Number(target.getAttribute('data-lead'))
      setSelectedRoom(keyId)
      if (props.onRoomSelected) props.onRoomSelected(keyId, leadId)
    },
    [props]
  )

  const onTab = useCallback((tab: ChatTabs) => {
    setRoomsListBusy(true)
    if (tab === ChatTabs.All) {
      chatsLeadsProvider.fetchAll().then(res => {
        let options: Forms.DropDownOption[] = []
        res.map((i, id) => {
          options.push({ label: '#' + i.id + ' - ' + i.title, value: i.id })
        })
        setLeadsList(options)
        setRoomsListBusy(false)
      })

      chatRoomsProvider.fetchAll().then(res => {
        roomsList = res
        update()
      })
    }

    if (tab === ChatTabs.Requests) {
      chatsLeadsProvider.fetchRequests().then(res => {
        let options: Forms.DropDownOption[] = []
        res.map((i, id) => {
          options.push({ label: '#' + i.id + ' - ' + i.title, value: i.id })
        })
        setLeadsList(options)
        setRoomsListBusy(false)
      })
    }

    if (tab === ChatTabs.Executants) {
      chatsLeadsProvider.fetchExecutants().then(res => {
        let options: Forms.DropDownOption[] = []
        res.map((i, id) => {
          options.push({ label: '#' + i.id + ' - ' + i.title, value: i.id })
        })
        setLeadsList(options)
        setRoomsListBusy(false)
      })
    }

    if (tab === ChatTabs.Support) {
      setRoomsListBusy(false)
    }
  }, [update])

  return (
    <>
      <ChatRoomsTabs onTab={onTab} />
      <ChatRoomsListLayout className={cn({ isBusy: roomsListBusy })}>
        {roomsListBusy && <Preloader />}
        {!roomsListBusy && (
          <StyledAllChatsContainer className={props.className}>
            {leadsList.length > 0 && (
              <DropdownInput
                className={'ChatSelector'}
                placeholder={'Все заявки'}
                selected={(e: Forms.DropDownOption) => {
                  console.log(e)
                }}
                options={leadsList}
              />
            )}

            <ul className="List" onClick={onRoom}>
              {roomsList.map((room, index) => (
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
    </>
  )
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
