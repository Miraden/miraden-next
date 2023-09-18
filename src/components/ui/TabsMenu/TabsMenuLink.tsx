import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { useTabsMenuContext } from '@/components/ui/TabsMenu/TabsMenuLayout'
import cn from 'classnames'

interface Props {
  className?: string
  isActive: boolean
  onClick: Function
}

const TabsMenuLink = (props: PropsWithChildren<Props>): JSX.Element => {
  const context = useTabsMenuContext()

  return (
    <StyledLink
      baseClass={context.baseClass}
      className={cn(context.baseClass + '__item', props.className, {
        isActive: props.isActive,
      })}
      onClick={e => {
        props.onClick(e)
      }}
    >
      {props.children}
    </StyledLink>
  )
}

const StyledLink = styled.div<{ baseClass: string }>`
  cursor: pointer;
  position: relative;

  &.isActive {
    cursor: auto;
    color: ${({ theme }) => theme.colors.main};

    &:before {
      position: absolute;
      top: 35px;
      content: '';
      background: ${({ theme }) => theme.colors.blue.default};
      width: 100%;
      height: 4px;
      border-radius: ${({ theme }) => theme.border.radius};
    }
  }
`

export default TabsMenuLink
