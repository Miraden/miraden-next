import { BlankLayout } from '@/modules/Base/BlankLayout'
import UIKitHead from '@/modules/UIKitTest/UIKitHead'
import React, { useCallback, useState } from 'react'
import { TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import styled from 'styled-components'
import { BackIcon20 } from '@/icons'
import { Button, Search } from '@/components/ui'
import cn from 'classnames'
import { FilterIcon } from '@/icons/FilterIcon'
import { theme } from '../../../styles/tokens'

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

const tabsManager = new TabsManager()
tabsManager.addItem(new TabMenuItem('Все', 0, <div></div>))
tabsManager.addItem(new TabMenuItem('Опубликованные', 1, <div></div>))
tabsManager.addItem(new TabMenuItem('В архиве', 4, <div></div>))

const MenuPage = () => {
  let [selected, setSelected] = useState<number>(0)
  const handleSelect = useCallback((state: number) => {
    setSelected(state)
  }, [])
  tabsManager.setCallback(handleSelect)

  return (
    <BlankLayout className={'bodyChecker'}>
      <UIKitHead title={'Menu'} className={'Container'} backUrl={'/ui-kit'} />
      <StyledLayout className={'Container'}>
        {renderOnlyLinks(tabsManager, selected)}
        {renderWithSearch(tabsManager, selected)}
      </StyledLayout>
    </BlankLayout>
  )
}

function renderWithSearch(
  instance: TabsManager,
  selected: number
): JSX.Element {
  return (
    <StyledMenu>
      <div className="Menu MenuHasSort">
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
        {instance.renderMenus(selected)}
        <Search
          options={[
            'Сначала агентства',
            'Сначала PRO',
            'Сначала самые надежные',
          ]}
          placeholder="Поиск"
          className={cn('Applications__searchBar')}
          rightIcon={<FilterIcon />}
          withSort={true}
        />
      </div>
    </StyledMenu>
  )
}

function renderOnlyLinks(instance: TabsManager, selected: number): JSX.Element {
  return (
    <StyledMenu>
      <div className="Menu">
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
            Хочу купить 3-х комнатную квартиру на Кипре. Хочу купить 3-х
            комнатную квартиру на Кипре
          </h1>
        </div>
        {instance.renderMenus(selected)}
      </div>
    </StyledMenu>
  )
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const StyledMenu = styled.div`
  .Menu {
    background: #fff;
    border-radius: ${({ theme }) => theme.border.radius};
    padding: 20px 20px 10px;
  }

  .MenuHasSort {
    padding-bottom: 0;
  }

  .Menu__header {
    display: flex;
    align-items: baseline;

    &_backButton {
      padding: 4px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-right: 10px;
      background: rgb(255, 255, 255);
      height: 28px;
      width: 28px;
    }
  }

  .TabsMenu__menus {
    width: 100%;
    margin-top: 30px;
  }

  .Applications__searchBar {
    outline: none;
    padding-left: 0;
    padding-right: 0;
    gap: 20px;

    svg {
      min-width: 18px;
    }

    &:hover {
      outline: none;
    }
  }

  .Sort {
    position: relative;
    z-index: 40;
  }
`

export default MenuPage
