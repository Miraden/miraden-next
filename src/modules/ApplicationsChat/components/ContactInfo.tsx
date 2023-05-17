import { Button } from "@/components/ui";
import cn from "classnames";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { Contacts } from "./Contacts";
import { OpenContacts } from "./OpenContacts";

interface Props {
  className?: string;
}

type Option = "contacts" | "requests" | "information";

const ContactInfo = ({ className }: Props) => {
  const [selected, setSelected] = useState<Option | null>(null);

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);

  const [contactOpen, setContactOpen] = useState(false);

  return (
    <StyledContactInfo className={className}>
      <div className="ChatInfo__headTabsContainer">
        <div className="ChatInfo__headTabs">
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
        {contactOpen ? <OpenContacts /> : <Contacts />}
      </div>
    </StyledContactInfo>
  );
};

const StyledContactInfo = styled.div`
  background: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  margin-top: 10px;
  max-width: 625px;

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

  .ChatInfo__headTabs {
    display: flex;
    button {
      padding: 0;
    }
    button:not(:first-child) {
      margin-left: 30px;
    }
  }

  .ChatInfo__headTabButton {
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

  .ChatInfo__headTabsBar {
    margin-top: 15px;
    width: 100%;
    background: #e1edfd;
    height: 4px;
    border-radius: 10px;
  }
`;

export { ContactInfo };
