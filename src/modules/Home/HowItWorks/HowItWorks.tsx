import { RequestButton } from "@/components/ui";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { VideoContainer } from "./components/VideoContainer";

interface HowItWorksProps {
  className?: string;
}

const HowItWorks = ({ className }: HowItWorksProps) => {
  const [isCustomerTab, setIsCustomerTab] = useState(true);

  const toggleTab = () => {
    setIsCustomerTab((prevTab) => !prevTab);
  };

  return (
    <StyledHowItWorks className={className}>
      <div className="HowItWorks">
        <div className="Container">
          <div className="HowItWorks__head">
            <h2 className="Font_44_120">Как это работает?</h2>
            <div className="HowItWorks__tabs">
              <RequestButton onClick={toggleTab} active={isCustomerTab}>
                Для заказчика
              </RequestButton>
              <RequestButton onClick={toggleTab} active={!isCustomerTab}>
                Для исполнителя
              </RequestButton>
            </div>
          </div>
          {isCustomerTab ? (
            <>
              <ul className="HowItWorks__list">
                <li>
                  <div className="HowItWorks__imageContainer">
                    <Image
                      src="/images/HowItWorks.svg"
                      alt=""
                      width={140}
                      height={220}
                    />
                    <p className="HowItWorks__counter Font_18_21">1</p>
                  </div>
                  <h3 className="HowItWorks__listItemTitle Font_28_120">
                    <mark className="Color_blue">Создайте</mark>
                    <br /> анонимную заявку
                  </h3>
                  <p className="HowItWorks__listItemDescription Font_18_150">
                    Ответьте на несколько простых вопросов о недвижимости,
                    которую хотите найти
                  </p>
                </li>
                <li>
                  <div className="HowItWorks__imageContainer">
                    <Image
                      src="/images/HowItWorks.svg"
                      alt=""
                      width={140}
                      height={220}
                    />
                    <p className="HowItWorks__counter Font_18_21">2</p>
                  </div>
                  <h3 className="HowItWorks__listItemTitle Font_28_120">
                    <mark>Получите</mark>
                    <br /> предложения
                  </h3>
                  <p className="HowItWorks__listItemDescription Font_18_150">
                    Риелторы и собственники сделают для вас персональные
                    предложения и подборки объектов
                  </p>
                </li>
                <li>
                  <div className="HowItWorks__imageContainer">
                    <Image
                      src="/images/HowItWorks.svg"
                      alt=""
                      width={140}
                      height={220}
                    />
                    <p className="HowItWorks__counter Font_18_21">3</p>
                  </div>
                  <h3 className="HowItWorks__listItemTitle Font_28_120">
                    Выберите <br /> <mark>лучших исполнителей</mark>
                  </h3>
                  <p className="HowItWorks__listItemDescription Font_18_150">
                    Обменяйтесь контактами с подходящими исполнителями
                    для обсуждения деталей
                  </p>
                </li>
              </ul>
              <VideoContainer videoLink="https://www.youtube.com/embed/hPr-Yc92qaY" />
            </>
          ) : (
            <>
              <ul className="HowItWorks__list">
                <li>
                  <div className="HowItWorks__imageContainer">
                    <Image
                      src="/images/HowItWorks.svg"
                      alt=""
                      width={140}
                      height={220}
                    />
                    <p className="HowItWorks__counter Font_18_21">1</p>
                  </div>
                  <h3 className="HowItWorks__listItemTitle Font_28_120">
                    {/* <mark className="Color_blue">Создайте</mark>
                <br /> анонимную заявку */}
                    Контент для исполнителя
                  </h3>
                  <p className="HowItWorks__listItemDescription Font_18_150">
                    Ответьте на несколько простых вопросов о недвижимости,
                    которую хотите найти
                  </p>
                </li>
                <li>
                  <div className="HowItWorks__imageContainer">
                    <Image
                      src="/images/HowItWorks.svg"
                      alt=""
                      width={140}
                      height={220}
                    />
                    <p className="HowItWorks__counter Font_18_21">2</p>
                  </div>
                  <h3 className="HowItWorks__listItemTitle Font_28_120">
                    {/* <mark>Получите</mark>
                <br /> предложения */}
                    Контент для исполнителя
                  </h3>
                  <p className="HowItWorks__listItemDescription Font_18_150">
                    Риелторы и собственники сделают для вас персональные
                    предложения и подборки объектов
                  </p>
                </li>
                <li>
                  <div className="HowItWorks__imageContainer">
                    <Image
                      src="/images/HowItWorks.svg"
                      alt=""
                      width={140}
                      height={220}
                    />
                    <p className="HowItWorks__counter Font_18_21">3</p>
                  </div>
                  <h3 className="HowItWorks__listItemTitle Font_28_120">
                    {/* Выберите <br /> <mark>лучших исполнителей</mark> */}
                    Контент для исполнителя
                  </h3>
                  <p className="HowItWorks__listItemDescription Font_18_150">
                    Обменяйтесь контактами с подходящими исполнителями
                    для обсуждения деталей
                  </p>
                </li>
              </ul>
              <VideoContainer videoLink="https://www.youtube.com/embed/hPr-Yc92qaY" />
            </>
          )}
        </div>
      </div>
    </StyledHowItWorks>
  );
};

const StyledHowItWorks = styled.section`
  display: flex;
  justify-content: center;

  .HowItWorks {
    background: #ffffff;
    padding-top: 75px;
    padding-bottom: 75px;
    max-width: 1880px;
    width: 100%;
    display: flex;
    border-radius: 10px;
    justify-content: center;
  }

  .HowItWorks__head {
    display: flex;
    justify-content: space-between;
  }

  .HowItWorks__tabs {
    display: flex;
    button:not(:first-child) {
      margin-left: 10px;
    }

    button {
      padding: 10px 20px;
    }
  }

  .HowItWorks__list {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    li {
      max-width: 320px;

      mark {
        color: #4e6af3;
        background: transparent;
      }
    }

    li:not(:first-child) {
      margin-left: 30px;
    }
  }

  .HowItWorks__imageContainer {
    display: flex;
    align-items: flex-end;
  }

  .HowItWorks__counter {
    margin-left: 20px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    background: #4e6af3;
    height: fit-content;
    color: #ffffff;
  }

  .HowItWorks__listItemTitle {
    margin-top: 50px;
  }

  .HowItWorks__listItemDescription {
    margin-top: 20px;
  }
`;

export { HowItWorks };
