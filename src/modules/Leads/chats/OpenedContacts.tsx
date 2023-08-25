import styled from 'styled-components'
import UserPublicProfile from '@/modules/Leads/chats/UserPublicProfile'

interface Props {
  profile?: User.FullProfile
}

const OpenedContacts = (props: Props): JSX.Element => {
  return (
    <StyledContact>
      <div className="ContactSection">
        <div className="ContactSection__key">Пользователь</div>
        <div className="ContactSection__value">
          <UserPublicProfile
            profile={props.profile}
            onlineStatus={{
              isOnline: false,
              lastOnlineDate: '5 часов назад',
            }}
          />
        </div>
      </div>

      {props.profile?.sellerStatus && (
        <div className="ContactSection">
          <div className="ContactSection__key">Статус</div>
          <div className="ContactSection__value">
            {props.profile.sellerStatus}
          </div>
        </div>
      )}

      {props.profile?.mobile && (
        <div className="ContactSection">
          <div className="ContactSection__key">Телефон</div>
          <div className="ContactSection__value">{props.profile.mobile}</div>
        </div>
      )}

      {props.profile?.email && (
        <div className="ContactSection">
          <div className="ContactSection__key">Почта</div>
          <div className="ContactSection__value">{props.profile.email}</div>
        </div>
      )}

      {props.profile?.telegram && (
        <div className="ContactSection">
          <div className="ContactSection__key">Telegram</div>
          <div className="ContactSection__value">{props.profile.telegram}</div>
        </div>
      )}

      {props.profile?.whatsapp && (
        <div className="ContactSection">
          <div className="ContactSection__key">WhatsApp</div>
          <div className="ContactSection__value">{props.profile.whatsapp}</div>
        </div>
      )}

      {props.profile?.viber && (
        <div className="ContactSection">
          <div className="ContactSection__key">Viber</div>
          <div className="ContactSection__value">{props.profile.viber}</div>
        </div>
      )}

      {props.profile?.facebook && (
        <div className="ContactSection">
          <div className="ContactSection__key">Facebook</div>
          <div className="ContactSection__value">{props.profile.facebook}</div>
        </div>
      )}

      {props.profile?.instagram && (
        <div className="ContactSection">
          <div className="ContactSection__key">Instagram</div>
          <div className="ContactSection__value">{props.profile.instagram}</div>
        </div>
      )}

      {props.profile?.registeredTransl && (
        <div className="ContactSection">
          <div className="ContactSection__key">На сайте</div>
          <div className="ContactSection__value">
            {props.profile.registeredTransl.years}{' '}
            {props.profile.registeredTransl.months}{' '}
            {props.profile.registeredTransl.days}
          </div>
        </div>
      )}

      {props.profile?.about && (
        <div className="ContactSection">
          <div className="ContactSection__key">О себе</div>
          <div className="ContactSection__value">{props.profile.about}</div>
        </div>
      )}
    </StyledContact>
  )
}

const StyledContact = styled.div`
  .ContactSection {
    display: flex;
    padding: 20px 20px 19px;
    border-bottom: 1px solid #e1edfd;

    &__key {
      min-width: 150px;
      color: #7786a5;
    }

    &__value {
      flex-grow: 1;
    }
  }
`

export default OpenedContacts
