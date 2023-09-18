import styled from 'styled-components'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'
import Image from 'next/image'
import { StarIcon } from '@/icons'
import ProfileTabLayout from '@/modules/Customer/Profile/ProfileTabLayout'
import ProfileCommonSection from './ProfileCommonSection'

const PersonalTab = (): JSX.Element => {
  const appContext = useAppContext()

  return (
    <ProfileTabLayout>
      <StyledSection className="baseSection">
        <div className="baseSection--left">
          {appContext.userProfile && (
            <Image
              src={appContext.userProfile?.photo}
              width={170}
              height={170}
              alt={'user_photo'}
            />
          )}
        </div>
        <div className="baseSection--right">
          <div className="baseSection--infoTop">
            <div className="userName Font_headline_4">
              {appContext.userProfile?.name} {appContext.userProfile?.surname}
            </div>
            <div className="userId Font_body_base">
              ID {appContext.userProfile?.id}
            </div>
          </div>
          <div className="infoDateRegister Font_body_alt">
            На Miraden с {appContext.userProfile?.registeredAt}
          </div>
          <div className="userStatus Font_body_base">
            {appContext.userProfile?.sellerStatus}
          </div>
        </div>
      </StyledSection>
      <ProfileCommonSection>
        <h2 className={'SectionTitle'}>Личные данные</h2>
        <div className="table">
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Статус
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.sellerStatus}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Имя
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.name}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Фамилия
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.surname}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Отчество
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.patronymic}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Пол
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.sex}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Дата рождения
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.birthDay}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Язык
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.language}
            </div>
          </div>
        </div>
      </ProfileCommonSection>

      <ProfileCommonSection>
        <h2 className={'SectionTitle'}>Контакты</h2>
        <div className="table">
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Электронная почта
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.email}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Телефон
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.mobile}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> WhatsApp
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.whatsapp}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Telegram
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.telegram}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Viber
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.viber}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Zoom
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.zoom}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Instagram
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.instagram}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Facebook
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.facebook}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> YouTube
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.youtube}
            </div>
          </div>
          <div className="table-item">
            <div className="table-item-key">
              <StarIcon /> Сайт
            </div>
            <div className="table-item-value">
              {appContext.userProfile?.site}
            </div>
          </div>
        </div>
      </ProfileCommonSection>
    </ProfileTabLayout>
  )
}

const StyledSection = styled.section`
  background: #fff;
  border-radius: ${({ theme }) => theme.border.radius};

  &.baseSection {
    display: flex;
    padding: 20px;
    gap: 20px;
  }

  .baseSection {
    &--left {
      width: 170px;
      height: 170px;

      img {
        border-radius: ${({ theme }) => theme.border.radius};
      }
    }

    &--right {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }

  .baseSection--infoTop {
    display: flex;
    align-items: center;
    gap: 20px;

    .userId {
      color: ${({ theme }) => theme.colors.grey.textGrey};
    }
  }

  .infoDateRegister {
    color: ${({ theme }) => theme.colors.grey.textGrey};
  }
`

export default PersonalTab
