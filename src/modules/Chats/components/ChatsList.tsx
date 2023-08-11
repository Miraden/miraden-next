import ChatRoomsListLayout from '@/modules/Chats/ChatRoomsListLayout'
import ChatRoomsTabs from '@/modules/Chats/ChatRoomsTabs'
import { useCallback, useState } from 'react'
import { DropdownInput } from '@/components/ui/DropDowns/DropdownInput'
import cn from 'classnames'
import { ChatRoom } from '@/modules/Chats/components/ChatRoom'
import styled from 'styled-components'
import { ChatTabs } from '@/infrastructure/Chats/ChatTabs'
import RoomsProvider from '@/infrastructure/Chats/RoomsProvider'
import { Preloader } from '@/components/ui/Preloader'
import { theme } from '../../../../styles/tokens'

interface Props {
  className?: string
  onRoomSelected?: (selected: number) => void
}

const mobile = theme.breakpoints.mobile.max
const tablet = theme.breakpoints.tablet.max

const chatsArray = [
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: true,
    isVerified: true,
    isPerformer: true,
    unreadMessages: 5,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: true,
    isVerified: true,
    isPerformer: true,
    unreadMessages: 5,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: true,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
  {
    image: '/images/avatar1.png',
    name: 'Светлана Гридасова',
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: '12:05',
    message:
      'Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?',
  },
]

const roomsProvider: RoomsProvider = new RoomsProvider()

const ChatsList = (props: Props): JSX.Element => {
  const [selectedRoom, setSelectedRoom] = useState<number>(-1)
  const [leadsList, setLeadsList] = useState<Forms.DropDownOption[]>([])
  const [roomsListBusy, setRoomsListBusy] = useState<boolean>(false)

  const onRoom = useCallback(
    (e: any) => {
      const target = e.target.closest('li')
      const keyId: number = Number(target.getAttribute('data-key'))
      setSelectedRoom(keyId)
      if (props.onRoomSelected) props.onRoomSelected(keyId)
    },
    [props]
  )

  const onTab = useCallback((tab: ChatTabs) => {
    setRoomsListBusy(true)
    setLeadsList([])
    if (tab === ChatTabs.All) {
      roomsProvider.fetchAll().then(res => {
        let options: Forms.DropDownOption[] = []
        res.map((i, id) => {
          options.push({ label: '#' + i.id + ' - ' + i.title, value: i.id })
        })
        setLeadsList(options)
        setRoomsListBusy(false)
      })
    }

    if (tab === ChatTabs.Requests) {
      roomsProvider.fetchRequests().then(res => {
        let options: Forms.DropDownOption[] = []
        res.map((i, id) => {
          options.push({ label: '#' + i.id + ' - ' + i.title, value: i.id })
        })
        setLeadsList(options)
        setRoomsListBusy(false)
      })
    }

    if (tab === ChatTabs.Executants) {
      roomsProvider.fetchExecutants().then(res => {
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
  }, [])

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
              {chatsArray.map((chat, index) => (
                <li
                  data-key={index}
                  key={index}
                  className={cn('ListItem', {
                    ListItem__IsActive: selectedRoom === index,
                  })}
                >
                  <ChatRoom
                    name={chat.name}
                    image={chat.image}
                    isPro={chat.isPro}
                    isVerified={chat.isVerified}
                    message={chat.message}
                    unreadMessages={chat.unreadMessages}
                    time={chat.time}
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
