import styled from 'styled-components'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'
import Image from 'next/image'
import ProfileTabLayout from '@/modules/Customer/Profile/ProfileTabLayout'
import ProfileCommonSection from './ProfileCommonSection'
import { TextAreaInput } from '@/components/ui'
import TableKeyValue from '@/components/ui/Tables/TableKeyValue'
import ProfileTableItem from '@/modules/Customer/Profile/components/ProfileTableItem'
import {
  UserContactsDataProvider,
  UserPersonalDataProvider,
} from '@/modules/Customer/Profile/UserProfileDataProvider'
import { useCallback, useState } from 'react'
import { ProfilePersistPersonalData } from '@/modules/Customer/Profile/ProfilePersistManager'

const PersonalTab = (): JSX.Element => {
  const appContext = useAppContext()
  const [selectedPersonalItem, setSelectedPersonalItem] = useState<number>(-1)
  const [selectedContactsItem, setSelectedContactsItem] = useState<number>(-1)
  const [savePending, setSavePending] = useState<boolean>(false)

  const personalData = new UserPersonalDataProvider(appContext.userProfile)
  const contactsData = new UserContactsDataProvider(appContext.userProfile)

  const onPersonalItemSelect = useCallback((id: number) => {
    setSelectedPersonalItem(id)
  }, [])

  const onContactsItemSelect = useCallback((id: number) => {
    setSelectedContactsItem(id)
  }, [])

  const OnSaveReady = useCallback(async (value: Profile.PersistStruct) => {
    setSavePending(true)
    const persistManager = new ProfilePersistPersonalData()
    persistManager.update(value)
    const isSuccess = await persistManager.flush()
    setSavePending(false)
  }, [])

  return (
    <StyledTab>
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
          <TableKeyValue>
            {personalData.getAll().map((item, id) => {
              return (
                <ProfileTableItem
                  active={selectedPersonalItem === id}
                  key={id}
                  onValueSelect={(e: any) => onPersonalItemSelect(id)}
                  OnSaveReady={OnSaveReady}
                  item={item}
                  isServerResponse={savePending}
                />
              )
            })}
          </TableKeyValue>
        </ProfileCommonSection>
        <ProfileCommonSection>
          <h2 className={'SectionTitle'}>Контакты</h2>
          <TableKeyValue>
            {contactsData.getAll().map((item, id) => {
              return (
                <ProfileTableItem
                  active={id === selectedContactsItem}
                  key={id}
                  onValueSelect={(e: any) => onContactsItemSelect(id)}
                  OnSaveReady={OnSaveReady}
                  item={item}
                  isServerResponse={savePending}
                />
              )
            })}
          </TableKeyValue>
        </ProfileCommonSection>
        <ProfileCommonSection className={'AboutSection'}>
          <h2 className={'SectionTitle'}>О себе</h2>
          <div className="AboutSection__strip">
            Напишите коротко о ваших сильных сторонах и важных качествах. Про
            услуги и опыт напишите в специальных полях
          </div>
          <div className="AboutSection__textarea">
            <TextAreaInput
              maxLength={500}
              label={'О себе'}
              text={appContext.userProfile?.about}
            />
          </div>
        </ProfileCommonSection>
      </ProfileTabLayout>
    </StyledTab>
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
    gap: 15px;

    .userId {
      color: ${({ theme }) => theme.colors.grey.textGrey};
      display: flex;
      gap: 15px;
      align-items: center;
      margin-top: 3px;

      &:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 4px;
        height: 4px;
        background: ${({ theme }) => theme.colors.text.disabled};
        border-radius: 100%;
        margin-top: 1px;
      }
    }
  }

  .infoDateRegister {
    color: ${({ theme }) => theme.colors.grey.textGrey};
  }
`

const StyledTab = styled.div`
  .AboutSection {
    .SectionTitle {
      border: none;
    }

    &__textarea {
      padding: 30px 20px 20px;
      width: 82%;
    }

    &__strip {
      font-size: 14px;
      padding: 5px 20px;
      color: ${({ theme }) => theme.colors.main};
      background: ${({ theme }) => theme.colors.background.lightBlue};
    }
  }
`

export default PersonalTab
