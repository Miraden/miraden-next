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
            <h2 className="Font_44_120 sm:Font_26_120">Как это работает?</h2>
            <div className="HowItWorks__tabs">
              <RequestButton
                onClick={toggleTab}
                active={isCustomerTab}
                className="Test Font_16_20"
              >
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
                      src="./images/howItWorks/1.svg"
                      alt=""
                      width={320}
                      height={220}
                    />
                  </div>
                  <div className="HowItWorks__listItemContent">
                    <h3 className="HowItWorks__listItemTitle Font_28_120 sm:Font_22_120">
                      <mark className="Color_blue">Создайте</mark>
                      <br /> анонимную заявку
                    </h3>
                    <p className="HowItWorks__listItemDescription Font_18_150 sm:Font_16_24 Color_grey_dark">
                      Ответьте на несколько простых вопросов о недвижимости,
                      которую хотите найти
                    </p>
                  </div>
                </li>
                <li>
                  <div className="HowItWorks__imageContainer">
                    <Image
                      src="./images/howItWorks/2.svg"
                      alt=""
                      width={320}
                      height={220}
                    />
                  </div>
                  <div className="HowItWorks__listItemContent">
                    <h3 className="HowItWorks__listItemTitle Font_28_120 sm:Font_22_120">
                      <mark>Получите</mark>
                      <br /> предложения
                    </h3>
                    <p className="HowItWorks__listItemDescription Font_18_150 sm:Font_16_24 Color_grey_dark">
                      Риелторы и собственники сделают для вас персональные
                      предложения и подборки объектов
                    </p>
                  </div>
                </li>
                <li>
                  <div className="HowItWorks__imageContainer">
                    <Image
                      src="./images/howItWorks/3.svg"
                      alt=""
                      width={320}
                      height={220}
                    />
                  </div>
                  <div className="HowItWorks__listItemContent">
                    <h3 className="HowItWorks__listItemTitle Font_28_120 sm:Font_22_120">
                      <mark>Выберите</mark> <br /> лучших исполнителей
                    </h3>
                    <p className="HowItWorks__listItemDescription Font_18_150 sm:Font_16_24 Color_grey_dark">
                      Обменяйтесь контактами с подходящими исполнителями
                      для обсуждения деталей
                    </p>
                  </div>
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
                      src="/images/howItWorks/4.svg"
                      alt=""
                      width={320}
                      height={220}
                    />
                  </div>
                  <div className="HowItWorks__listItemContent">
                    <h3 className="HowItWorks__listItemTitle Font_28_120 sm:Font_22_120">
                      <mark className="Color_blue">Настройте</mark>
                      <br /> уведомления
                    </h3>
                    <p className="HowItWorks__listItemDescription Font_18_150 sm:Font_16_24 Color_grey_dark">
                      Ответьте на несколько простых вопросов о недвижимости,
                      которую вы предлагаете
                    </p>
                  </div>
                </li>
                <li>
                  <div className="HowItWorks__imageContainer">
                    <Image
                      src="/images/howItWorks/5.svg"
                      alt=""
                      width={320}
                      height={220}
                    />
                  </div>
                  <div className="HowItWorks__listItemContent">
                    <h3 className="HowItWorks__listItemTitle Font_28_120 sm:Font_22_120">
                      <mark className="Color_blue">Откликнитесь</mark>
                      <br /> на подходящие заявки
                    </h3>
                    <p className="HowItWorks__listItemDescription Font_18_150 sm:Font_16_24 Color_grey_dark">
                      Предложите недвижимость подходящим клиентам и обсудите
                      детали в чате
                    </p>
                  </div>
                </li>
                <li>
                  <div className="HowItWorks__imageContainer">
                    <Image
                      src="/images/howItWorks/6.svg"
                      alt=""
                      width={320}
                      height={220}
                    />
                  </div>
                  <div className="HowItWorks__listItemContent">
                    <h3 className="HowItWorks__listItemTitle Font_28_120 sm:Font_22_120">
                      <mark className="Color_blue">Получите</mark>
                      <br /> контакты от клиентов
                    </h3>
                    <p className="HowItWorks__listItemDescription Font_18_150 sm:Font_16_24 Color_grey_dark">
                      Клиент сам откроет контакты для дальнейшей работы, если
                      ваше предложение заинтересует
                    </p>
                  </div>
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
  padding: 0 20px 0 20px;

  .HowItWorks {
    background: #ffffff;
    padding-top: 75px;
    padding-bottom: 75px;
    max-width: 1880px;
    width: 100%;
    /* display: flex; */
    border-radius: 10px;
    justify-content: center;
  }

  .HowItWorks__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .HowItWorks__tabs {
    display: flex;
    button:not(:first-child) {
      margin-left: 10px;
    }

    button {
      padding: 10px 20px;
      line-height: 20px;
      font-size: 16px;
    }
  }

  .HowItWorks__list {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    li {
      /* max-width: 320px; */
      p {
        max-width: 320px;
      }

      mark {
        color: #4e6af3;
        background: transparent;
      }
    }

    li:not(:first-child) {
      margin-left: 105px;
    }
  }

  .HowItWorks__imageContainer {
    position: relative;
    display: flex;
    align-items: flex-end;
    img {
      flex-shrink: 0;
      object-fit: contain;
    }
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
    flex-shrink: 0;
  }

  .HowItWorks__listItemTitle {
    margin-top: 50px;
  }

  .HowItWorks__listItemDescription {
    margin-top: 20px;
  }

  @media (max-width: 1024px) {
    .HowItWorks {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .HowItWorks__head {
      flex-direction: column;
      align-items: start;
      button {
        margin-top: 20px;
        padding: 10px 15px;
      }
    }

    .HowItWorks__list {
      flex-direction: column;

      li {
        max-width: unset;
        display: flex;

        p {
          max-width: 320px;
        }
      }

      li:not(:first-child) {
        margin-left: 0;
        border-top: 2px solid #e1edfd;
        margin-top: 48px;
      }
    }
    .HowItWorks__imageContainer {
      min-width: 196px;
      height: 220px;
    }

    .HowItWorks__listItemContent {
      margin-top: 2px;

      p {
        color: #3b4a69;
      }
    }
  }

  @media (max-width: 576px) {
    padding: 0;

    .HowItWorks__head {
      button {
        padding: 10px 15px;
      }
    }

    .HowItWorks__list {
      margin-top: 20px;
      li {
        flex-direction: column;
      }

      li:not(:first-child) {
        margin-top: 20px;
      }
    }

    .HowItWorks__imageContainer {
      margin-top: 20px;
      height: 202px;
      flex-flow: row-reverse;
      align-self: center;
      width: 260px;
      justify-content: center;
      img {
        /* width: 141px; */
        height: 202px;
        left: 50px;
        position: absolute;
      }
    }

    .HowItWorks__counter {
      padding: 4px;
      width: 28px;
      height: 28px;

      position: absolute;
      left: 30px;
      bottom: 10px;
    }

    .HowItWorks__listItemContent {
      text-align: center;
      margin-top: 24px;
      margin-left: 0;
      max-width: 280px;
      align-self: center;
    }

    .HowItWorks__listItemTitle {
      margin-top: 0;
    }

    .HowItWorks__listItemDescription {
      margin-top: 10px;
    }
  }
`;

export { HowItWorks };
