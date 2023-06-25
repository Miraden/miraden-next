import {BlankLayout} from "@/modules/Base/BlankLayout";
import UIKitHead from "@/modules/UIKitTest/UIKitHead";
import styled from "styled-components";
import {TabMenuItem, TabsManager, Themes} from "@/components/ui/TabsMenu";
import React, {useCallback, useState} from "react";
import {TabButtons} from "@/components/ui";

const NavigationsPage = () => {
  let [selected, setSelected] = useState<number>(0);
  const handleSelect = useCallback((state: number) => {
    setSelected(state);
  }, []);

  let [selectedDark, setSelectedDark] = useState<number>(0);
  const handleSelectDark = useCallback((state: number) => {
    setSelectedDark(state);
  }, []);

  return (
    <BlankLayout>
      <UIKitHead
        title={"Navigations"}
        className={"Container"}
        backUrl={"/ui-kit"}
      />
      <StyledNavigation className={"Container"}>
        <div
          className={"NavSection"}>{renderClassic(selected, selectedDark, handleSelect, handleSelectDark)}</div>
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

function renderClassic(selected: number, selectedDark: number, handleSelect: Function, handleSelectDark: Function): JSX.Element {
  const tabsManager = new TabsManager(handleSelect, Themes.Light)
  tabsManager.addItem(new TabMenuItem('Tab classic', 0, (<div>first</div>)))
  tabsManager.addItem(new TabMenuItem('Tab classic', 1, (<div>second</div>)))
  tabsManager.addItem(new TabMenuItem('Tab classic', 4, (<div>archived</div>)))
  tabsManager.addItem(new TabMenuItem('Tab classic', 4, (
    <div>disabled</div>), true))

  const tabsManagerDark = new TabsManager(handleSelectDark, Themes.Dark)
  tabsManagerDark.addItem(new TabMenuItem('Tab classic', 1, (<div>first</div>)))
  tabsManagerDark.addItem(new TabMenuItem('Tab classic', 1, (<div>second</div>)))
  tabsManagerDark.addItem(new TabMenuItem('Tab classic', 1, (<div>disabled</div>), true))

  return (
    <>
      <h3 className={"Font_Accent_20_B NavSectionHeadline"}>{"Tab Classic"}</h3>
      <div>
        {tabsManager.renderMenus(selected)}
        {tabsManager.renderContent(selected)}
      </div>
      <div>
        {tabsManagerDark.renderMenus(selectedDark)}
        {tabsManagerDark.renderContent(selectedDark)}
      </div>
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

  .TabsMenu__menus--dark {
    padding: 20px;
  }
`

export default NavigationsPage
