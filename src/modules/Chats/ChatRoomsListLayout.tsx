import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import cn from 'classnames'

interface Props {
  className?: string
}

const ChatRoomsListLayout = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Styled className={cn('ChatRoomsLayout', props.className)}>
      {props.children}
    </Styled>
  )
}

const Styled = styled.div`
  background: #fff;
  display: flex;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.border.radius};
  height: 100%;
  position: relative;

  &.isBusy:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    width: 100%;
    height: 100%;
  }

  .List {
    margin-top: 20px;
    height: 100%;
    overflow: auto;

    &Item {
      &__IsActive {
        .SingleChatContainer {
          background: ${({ theme }) => theme.colors.background.lightBlue};
        }
      }
    }
  }

  .ChatSelector {
    border-bottom: 4px solid ${({ theme }) => theme.colors.fields.stroke};

    .DropdownInput_select {
      width: 100%;
      max-width: 100%;
      padding: 4px 0;
      outline: none;
    }

    .DropdownInput_select_active {
      outline: none;
      width: 100%;
      max-width: 100%;
      padding: 4px 0;
    }

    .Dropdown__menu_active {
      top: 8px;
      outline: none;
      border-bottom: 2px solid ${({ theme }) => theme.colors.stroke.grey};
      border-radius: 0;
    }
  }
`

export default ChatRoomsListLayout
