import { Button, Sticker } from "@/components/ui";
import { ArrowAccordionIcon, Kebab24Icon, VerifiedIcon } from "@/icons";
import { StarIconFilled } from "@/icons/StarIconFilled";
import cn from "classnames";
import Image from "next/image";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { ApplicationsFooter } from "../Base/ApplicationsFooter";
import { ChatContainer } from "./components/ChatContainer";
import { ChatInformation } from "./components/ChatInformation";
import { ChatRequests } from "./components/ChatRequests";
import { ContactInfo } from "./components/ContactInfo";

interface Props {
  className?: string;
}

const ApplicationsChat = () => {
  type Option = "chat" | "contacts" | "requests" | "information";

  const [selected, setSelected] = useState<Option | null>("contacts");

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);

  return (
    <StyledApplicationsChat className="ContainerFull">
      <div className="ApplicationsChat">
        <div className="ChatMainContainer">
          <div className="AppInfo">
            <div>
              <div className="ApplicationInfo__headLayout"></div>

              {selected === "chat" ? (
                <div className="Application__infoChat">
                  <div className="Application__infoChatContainer">
                    <button className="ApplicationInfo__backButtonChat">
                      <ArrowAccordionIcon className="ArrowIcon" />
                    </button>
                    <Image
                      alt=""
                      src="/images/avatar.jpg"
                      width={40}
                      height={40}
                      className="ApplicationInfo__avatar"
                    />
                    <div className="Status">
                      <div className="FullStatus">
                        <p className="Font_16_140">Анастасия Петрова</p>
                        <div className="Application__infoStatus">
                          <VerifiedIcon className="ContactInfo__verifiedIcon" />
                          <Sticker
                            theme="black"
                            className="ContactInfo__sticker"
                          >
                            pro
                          </Sticker>
                          <div className="ContactInfo__rating">
                            <StarIconFilled
                              width={14}
                              height={14}
                              className="ContactInfo__ratingIcon"
                            />
                            <p className="Font_14_140">4.8</p>
                          </div>
                        </div>
                      </div>
                      <p className="Font_12_16 Color_text_disabled">
                        Агентство недвижимости — RealEstate
                      </p>
                    </div>
                  </div>

                  <Button className="ChatButton">Открыть контакты</Button>
                  <Button className="ChatButtonMobile">
                    <Kebab24Icon />
                  </Button>
                </div>
              ) : (
                <div className="ApplicationInfo">
                  <button className="ApplicationInfo__backButton">
                    <ArrowAccordionIcon className="ArrowIcon" />
                  </button>
                  <div className="ApplicationInfo__container">
                    <div className="ApplicationInfo__headContent">
                      <h2 className="Font_24_120 lg:Font_16_140 ">
                        Заявка #12463
                      </h2>
                      <Sticker theme="black">TRUE</Sticker>
                    </div>
                    <p className="ApplicationInfo__headDescription Font_16_150 lg:Font_12_16">
                      Хочу купить 3-х комнатную квартиру на Кипре
                    </p>
                  </div>
                </div>
              )}
              <div className="ApplicationInfo__fullContainer">
                <div className="ChatInfo__headTabs">
                  <Button
                    className={cn("ChatTabButton", {
                      ChatInfo__headTabButton: selected === "chat",
                    })}
                    onClick={() => handleSelect("chat")}
                    active={selected === "chat"}
                    tertiary
                  >
                    Чат
                  </Button>
                  <Button
                    className={cn("", {
                      ChatInfo__headTabButton: selected === "contacts",
                    })}
                    onClick={() => handleSelect("contacts")}
                    active={selected === "contacts"}
                    tertiary
                  >
                    Контакты
                  </Button>
                  <Button
                    className={cn("", {
                      ChatInfo__headTabButton: selected === "requests",
                    })}
                    onClick={() => handleSelect("requests")}
                    active={selected === "requests"}
                    tertiary
                  >
                    Отзывы
                  </Button>
                  <Button
                    className={cn("", {
                      ChatInfo__headTabButton: selected === "information",
                    })}
                    onClick={() => handleSelect("information")}
                    active={selected === "information"}
                    tertiary
                  >
                    Информация
                  </Button>
                </div>
                <div className="ChatInfo__headTabsBar" />
              </div>
            </div>

            {selected === "chat" && <ChatContainer className="ChatMobile" />}
            {selected === "contacts" && <ContactInfo className="ContactInfo" />}
            {selected === "requests" && (
              <ChatRequests className="ContactInfo" />
            )}
            {selected === "information" && (
              <ChatInformation className="ContactInfo" />
            )}
          </div>
        </div>

        <ChatContainer className="Chat" />
      </div>
      {selected === "contacts" && <ApplicationsFooter />}
      {selected === "requests" && <ApplicationsFooter />}
      {selected === "information" && <ApplicationsFooter />}
    </StyledApplicationsChat>
  );
};

