import { useCallback, useState } from "react";
import styled from "styled-components";
import { Accordion } from "./Accordion";

const ObjectDescription = () => {
  const [openText, setOpenText] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(true);

  const handleOpenText = useCallback(() => {
    setOpenText(!openText);
  }, [openText]);

  const handleOpenAccordion = useCallback(() => {
    setOpenAccordion(!openAccordion);
  }, [openAccordion]);

  return (
    <StyledObjectDescription className="ObjectDescription">
      <Accordion
        title="Описание"
        key="Описание"
        expanded={openAccordion}
        onChange={handleOpenAccordion}
      >
        <div className="SingleApplication__locationInfoText">
          <p className="ObjectDescription__text">
            {openText ? (
              <span>
                Добраться до острова можно двумя способами: воздушным и морским.
                Для иностранных туристов открыты аэропорты в Ларнаке и Пафосе и
                морские порты в Лимассоле и Ларнаке. Всего на острове 15
                аэропортов, из них 7 крупных. Более 230 рейсов в неделю,
                выполняемые 33-мя авиакомпаниями, связывают Кипр с Западной и
                Восточной Европой, Африкой и Ближним Востоком
                <br /> <br />
                Плюс пассажирские и грузовые чартерные рейсы. Добраться до
                острова можно двумя способами: воздушным и морским. Для
                иностранных туристов открыты аэропорты в Ларнаке и Пафосе и
                морские порты в Лимассоле и Ларнаке. Всего на острове 15
                аэропортов, из них 7 крупных. Более 230 рейсов в неделю,
                выполняемые 33-мя авиакомпаниями, связывают Кипр с Западной и
                Восточной Европой, Африкой и Ближним Востоком. Плюс пассажирские
                и грузовые чартерные рейсы.
                <br />
                <br />А тут будет какой-то нереально длинный текст
              </span>
            ) : (
              <span>
                Добраться до острова можно двумя способами: воздушным и морским.
                Для иностранных туристов открыты аэропорты в Ларнаке и Пафосе и
                морские порты в Лимассоле и Ларнаке. Всего на острове 15
                аэропортов, из них 7 крупных. Более 230 рейсов в неделю,
                выполняемые 33-мя авиакомпаниями, связывают Кипр с Западной и
                Восточной Европой, Африкой и Ближним Востоком
                <br /> <br />
                Плюс пассажирские и грузовые чартерные рейсы. Добраться до
                острова можно двумя способами: воздушным и морским. Для
                иностранных туристов открыты аэропорты в Ларнаке и Пафосе и
                морские порты в Лимассоле и Ларнаке. Всего на острове 15
                аэропортов, из них 7 крупных. Более 230 рейсов в неделю,
                выполняемые 33-мя авиакомпаниями, связывают Кипр с Западной и
                Восточной Европой, Африкой и Ближним Востоком. Плюс пассажирские
                и грузовые чартерные рейсы
              </span>
            )}
          </p>
          {!openText ? (
            <button onClick={handleOpenText} className="Color_blue_primary">
              Открыть больше
            </button>
          ) : (
            <button onClick={handleOpenText} className="Color_blue_primary">
              Свернуть
            </button>
          )}
        </div>
      </Accordion>
    </StyledObjectDescription>
  );
};

const StyledObjectDescription = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  padding: 30px 40px 20px 0;
  width: 100%;
  transition: 0.15s ease;
  margin-top: 20px;
  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 2px inset #c7d2e9;
  }

  .ObjectDescription__title {
    margin-bottom: 30px;
  }

  .ObjectDescription__text {
    max-width: 700px;
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    &.ContainerFull {
      padding: 0;
    }
  }
`;

export { ObjectDescription };
