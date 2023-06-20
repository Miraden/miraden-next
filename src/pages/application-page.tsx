import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function ApplicationPage1() {
  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="theme-color" content="#2A344A" />

        <meta name="description" content="Miraden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <StyledMainApplications className=" Font_20_120">
        <div className="Pages Container">
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
        </div>
      </StyledMainApplications>
    </>
  );
}

const StyledMainApplications = styled.main`
  background: #eef1f5;
  min-height: 100vh;
  .Pages {
    display: flex;
    flex-direction: column;
  }

  a {
    margin-top: 20px;
  }
`;