const StyledApplicationsChat = styled.section`
  margin-top: 30px;
  height: calc(100vh - 86px);

  .ChatMainContainer {
    display: flex;
    flex-grow: 1;
  }

  .ChatMobile {
    display: none;
  }

  .ApplicationsChat {
    /* padding-bottom: 20px; */
    display: flex;
    height: calc(100% - 20px);
  }

  .ContactInfo {
    flex-grow: 1;
  }

  .AppInfo {
    display: flex;
    flex-direction: column;
    max-width: 625px;
    min-width: 560px;
    height: 100%;
    width: 100%;
  }

  .ApplicationInfo {
    background: #2a344a;
    color: #fff;
    padding: 20px 20px 0 20px;
    border-radius: 10px 10px 0 0;
  }
  .ChatInfo__headTabs {
    padding: 20px 0 0 0;
  }

  .ChatTabButton {
    display: none;
  }

  .ChatInfo__headTabsBar_whiteSpace {
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
    align-items: baseline;
    h1 {
      margin-left: 10px;
    }
  }

  .ChatInfo__headTabs {
    display: flex;
    button {
      margin-right: 30px;
      color: #7786a5;

      padding: 0;

      :hover {
        color: #fff !important;
        background: transparent !important;
      }
    }

    button.active {
      color: #fff !important;
    }
  }

  .ChatInfo__headTabButton {
    position: relative;
    ::before {
      position: absolute;
      top: 32px;
      left: 0;
      content: "";
      background: #ffffff;
      width: 100%;
      height: 4px;
      border-radius: 10px;
    }
  }

  .ChatInfo__headTabsBar {
    margin-top: 12px;
    width: 100%;
    background: #3b4a69;
    height: 4px;
    border-radius: 10px;
  }

  .ContactInfo__statusInfo {
    display: flex;
    align-items: center;
    margin-top: 8px;
    div {
      display: flex;
      align-items: center;
    }
  }

  .ContactInfo__sticker {
    margin-right: 5px;
  }

  .ContactInfo__verifiedIcon {
    margin-right: 5px;
  }

  .ContactInfo__rating {
    align-items: center;
    p {
      margin-left: 5px;
    }
  }

  .ChatButton {
    padding: 10px 24px;
  }

  .ContactInfo__ratingIcon {
    path {
      fill: #7786a5;
    }
  }

  .ChatButtonMobile {
    display: none;
  }

  @media (max-width: 1024px) {
    margin-top: -18px;
    height: calc(100vh - 36px);

    .ChatMobile {
      display: flex;
    }

    .ChatTabButton {
      display: block;
    }

    .ApplicationsChat {
      flex-direction: column;
    }

    &.ContainerFull {
      padding: 0;
    }
    .Chat {
      display: none;
    }
    .ChatMobile {
      display: flex;
    }

    .AppInfo {
      width: 100%;
      max-width: unset;
      min-width: unset;
    }
  }

  .ApplicationInfo__headLayout {
    display: none;
    background: #2a344a;
  }

  .ApplicationInfo__fullContainer {
    background: #2a344a;
    color: #fff;
    padding: 0 20px 10px 20px;
    border-radius: 0 0 10px 10px;
    width: 100%;
  }

  .Application__infoChat {
    display: none;
    align-items: center;
    justify-content: space-between;
    background: #2a344a;
    color: #fff;
    padding: 10px 20px 20px 20px;
    border-bottom: 1px solid #3a465d;
  }

  .Application__infoChatContainer {
    display: flex;
  }

  .ApplicationInfo__avatar {
    border-radius: 50%;
  }

  .Status {
    margin-left: 12px;
  }

  .FullStatus {
    display: flex;
    align-items: center;
  }

  .Application__infoStatus {
    display: flex;
    margin-left: 8px;
  }

  .ContactInfo__rating {
    display: flex;
  }

  .ApplicationInfo {
    display: flex;
  }

  .ApplicationInfo__backButton {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    :hover {
      background: #3a465d;
    }
  }

  .ApplicationInfo__backButtonChat {
    border-radius: 50%;
    margin-right: 4px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ArrowIcon {
    width: 20px;
    height: 20px;
    transform: rotate(90deg);
    path {
      fill: #fff;
    }
  }

  .ApplicationInfo__container {
    width: 100%;
    margin-left: 15px;
  }

  .ApplicationInfo__headContent {
    display: flex;
    justify-content: space-between;
  }

  .ApplicationInfo__headDescription {
    margin-top: 5px;
  }

  @media (max-width: 1024px) {
    .ApplicationInfo__fullContainer {
      border-radius: 0 0 10px 10px;
      overflow: auto;
    }

    .Application__infoChat {
      display: flex;
      padding-left: 12px;
    }

    .ChatInfo__headTabs {
      padding-top: 20px;
    }

    .ApplicationInfo {
      border-radius: 0;
      padding-left: 12px;
      padding-bottom: 10px;
      border-bottom: 2px solid #3a465d;
      align-items: center;
    }

    .ApplicationInfo__backButton {
      width: 24px;
      height: 24px;
      background: unset;

      :hover {
        background: #3a465d;
      }
    }

    .ApplicationInfo__headLayout {
      display: block;
      height: 20px;
    }
  }

  @media (max-width: 769px) {
    .ApplicationInfo__headDescription {
    }
  }

  @media (max-width: 576px) {
    height: calc(100vh - 24px);

    .ChatInfo__headTabs {
      padding-top: 16px;
    }

    .ApplicationsChat {
      padding-bottom: 0;
    }

    .Application__infoChat {
      padding-right: 8px;
    }

    .ChatButton {
      display: none;
    }
    .ChatButtonMobile {
      display: flex;
      align-self: flex-start;
      padding: 2px;
      border-radius: 50%;
      background: transparent;

      :hover {
        background: #3a465d;
      }

      svg {
        path {
          fill: #fff;
        }
      }
    }

    .ChatInfo__headTabsBar {
      margin-top: 8px;
    }

    .ApplicationInfo__fullContainer {
      padding: 0 0 10px 20px;
    }

    .ChatInfo__headTabButton {
      ::before {
        top: 28px;
      }
    }
  }

  @media (max-width: 440px) {
    .FullStatus {
      p {
        max-width: 110px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

export { ApplicationsChat };
