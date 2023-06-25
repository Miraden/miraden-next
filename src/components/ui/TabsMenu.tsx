import styled from "styled-components";
import {Button} from "@/components/ui/Button";
import cn from "classnames";

const baseClassName = 'TabsMenu'

class TabMenuItem {
  private readonly label: string;
  private readonly count: number;
  private readonly content: JSX.Element;
  private readonly isDisabled: boolean;

  constructor(label: string, count: number, content: JSX.Element, isDisabled: boolean = false) {
    this.label = label;
    this.content = content;
    this.count = count;
    this.isDisabled = isDisabled;
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
        disabled={this.isDisabled}
        attr={{'data-id': id}}
      >
        {this.label}
        {this.count > 0 && (<p
          className={btnCountClassName}>{this.count}</p>)}
      </Button>
    )
  }
}

enum Themes {
  Dark = "dark",
  Light = "light"
}

enum Types {
  Buttons = "buttons",
  Classic = "classic"
}

class TabsManager {
  private readonly items: Array<TabMenuItem>;
  public onClick: Function;
  private activeId: number;
  private readonly theme?: Themes;
  private readonly type?: Types;

  constructor(callback: Function, theme: Themes = Themes.Light, type: Types = Types.Classic) {
    this.items = []
    this.onClick = callback
    this.activeId = 0
    this.theme = theme
    this.type = type
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
        className={cn(className, className + "--" + this.theme, className + "--" + this.type)}
        onClick={(e) => this.onClickMenu(e)}
      >
        <div className={itemsClassName}>{items}</div>
        {this.type === Types.Classic && (<div className={dividerClassName}></div>)}
      </MenuStyles>
    )
  }

  public renderContent(selected: number): JSX.Element {
    const items = this.items.map((i, idx) => {
      return i.getContent()
    })

    const className = baseClassName + "__content"

    return (
      <ContentStyles
        className={cn(className, className + "--" + this.theme, className + "--" + this.type)}>
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
    padding: 2px;
    position: relative;

    border-radius: 4px;
    color: ${({theme}) => theme.colors.text.black};

    &:hover {
      .${baseClassName}__TabButtonCounter {
        color: ${({theme}) => theme.colors.main};
      }
    }

    &:focus-visible {
      .TabsMenu__TabButtonCounter {
        color: ${({theme}) => theme.colors.main};
      }
    }

    &.active {
      background: transparent;
      color: ${({theme}) => theme.colors.main};

      .TabsMenu__TabButtonCounter {
        color: ${({theme}) => theme.colors.main};
      }

      cursor: auto;
    }

    &:active {
      background-color: ${({theme}) => theme.colors.white};
      color: ${({theme}) => theme.colors.main};
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

  &.TabsMenu__menus--dark {
    background: ${({theme}) => theme.colors.black};

    .${baseClassName}__links-items {
      .disabled {
        color: ${({theme}) => theme.colors.background.grey};

        .${baseClassName}__TabButtonCounter {
          color: ${({theme}) => theme.colors.background.grey};
        }

        &:hover {
          color: ${({theme}) => theme.colors.background.grey};
        }
      }

      button.${baseClassName}__TabButton:hover {
        color: ${({theme}) => theme.colors.white};

        .${baseClassName}__TabButtonCounter {
          color: ${({theme}) => theme.colors.white};
        }
      }
    }

    button.${baseClassName}__TabButton {
      color: ${({theme}) => theme.colors.text.grey};
      background: transparent;

      &:hover {
        color: ${({theme}) => theme.colors.text.grey};
      }

      &.active {
        color: ${({theme}) => theme.colors.white};

        .${baseClassName}__TabButtonCounter {
          color: ${({theme}) => theme.colors.white};
        }
      }

      &.active:before {
        background: #FFF;
      }

      .${baseClassName}__TabButtonCounter {
        color: ${({theme}) => theme.colors.text.grey};
      }

      &.disabled:hover {
        color: ${({theme}) => theme.colors.background.grey};

        .${baseClassName}__TabButtonCounter {
          color: ${({theme}) => theme.colors.background.grey};
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

    button.disabled {
      background-color: transparent;

      &:hover {
        background-color: transparent;
      }

      .${baseClassName}__TabButtonCounter {
        color: ${({theme}) => theme.colors.text.disabled};
      }
    }
  }

  .${baseClassName}__links-divider {
    margin-top: 11px;
    width: 100%;
    background: ${({theme}) => theme.colors.grey.alt};
    height: 4px;
    border-radius: ${({theme}) => theme.border.radius};
  }

  .${baseClassName}__TabButtonCounter {
    margin-left: 10px;
  }

  &.TabsMenu__menus--buttons {
    .active:before {
      display: none;
    }

    .TabsMenu__links-items {
      outline: 2px solid ${({theme}) => theme.colors.stroke.divider};
      border-radius: ${({theme}) => theme.border.radius};
      gap: 3px;
      padding: 4px;
    }

    button.${baseClassName}__TabButton {
      color: ${({theme}) => theme.colors.text.black};
      padding: 10px 59px;
      border-radius: ${({theme}) => theme.border.radius};

      &:hover {
        background: ${({theme}) => theme.colors.background.lightBlue};
      }

      &.active {
        background: ${({theme}) => theme.colors.main};
        color: ${({theme}) => theme.colors.text.white};
      }
    }
`

export {TabsManager, TabMenuItem, Themes, Types}
