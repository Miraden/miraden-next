import { theme } from '../../../../styles/tokens'
import { DropdownInput } from '@/components/ui/DropdownInput'
import { Button } from '@/components/ui'
import { SwapIcon } from '@/icons/SwapIcon'
import React, { useState } from 'react'

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

  const [optionsVisible, setOptionsVisible] = useState(false)
  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setOptionsVisible(!optionsVisible)
  }

  return (
    <>
      <DropdownInput
        optionsVisible={optionsVisible}
        options={props.options}
        className={'Sort'}
        placeholder={'Без диапазона'}
      />
      <Button
        secondary
        className={'Sort__mobile'}
        onClick={e => handleSortClick(e)}
      >
        <SwapIcon />
      </Button>
    </>
  )
}

export { MenuSort }
