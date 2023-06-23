import {BlankLayout} from "@/modules/Base/BlankLayout";
import UIKitHead from "@/modules/UIKitTest/UIKitHead";
import styled from "styled-components";
import {TabMenuItem, TabsManager} from "@/components/ui/TabsMenu";
import React, {useCallback, useState} from "react";
import {TabButtons} from "@/components/ui";

const NavigationsPage = () => {
  let [selected, setSelected] = useState<number>(0);
  const handleSelect = useCallback((state: number) => {
    setSelected(state);
  }, []);

  return (
    <BlankLayout>
      <UIKitHead
        title={"Navigations"}
        className={"Container"}
        backUrl={"/ui-kit"}
      />
      <StyledNavigation className={"Container"}>
        <div className={"NavSection"}>{renderClassic(selected, handleSelect)}</div>
        <TabButtons
          tabs={[
            {label: "Text", id: "1"},
            {label: "Text", id: "2"},
          ]}
          defaultTabId={"1"}
        />
      </StyledNavigation>
    </BlankLayout>
  )
}

function renderClassic(selected: number, handleSelect: Function): JSX.Element {
  const tabsManager = new TabsManager(handleSelect)
  tabsManager.addItem(new TabMenuItem('Все', 0, (<div>first</div>)))
  tabsManager.addItem(new TabMenuItem('Опубликованные', 1, (<div>second</div>)))
  tabsManager.addItem(new TabMenuItem('В архиве', 4, (<div>archived</div>)))

  return (
    <>
      <h3 className={"Font_Accent_20_B NavSectionHeadline"}>{"Tab Classic"}</h3>
      {tabsManager.renderMenus(selected)}
      {tabsManager.renderContent(selected)}
    </>
  )
}

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .NavSectionHeadline {
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.main};
    margin-bottom: 20px;
  }
`

export default NavigationsPage
