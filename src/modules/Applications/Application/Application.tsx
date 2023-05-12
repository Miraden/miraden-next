import { Button } from "@/components/ui";
import { ArrowIcon, PlusIcon } from "@/icons";
import cn from "classnames";
import Image from "next/image";
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

const Application = ({ className }: ApplicationProps) => {
  const [selected, setSelected] = useState<Option | null>(null);
  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);

  return (
    <StyledApplication className={className}>
      <div className="Application__headContainer">
        <div className="Application__head">
          <ArrowIcon
            width={20}
            height={20}
            className="Application__headArrow"
          />
          <h1>Хочу купить 3-х комнатную квартиру на Кипре</h1>
        </div>
        <div className="Applications__headTabsContainer">
          <div className="Applications__headTabs">
            <Button
              className={cn("", {
                Applications__headTabButton: selected === "application",
              })}
              onClick={() => handleSelect("application")}
              active={selected === "application"}
              tertiary
            >
              Заявка
            </Button>
            <Button
              className={cn("", {
                Applications__headTabButton: selected === "requests",
              })}
              onClick={() => handleSelect("requests")}
              active={selected === "requests"}
              tertiary
            >
              Отклики
            </Button>
            <Button
              className={cn("", {
                Applications__headTabButton: selected === "performers",
              })}
              onClick={() => handleSelect("performers")}
              active={selected === "performers"}
              tertiary
            >
              Исполнители
            </Button>
            <Button
              className={cn("", {
                Applications__headTabButton: selected === "refusals",
              })}
              onClick={() => handleSelect("refusals")}
              active={selected === "refusals"}
              tertiary
            >
              Отказы
            </Button>
            <Button
              className={cn("", {
                Applications__headTabButton: selected === "recommended",
              })}
              onClick={() => handleSelect("recommended")}
              active={selected === "recommended"}
              tertiary
            >
              Рекомендуемые
            </Button>
          </div>
          <div className="Applications__headTabsBar"></div>
        </div>
      </div>
      <div className="Application__body">
        <Image src="/images/application.svg" alt="" width={150} height={120} />
        <h2>Вы отлично справились!</h2>
        <p className="Color_text_grey">
          На этом месте скоро появятся предложения от исполнителей. А пока
          вы можете посмотреть Рекомендуемое
        </p>
      </div>
      <div></div>
      <div className="Application__bottomContainer">
        <div className="Application__bottomTabs">
          <Button
            onClick={() => handleSelect("requests")}
            active={selected === "requests"}
            tertiary
          >
            Лента
          </Button>
          <Button
            onClick={() => handleSelect("performers")}
            active={selected === "performers"}
            tertiary
          >
            Мои заявки
          </Button>
          <div className="PlusIcon__container">
            <PlusIcon />
          </div>
          <Button
            onClick={() => handleSelect("refusals")}
            active={selected === "refusals"}
            tertiary
          >
            Объекты
          </Button>
          <Button
            onClick={() => handleSelect("recommended")}
            active={selected === "recommended"}
            tertiary
          >
            Ещё
          </Button>
        </div>
      </div>
    </StyledApplication>
  );
};

const StyledApplication = styled.section`
  .Application__headContainer {
    margin-top: 94px;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
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
    max-width: 380px;

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

  .Application__bottomContainer {
    position: absolute;
    bottom: 0;
    background: #fff;
    padding-top: 6px;
    border-radius: 10px 10px 0 0;
  }

  .Application__bottomTabs {
    display: flex;
    justify-content: space-between;
  }

  .PlusIcon__container {
    background: #4e6af3;
    padding: 10px;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    svg {
      path {
        fill: #fff;
      }
    }
  }
`;

export { Application };
