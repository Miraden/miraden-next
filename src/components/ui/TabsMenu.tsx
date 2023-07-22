import styled from 'styled-components'
import { Button } from '@/components/ui/Button'
import cn from 'classnames'

const baseClassName = 'TabsMenu'

class TabMenuItem {
  private readonly label: string
  private count: number
  private readonly content?: JSX.Element
  private menuFooter?: JSX.Element
  private readonly isDisabled: boolean

  constructor(
    label: string,
    count?: number,
    content?: JSX.Element | undefined,
    menuFooter?: JSX.Element | undefined,
    isDisabled: boolean = false
  ) {
    this.label = label
    this.content = content
    this.count = count || 0
    this.isDisabled = isDisabled
    this.menuFooter = menuFooter
  }

  getContent(): JSX.Element | undefined {
    return this.content
  }

  public updateCount(val: number): void {
    this.count = val
  }

  getMenuFooter(): JSX.Element | undefined {
    return this.menuFooter
  }

  public updateMenuFooter(node: JSX.Element): void {
    this.menuFooter = node
  }

  getMenu(id: number, active: boolean = false): JSX.Element {
    const btnClassName = baseClassName + '__TabButton'
    const btnCountClassName = btnClassName + 'Counter Color_text_grey'
    return (
      <Button
        tertiary
        type={"button"}
        className={btnClassName}
        active={active}
        disabled={this.isDisabled}
        attr={{ 'data-id': id }}
      >
        {this.label}
        {this.count > 0 && <p className={btnCountClassName}>{this.count}</p>}
      </Button>
    )
  }

  public getLabel(): string {
    return this.label
  }
}

enum Themes {
  Dark = 'dark',
  Light = 'light',
}

enum Types {
  Buttons = 'buttons',
  Classic = 'classic',
}

class TabsManager {
  private readonly items: Array<TabMenuItem>
  public onClick?: Function
  private activeId: number
  private readonly theme?: Themes
  private readonly type?: Types
  private classes: string

  constructor(
    callback?: Function,
    theme: Themes = Themes.Light,
    type: Types = Types.Classic
  ) {
    this.activeId = 0
    this.items = []
    this.onClick = callback
    this.theme = theme
    this.type = type
    this.classes = ''
  }

  public setCallback(callback: Function): void {
    this.onClick = callback
  }

  public setActive(val: number): void {
    this.activeId = val
  }

  public addItem(item: TabMenuItem) {
    let isExists = false
    for (let i = 0; this.items.length; i++) {
      const it = this.items[i]
      if (it === undefined) break
      if (item.getLabel() === it.getLabel()) {
        isExists = true
        break
      }
    }
    if (isExists) return

    this.items.push(item)
  }

  public getItem(selected: number): TabMenuItem | undefined {
    return this.items.at(selected)
  }

  public renderMenus(selected: number) {
    this.activeId = selected
    const items = this.items.map((i, idx) => {
      const active = selected == idx
      return i.getMenu(idx, active)
    })

    const className = baseClassName + '__menus'
    const itemsClassName = baseClassName + '__links-items'
    const dividerClassName = baseClassName + '__links-divider'

    return (
      <LinksStyles
        className={cn(
          className,
          className + '--' + this.theme,
          className + '--' + this.type
        )}
        onClick={e => this.onClickMenu(e)}
      >
        <div className={itemsClassName}>{items}</div>
        {this.type === Types.Classic && (
          <div className={dividerClassName}></div>
        )}
      </LinksStyles>
    )
  }

  public renderMenuFooter(selected: number): JSX.Element {
    const items = this.getFooterItems()
    const item = items.at(selected)

    return <>{item}</>
  }

  public renderContent(selected: number): JSX.Element {
    const items = this.items.map((i, idx) => {
      return i.getContent()
    })

    const className = baseClassName + '__content'

    return (
      <ContentStyles
        className={cn(
          className,
          className + '--' + this.theme,
          className + '--' + this.type
        )}
      >
        {items.at(selected)}
      </ContentStyles>
    )
  }

  public appendClass(val: string): void {
    this.classes = this.classes + ' ' + val
  }

  public getClasses(): string {
    if (this.isTabHasFooter()) {
      this.classes = 'Menu_has_footer'
    } else {
      this.classes = ''
    }
    return this.classes
  }

  public getActiveId(): number {
    return this.activeId
  }

  private onClickMenu(e: any): void {
    const target = e.target.closest('button')
    if (!target) return

    const id = target.getAttribute('data-id')
    this.activeId = id

    if (this.onClick) this.onClick(id)
  }

  private getFooterItems(): (JSX.Element | undefined)[] {
    return this.items.map((i: TabMenuItem, idx: number) => {
      return i.getMenuFooter()
    })
  }

