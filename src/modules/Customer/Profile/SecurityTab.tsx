import { useAppContext } from '@/infrastructure/nextjs/useAppContext'
import ProfileTabLayout from '@/modules/Customer/Profile/ProfileTabLayout'
import ProfileCommonSection from '@/modules/Customer/Profile/ProfileCommonSection'
import { Button } from '@/components/ui'
import styled from 'styled-components'
import TableKeyValue from '@/components/ui/Tables/TableKeyValue'
import { UserSecurityDataProvider } from '@/modules/Customer/Profile/UserProfileDataProvider'
import { useCallback, useState } from 'react'
import { ProfilePersistPersonalData } from '@/modules/Customer/Profile/ProfilePersistManager'
import ProfileTableItem from '@/modules/Customer/Profile/components/ProfileTableItem'

const SecurityTab = (): JSX.Element => {
  const appContext = useAppContext()
  const [selectedTableItem, setSelectedTableItem] = useState<number>(-1)
  const [savePending, setSavePending] = useState<boolean>(false)

  const personalData = new UserSecurityDataProvider(appContext.userProfile)

  const onTableItemSelect = useCallback((id: number) => {
    setSelectedTableItem(id)
  }, [])

  const saveNewValue = useCallback(async (value: Profile.PersistStruct) => {
    setSavePending(true)
    const persistManager = new ProfilePersistPersonalData()
    persistManager.update(value)
    const isSuccess = await persistManager.flush()
    setSavePending(false)
  }, [])

  return (
    <StyledTab>
      <ProfileTabLayout>
        <ProfileCommonSection>
          <h2 className={'SectionTitle'}>Данные для авторизации</h2>
          <TableKeyValue>
            {personalData.getAll().map((item, id) => {
              return (
                <ProfileTableItem
                  key={id}
                  active={id === selectedTableItem}
                  OnSaveReady={saveNewValue}
                  onValueSelect={(e: any) => onTableItemSelect(id)}
                  savePending={savePending}
                  item={item}
                  isServerResponse={savePending}
                />
              )
            })}
          </TableKeyValue>
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
    background: ${({ theme }) => theme.colors.error};

    margin-top: 30px;

    &:hover {
      background: ${({ theme }) => theme.colors.error};
    }
  }

  .Notifications {
    position: fixed;
    z-index: 1000;
    top: 20px;
    right: 20px;
    transform: translateX(-50%);
  }
`

export default SecurityTab
