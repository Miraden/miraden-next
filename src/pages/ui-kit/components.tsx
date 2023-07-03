import { TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import React, { useCallback, useState } from 'react'
import { Preloader } from '@/components/ui/Preloader'
import styled from 'styled-components'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import UIKitHead from '@/modules/UIKitTest/UIKitHead'

function ComponentsPage() {
  let [selected, setSelected] = useState<number>(0)
  const handleSelect = useCallback((state: number) => {
    setSelected(state)
  }, [])

  const tabsManager = new TabsManager(handleSelect)
  tabsManager.addItem(new TabMenuItem('Все', 0, <div>first</div>))
  tabsManager.addItem(new TabMenuItem('Опубликованные', 1, <div>second</div>))
  tabsManager.addItem(new TabMenuItem('В архиве', 4, <div>archived</div>))

  return (
    <BlankLayout>
      <UIKitHead title={'Components'} className={'Container'} backUrl={'/ui-kit'} />
      <div className={"Container"}>
        <h3>Tabs menu</h3>
        {tabsManager.renderMenus(selected)}
        {tabsManager.renderContent(selected)}
        <StyledLoader>
          <h3>Preloader</h3>
          <Preloader />
        </StyledLoader>
      </div>
    </BlankLayout>
  )
}

const StyledLoader = styled.div`
  margin: 20px 0;
  position: relative;
  height: 200px;

  .Preloader {
    left: 50px;
  }
`

export default ComponentsPage
