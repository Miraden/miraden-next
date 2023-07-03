import { theme } from '../../../../styles/tokens'
import { DropdownInput } from '@/components/ui/DropdownInput'
import { Button } from '@/components/ui'
import { SwapIcon } from '@/icons/SwapIcon'
import React, { useState } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  options: string[]
}

const DefaultProps: Props = {
  className: undefined,
  options: [],
}

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

const MenuSort = (args: Props) => {
  const props = Object.assign(DefaultProps, args)

  return (
    <Styled>
      <DropdownInput
        icon={<SwapIcon attr={{ className: 'Sort__mobile' }} />}
        options={props.options}
        className={'Sort'}
        placeholder={'Без диапазона'}
      />
    </Styled>
  )
}

const Styled = styled.div`
  display: flex;
  gap: 20px;

  .Sort__mobile {
    display: none;
  }

  .Dropdown__menu_active {
    border-radius: 10px;
    margin-top: 5px;
  }

  .DropdownInput_select_active {
    border-radius: 10px;
  }

  @media (max-width: ${mobile}) {
    .Sort .DropdownInput_select,
    .Sort .DropdownInput_select_active {
      padding: 8px;
      outline: none;

      &:hover {
        outline: none;
      }

      .Sort__mobile {
        margin: 0;
      }

      svg {
        transform: rotate(0);
      }
    }

    .DropdownInput_selectLabel {
      & > span {
        display: none;
      }

      .DropdownInput__arrow {
        display: none;
      }

      .Sort__mobile {
        display: block;
        margin: 0;
        padding: 0;
      }
    }
`

export { MenuSort }
