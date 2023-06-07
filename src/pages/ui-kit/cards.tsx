import { useCallback, useState } from "react";
import { ApplicationsCard } from "@/modules/Home/Applications/components/ApplicationsCard";
import { ReviewCard } from "@/modules/Home/Reviews/components/ReviewCard"
import { SellerCard } from "@/modules/ObjectsPlug/Object/components/SellerCard";
import { PaymentButton } from "@/components/ui/PaymentButton";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function CardsPage() {

  const paymentOptions = [
    {
      buttonTitle: "Открыть отклик для всех",
      buttonText: "На заявку смогут откликнуться все пользователи, а не только PRO",
      tax: 10,
    },
    {
      buttonTitle: "Закрепить вверху на 24 часа",
      buttonText: "Заявка будет закреплена вверху ленты. После чего сместится вниз по мере поступления новых",
      tax: 15,
    },
    {
      buttonTitle: "Поднимать каждые 3 дня",
      buttonText: "Заявка будет автоматически подниматься в самый верх ленты каждые 3 дня",
      tax: 20,
    },
  ];

  const [activeButtons, setActiveButtons] = useState(
    paymentOptions.map((option, index) => index === 0)
  );

  const handleActive = useCallback(
    (index: number) => {
      const newActiveButtons = [...activeButtons];
      newActiveButtons[index] = !newActiveButtons[index];
      setActiveButtons(newActiveButtons);
    },
    [activeButtons]
  );

  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="description" content="Miraden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="Container">
        <Link href="/ui-kit">Go back</Link> 
        <h1 className="Font_52_120">Cards</h1>

        <StyledCards>
          <ApplicationsCard
            className="AppCard"
            application='app'
            title='Куплю 3-х комнатную квартиру на Кипре'
            year={2022}
            sleeps={294}
            square={6}
            baths={2}
            price='158 000 – 230 000'
            location='Кипр / Лимассол / Все районы'
          />

          <ReviewCard
            className="ReviewCard"
            text='Хочу выразить благодарность Анастасии за её работу. Сотрудничать начали в середине февраля и так как квартиру искали по большому количеству критериев — закончили в марте. Понравилось больше всего, что сопровождали во всем, и разъясняли каждую деталь. Будем обращаться ещё!'
            title='Сопровождали во всем и разъясняли каждую деталь'
            role='Клиент'
            name='Андрей Макеев'
            image='https://i.imgur.com/ZYTjn2G.png'
          />

          <SellerCard
            isRecommend={true}
            name='Константин Гриндин'
            isPro={true}
            isVerified={true}
            rating={5.0} 
            image='https://i.imgur.com/ZYTjn2G.png'
            status='Риелтор'
            agencyName='Realhome'
            isOnline={false}
            unreadMessages={0}
          />

          <SellerCard
            isPerformer={true}
            isRecommend={true}
            name='Константин Гриндин'
            isPro={false}
            isVerified={false}
            rating={4.0} 
            image='https://i.imgur.com/ZYTjn2G.png'
            status='Агентство недвижимости'
            agencyName='Realhome'
            isOnline={true}
            unreadMessages={0}
          />

          {paymentOptions.map((option, index) => (
            <li key={index} className="Payment__button">
              <PaymentButton
                onChange={() => handleActive(index)}
                onClick={() => handleActive(index)}
                buttonText={option.buttonText}
                buttonTitle={option.buttonTitle}
                tax={option.tax}
                active={activeButtons[index]}
              />
            </li>
          ))}
        </StyledCards>
      </main>
    </>
  );
}

const StyledCards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 50px;
    padding: 1rem;
    background: #eef1f5;

    .AppCard,
    .ReviewCard {
        max-width: 370px;
    }

    .Payment__button {
      margin-top: 20px;
      list-style-type: none;
  
      .PaymentButton {
        &.isActive {
          background: #2a344a;
        }
      }
  
      cursor: pointer
    }
`;
