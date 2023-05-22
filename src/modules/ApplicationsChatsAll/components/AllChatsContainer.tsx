import { SortChats } from "@/components/ui/SortChats/SortChats";
import styled from "styled-components";
import { SingleChat } from "./SingleChat";

interface Props {
  className?: string;
}

const chatsArray = [
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: true,
    isVerified: true,
    isPerformer: true,
    unreadMessages: 5,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: true,
    isVerified: true,
    isPerformer: true,
    unreadMessages: 5,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: true,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
  {
    image: "/images/avatar.jpg",
    name: "Светлана Гридасова",
    isPro: false,
    isVerified: true,
    isPerformer: false,
    unreadMessages: 0,
    time: "12:05",
    message:
      "Добрый день, Александр. Да, я провожу онлайн-показы. Через какую программу вам будет удобно связаться и на какое время?",
  },
];

const AllChatsContainer = ({ className }: Props) => {
  return (
    <StyledAllChatsContainer className={className}>
      <SortChats />
      <ul className="List">
        {chatsArray.map((chat, index) => (
          <li key={index}>
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
  );
};

const StyledAllChatsContainer = styled.div`
  overflow: auto;
  margin-top: 20px;
  border-radius: 10px 10px 0 0;
  background: #fff;
  min-width: 600px;
  .List {
    margin-top: 20px;
  }

  @media (max-width: 1024px) {
    min-width: unset;
  }
`;

export { AllChatsContainer };
