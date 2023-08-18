import { Sticker } from '@/components/ui'
import { VerifiedIcon } from '@/icons'
import { PerformerIcon } from '@/icons/PerformerIcon'
import { ApplicationsFooter } from '@/modules/Base/ApplicationsFooter'
import Image from 'next/image'
import styled from 'styled-components'
import cn from 'classnames'
import { theme } from '../../../../styles/tokens'

interface Props {
  className?: string
  preview: Chat.RoomsList
  locale: string
}

const mobile = theme.breakpoints.mobile.max
const tablet = theme.breakpoints.tablet.max

const ChatRoom = (props: Props) => {
  return (
    <StyledRoom className={cn('chatRoom', props.className)}>
      <div className="ChatRoom__left">
        <div className="ChatRoom__image">
          <Image
            width={60}
            height={60}
            src={'/u/users/' + props.preview.photo}
            alt={'avatar'}
          />
        </div>
      </div>
      <div className="ChatRoom__center">
        <div className="ChatRoom__user">
          <div className="User__info">
            <div className="User__name Font_Accent_16_S">
              {props.preview.name} {props.preview.surname}
            </div>
            <div className="User__verified">
              {props.preview.isPassportVerified && <VerifiedIcon />}
            </div>
            <div className="User__pro">
              {props.preview.isRolePro && <Sticker theme="black">PRO</Sticker>}
            </div>
          </div>
        </div>
      </div>
      <div className="ChatRoom__right Font_captions_1">
        <div className="ChatRoom__date"></div>
      </div>
    </StyledRoom>
  )
}

function formatCreatedAt(date: string, locale: string): string {
  const _date = new Date(date)
  const d = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  })

  return d.format(_date)
}

const StyledRoom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  gap: 15px;
  color: ${({ theme }) => theme.colors.text.grey};

  .User__info {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .User__name {
    color: ${({ theme }) => theme.colors.text.black};
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .User__verified {
    line-height: 1;
  }

  .ChatRoom__unread {
    color: #fff;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.main};
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

    img {
      border-radius: 100%;
    }
  }

  @media (max-width: ${tablet}px) {
    padding: 10px 20px;
  }
`

export { ChatRoom }
