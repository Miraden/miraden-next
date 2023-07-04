import { BlankLayout } from '@/modules/Base/BlankLayout'
import UIKitHead from '@/modules/UIKitTest/UIKitHead'
import React, { useCallback, useState } from 'react'
import { StyledMenu, TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import styled from 'styled-components'
import { BackIcon20 } from '@/icons'
import { Button, Search } from '@/components/ui'
import cn from 'classnames'
import { FilterIcon } from '@/icons/FilterIcon'

const MenuPage = () => {
  let [selected, setSelected] = useState<number>(0)
  const handleSelect = useCallback((state: number) => {
    setSelected(state)
  }, [])

  const [showFilter, setShowFilter] = useState(false)
  const handleShowFilter = useCallback(() => {
    setShowFilter(!showFilter)
  }, [showFilter])

  const [tabsManager, setTabsManager] = useState<TabsManager>(new TabsManager())
  tabsManager.setCallback(handleSelect)
  tabsManager.addItem(
    new TabMenuItem(
      'Все',
      0,
      <div>content</div>,
      (
        <Search
          options={[
            'Сначала агентства',
            'Сначала PRO',
            'Сначала самые надежные',
          ]}
          placeholder="Поиск"
          className={''}
          filterIcon={<FilterIcon />}
          onFilterClick={handleShowFilter}
          withSort={true}
        />
      )
    )
  )
  tabsManager.addItem(new TabMenuItem('Опубликованные', 1, <div>2</div>))
  tabsManager.addItem(new TabMenuItem('В архиве', 4, <div>3</div>))

  return (
    <BlankLayout className={'bodyChecker'}>
      <UIKitHead title={'Menu'} className={'Container'} backUrl={'/ui-kit'} />
      <StyledLayout className={'Container'}>
        <StyledMenu className={cn(tabsManager.getClasses())}>
          <div className={'Menu__header Font_headline_3'}>
            <Button
              secondary
              href="/applications-full"
              className="Menu__header_backButton"
            >
              <BackIcon20
                width={20}
                height={20}
                className="Menu__header_backArrow"
              />
            </Button>
            <h1 className="Font_headline_3">
              Хочу купить 3-х комнатную квартиру на Кипре
            </h1>
          </div>
          {tabsManager.renderMenus(selected)}
          {tabsManager.renderMenuFooter(selected)}
        </StyledMenu>
        {tabsManager.renderContent(selected)}
      </StyledLayout>
    </BlankLayout>
  )
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default MenuPage
