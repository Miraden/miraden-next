import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { useTabsMenuContext } from '@/components/ui/TabsMenu/TabsMenuLayout'
import cn from 'classnames'

interface Props {
  className?: string
}

const TabMenuLinks = (props: PropsWithChildren<Props>): JSX.Element => {
  const context = useTabsMenuContext()

  return (
    <StyledLinks
      className={cn(context.baseClass + '__wrapper', props.className)}
      baseClass={context.baseClass}
    >
      <div className={context.baseClass + '__items'}>{props.children}</div>

      <div className={context.baseClass + '__divider'}></div>
    </StyledLinks>
  )
}

const StyledLinks = styled.div<{ baseClass: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  overflow-x: auto;

  .${({ baseClass }) => baseClass}__divider {
    margin-top: 11px;
    width: 100%;
    background: #E1EDFD;
    height: 4px;
    border-radius: 10px;
  }
}

.${({ baseClass }) => baseClass}__items {
  display: flex;
  gap: 27px;
  width: fit-content;
}
`

export default TabMenuLinks
