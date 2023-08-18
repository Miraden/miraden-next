import { BlankLayout } from '@/modules/Base/BlankLayout'
import UIKitHead from '@/modules/UIKitTest/UIKitHead'
import styled from 'styled-components'
import {
  TabMenuItem,
  TabsManager,
  Themes,
  Types,
} from '@/components/ui/TabsMenu'
import React, { useCallback, useState } from 'react'
import { TagItem, Tags } from '@/components/ui/Tags'
import { StarIcon } from '@/icons'

const NavigationsPage = () => {
  let [selected, setSelected] = useState<number>(0)
  const handleSelect = useCallback((state: number) => {
    setSelected(state)
  }, [])

  let [selectedDark, setSelectedDark] = useState<number>(0)
  const handleSelectDark = useCallback((state: number) => {
    setSelectedDark(state)
  }, [])

  let [selectedButton, setSelectedButton] = useState<number>(0)
  const handleSelectButton = useCallback((state: number) => {
    setSelectedButton(state)
  }, [])

  return (
    <BlankLayout>
      <UIKitHead
        title={'Navigations'}
        className={'Container'}
        backUrl={'/ui-kit'}
      />
      <StyledNavigation className={'Container'}>
        <div className={'NavSection'}>
          {renderClassic(
            selected,
            selectedDark,
            handleSelect,
            handleSelectDark
          )}
        </div>
        <div className={'NavSection'}>
          {renderTabs(selectedButton, handleSelectButton)}
        </div>
        <div className={'NavSection'}>{renderTags()}</div>
      </StyledNavigation>
    </BlankLayout>
  )
}

function renderClassic(
  selected: number,
  selectedDark: number,
  handleSelect: Function,
  handleSelectDark: Function
): JSX.Element {
  const tabsManager = new TabsManager(handleSelect, Themes.Light, Types.Classic)
  tabsManager.addItem(new TabMenuItem('Tab classic 1', 0, <div>first</div>))
  tabsManager.addItem(new TabMenuItem('Tab classic 2', 1, <div>second</div>))
  tabsManager.addItem(new TabMenuItem('Tab classic 3', 4, <div>archived</div>))
  tabsManager.addItem(
    new TabMenuItem('Tab classic 4', 4, <div>disabled</div>, <></>, true)
  )

  const tabsManagerDark = new TabsManager(
    handleSelectDark,
    Themes.Dark,
    Types.Classic
  )
  tabsManagerDark.addItem(new TabMenuItem('Tab classic 1', 1, <div>first</div>))
  tabsManagerDark.addItem(
    new TabMenuItem('Tab classic 2', 1, <div>second</div>)
  )
  tabsManagerDark.addItem(
    new TabMenuItem('Tab classic', 1, <div>disabled</div>, <></>, true)
  )

  return (
    <>
      <h3 className={'Font_Accent_20_B NavSectionHeadline'}>{'Tab Classic'}</h3>
      <div>
        {tabsManager.renderMenus(selected)}
        {tabsManager.renderMenuFooter(selected)}
        {tabsManager.renderContent(selected)}
      </div>
      <div>
        {tabsManagerDark.renderMenus(selectedDark)}
        {tabsManagerDark.renderContent(selectedDark)}
      </div>
    </>
  )
}

function renderTabs(selected: number, selectedButtons: Function): JSX.Element {
  const tabsManager = new TabsManager(
    selectedButtons,
    Themes.Light,
    Types.Buttons
  )
  tabsManager.addItem(new TabMenuItem('Text 1', 0, <div>first</div>))
  tabsManager.addItem(new TabMenuItem('Text 2', 0, <div>second</div>))

  return (
    <>
      <h3 className={'Font_Accent_20_B NavSectionHeadline'}>{'Tab Buttons'}</h3>
      <div>{tabsManager.renderMenus(selected)}</div>
      <div>{tabsManager.renderContent(selected)}</div>
    </>
  )
}

function renderTags(): JSX.Element {
  return (
    <>
      <h3 className={'Font_Accent_20_B NavSectionHeadline'}>{'Tags'}</h3>
      <Tags>
        <TagItem label={'Tab'} />
      </Tags>
      <Tags>
        <TagItem label={'Tab'} />
        <TagItem label={'Tab'} />
        <TagItem label={'Tab'} />
      </Tags>
      <Tags>
        <TagItem label={'Tab'} leftIcon={<StarIcon />} />
      </Tags>
      <Tags>
        <TagItem label={'Tab'} rightIcon={<StarIcon />} />
      </Tags>
    </>
  )
}

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  .NavSection {
  }

  .NavSectionHeadline {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.main};
    margin-bottom: 20px;
  }

  .TabsMenu__menus--dark {
    padding: 20px;
  }
`

export default NavigationsPage
