import { Button } from "@/components/ui";
import Image from "next/image";
import styled from "styled-components";

const NotFoundLayout = () => {
  return (
    <StyledNotFoundLayout className="NotFoundLayout">
      <div className="NotFound__container">
        <Image src="/images/404.svg" width={200} height={200} alt="" />
        <h2 className="Font_20_120">Уууупс... Что-то пошло не так</h2>
        <p className="Font_16_150 Color_text_grey">
          Эта страница удалена, но на платформе еще много всего интересного
        </p>
        <div className="NotFound__buttonsContainer">
          <Button href="/" secondary compact className="NotFound__button">
            Главная страница
          </Button>
          <Button
            href="/applications-full"
            secondary
            compact
            className="NotFound__button"
          >
            Лента заявок
          </Button>
          <Button
            href="/customer/create-1"
            secondary
            compact
            className="NotFound__button"
          >
            Создать заявку
          </Button>
        </div>
      </div>
    </StyledNotFoundLayout>
  );
};

const StyledNotFoundLayout = styled.div`
  margin-top: 180px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .NotFound__container {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 320px;

    h2 {
      margin-top: 10px;
    }

    p {
      margin-top: 10px;
    }
  }

  .NotFound__buttonsContainer {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .NotFound__button {
    background: #fff;
    color: #3b4a69;
  }

  .NotFound__button:not(:first-child) {
    margin-top: 10px;
  }
`;

export { NotFoundLayout };
