import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="description" content="Miraden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <StyledMain>
        <Link href="/">Главная</Link>
        <Link href="customer/reg-1">Регистрация! Укажите ваш статус</Link>
        <Link href="customer/reg-2">
          Регистрация! Укажите имя и электронную почту
        </Link>
        <Link href="customer/reg-3">Поздравляем с успешной регистрацией!</Link>
        <Link href="customer/phone-1">Укажите ваш номер телефона</Link>
        <Link href="customer/phone-2">
          Введите код из СМС для подтверждения телефона
        </Link>
        <Link href="customer/login">Вход в аккаунт</Link>
        <Link href="customer/pass-recover-1">Восстановление пароля</Link>
        <Link href="customer/pass-recover-2">
          Введите код с почты для подтверждения пароля
        </Link>
        <Link href="customer/create-1">Шаг 0. Как это работает?</Link>
        <Link href="customer/create-step-1">
          Шаг 1. Укажите город или локацию недвижимости
        </Link>
        <Link href="customer/create-step-2">
          Шаг 2. Укажите формат сделки с недвижимостью
        </Link>
        <Link href="customer/create-step-3">
          Шаг 3.Укажите тип недвижимости
        </Link>
        <Link href="customer/rent-range-step-5">
          Шаг 3. Укажите общую площадь недвижимости для аренды
        </Link>
        <Link href="customer/create-step-4">
          Шаг 4. Укажите состояние недвижимости
        </Link>
        <Link href="customer/create-commercial-step-4">
          Шаг 4. Коммерческая
        </Link>
        <Link href="customer/rent-range-step">
          Шаг 4. Укажите период аренды
        </Link>
        <Link href="customer/create-step-5">
          Шаг 5. Укажите общую площадь недвижимости
        </Link>
        <Link href="customer/create-commercial-step-5">
          Шаг 5. Коммерческая
        </Link>
        <Link href="customer/create-step-6">
          Шаг 6. Укажите общее количество комнат
        </Link>
        <Link href="customer/create-commercial-step-6">
          Шаг 6. Коммерческая
        </Link>
        <Link href="customer/rent-range-step-6">
          Шаг 6. Укажите примерный бюджет аренды{" "}
        </Link>
        <Link href="customer/create-step-7">Шаг 7. Укажите цель покупки</Link>
        <Link href="customer/rent-range-step-7">
          Шаг 7. Когда готовы арендовать?
        </Link>
        <Link href="customer/create-step-8">
          Шаг 8. Когда готовы выходить на сделку?
        </Link>
        <Link href="customer/create-step-9">
          Шаг 9. Укажите примерный бюджет
        </Link>
        <Link href="customer/create-step-10">
          Шаг 10. Укажите удобный способ покупки
        </Link>
        <Link href="customer/create-step-11">
          Шаг 11. Опишите ваши дополнительные пожелания
        </Link>
        <Link href="customer/create-payment">
          Шаг 12. Получите больше просмотров и откликов
        </Link>
        <Link href="/applications">Заявки</Link>
        <Link href="/applications-plug">Отклики / Продавцы_заглушка</Link>
        <Link href="/applications">
          Отклики / Продавцы тут же заявка просмотр
        </Link>
        <Link href="/applications-plug">Отклики / Объекты_заглушка</Link>
        <Link href="/objects-plug">Объекты / Объекты_заглушка</Link>
        <Link href="/applications-chat">Chat</Link>
        <Link href="/chats-all">Чаты</Link>
        <Link href="/favourites-plug">Избранное_заглушка</Link>
        <Link href="/favourites-full">Избранное</Link>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  background: #eef1f5;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;

  a {
    margin-top: 10px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
`;
