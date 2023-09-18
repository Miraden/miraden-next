import styled from 'styled-components'
import { PropsWithChildren } from 'react'
import cn from 'classnames'
import { useMainMenuDropDownContext } from '@/modules/Base/Header/components/CommonDropdown/MenuDropDownLayout'

interface Props {
  className?: string
  onClick?: Function
}

const MenuDropDownItem = (props: PropsWithChildren<Props>): JSX.Element => {
  const context = useMainMenuDropDownContext()

  return (
    <StyledItem
      className={cn(context.baseClass + 'Item', props.className)}
      baseClass={context.baseClass}
      onClick={(e: any) => {
        if (props.onClick) props.onClick(e)
      }}
    >
      {props.children}
    </StyledItem>
  )
}

const StyledItem = styled.div<{ baseClass: string }>`
  display: flex;
  width: 100%;
  border-top: 1px solid #7786a533;
  height: 42px;
  padding: 10px 20px;

  &:hover {
    background: #3a465d;
  }
`

export default MenuDropDownItem
