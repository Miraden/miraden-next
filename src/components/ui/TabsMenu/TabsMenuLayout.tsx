import { createContext, PropsWithChildren, useContext } from 'react'
import styled from 'styled-components'
import cn from 'classnames'

declare namespace TabsMenu {
  interface Context {
    baseClass: string
  }
}

const Default: TabsMenu.Context = {
  baseClass: 'TabsMenu',
}

const TabsMenuContext = createContext<TabsMenu.Context>(Default)

interface Props {
  className?: string
}

const TabsMenuLayout = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <TabsMenuContext.Provider value={Default}>
      <StyledLayout
        className={cn(props.className, Default.baseClass + 'Layout')}
      >
        {props.children}
      </StyledLayout>
    </TabsMenuContext.Provider>
  )
}

export function useTabsMenuContext() {
  return useContext(TabsMenuContext)
}

const StyledLayout = styled.div`
  background: #fff;
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 20px 20px 10px;
`

export default TabsMenuLayout
