import { Button } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import styled from "styled-components";
interface ApplicationProps {
  className?: string;
}

type Option =
  | "application"
  | "requests"
  | "performers"
  | "refusals"
  | "recommended";

const ApplicationPlug = ({ className }: ApplicationProps) => {
  const [selected, setSelected] = useState<Option | null>("application");

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);

  return (
    <StyledApplication className={className}>
      <div className="Application__headContainer">
        <div className="Application__head">
          <Link href="/applications-full">
            <ArrowIcon
              width={20}
              height={20}
              className="Application__headArrow"
            />
          </Link>
          <h1 className="Font_32_120 lg:Font_26_120_500">
            Хочу купить 3-х комнатную квартиру на Кипре
          </h1>
        </div>
        <div className="Application__headTabsContainer">
          <div className="Application__headTabs">
            <Button
              className={cn("", {
                Application__headTabButton: selected === "application",
              })}
              onClick={() => handleSelect("application")}
              active={selected === "application"}
              tertiary
            >
              Заявка
            </Button>
            <Button
              className={cn("", {
                Application__headTabButton: selected === "requests",
              })}
              onClick={() => handleSelect("requests")}
              active={selected === "requests"}
              tertiary
            >
              Отклики
            </Button>
            <Button
              className={cn("", {
                Application__headTabButton: selected === "performers",
              })}
              onClick={() => handleSelect("performers")}
              active={selected === "performers"}
              tertiary
            >
              Исполнители
            </Button>
            <Button
              className={cn("", {
                Application__headTabButton: selected === "refusals",
              })}
              onClick={() => handleSelect("refusals")}
              active={selected === "refusals"}
              tertiary
            >
              Отказы
            </Button>
            <Button
              className={cn("", {
                Application__headTabButton: selected === "recommended",
              })}
              onClick={() => handleSelect("recommended")}
              active={selected === "recommended"}
              tertiary
            >
              Рекомендуемые
            </Button>
          </div>
          <div className="Application__headTabsBar" />
        </div>
      </div>
      <div className="Applications__headTabsBar_whiteSpace" />

      {selected === "application" && (
        <>
          <div className="Application__body">
            <Image
              src="/images/application.svg"
              alt=""
              width={150}
              height={120}
            />
            <h2>Вы отлично справились!</h2>
            <p className="Color_text_grey">
              На этом месте скоро появятся предложения от исполнителей. А пока
              вы можете посмотреть Рекомендуемое
            </p>
          </div>
        </>
      )}
      {selected === "requests" && (
        <>
          <div className="Application__body">
            <Image
              src="/images/application.svg"
              alt=""
              width={150}
              height={120}
            />
            <h2>Объекты отсутствуют</h2>
            <p className="Color_text_grey">
              На данный момент пользователи с объектами не откликнулись на вашу
              заявку
            </p>
          </div>
        </>
      )}

      {selected === "performers" && (
        <>
          <div className="Application__body">
            <Image
              src="/images/application.svg"
              alt=""
              width={150}
              height={120}
            />
            <h2>Исполнители не выбраны</h2>
            <p className="Color_text_grey">
              Вы можете выбрать одного или несколько исполнителей в разделе 
              <button
                onClick={() => handleSelect("requests")}
                className="Application__adaptiveButton Color_blue_primary"
              >
                Отклики
              </button>
            </p>
          </div>
        </>
      )}

      {selected === "refusals" && (
        <>
          <div className="Application__body">
            <Image
              src="/images/application.svg"
              alt=""
              width={150}
              height={120}
            />
            <h2>Отказы отсутствуют</h2>
            <p className="Color_text_grey">
              Если предложение пользователя вас не заинтересовало,
              вы всегдаможете от него отказаться
            </p>
          </div>
        </>
      )}
    </StyledApplication>
  );
};

const StyledApplication = styled.section`
  position: relative;

  .Application__headTabsBar_whiteSpace {
    width: 100%;
    height: 10px;
    border-radius: 0 0 10px 10px;
    background: #fff;
  }

  .SingleChatInfoideBar {
    position: absolute;
    right: -420px;
    top: 94px;
  }

  .Application__headContainer {
    margin-top: 94px;
    padding: 20px 20px 0 20px;
    background: #fff;
    border-radius: 10px 10px 0 0;
  }

  .Application__head {
    display: flex;
    align-items: center;
    h1 {
      margin-left: 10px;
    }
  }

  .Application__headTabs {
    display: flex;
    margin-top: 30px;
    button {
      padding: 0;
    }
    button:not(:first-child) {
      margin-left: 30px;
    }
  }

  .Application__headTabButton {
    position: relative;
    ::before {
      position: absolute;
      top: 35px;
      content: "";
      background: #4e6af3;
      width: 100%;
      height: 4px;
      border-radius: 10px;
    }
  }

  .Application__headTabsBar {
    margin-top: 15px;
    width: 100%;
    background: #e1edfd;
    height: 4px;
    border-radius: 10px;
  }

  .Applications__headTabsBar_whiteSpace {
    width: 100%;
    height: 10px;
    border-radius: 0 0 10px 10px;
    background: #fff;
  }

  .Application__headContainer {
    margin-top: 94px;
    padding: 20px 20px 0 20px;
    background: #fff;
    border-radius: 10px 10px 0 0;
  }

  .Application__head {
    display: flex;
    align-items: center;
    h1 {
      margin-left: 10px;
    }
  }

  .Applications__headTabs {
    display: flex;
    margin-top: 30px;
    overflow: auto;
    button {
      padding: 0;
    }
    button:not(:first-child) {
      margin-left: 30px;
    }
  }

  .Applications__headTabButton {
    position: relative;
    ::before {
      position: absolute;
      top: 35px;
      content: "";
      background: #4e6af3;
      width: 100%;
      height: 4px;
      border-radius: 10px;
    }
  }

  .Application__body {
    padding-top: 100px;
    margin: 0 auto;
    text-align: -webkit-center;
    max-width: 370px;

    h2 {
      margin-top: 30px;
    }

    p {
      margin-top: 10px;
    }
  }

  .Application__headArrow {
    transform: rotate(-90deg);

    path {
      stroke: #7786a5;
    }
  }

  .Applications__headTabsBar {
    margin-top: 15px;
    width: 100%;
    background: #e1edfd;
    height: 4px;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
    .Application__headContainer {
      margin-top: 60px;
    }
  }
`;

export { ApplicationPlug };
