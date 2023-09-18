import { createContext, PropsWithChildren, useContext } from 'react'
import styled from 'styled-components'
import cn from 'classnames'

declare namespace MainMenu {
  interface DropDown {
    baseClass: string
  }
}

const Default: MainMenu.DropDown = {
  baseClass: 'MenuDropDown',
}

interface Props {
  className?: string
}

const MainMenuContext = createContext<MainMenu.DropDown>(Default)

const MenuDropDownLayout = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <MainMenuContext.Provider value={Default}>
      <StyledComponent
        className={cn(props.className, Default.baseClass + 'Layout')}
      >
        {props.children}
      </StyledComponent>
    </MainMenuContext.Provider>
  )
}

export function useMainMenuDropDownContext() {
  return useContext(MainMenuContext)
}

const StyledComponent = styled.div`
  position: absolute;
  top: 42px;
  right: -20px;
  width: 270px;
  padding-top: 9px;
  background: ${({ theme }) => theme.colors.background.black};
  border-radius: 0 0 ${({ theme }) => theme.border.radius}
    ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.colors.text.disabled};
`

export default MenuDropDownLayout
