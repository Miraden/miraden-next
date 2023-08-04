import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui'
import styled from 'styled-components'

interface Props {
  className: string
  alwaysVisible: number
  intl: {
    more: string
    less: string
  }
}

export enum ButtonFoldsFormatOptions {
  Count = '%c',
}

const ButtonFoldGroup = (
  props: React.PropsWithChildren<Props>
): JSX.Element => {
  const [visibleItems, setVisibleItems] = useState<ReactNode[]>([])
  const [showAll, setShowAll] = useState<boolean>(false)
  const [moreLabel, setMoreLabel] = useState<string>('')
  const [invisibleItems, setInvisibleItems] = useState<ReactNode[]>([])

  useEffect(() => {
    const items = React.Children.toArray(props.children)
    if (props.alwaysVisible >= items.length) {
      setShowAll(true)
      setInvisibleItems([])
    }
    if (showAll) {
      setMoreLabel(formatString(props.intl.less, null))
      setVisibleItems(items)
      setInvisibleItems([])
    }
    if (!showAll) {
      setVisibleItems(items.slice(0, props.alwaysVisible))
      const lastIndex = items.findLastIndex(i => i)
      setInvisibleItems(items.slice(props.alwaysVisible, lastIndex + 1))
      setMoreLabel(formatString(props.intl.more, invisibleItems.length))
    }
  }, [
    props.children,
    props.alwaysVisible,
    showAll,
    visibleItems.length,
    props.intl.less,
    props.intl.more,
    invisibleItems.length,
  ])

  const onMoreButtonClick = useCallback(
    (e: any) => {
      setShowAll(!showAll)
    },
    [showAll]
  )

  return (
    <StyledFold className={props.className}>
      {visibleItems}
      <Button
        className={'ButtonFoldGroup__More'}
        request
        compact
        onClick={onMoreButtonClick}
      >
        {moreLabel}
      </Button>
    </StyledFold>
  )
}

function formatString(str: string, val: string | number | null): string {
  if (val === null) return str

  let formattedString = str
  if (str.includes(ButtonFoldsFormatOptions.Count)) {
    formattedString = str.replace(ButtonFoldsFormatOptions.Count, String(val))
  }

  return formattedString
}

const StyledFold = styled.div`
  .ButtonFoldGroup__More {
    color: ${({ theme }) => theme.colors.main};
  }
`

export default ButtonFoldGroup
