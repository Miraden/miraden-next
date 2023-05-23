import Image from "next/image";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { Accordion } from "./components/Accordion";

const questions = [
  {
    title: "Как опубликовать заявку?",
    answer: (
      <>
        Опубликовать заявку для поиска недвижимости на платформе Miraden может
        любой зарегистрированный пользователь.
        <br />
        <br />
        Достаточно перейти по кнопке <a href="">«Создать заявку»</a> и ответить
        на несколько простых вопросов о недвижимости, которую вы ищите.
        Это займёт примерно две минуты времени. <br />
        <br /> После чего заявка публикуется в анонимном режиме. Вы сами
        решаете, кому и когда открывать свои контактные данные.
      </>
    ),
    id: 1,
  },
  {
    title: "Сколько стоит опубликовать заявку?",
    answer: (
      <>
        Вы можете опубликовать заявку бесплатно. Или выбрать платные опции
        для увеличения просмотров и откликов. К платным опциям относятся: <br />
        <br />
        <span>Открыть отклик для всех — 10 € </span>
        <br />
        На заявку смогут откликнуться все пользователи, а не только PRO. <br />
        <br />
        <span>Закрепить вверху на 24 часа — 15 €</span> <br />
        Заявка будет закреплена вверху ленты. После чего сместится вниз по мере
        поступления новых. <br />
        <br />
        <span>Поднимать каждые 3 дня — 20 €</span> <br />
        Заявка будет автоматически подниматься в самый верх ленты каждые 3 дня.{" "}
        <br />
        <br />
        Важно! <br />
        <br />
        1. Публикация 2-х и более заявок в рамках 30 дней возможна только
        при включённой опции «Открыть отклик для всех». <br />
        <br /> 2. Любая выбранная опция даёт вашей заявке отметку TRUE
        и повышенный интерес исполнителей.
      </>
    ),
    id: 2,
  },
  {
    title: "Как откликнуться на заявку?",
    answer: (
      <>
        Любая отправленная информация в чат заказчика является откликом.
        Откликнуться на заявку может любой желающий. Для этого достаточно:{" "}
        <br /> <br /> 1. Пройти регистрацию и ответить на простые вопросы
        о недвижимости, которую вы предлагаете. <br /> <br /> 2. Перейти в ленту
        заявок и с помощью фильтра найдите подходящую. <br /> <br /> 3. Открыть
        заявку и отправить в чат своё предложение в виде текста или загруженного
        объекта недвижимости.
      </>
    ),
    id: 3,
  },
  {
    title: "Сколько стоит откликнуться на заявку?",
    answer: (
      <>
        Вы не платите за отклики на заявки — это бесплатно. <br /> <br /> Оплата
        взымается только за обмен контактами с заказчиком. Стоимость контакта
        формируется индивидуально и предварительно отображается в карточке
        заявки. <br /> <br /> Важно! <br />
        Любая отправленная контактная информация заказчику через чат является
        обменом контактами. Контактной информацией является: ссылка на сайт,
        номер телефона или мессенджер исполнителя.
      </>
    ),
    id: 4,
  },
  {
    title: "Как загрузить объект недвижимости?",
    answer: (
      <>
        Загрузить объект недвижимости на платформу Miraden может любой
        зарегистрированный пользователь. <br /> <br /> Достаточно перейти
        по кнопке <a href="">«Загрузить объект»</a> и ответить на несколько
        вопросов о недвижимости, которую хотите добавить. После чего страница
        объекта будет опубликована в разделе «Мои объекты». <br /> <br /> Важно!{" "}
        <br />
        Miraden не является классическим порталом недвижимости, где собственники
        размещают свои объекты в открытом каталоге. В данном случае вы сами
        решаете, кому и когда предлагать свои объекты.
      </>
    ),
    id: 5,
  },
  {
    title: "Как связаться с заказчиком, если заявки анонимные?",
    answer: (
      <>
        Заказчику всегда можно написать в чат и предложить там подборку объектов
        недвижимости. <br /> <br /> Если предложение заинтересует заказчика,
        он сам инициирует обмен контактами для дальнейшего общения.
      </>
    ),

    id: 6,
  },
  {
    title: "Как получить доступ в каталог недвижимости?",
    answer: (
      <>
        Miraden не является классическим порталом недвижимости, где продавцы
        размещают свои объекты в открытом каталоге. <br /> <br /> Для поиска
        недвижимости необходимо <a href="">создать заявку</a>. После чего,
        продавцы начнут предлагать вам объекты в ручном режиме. Таким образом
        для вас будет сформирован персональный каталог недвижимости в режиме
        реального времени.
      </>
    ),
    id: 7,
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState();

  const handleChange = useCallback(
    (panelId: any) => (isExpanded: boolean) =>
      isExpanded ? setExpanded(panelId) : setExpanded(undefined),
    []
  );

  return (
    <StyledFAQ>
      <div className="Container FAQ">
        <div className="FAQ__titleContainer">
          <h2 className="Font_44_52 sm:Font_26_120">Вопросы и ответы</h2>
          <p className="FAQ__description Font_18_150 sm:Font_16_24">
            Если не нашли ответ на свой вопрос, тогда зайдите в нашу{" "}
            <a href="">базу знаний</a>  или напишите в <a href="">поддержку</a>
          </p>
          <Image
            src="./images/FAQ.svg"
            alt=""
            width={250}
            height={250}
            className="FAQ__image"
          />
        </div>
        <div className="FAQ__list">
          {questions?.map(
            (question, index) =>
              question && (
                <Accordion
                  title={question.title}
                  key={question.id}
                  expanded={expanded === question.id}
                  onChange={handleChange(question.id)}
                >
                  <p>{question.answer}</p>
                </Accordion>
              )
          )}
        </div>
      </div>
    </StyledFAQ>
  );
};

const StyledFAQ = styled.section`
  padding-top: 150px;
  padding-bottom: 248px;

  .FAQ {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 30px;
  }

  .FAQ__titleContainer {
    max-width: 388px;
    grid-column: 1 / span 5;
  }

  .FAQ__description {
    margin-top: 25px;
    color: #3b4a69;
    a {
      color: #4e6af3;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  .FAQ__image {
    margin-top: 50px;
  }

  .FAQ__list {
    margin-top: -10px;
    grid-column: 6 / span 7;
  }

  @media (max-width: 1024px) {
    padding-top: 100px;
    padding-bottom: 120px;

    .FAQ {
      display: flex;
      flex-direction: column;
      grid-gap: 40px;
    }

    .FAQ__titleContainer {
      max-width: unset;
    }

    .FAQ__image {
      display: none;
    }
  }

  @media (max-width: 576px) {
    padding-bottom: 120px;

    .FAQ__description {
      margin-top: 20px;
    }
  }
`;

export { FAQ };
