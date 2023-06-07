import { useCallback, useState } from "react";
import { Accordion } from "@/modules/Objects/Object/components/Accordion"
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function AccordionPage() {
    const [expanded, setExpanded] = useState();

    const handleChange = useCallback(
      (panelId: any) => (isExpanded: boolean) =>
        isExpanded ? setExpanded(panelId) : setExpanded(undefined),
      []
    );

    const questions = [
        { 
          title: 'Как опубликовать заявку?', 
          content: 'Загрузить объект недвижимости на платформу Miraden может любой зарегистрированный пользователь.'
       },
        {
          title: 'Сколько стоит опубликовать заявку?', 
          content: 'Загрузить объект недвижимости на платформу Miraden может любой зарегистрированный пользователь.'
       },
        { 
          title: 'Как откликнуться на заявку?',
          content: 'Загрузить объект недвижимости на платформу Miraden может любой зарегистрированный пользователь.' 
        },
        { 
          title: 'Сколько стоит откликнуться на заявку?',
          content: 'Загрузить объект недвижимости на платформу Miraden может любой зарегистрированный пользователь.' 
        },
        { 
          title: 'Как загрузить объект недвижимости?',
          content: 'Загрузить объект недвижимости на платформу Miraden может любой зарегистрированный пользователь.' 
        },
    ];

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
        <h1 className="Font_52_120">Accordion</h1>

        <StyledAccordion>
          {questions.map((question, index) => (
            <Accordion 
              key={index} 
              title={question.title} 
              expanded={expanded === index}
              onChange={handleChange(index)}>
              <p>{question.content}</p>
            </Accordion>
          ))}
        </StyledAccordion>
      </main>
    </>
  );
}

const StyledAccordion = styled.div`
    margin-top: 50px;
    padding: 1rem;
    background: #eef1f5;
`;
