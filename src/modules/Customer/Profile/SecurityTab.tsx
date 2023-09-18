import { useAppContext } from '@/infrastructure/nextjs/useAppContext'
import ProfileTabLayout from '@/modules/Customer/Profile/ProfileTabLayout'
import ProfileCommonSection from '@/modules/Customer/Profile/ProfileCommonSection'
import { StarIcon } from '@/icons'
import { Button } from '@/components/ui'
import styled from 'styled-components'

const SecurityTab = (): JSX.Element => {
  const appContext = useAppContext()

  return (
    <StyledTab>
      <ProfileTabLayout>
        <ProfileCommonSection>
          <h2 className={'SectionTitle'}>Данные для авторизации</h2>
          <div className="table">
            <div className="table-item">
              <div className="table-item-key">
                <StarIcon /> Логин
              </div>
              <div className="table-item-value">
                {appContext.userProfile?.email}
              </div>
            </div>
            <div className="table-item">
              <div className="table-item-key">
                <StarIcon /> Номер телефона
              </div>
              <div className="table-item-value">
                {appContext.userProfile?.mobile}
              </div>
            </div>
          </div>
        </ProfileCommonSection>
        <ProfileCommonSection className={'RemoveSection'}>
          <h2 className={'SectionTitle'}>Удалить аккаунт</h2>
          <p>
            При удалении аккаунта связанные с ним данные будут удалены. Аккаунт
            будет заморожен на 30 дней, в течение которых вы сможете отменить
            удаление
          </p>
          <Button compact className={'DeleteAccount'} type={'button'}>
            Удалить аккаунт
          </Button>
        </ProfileCommonSection>
      </ProfileTabLayout>
    </StyledTab>
  )
}

const StyledTab = styled.div`
  .RemoveSection {
    padding: 20px;

    p {
      color: ${({ theme }) => theme.colors.grey.textGrey};
      max-width: 85%;
    }

    .SectionTitle {
      border: none;
      padding: 0;
      margin-bottom: 10px;
    }
  }

  .DeleteAccount {
    background: ${({ theme }) => theme.colors.text.error};

    margin-top: 30px;

    &:hover {
      background: ${({ theme }) => theme.colors.text.error};
    }
  }
`

export default SecurityTab
