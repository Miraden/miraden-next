import { Button } from "@/components/ui";
import cn from "classnames";
import Image from "next/image";
import { useCallback, useState } from "react";
import styled from "styled-components";
interface ApplicationProps {
  className?: string;
}

type Option = "objects" | "applications" | "users";

const FavouritesPlug = ({ className }: ApplicationProps) => {
  const [selected, setSelected] = useState<Option | null>("objects");

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);

  return (
    <StyledApplication className={className}>
      <div className="Application__headContainer">
        <div className="Application__head">
          <h1 className="Font_32_120 lg:Font_26_120_500">Избранное</h1>
        </div>
        <div className="Application__headTabsContainer">
          <div className="Application__headTabs">
            <Button
              className={cn("", {
                Application__headTabButton: selected === "objects",
              })}
              onClick={() => handleSelect("objects")}
              active={selected === "objects"}
              tertiary
            >
              Объекты
            </Button>
            <Button
              className={cn("", {
                Application__headTabButton: selected === "applications",
              })}
              onClick={() => handleSelect("applications")}
              active={selected === "applications"}
              tertiary
            >
              Заявки
            </Button>
            <Button
              className={cn("", {
                Application__headTabButton: selected === "users",
              })}
              onClick={() => handleSelect("users")}
              active={selected === "users"}
              tertiary
            >
              Пользователи
            </Button>
          </div>
          <div className="Application__headTabsBar" />
        </div>
      </div>
      <div className="Applications__headTabsBar_whiteSpace" />

      {selected === "objects" && (
        <>
          <div className="Application__body">
            <Image
              src="/images/application.svg"
              alt=""
              width={150}
              height={120}
            />
            <h2>В избранном нет объектов</h2>
            <p className="Color_text_grey">
              Отмечайте понравившиеся объекты, <br /> нажав на иконку в карточке
              объекта
            </p>
            <Button className="Objects__button" href="/">
              Создать заявку
            </Button>
          </div>
        </>
      )}
      {selected === "applications" && (
        <>
          <div className="Application__body">
            <Image
              src="/images/application.svg"
              alt=""
              width={150}
              height={120}
            />
            <h2>No published applications</h2>
            <p className="Color_text_grey">No published</p>
          </div>
        </>
      )}

      {selected === "users" && (
        <>
          <div className="Application__body">
            <Image
              src="/images/application.svg"
              alt=""
              width={150}
              height={120}
            />
            <h2>No users yet</h2>
            <p className="Color_text_grey">No users</p>
          </div>
        </>
      )}
    </StyledApplication>
  );
};

const StyledApplication = styled.section`
  position: relative;

  .Objects__button {
    margin-top: 30px;
    width: fit-content;
  }

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
    margin-top: 20px;
    padding: 20px 20px 0 20px;
    background: #fff;
    border-radius: 10px 10px 0 0;
  }

  .Application__head {
    display: flex;
    align-items: center;
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

  .Application__head {
    display: flex;
    align-items: center;
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

  .CreateApp__button {
    margin-top: 30px;
    padding: 10px 24px;
    width: fit-content;
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

  .ApplicationsList {
    margin-top: 20px;

    li:not(:first-child) {
      margin-top: 10px;
    }
  }

  @media (max-width: 1024px) {
    .Application__headContainer {
      margin-top: 60px;
    }
  }
`;

export { FavouritesPlug };
