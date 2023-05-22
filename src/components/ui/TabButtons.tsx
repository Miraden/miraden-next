import React, { useState } from "react";
import styled from "styled-components";

type TabButtonsProps = {
  tabs: { label: string; id: string; content?: React.ReactNode }[];
  defaultTabId: string;
  onTabClick?: (tabId: string) => void;
  className?: string;
  selectedTab?: any;
};

type ButtonProps = {
  active: boolean;
};

const TabButtons: React.FC<TabButtonsProps> = ({
  tabs,
  defaultTabId,
  onTabClick,
  className,
  selectedTab,
}) => {
  const [activeTabId, setActiveTabId] = useState(defaultTabId);

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
    if (onTabClick) {
      onTabClick(tabId);
    }
  };

  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  return (
    <div className={className}>
      <div className="TabButtons__container">
        <Tabs>
          {tabs.map((tab) => (
            <Button
              className="Font_16_20 TabButton"
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              active={tab.id === activeTabId}
            >
              {tab.label}
            </Button>
          ))}
        </Tabs>
      </div>

      <Content>{activeTab?.content}</Content>
    </div>
  );
};

const Tabs = styled.div`
  display: flex;
  box-shadow: 0 0 0 2px #e1edfd inset;
  border-radius: 13px;
  width: 100%;
  padding: 4px;
`;

const Button = styled.button<ButtonProps>`
  transition: 0.2s ease;

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