  private isTabHasFooter(): boolean {
    const selected = this.activeId
    const items = this.getFooterItems()
    const item = items.at(selected)

    return !!item
  }
}

const ContentStyles = styled.div``

const LinksStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;

  button.${baseClassName}__TabButton {
    padding: 2px;
    position: relative;
    white-space: nowrap;

    border-radius: 4px;
    color: ${({ theme }) => theme.colors.text.black};

    &:hover {
      .${baseClassName}__TabButtonCounter {
        color: ${({ theme }) => theme.colors.main};
      }
    }

    &:focus-visible {
      .TabsMenu__TabButtonCounter {
        color: ${({ theme }) => theme.colors.main};
      }
    }

    &.active {
      background: transparent;
      color: ${({ theme }) => theme.colors.main};

      .TabsMenu__TabButtonCounter {
        color: ${({ theme }) => theme.colors.main};
      }

      cursor: auto;
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.main};
    }

    &.active:before {
      position: absolute;
      top: 35px;
      content: "";
      background: ${({ theme }) => theme.colors.blue.default};
      width: 100%;
      height: 4px;
      border-radius: ${({ theme }) => theme.border.radius};
    }
  }

  &.TabsMenu__menus--dark {
    background: ${({ theme }) => theme.colors.black};

    .${baseClassName}__links-items {
      .disabled {
        color: ${({ theme }) => theme.colors.background.grey};

        .${baseClassName}__TabButtonCounter {
          color: ${({ theme }) => theme.colors.background.grey};
        }

        &:hover {
          color: ${({ theme }) => theme.colors.background.grey};
        }
      }

      button.${baseClassName}__TabButton:hover {
        color: ${({ theme }) => theme.colors.white};

        .${baseClassName}__TabButtonCounter {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }

    button.${baseClassName}__TabButton {
      color: ${({ theme }) => theme.colors.text.grey};
      background: transparent;

      &:hover {
        color: ${({ theme }) => theme.colors.text.grey};
      }

      &.active {
        color: ${({ theme }) => theme.colors.white};

        .${baseClassName}__TabButtonCounter {
          color: ${({ theme }) => theme.colors.white};
        }
      }

      &.active:before {
        background: #FFF;
      }

      .${baseClassName}__TabButtonCounter {
        color: ${({ theme }) => theme.colors.text.grey};
      }

      &.disabled:hover {
        color: ${({ theme }) => theme.colors.background.grey};

        .${baseClassName}__TabButtonCounter {
          color: ${({ theme }) => theme.colors.background.grey};
        }
      }
    }

    .TabsMenu__links-divider {
      background: transparent;
    }
  }

  .${baseClassName}__links-items {
    display: flex;
    gap: 27px;
    width: fit-content;

    button.disabled {
      background-color: transparent;

      &:hover {
        background-color: transparent;
      }

      .${baseClassName}__TabButtonCounter {
        color: ${({ theme }) => theme.colors.text.disabled};
      }
    }
  }

  .${baseClassName}__links-divider {
    margin-top: 11px;
    width: 100%;
    background: ${({ theme }) => theme.colors.grey.alt};
    height: 4px;
    border-radius: ${({ theme }) => theme.border.radius};
  }

  .${baseClassName}__TabButtonCounter {
    margin-left: 10px;
  }

  &.TabsMenu__menus--buttons {
    overflow: visible;

    .active:before {
      display: none;
    }

    .TabsMenu__links-items {
      outline: 2px solid ${({ theme }) => theme.colors.stroke.divider};
      border-radius: ${({ theme }) => theme.border.radius};
      gap: 3px;
      padding: 4px;
    }

    button.${baseClassName}__TabButton {
      color: ${({ theme }) => theme.colors.text.black};
      padding: 10px 59px;
      border-radius: ${({ theme }) => theme.border.radius};

      &:hover {
        background: ${({ theme }) => theme.colors.background.lightBlue};
      }

      &.active {
        background: ${({ theme }) => theme.colors.main};
        color: ${({ theme }) => theme.colors.text.white};
      }
    }
`

const StyledMenu = styled.div`
  background: #fff;
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 20px 20px 10px;
  margin-top: 30px;

  &.Menu_has_footer {
    padding-bottom: 0;
  }

  .MenuHasSort {
    padding-bottom: 0;
  }

  .Search__menu {
    outline: none;
    padding: 0;

    &:hover {
      outline: none;
    }

    .Search__input {
      outline: none;
      &:hover {
        outline: none;
      }
    }
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
    overflow-x: auto;
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

export { TabsManager, TabMenuItem, Themes, Types, StyledMenu }
