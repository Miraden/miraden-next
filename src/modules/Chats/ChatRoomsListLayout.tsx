import { PropsWithChildren } from 'react'
import styled from "styled-components";

interface Props {
  className?: string
}

const ChatRoomsListLayout = (props: PropsWithChildren<Props>): JSX.Element => {
  return <Styled className={"ChatRoomsLayout"}>{props.children}</Styled>
}

const Styled = styled.div`
  margin-top: 20px;
  background: #fff;
  height: 100%;
  display: flex;
  overflow: hidden;
  border-radius: ${({theme}) => theme.border.radius};

  .List {
    margin-top: 20px;
    height: 100%;
    overflow: auto;

    &Item {
      &__IsActive {
        .SingleChatContainer {
          background: ${({theme}) => theme.colors.background.lightBlue};
        }
      }
    }
  }

  .ChatSelector {
    border-bottom: 4px solid ${({theme}) => theme.colors.fields.stroke};

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
      border-bottom: 2px solid ${({theme}) => theme.colors.stroke.grey};
      border-radius: 0;
    }
  }
`

export default ChatRoomsListLayout
