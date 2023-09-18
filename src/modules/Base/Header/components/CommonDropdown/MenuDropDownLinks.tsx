import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { useMainMenuDropDownContext } from '@/modules/Base/Header/components/CommonDropdown/MenuDropDownLayout'

interface Props {
  className?: string
}

const MenuDropDownLinks = (props: PropsWithChildren<Props>): JSX.Element => {
  const context = useMainMenuDropDownContext()
  return (
    <StyledComponent
      className={cn(context.baseClass + 'Links', props.className)}
      baseClass={context.baseClass}
    >
      {props.children}
    </StyledComponent>
  )
}

const StyledComponent = styled.div<{ baseClass: string }>`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid transparent;

  .${({ baseClass }) => baseClass}Item {
    &:first-of-type {
      border-top-color: transparent;
    }

    &:last-of-type {
      border-bottom-left-radius: ${({ theme }) => theme.border.radius};
      border-bottom-right-radius: ${({ theme }) => theme.border.radius};
    }
  }
`

export default MenuDropDownLinks
