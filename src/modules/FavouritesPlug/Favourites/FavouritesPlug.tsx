import { Button } from "@/components/ui";
import {
  Applications,
  HomeIcon,
  KebabIcon,
  ListIcon,
  PlusIcon,
} from "@/icons";
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
  const [showFilter, setShowFilter] = useState(false);

  return (
    <StyledApplication
      className={cn("Application__wrapper", { IsOpenFilter: showFilter })}
    >
      <div className={cn("Application__wrapper", { IsOpenFilter: showFilter })}>
        <div className="Application__headContainer">
          <div className="Application__head">
            <h1 className="Font_32_120 lg:Font_26_120_500">Избранное</h1>
          </div>
          <div className="Application__headTabsContainer">
            <div className="Application__headTabs">
              <Button
                className={cn("Application__TabButton", {
                  Application__headTabButton: selected === "objects",
                })}
                onClick={() => handleSelect("objects")}
                active={selected === "objects"}
                tertiary
              >
                Объекты
              </Button>
              <Button
                className={cn("Application__TabButton", {
                  Application__headTabButton: selected === "applications",
                })}
                onClick={() => handleSelect("applications")}
                active={selected === "applications"}
                tertiary
              >
                Заявки
              </Button>
              <Button
                className={cn("Application__TabButton", {
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
              <Image src="/images/apps/2.svg" alt="" width={200} height={200} />
              <h2 className="Font_20_120">В избранном нет объектов</h2>
              <p className="Color_text_grey">
                Отмечайте понравившиеся объекты, <br /> нажав на иконку
                в карточке объекта
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
              <Image src="/images/apps/6.svg" alt="" width={200} height={200} />
              <h2 className="Font_20_120">В избранном нет заявок</h2>
              <p className="Color_text_grey">
                Отмечайте понравившиеся заявки, нажав на иконку в карточке
                заявки
              </p>
            </div>
          </>
        )}

        {selected === "users" && (
          <>
            <div className="Application__body">
              <Image src="/images/apps/7.svg" alt="" width={200} height={200} />
              <h2 className="Font_20_120">В избранном нет пользователей</h2>
              <p className="Color_text_grey">
                Отмечайте понравившихся пользователей, нажав на иконку
                в карточке пользователя
              </p>
            </div>
          </>
        )}
      </div>
      <div className="Application__Footer">
        <div className="Application__FooterButtons">
          <Button tertiary className="FooterButton Font_12_16">
            <ListIcon />
            Лента
          </Button>
          <Button tertiary className="FooterButton Font_12_16">
            <Applications />
            Мои заявки
          </Button>
          <div className="PlusIconContainer">
            <Button>
              <PlusIcon attr={{width: 24, height: 24}} />
            </Button>
          </div>

          <Button tertiary className="FooterButton Font_12_16">
            <HomeIcon attr={{width: 18, height: 18}} />
            Объекты
          </Button>
          <Button tertiary className="FooterButton Font_12_16">
            <KebabIcon className="KebabIcon" />
            Ещё
          </Button>
        </div>
      </div>
    </StyledApplication>
  );
};

const StyledApplication = styled.section`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-gap: 30px;
  padding-left: 55px;
  padding-right: 55px;

  &.Test {
    padding-right: 0 !important;
  }
  .Objects__button {
    margin-top: 30px;
    width: fit-content;
  }
  .TestFilter {
    position: sticky;
    top: 94px;
    overflow: auto;
    grid-column: 16 / span 3;
    margin-top: 30px;
    margin-left: -30px;
    height: calc(100vh - 114px);
    min-width: 355px;
  }

  .Application__wrapper {
    min-width: 970px;
    max-width: 970px;
    grid-column: 5 / span 10;
  }

  .Applications__filter {
    overflow: auto;

    height: calc(100vh - 114px);
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
    margin-top: 30px;
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

  .Application__TabButton {
    :active {
      background: transparent !important;
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

    p {
      color: #4e6af3;
    }

    :active {
      background: transparent !important;
    }
  }

  .Application__body {
    padding-top: 100px;
    margin: 0 auto;
    text-align: -webkit-center;
    max-width: 320px;

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
    height: 100vh;

    li:not(:first-child) {
      margin-top: 10px;
    }
  }

  .Application__Footer {
    display: none;
    position: fixed;
    border-top: 2px solid #eef1f5;
    width: 100%;
    bottom: 0;
    background: #fff;
    padding: 10px;
    border-radius: 10px 10px 0 0;
  }

  .Application__FooterButtons {
    display: flex;
    justify-content: center;

    div,
    button:not(:first-child) {
      margin-left: 64px;
    }
  }

  .PlusIconContainer {
    padding: 2px;
    background: #eef1f5;
    border-radius: 50%;
    transform: translate(0, -34px);

    button {
      background: #4e6af3;
      width: fit-content;
      height: fit-content;
      padding: 10px !important;
      border-radius: 50%;
    }
  }

  .FooterButton {
    padding: 5px 0 0 0;
    max-width: 74px;
    width: 100%;

    :hover {
      svg {
        path {
          fill: #4e6af3;
        }
      }
    }
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      svg {
        margin-bottom: 2px;
        path {
          fill: #7786a5;
        }
      }
    }
  }

  .KebabIcon {
    transform: rotate(90deg);
  }

  @media (max-width: 1660px) {
    padding-left: 0;
    padding-right: 0;
    grid-gap: 15px;
    .Application__wrapper {
      grid-column: 5 / span 10;
      width: 100%;

      &.IsOpenSidebar,
      &.IsOpenFilter {
        grid-column: 1 / span 11;
      }
    }
  }

  @media (max-width: 1441px) {
    grid-gap: 20px;
    padding-left: 0;
    padding-right: 0;
    display: flex;
    flex-direction: column;

    .Application__wrapper {
      margin: 0 auto;
      grid-column: 1 / span 14;
      width: 100%;
      max-width: 970px;
      min-width: unset;

      &.IsOpenFilter,
      &.IsOpenSidebar {
        grid-column: 1 / span 18;
        max-width: 970px;
      }
    }
    .TestFilter {
      position: fixed;
      margin-top: 0;
      margin-left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(60, 75, 97, 0.6);
      transform: translate(-20px, 0);
      backdrop-filter: blur(11px);
      z-index: 500;
      min-width: unset;
      display: flex;
      justify-content: flex-end;
    }

    .Applications__filter {
      position: relative;
      margin-right: 20px;
      margin-top: 20px;
      height: calc(100vh - 40px);
      margin-left: 0;
      max-width: 355px;
    }
    .SingleApplicationSideBar {
      grid-column: 1 / span 18;
      margin-top: 16px;
      margin-left: 0;
      height: fit-content;
      padding-bottom: 120px;
    }
  }

  @media (max-width: 1024px) {
    .Application__headContainer {
      margin-top: 0;
    }

    .Application__Footer {
      display: block;
    }

    .Application__body {
      padding-top: 120px;
    }
  }

  @media (max-width: 576px) {
    .Applications__list {
      padding-left: 0;
      padding-right: 0;
    }

    .Application__FooterButtons {
      display: flex;
      justify-content: center;

      div,
      button:not(:first-child) {
        margin-left: 5px;
      }
    }

    .Application__body {
      padding-top: 40px;
    }

    .Application__headTabs {
      margin-top: 16px;
    }

    .Application__headTabsBar {
      margin-top: 8px;
    }
  }
`;

export { FavouritesPlug };
