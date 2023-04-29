import React, { useState } from "react";
import styled from "styled-components";

type TabButtonsProps = {
  tabs: { label: string; id: string }[];
  defaultTabId: string;
};

type ButtonProps = {
  active: boolean;
};

const TabButtons: React.FC<TabButtonsProps> = ({ tabs, defaultTabId }) => {
  const [activeTabId, setActiveTabId] = useState(defaultTabId);

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
  };

  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  return (
    <Container>
      <Tabs>
        {tabs.map((tab) => (
          <Button
            className="Font_16_20"
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            active={tab.id === activeTabId}
          >
            {tab.label}
          </Button>
        ))}
      </Tabs>

      <Content>
        {activeTab === tabs[0] && <div>Контент 1</div>}
        {activeTab === tabs[1] && <div>Контент 2</div>}
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Tabs = styled.div`
  display: flex;
  box-shadow: 0 0 0 2px #e1edfd inset;
  border-radius: 10px;
  max-width: 300px;
  width: 100%;
  padding: 4px;
`;

const Button = styled.button<ButtonProps>`
  transition: 0.2s ease;

  box-shadow: ${(props) => (props.active ? "" : "0 0 0 2px #e1edfd inset")};
  width: 100%;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? "#4E6AF3" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#2A344A")};
  cursor: pointer;
  :hover {
    background-color: ${(props) => (props.active ? "#4E6AF3" : "#F1F7FF")};
  }
  :not(:first-child) {
    margin-left: 3px;
  }
`;

const Content = styled.div`
  margin-top: 20px;
`;

export { TabButtons };
