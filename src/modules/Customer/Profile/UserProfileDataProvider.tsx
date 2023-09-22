import { StarIcon } from '@/icons'
import React from 'react'
import { TextInput } from '@/components/ui/TextInput'
import { DropdownInput } from '@/components/ui/DropDowns/DropdownInput'

class PersonalProviderItem {
  private Key: JSX.Element
  private FieldName: string
  private editable: boolean
  private label: string
  private editComponent?: JSX.Element
  private selectedData: Profile.PersistStruct
  private isValid: boolean

  constructor(
    key: JSX.Element,
    fieldName: string | undefined | null,
    isEditable: boolean,
    label: string,
    editComp?: JSX.Element
  ) {
    this.Key = key
    this.FieldName = String(fieldName)
    this.editable = isEditable
    this.label = label
    this.editComponent = editComp
    this.selectedData = { value: '', label: '' }
    this.isValid = false
  }

  public getKey(): JSX.Element {
    return this.Key
  }

  public getValue(): string {
    return this.FieldName
  }

  public setValue(val: string): void {
    this.FieldName = val
  }

  public getEditable(): JSX.Element {
    return this.editComponent as JSX.Element
  }

  public getLabel(): string {
    return this.label
  }

  public isEditable(): boolean {
    return this.editable
  }

  public getEditComponent(): JSX.Element | undefined {
    return this.editComponent
  }

  public setSelectedData(val: Profile.PersistStruct): void {
    this.selectedData = val
  }

  public getSelectedData(): Profile.PersistStruct {
    return this.selectedData
  }

  public IsValid(): boolean {
    return this.isValid
  }

  public setValid(val: true): void {
    this.isValid = val
  }
}

class UserProfileDataProvider {
  private data: PersonalProviderItem[]

  constructor() {
    this.data = []
  }

  public add(item: PersonalProviderItem): void {
    this.data.push(item)
  }

  public getAll(): PersonalProviderItem[] {
    return this.data
  }

  public findByKey(key: string): PersonalProviderItem | null {
    const found = this.data.find((item, id) => {
      return item.getLabel() === key
    })

    if (!found) return null

    return found
  }

  public clear(): void {
    this.data = []
  }
}

class UserPersonalDataProvider extends UserProfileDataProvider {
  public constructor(user: User.FullProfile | null) {
    super()
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Статус
          </>
        ),
        String(user?.sellerStatus),
        true,
        'sellerStatus',
        (
          <DropdownInput
            options={[
              { label: 'Клиент', value: 'client' },
              {
                label: 'Риэлтор',
                value: 'realtor',
              },
              {
                label: 'АН',
                value: 'estate',
              },
              {
                label: 'Застройщик',
                value: 'builder',
              },
              {
                label: 'Владелец',
                value: 'owner',
              },
            ]}
            placeholder={'Статус'}
            selected={e => {
              const selectedData = e as Profile.PersistStruct
              const item = this.findByKey('sellerStatus')
              if (!item) return
              if (selectedData.label !== '' && selectedData.value !== '') {
                item.setValid(true)
                item.setSelectedData(selectedData)
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Имя
          </>
        ),
        String(user?.name),
        true,
        'name',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('name')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Фамилия
          </>
        ),
        user?.surname,
        true,
        'surname',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('surname')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Отчество
          </>
        ),
        user?.patronymic,
        true,
        'patronymic',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('patronymic')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Пол
          </>
        ),
        user?.sex,
        true,
        'sex',
        (
          <DropdownInput
            options={[
              { label: 'Мужчина', value: 'male' },
              {
                label: 'Женщина',
                value: 'female',
              },
            ]}
            placeholder={'Пол'}
            selected={e => {
              const selectedData = e as Profile.PersistStruct
              const item = this.findByKey('sex')
              if (!item) return
              if (selectedData.label !== '' && selectedData.value !== '') {
                item.setValid(true)
                item.setSelectedData(selectedData)
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Дата рождения
          </>
        ),
        user?.birthDay,
        true,
        'birthday',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('birthday')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Язык
          </>
        ),
        user?.language,
        true,
        'language',
        (
          <DropdownInput
            options={[
              { label: 'Русский', value: 'ru' },
              {
                label: 'Английский',
                value: 'en',
              },
            ]}
            placeholder={'Язык'}
            selected={e => {
              const selectedData = e as Profile.PersistStruct
              const item = this.findByKey('language')
              if (!item) return
              if (selectedData.label !== '' && selectedData.value !== '') {
                item.setValid(true)
                item.setSelectedData(selectedData)
              }
            }}
          />
        )
      )
    )
  }
}

class UserContactsDataProvider extends UserProfileDataProvider {
  public constructor(user: User.FullProfile | null) {
    super()

    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Электронная почта
          </>
        ),
        user?.email,
        true,
        'email',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('email')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Телефон
          </>
        ),
        user?.mobile,
        true,
        'mobile',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('mobile')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> WhatsApp
          </>
        ),
        user?.whatsapp,
        true,
        'whatsapp',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('whatsapp')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Telegram
          </>
        ),
        user?.telegram,
        true,
        'telegram',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('telegram')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Viber
          </>
        ),
        user?.viber,
        true,
        'viber',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('viber')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Zoom
          </>
        ),
        user?.zoom,
        true,
        'zoom',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('zoom')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Instagram
          </>
        ),
        user?.instagram,
        true,
        'instagram',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('instagram')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Facebook
          </>
        ),
        user?.facebook,
        true,
        'facebook',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('facebook')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> YouTube
          </>
        ),
        user?.youtube,
        true,
        'youtube',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('youtube')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Сайт
          </>
        ),
        user?.site,
        true,
        'site',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('site')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
  }
}

class UserSecurityDataProvider extends UserProfileDataProvider {
  constructor(user: User.FullProfile | null) {
    super()
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Номер телефона
          </>
        ),
        user?.mobile,
        true,
        'mobile',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('mobile')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
    this.add(
      new PersonalProviderItem(
        (
          <>
            <StarIcon /> Логин
          </>
        ),
        user?.email,
        true,
        'email',
        (
          <TextInput
            onChange={(e: any) => {
              const item = this.findByKey('email')
              if (!item) return
              if (e.target.value !== '') {
                item.setValid(true)
                item.setSelectedData({ label: '', value: e.target.value })
              }
            }}
          />
        )
      )
    )
  }
}

export {
  UserProfileDataProvider,
  UserPersonalDataProvider,
  UserContactsDataProvider,
  UserSecurityDataProvider,
  PersonalProviderItem,
}
