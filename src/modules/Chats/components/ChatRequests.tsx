import styled from 'styled-components'
import { DropdownInput } from '@/components/ui/DropDowns/DropdownInput'
import { ChatRoom } from '@/modules/Chats/components/ChatRoom'

interface Props {
  className?: string
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
]

const ChatRequests = ({ className, leadsList }: Props) => {
  return (
    <StyledChatRequests className={className}>
      <DropdownInput
        className={'ChatSelector'}
        placeholder={'Все заявки'}
        selected={(e: Forms.DropDownOption) => {
          console.log(e)
        }}
        options={leadsList}
      />
      <ul className="List">
        {chatsArray.map((chat, index) => (
          <li key={index}>
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
    </StyledChatRequests>
  )
}

const StyledChatRequests = styled.div``

export { ChatRequests }
