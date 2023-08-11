import { Sticker } from '@/components/ui'
import { VerifiedIcon } from '@/icons'
import { PerformerIcon } from '@/icons/PerformerIcon'
import { ApplicationsFooter } from '@/modules/Base/ApplicationsFooter'
import Image from 'next/image'
import styled from 'styled-components'
import cn from 'classnames'
import {theme} from "../../../../styles/tokens";

interface Props {
  className?: string
  image?: any
  name?: string
  isPro?: boolean
  message?: string
  isVerified?: boolean
  isPerformer?: boolean
  unreadMessages?: number

  time?: string
}

const mobile = theme.breakpoints.mobile.max
const tablet = theme.breakpoints.tablet.max

const ChatRoom = (props: Props) => {
  return (
    <StyledRoom className={cn('chatRoom', props.className)}>
      <div className="ChatRoom__left">
        <div className="ChatRoom__image"><Image width={60} height={60} src={props.image} alt={"avatar"}/></div>
      </div>
      <div className="ChatRoom__center">
        <div className="ChatRoom__user">
          <div className="User__info">
            <div className="User__name Font_Accent_16_S">Анастасия Петрова</div>
            <div className="User__verified"><VerifiedIcon/></div>
            <div className="User__pro"><Sticker theme="black">PRO</Sticker></div>
          </div>
          <div className="User__message">Добрый день, Александр, по вашей заявке — Недвижимость на Северном</div>
        </div>
      </div>
      <div className="ChatRoom__right Font_captions_1">
        <div className="ChatRoom__date">12:06</div>
        <div className="ChatRoom__unread Font_Accent_14_m">11</div>
      </div>
    </StyledRoom>
  )
}

const StyledRoom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  gap: 15px;
  color: ${({theme}) => theme.colors.text.grey};

  .User__info {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .User__name {
    color: ${({theme}) => theme.colors.text.black};
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .User__verified {
    line-height: 1;
  }

  .ChatRoom__unread {
    color: #FFF;
    border-radius: 20px;
    background: ${({theme}) => theme.colors.main};
    padding: 4px 8px;
  }

  .ChatRoom__left,
  .ChatRoom__right,
  .ChatRoom__center {
    display: flex;
    align-items: center;
  }

  .ChatRoom__right {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .ChatRoom__center {
    flex-grow: 1;
    overflow: hidden;
  }

  .ChatRoom__user {
    width: 100%;
    white-space: nowrap;
  }

  .User__message {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  .ChatRoom__image {
    min-width: 60px;
  }

  @media (max-width: ${tablet}px) {
    padding: 10px 20px;
  }
`

export { ChatRoom }
