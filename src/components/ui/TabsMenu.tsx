import styled from "styled-components";
import {Button} from "@/components/ui/Button";

const baseClassName = 'TabsMenu'

class TabMenuItem {
  private readonly label: string;
  private readonly count: number;
  private readonly content: JSX.Element;

  constructor(label: string, count: number, content: JSX.Element) {
    this.label = label;
    this.content = content;
    this.count = count;
  }

  getContent(): JSX.Element {
    return this.content
  }

  getMenu(id: number, active: boolean = false): JSX.Element {
    const btnClassName = baseClassName + "__TabButton"
    const btnCountClassName = btnClassName + "Counter Color_text_grey"
    return (
      <Button
        tertiary
        className={btnClassName}
        active={active}
        attr={{'data-id': id}}
      >
        {this.label}
        {this.count > 0 && (<p
          className={btnCountClassName}>{this.count}</p>)}
      </Button>
    )
  }
}

class TabsManager {
  private readonly items: Array<TabMenuItem>;
  public onClick: Function;
  private activeId: number;

  constructor(items: Array<TabMenuItem> = [], callback: Function) {
    this.items = items
    this.onClick = callback
    this.activeId = 0
  }

  public addItem(item: TabMenuItem) {
    this.items.push(item)
  }

  public renderMenus(selected: number) {
    const items = this.items.map((i, idx) => {
      const active = selected == idx
      return i.getMenu(idx, active)
    })

    const className = baseClassName + "__menus"
    const itemsClassName = baseClassName + "__links-items"
    const dividerClassName = baseClassName + "__links-divider"

    return (
      <MenuStyles
        className={className}
        onClick={(e) => this.onClickMenu(e)}
      >
        <div className={itemsClassName}>{items}</div>
        <div className={dividerClassName}></div>
      </MenuStyles>
    )
  }

  public renderContent(selected: number): JSX.Element {
    const items = this.items.map((i, idx) => {
      return i.getContent()
    })

    return (
      <ContentStyles className="TabsMenu__content">
        {items.at(selected)}
      </ContentStyles>
    )
  }

  public getActiveId(): number {
    return this.activeId
  }

  private onClickMenu(e: any): void {
    const target = e.target.closest('button')
    if (!target) return

    const id = target.getAttribute('data-id')
    this.activeId = id

    this.onClick(id)
  }
}

const ContentStyles = styled.div`

`

const MenuStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  button.${baseClassName}__TabButton {
    padding: 0;
    position: relative;

    &:hover {
      p {
        color: ${({theme}) => theme.colors.blue.default} !important;
      }
    }

    &:focus {
      background: transparent;
    }

    &:not(:first-child) {
      margin-left: 30px;
    }

    &.active:before {
      position: absolute;
      top: 35px;
      content: "";
      background: ${({theme}) => theme.colors.blue.default};
      width: 100%;
      height: 4px;
      border-radius: ${({theme}) => theme.border.radius};
    }
  }

  .${baseClassName}__links-items {
    display: flex;
  }

  .${baseClassName}__links-divider {
    margin-top: 15px;
    width: 100%;
    background: ${({theme}) => theme.colors.grey.alt};
    height: 4px;
    border-radius: ${({theme}) => theme.border.radius};
  }

  .${baseClassName}__TabButtonCounter {
    margin-left: 10px;
  }
`

export {TabsManager, TabMenuItem}
