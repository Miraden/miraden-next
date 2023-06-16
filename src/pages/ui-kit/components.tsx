import Head from "next/head";
import Link from "next/link";
import {TabMenuItem, TabsManager} from "@/components/ui/TabsMenu";
import React, {useCallback, useState} from "react";

function ComponentsPage() {
  let [selected, setSelected] = useState<number>(0);
  const handleSelect = useCallback((state: number) => {
    setSelected(state);
  }, []);

  const tabsManager = new TabsManager([], handleSelect)
  tabsManager.addItem(new TabMenuItem('Все', 0, (<div>first</div>)))
  tabsManager.addItem(new TabMenuItem('Опубликованные', 1, (<div>second</div>)))
  tabsManager.addItem(new TabMenuItem('В архиве', 4, (<div>archived</div>)))

  return (
    <>
      <Head>
        <title>Miraden UI-kit</title>
        <meta name="description" content="Miraden"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className="Container">
        <Link href="/ui-kit">Go back</Link>
        <h1>Компоненты</h1>

        <>
          <h3>Tabs menu</h3>
          {tabsManager.renderMenus(selected)}
          {tabsManager.renderContent(selected)}
        </>
      </main>
    </>
  )
}

export default ComponentsPage
