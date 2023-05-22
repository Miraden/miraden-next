import { Button } from "@/components/ui";
import {
  Applications,
  HomeIcon,
  KebabIcon,
  ListItemsIcon,
  PlusIcon,
} from "@/icons";
import { useRef, useState } from "react";
import styled from "styled-components";
import { ApplicationInfo } from "./components/ApplicationInfo";
import { ChatContainer } from "./components/ChatContainer";
import { ChatContainerMobile } from "./components/ChatContainerMobile";
import { ContactInfo } from "./components/ContactInfo";

const ApplicationsChat = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSwipedUp, setIsSwipedUp] = useState(false);
  const startY = useRef<number>(0);

  const handleTouchStart = (event: TouchEvent) => {
    const touch = event.touches[0];
    startY.current = touch.pageY;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    const touch = event.changedTouches[0];
    const deltaY = touch.pageY - startY.current;

    if (deltaY < -100) {
      setIsSwipedUp(true);
    } else if (deltaY > 100) {
      setIsSwipedUp(false);
    }
  };

  return (
    <StyledApplicationsChat className="ContainerFull">
      <div className={`ApplicationsChat ${isSwipedUp ? "SwipedUp" : ""}`}>
        <div className="AppInfo">
          <ApplicationInfo className="ApplicationInfo" />
          <ContactInfo className="ContactInfo" />
        </div>

        <ChatContainer className="Chat" />
        <ChatContainerMobile
          className={`ChatMobile ${isSwipedUp ? "SwipedUp" : ""}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />
      </div>
      <div className="Application__Footer">
        <div className="Application__FooterButtons">
          <Button tertiary className="FooterButton Font_12_16">
            <ListItemsIcon />
            Лента
          </Button>
          <Button tertiary className="FooterButton Font_12_16">
            <Applications />
            Мои заявки
          </Button>
          <div className="PlusIconContainer">
            <Button>
              <PlusIcon width={24} height={24} />
            </Button>
          </div>

          <Button tertiary className="FooterButton Font_12_16">
            <HomeIcon width={18} height={18} />
            Объекты
          </Button>
          <Button tertiary className="FooterButton Font_12_16">
            <KebabIcon className="KebabIcon" />
            Ещё
          </Button>
        </div>
      </div>
    </StyledApplicationsChat>
  );
};

const StyledApplicationsChat = styled.section`
  margin-top: 20px;
  height: calc(100vh - 86px);

  .ApplicationsChat {
    padding-bottom: 20px;
    display: flex;
    height: 100%;
  }

  .ContactInfo {
    flex-grow: 1;
  }

  .AppInfo {
    display: flex;
    flex-direction: column;
    min-width: 522px;
    max-width: 625px;
  }

  .Application__Footer {
    border-top: 2px solid #eef1f5;
    display: none;
    position: fixed;
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

  @media (max-width: 1024px) {
    margin-top: -18px;

    &.ContainerFull {
      padding: 0;
    }
    .Chat {
      display: none;
    }

    .AppInfo {
      width: 100%;
      max-width: unset;
      min-width: unset;
    }

    .Application__Footer {
      display: block;
    }
    .Application__FooterButtons {
      display: flex;
      justify-content: center;

      div,
      button:not(:first-child) {
        margin-left: 5px;
      }
    }
  }

  /* Additional styles for ChatMobile */
  .ChatMobile {
    display: flex;
    height: 100vh;
    position: fixed;
    bottom: 34px;
    left: 0;
    right: 0;
    z-index: 99;
    transition: transform 0.3s ease-in-out;
    transform: translateY(100%);
  }

  .SwipedUp .ChatMobile {
    transform: translateY(34px);
  }

  .SwipedUp .ApplicationsChat {
    transform: translateY(-100%);
  }
`;

export { ApplicationsChat };
