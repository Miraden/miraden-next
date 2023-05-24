import { Button } from "@/components/ui";
import { ApplicationsFooter } from "@/modules/Base/ApplicationsFooter";
import cn from "classnames";
import Image from "next/image";
import { useCallback, useState } from "react";
import styled from "styled-components";
interface ApplicationProps {
  className?: string;
}

type Option = "all" | "published" | "archived";

const ApplicationFullPlug = ({ className }: ApplicationProps) => {
  const [selected, setSelected] = useState<Option | null>("all");

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);

  return (
    <StyledApplication className={className}>
      <div className="Application__headContainer">
        <div className="Application__head">
          <h1 className="Font_32_120 lg:Font_26_120_500">Мои заявки </h1>
        </div>
        <div className="Application__headTabsContainer">
          <div className="Application__headTabs">
            <Button
              className={cn("Application__TabButton", {
                Application__headTabButton: selected === "all",
              })}
              onClick={() => handleSelect("all")}
              active={selected === "all"}
              tertiary
            >
              Все
            </Button>
            <Button
              className={cn("Application__TabButton", {
                Application__headTabButton: selected === "published",
              })}
              onClick={() => handleSelect("published")}
              active={selected === "published"}
              tertiary
            >
              Опубликованные
            </Button>
            <Button
              className={cn("Application__TabButton", {
                Application__headTabButton: selected === "archived",
              })}
              onClick={() => handleSelect("archived")}
              active={selected === "archived"}
              tertiary
            >
              В архиве
            </Button>
          </div>
          <div className="Application__headTabsBar" />
        </div>
      </div>
      <div className="Applications__headTabsBar_whiteSpace" />

      {selected === "all" && (
        <>
          <div className="Application__body">
            <Image
              src="/images/application.svg"
              alt=""
              width={150}
              height={120}
            />
            <h2 className="Font_20_120">У вас еще нет созданных заявок</h2>
            <p className="Color_text_grey">
              Но вы можете сделать это <br /> прямо сейчас!
            </p>
            <Button className="CreateApp__button" href="/customer/create-1">
              Создать заявку
            </Button>
          </div>
        </>
      )}
      {selected === "published" && (
        <>
          <div className="Application__body">
            <Image
              src="/images/application.svg"
              alt=""
              width={150}
              height={120}
            />
            <h2 className="Font_20_120">No published applications</h2>
            <p className="Color_text_grey">No published</p>
          </div>
        </>
      )}

      {selected === "archived" && (
        <>
          <div className="Application__body">
            <Image
              src="/images/application.svg"
              alt=""
              width={150}
              height={120}
            />
            <h2 className="Font_20_120">No archived applications</h2>
            <p className="Color_text_grey">No archived</p>
          </div>
        </>
      )}
      <ApplicationsFooter />
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
    margin-top: 20px;
    padding: 20px 20px 0 20px;
    background: #fff;
    border-radius: 10px 10px 0 0;
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

  @media (max-width: 1024px) {
    .Application__headContainer {
      margin-top: 60px;
    }
  }

  @media (max-width: 576px) {
    .Application__headTabs {
      margin-top: 16px;
    }

    .Application__headTabsBar {
      margin-top: 8px;
    }
  }
`;

export { ApplicationFullPlug };
