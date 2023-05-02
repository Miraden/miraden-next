import Image from "next/image";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { Accordion } from "./components/Accordion";

const questions = [
  { title: "Когда платить первый взнос?", answer: "Answer", id: 1 },
  {
    title: "Какие документы необходимо подготовить для сделки?",
    answer: "Answer",
    id: 2,
  },
  {
    title: "Какой гарантированный доход по договору с застройщиком?",
    answer:
      "Добраться до острова можно двумя способами: воздушным и морским. Для иностранных туристов открыты аэропорты в Ларнаке и Пафосе и морские порты в Лимассоле и Ларнаке Всего на острове 15 аэропортов, из них 7 крупных. Более 230 рейсов в неделю, выполняемые 33-мя авиакомпаниями, связывают.",
    id: 3,
  },
  {
    title: "Когда передаются права собственности на недвижимость?",
    answer: "Answer",
    id: 4,
  },
  {
    title: "Сколько стоит юридическое сопровождение сделки?",
    answer: "Answer",
    id: 5,
  },
  { title: "Как быстро проходит оформление?", answer: "Answer", id: 6 },
  { title: "Как покупать за криптовалюту?", answer: "Answer", id: 7 },
  { title: "Как проходит дистанционная сделки?", answer: "Answer", id: 8 },
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
          <p className="FAQ__description Font_18_160 sm:Font_16_24">
            Если не нашли ответ на свой вопрос, тогда зайдите в нашу базу знаний
            или напишите в поддержку
          </p>
          <Image
            src="/images/HomeHero.svg"
            alt=""
            width={323}
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
  padding-bottom: 135px;

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
    padding-bottom: 110px;

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
    padding-bottom: 100px;

    .FAQ__description {
      margin-top: 20px;
    }
  }
`;

export { FAQ };
