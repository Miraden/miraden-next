import Head from 'next/head'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import styled from 'styled-components'
import { Header } from '@/modules/Base/Header'
import React, { useCallback, useEffect, useState } from 'react'
import cn from 'classnames'
import { StyledMenu, TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import { ApplicationsFilter } from '@/components/ui/ApplicationsFilter'
import { FilterIcon } from '@/icons/FilterIcon'
import { Search } from '@/components/ui'
import { ObjectsDataProvider } from '@/modules/Objects/ObjectsDataProvider'
import { ObjectCard } from '@/modules/Applications/Application/components/ObjectCard'

enum TabsMenuState {
  All = 0,
  Published = 1,
  Archived = 2,
}

export default function MyObjectsPage(): JSX.Element {
  const [selected, setSelected] = useState<TabsMenuState>(TabsMenuState.All)
  const handleSelect = useCallback((option: TabsMenuState) => {
    setSelected(option)
  }, [])

  const [showFilter, setShowFilter] = useState(false)
  const handleShowFilter = useCallback(() => {
    setShowFilter(!showFilter)
  }, [showFilter])

  const [tabsManager, setTabsManager] = useState<TabsManager>(new TabsManager())
  useEffect(() => {
    tabsManager.setActive(selected)
  }, [selected, tabsManager])

  tabsManager.setCallback(handleSelect)
  tabsManager.addItem(new TabMenuItem('Все'))
  tabsManager.addItem(new TabMenuItem('Опубликованные'))
  tabsManager.addItem(new TabMenuItem('В архиве'))

  if (selected == TabsMenuState.All) {
    const current = tabsManager.getItem(selected)
    current?.updateMenuFooter(
      <Search
        options={['Сначала агентства', 'Сначала PRO', 'Сначала самые надежные']}
        placeholder="Поиск"
        className={cn('Applications__searchBar')}
        filterIcon={<FilterIcon />}
        withSort={true}
        onFilterClick={handleShowFilter}
      />
    )
  }

  return (
    <>
      <Head>
        <title>Miraden - Мои объекты</title>
      </Head>
      <BlankLayout>
        <Header isAuthorized={true} />
        <StyledObjects className={'ContainerFull'}>
          <div className={'ObjectsWrapper'}>
            <div
              className={cn('ObjectsContent', {
                isOpenFilter: showFilter,
              })}
            >
              <StyledMenu className={cn('Menu', tabsManager.getClasses())}>
                <div className={'Menu__header Font_headline_3'}>
                  <h1 className="Font_headline_3">Мои объекты</h1>
                </div>
                {tabsManager.renderMenus(selected)}
                {tabsManager.renderMenuFooter(selected)}
              </StyledMenu>
              <div className="Objects__content">
                {selected == TabsMenuState.All && <>{renderObjectsList()}</>}
                {selected == TabsMenuState.Published && (
                  <>{renderObjectsList()}</>
                )}
                {selected == TabsMenuState.Archived && (
                  <>{renderObjectsList()}</>
                )}
              </div>
            </div>

            {showFilter &&
              selected == TabsMenuState.All &&
              renderFilter(handleShowFilter, () => {})}
          </div>
        </StyledObjects>
      </BlankLayout>
    </>
  )
}

function renderObjectsList(): JSX.Element {
  return (
    <ul className="ObjectsList">
      {ObjectsDataProvider.map((object, index) => (
        <li key={index}>
          <ObjectCard
            title={object.title}
            location={object.location}
            image1={object.image1}
            image2={object.image2}
            image3={object.image3}
            id={object.id}
            firstInstallment={object.firstInstallment}
            firstInstallmentPercent={object.firstInstallmentPercent}
            singleCost={object.singleCost}
            sleeps={object.sleeps}
            baths={object.baths}
            year={object.year}
            square={object.square}
            rooms={object.rooms}
            yieldCount={object.yieldCount}
            price={object.price}
            name={object.name}
            image={object.image}
            status={object.status}
            href="/object/1"
          />
        </li>
      ))}
    </ul>
  )
}

function renderFilter(handler: Function, tabHandler: Function): JSX.Element {
  return (
    <>
      <div className="Objects__filter">
        <ApplicationsFilter />
      </div>
    </>
  )
}

const StyledObjects = styled.div`
  max-width: calc(1920px);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  position: relative;

  .ObjectsWrapper {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    gap: 30px;
    padding-left: 55px;
    padding-right: 55px;
  }

  .ObjectsContent {
    grid-column: 5 / span 10;
    min-width: 970px;
    max-width: 970px;
  }

  .Objects__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .Objects__filter {
    position: sticky;
    top: 94px;
    overflow: auto;
    grid-column: 16 / span 3;
    margin-top: 30px;
    margin-left: -30px;
    height: calc(-114px + 100vh);
    min-width: 355px;
  }

  .ObjectsList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    position: relative;
    min-height: 200px;
  }
`
