import styled from 'styled-components'
import { SingleChat } from './SingleChat'
import { DropdownInput } from '@/components/ui/DropDowns/DropdownInput'
import RoomsProvider from '@/infrastructure/Chats/RoomsProvider'
import { MouseEventHandler, useCallback, useState } from 'react'
import cn from 'classnames'

interface Props {
  className?: string
  onClick?: any
  leadsList: Forms.DropDownOption[]
}

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
]

const AllChatsContainer = ({ className, onClick, leadsList }: Props) => {
  const [selectedRoom, setSelectedRoom] = useState<number>(-1)
  const onRoom = useCallback((e: any) => {
    const target = e.target.closest('li')
    const keyId: number = Number(target.getAttribute('data-key'))
    setSelectedRoom(keyId)
  }, [])

  return (
    <StyledAllChatsContainer className={className} onClick={onClick}>
      <DropdownInput
        className={'ChatSelector'}
        placeholder={'Все заявки'}
        selected={(e: Forms.DropDownOption) => {
          console.log(e)
        }}
        options={leadsList}
      />
      <ul className="List" onClick={onRoom}>
        {chatsArray.map((chat, index) => (
          <li
            data-key={index}
            key={index}
            className={cn("ListItem", { ListItem__IsActive: selectedRoom === index })}
          >
            <SingleChat
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
  )
}

const StyledAllChatsContainer = styled.div`
  @media (max-width: 1024px) {
    min-width: unset;
    margin-top: 16px;
  }

  @media (max-width: 576px) {
    margin-top: 0;
  }
`

export { AllChatsContainer }
