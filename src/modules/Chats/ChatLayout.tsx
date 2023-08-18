import { PropsWithChildren, useEffect, useState } from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { theme } from '../../../styles/tokens'
import { useWindowSize, WindowSize } from '@/hooks/useWindowSize'

interface Props {
  className?: string
  viewState?: ViewStates
}

export enum ViewStates {
  List = 'list',
  Messages = 'messages',
}

const mobile = theme.breakpoints.mobile.max
const tablet = theme.breakpoints.tablet.max
let inMobileMode: boolean = false

const ChatLayout = (props: PropsWithChildren<Props>): JSX.Element => {
  const [viewState, setViewState] = useState<ViewStates>(ViewStates.List)
  useWindowSize((size: WindowSize) => {
    inMobileMode = size.width < tablet
  })

  useEffect(() => {
    if (props.viewState) setViewState(props.viewState)
  }, [props])

  return (
    <StyledChat
      className={cn(props.className, 'ChatLayout', {
        ListView: viewState === ViewStates.List && inMobileMode,
        MessageView: viewState === ViewStates.Messages && inMobileMode,
      })}
    >
      {props.children}
    </StyledChat>
  )
}

const StyledChat = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 100%;
  justify-content: space-between;

  &.ListView {
    .ChatMessages {
      display: none;
    }

    .ChatSidebar {
      display: flex;
    }
  }

  &.MessageView {
    .ChatSidebar {
      display: none;
    }

    .ChatMessages {
      display: flex;
    }
  }

  .ChatSidebar {
    width: 35.1%;
    height: calc(100vh - 114px);
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .ChatMessages {
    flex-grow: 1;
  }

  @media (max-width: ${tablet}px) {
    flex-direction: column;
    padding-top: 0;
    gap: 0;

    .ChatSidebar {
      width: 100%;
      height: 100vh;
      gap: 10px;
    }
  }

  @media (max-width: ${mobile}px) {
    .ChatSidebar {
      gap: 0;
    }
  }
`

export default ChatLayout
