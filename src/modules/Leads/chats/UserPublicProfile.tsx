import styled from 'styled-components'
import React from 'react'
import { VerifiedIcon } from '@/icons'
import { Sticker } from '@/components/ui'
import UserRating from '@/components/ui/Customer/UserRating'

interface Props {
  profile?: User.PublicProfile
  onlineStatus: User.OnlineStatus
}

const UserPublicProfile = (props: Props): JSX.Element => {
  return (
    <StyledProfile className={'UserPublicProfile Font_body_alt'}>
      <div className="UserPublicProfile--photo">
        {props.profile?.photo && <img src={props.profile.photo} alt="" />}
      </div>

      <div className="UserPublicProfile--user">
        <div className="UserPublicProfile--user_topLine">
          <div className="UserPublicProfile--name Font_Accent_16_S">
            {props.profile?.name} {props.profile?.surname}
          </div>
          <div className="UserPublicProfile--info">
            {props.profile?.isPassportVerified && (
              <VerifiedIcon className={'UserPublicProfile--verified'} />
            )}
            {props.profile?.isPro && (
              <Sticker theme="black" className="UserPublicProfile--sticker">
                pro
              </Sticker>
            )}

            {props.profile?.rating && (
              <div className="UserPublicProfile--rating">
                <UserRating rating={props.profile.rating} />
              </div>
            )}
          </div>
        </div>

        <div className="UserPublicProfile--user_botLine">
          <div className="UserPublicProfile--onlineStatus">
            {props.onlineStatus.isOnline && (
              <div className={'UserPublicProfile--online'}>Online</div>
            )}
            {!props.onlineStatus.isOnline && props.onlineStatus.lastOnlineDate != '' && (
              <div className={'UserPublicProfile--offline'}>
                В сети {props.onlineStatus.lastOnlineDate}
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledProfile>
  )
}

const StyledProfile = styled.div`
  display: flex;
  flex-direction: row;
  min-width: auto;
  padding: 0;
  margin: 0;
  gap: 15px;
  align-items: center;

  .UserPublicProfile {
    &--name {
      margin: 0;
      color: ${({ theme }) => theme.colors.black};
    }

    &--online {
      color: ${({ theme }) => theme.colors.success};
    }

    &--info {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &--onlineStatus {
      width: 100%;
    }

    &--user {
      flex-grow: 1;
      flex-wrap: wrap;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }

    &--user_topLine {
      display: flex;
      gap: 15px;
    }

    &--onlineStatus {
      color: ${({ theme }) => theme.colors.text.grey};
    }

    &--photo {
      width: 48px;
      min-width: 48px;
      height: 48px;

      img {
        width: 48px;
        height: 48px;
        border-radius: 100%;
      }
    }
  }
`

export default UserPublicProfile
