import { Button, Checkbox } from '@/components/ui'
import { CrossIcon } from '@/icons'
import styled from 'styled-components'
import { theme } from '../../../styles/tokens'
import { DropdownLocationInput } from '@/components/ui/DropdownLocationInput/DropdownLocationInput'
import { CurrencySelect } from '@/components/ui/CurrencySelect/CurrencySelect'
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import cn from 'classnames'
import { ArrowsIcon } from '@/icons/ArrowsIcon'
import { TextInput } from '@/components/ui/TextInput'
import LocationsProvider, {
  CitiesStruct,
  CountriesStruct,
  instanceOfCountries,
  LocationView,
} from '@/infrastructure/Locations/LocationsProvider'
import CurrencyProvider, {
  CurrencyStruct,
} from '@/infrastructure/Currencies/CurrencyProvider'

interface FilterProps {
  className?: string
  onChange?: any
  onCloseClick: any
}

interface SectionProps {
  onChange: any
  className?: string
}

interface LeadFilterFormStruct {
  format?: string
  location?: CountriesStruct | CitiesStruct
  status?: string
  estateType?: {
    commercial?: string[]
    living?: string[]
  }
  rooms?: {
    total?: number
    beds?: number
    baths?: number
  }
  totalArea?: {
    from?: number
    to?: number
  }
  livingArea?: {
    from?: number
    to?: number
  }
  steadArea?: {
    from?: number
    to?: number
  }
  purpose?: string[]
  readyDeal?: string[]
  author?: string[]
  isTrue?: boolean
  price?: {
    from?: number
    to?: number
    unit?: number
  }
}

let FilterForm: LeadFilterFormStruct = {}

const FORM_NAME: string = 'f'
const SectionHSpace = '30px'

const LeadFilter = (props: FilterProps) => {
  useEffect(() => ResetForm(), [])
  const onResetHandler = useCallback((e: any) => {
    ResetForm()
  }, [])

  return (
    <StyledApplicationsFilter name={FORM_NAME} className={props.className}>
      <div className="Filter__headContainer">
        <div className="ApplicationsFilter__head">
          <div className="Font_Accent_12_caps">фильтр выключен</div>
          <div
            className={'Font_Accent_12_caps filterRest'}
            onClick={onResetHandler}
          >
            Сбросить
          </div>
          <Button
            type={'button'}
            tertiary
            className="CloseFilter"
            onClick={props.onCloseClick}
          >
            <CrossIcon />
          </Button>
        </div>
      </div>

      <FormatSection onChange={props.onChange} />
      <LocationSection onChange={props.onChange} />
      <BudgetSection onChange={props.onChange} />
      <EstateSection onChange={props.onChange} />
      <RoomsSection onChange={props.onChange} />
      <AreaSection onChange={props.onChange} />
      <PurposeSection onChange={props.onChange} />
      <ReadyDealSection onChange={props.onChange} />
      <AuthorSection onChange={props.onChange} />
      <TrueSection onChange={props.onChange} />
    </StyledApplicationsFilter>
  )
}

const FormatSection = (props: SectionProps) => {
  const [selected, setSelected] = useState<string>('')
  const onTypeHandler = useCallback(
    (e: any): void => {
      const target = e.target
      const typeName = target.closest('.Button').getAttribute('data-name')
      setSelected(typeName)
      FilterForm.format = typeName
      props.onChange(SerializeData(FilterForm))
    },
    [props]
  )

  return (
    <div className="ObjectsContent__type filterSection formatSection filterSection--padding">
      <div className="ObjectsContent__wrapperContainer">
        <StyledType className={'ObjectsContent__tabs'}>
          <div className={'Button'} data-name={'buy'}>
            <input
              onClick={onTypeHandler}
              type="radio"
              value={'buy'}
              checked={FilterForm.format === 'buy'}
            />
            <span>Покупка</span>
          </div>
          <div className={'Button'} data-name={'rent'}>
            <input
              onClick={onTypeHandler}
              type="radio"
              value={'rent'}
              checked={FilterForm.format === 'rent'}
            />
            <span>Аренда</span>
          </div>
        </StyledType>
      </div>
    </div>
  )
}

const LocationSection = (props: SectionProps) => {
  const [locations, setLocations] = useState<any[]>([])
  const [isReady, setReady] = useState<boolean>(false)
  useEffect(() => {
    const provider: LocationsProvider = new LocationsProvider()
    provider.fetch(LocationView.Countries).then(res => {
      setLocations(provider.getList())
      setReady(true)
    })
  }, [])

  const onChange = (location: CountriesStruct | CitiesStruct): void => {
    FilterForm.location = location
    props.onChange(SerializeData(FilterForm))
  }

  return (
    <div className="ObjectsContent__wrapperContainer locationSection filterSection filterSection--padding">
      <h3 className="ObjectsContent__locations Font_16_140">
        Локация недвижимости
      </h3>
      <DropdownLocationInput
        className="ObjectsContent__locationsSelect"
        placeholder="Все страны"
        options={locations}
        onChange={onChange}
        disabled={!isReady}
      />
    </div>
  )
}

const EstateSection = (props: SectionProps) => {
  const [isMoreContentVisible, setIsMoreContentVisible] =
    useState<boolean>(false)
  const toggleContentHandler = useCallback(() => {
    setIsMoreContentVisible(!isMoreContentVisible)
  }, [isMoreContentVisible])

  const renderMore = () => {
    return (
      <>
        <LivingTypeSection onChange={props.onChange} />
        <CommercialTypeSection onChange={props.onChange} />
      </>
    )
  }

  return (
    <div
      className={cn(
        'ObjectsContent__wrapperContainer estateSection filterSection isSectionVisible'
      )}
    >
      <div className={'filterSectionTitle'}>
        <h3 className="Font_Accent_16_S">Тип недвижимости</h3>
      </div>

      <div className={'filterSectionFields'}>
        <EstateTypeSection onChange={props.onChange} />
        {isMoreContentVisible && renderMore()}
        <button
          type={'button'}
          className="ObjectsContent__checkboxesOpenButton Color_blue_primary Font_14_140"
          onClick={toggleContentHandler}
        >
          {isMoreContentVisible ? 'Свернуть' : 'Показать еще'}
        </button>
      </div>
    </div>
  )
}

const EstateTypeSection = (props: SectionProps) => {
  const [selected, setSelected] = useState<string>('any')
  const onTypeHandler = useCallback(
    (e: any) => {
      const target = e.target
      const typeName = target.closest('.Button').getAttribute('data-name')
      setSelected(typeName)
      FilterForm.status = typeName
      if (props.onChange) props.onChange(SerializeData(FilterForm))
    },
    [props]
  )

  return (
    <div className="ObjectsContent__type filterSubSection collapsable-row">
      <div className="ObjectsContent__wrapperContainer">
        <StyledType className={'ObjectsContent__tabs'}>
          <div className={'Button'} data-name={'any'}>
            <input
              onClick={onTypeHandler}
              type="radio"
              name={'status'}
              checked={FilterForm.status === 'any'}
            />
            <span>Вся</span>
          </div>
          <div className={'Button'} data-name={'new'}>
            <input
              onClick={onTypeHandler}
              type="radio"
              name={'status'}
              checked={FilterForm.status === 'new'}
            />
            <span>Новая</span>
          </div>
          <div className={'Button'} data-name={'secondary'}>
            <input
              onClick={onTypeHandler}
              type="radio"
              name={'status'}
              checked={FilterForm.status === 'secondary'}
            />
            <span>Вторичная</span>
          </div>
        </StyledType>
      </div>
    </div>
  )
}

const BudgetSection = (props: SectionProps) => {
  const [currencies, setCurrencies] = useState<any[]>([])
  const [isCurrencyReady, setCurrencyReady] = useState<boolean>(false)
  const [defaultCurrency, setCurrencyDefault] = useState<CurrencyStruct>()
  useEffect(() => {
    const provider: CurrencyProvider = new CurrencyProvider()
    provider.fetch().then(res => {
      const list: CurrencyStruct[] = provider.getList()
      FilterForm.price = FilterForm.price || {}
      FilterForm.price.unit = provider.findDefault().id
      setCurrencies(list)
      setCurrencyDefault(provider.findDefault())
      setCurrencyReady(true)
    })
  }, [])

  const onPressFrom = (val: ChangeEvent<HTMLInputElement>) => {
    const price: number = parseInt(val.target.value)
    FilterForm.price = FilterForm.price || {}
    FilterForm.price.from = price
    props.onChange(SerializeData(FilterForm))
  }

  const onPressTo = (val: ChangeEvent<HTMLInputElement>) => {
    const price: number = parseInt(val.target.value)
    FilterForm.price = FilterForm.price || {}
    FilterForm.price.to = price
    props.onChange(SerializeData(FilterForm))
  }

  const onCurrencyChange = (val: any) => {
    FilterForm.price = FilterForm.price || {}
    FilterForm.price.unit = val.id
    props.onChange(SerializeData(FilterForm))
  }

  return (
    <div className="ObjectsContent__wrapper budgetSection filterSection filterSection--padding">
      <h3 className="ObjectsContent__currency Font_16_140">
        <span>Цена в </span>
        {isCurrencyReady && (
          <CurrencySelect
            defaultCurrency={defaultCurrency}
            currencies={currencies}
            onChange={onCurrencyChange}
          />
        )}
      </h3>
      <div className="ObjectsContent__price">
        <div className="ObjectsContent_total_area">
          <div className="ObjectsContent__price">
            <TextInput
              className={'Input'}
              placeholder={'От'}
              name={`${FORM_NAME}[price][from]`}
              onChange={onPressFrom}
            />
            <TextInput
              className={'Input'}
              placeholder={'До'}
              name={`${FORM_NAME}[price][to]`}
              onChange={onPressTo}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const LivingTypeSection = (props: SectionProps) => {
  const onClick = useCallback(
    (e: any) => {
      const container = e.target.closest('.CheckboxContainer')
      const inputs = container.getElementsByTagName('input')
      const checked = Array.from(inputs).map((i: any) => {
        if (i.checked) {
          return i.value
        }
      })

      const ch: string[] = checked.filter(i => i !== undefined)
      FilterForm.estateType = FilterForm.estateType || {}
      FilterForm.estateType.living = ch
      props.onChange(SerializeData(FilterForm))
    },
    [props]
  )

  return (
    <div className={'ObjectsContent__wrapperContainer filterSubSection'}>
      <h4 className="Font_body_base">Жилая</h4>
      <div className={'CheckboxContainer'} onClick={onClick}>
        <Checkbox
          label={'Квартира / апартаменты'}
          dataLabel={'apartments'}
          value="apartments"
        />
        <Checkbox
          label={'Пентхаус'}
          dataLabel={'penthouse'}
          value="penthouse"
        />
        <Checkbox
          label={'Таунхаус'}
          dataLabel={'townhouse'}
          value="townhouse"
        />
        <Checkbox label={'Вилла'} dataLabel={'villa'} value="villa" />
        <Checkbox label={'Дуплекс'} dataLabel={'duplex'} value="duplex" />
        <Checkbox
          label={'Земельный участок'}
          dataLabel={'duplex'}
          value="stead"
        />
      </div>
    </div>
  )
}

const CommercialTypeSection = (props: SectionProps) => {
  const onClick = useCallback(
    (e: any) => {
      const container = e.target.closest('.CheckboxContainer')
      const inputs = container.getElementsByTagName('input')
      const checked = Array.from(inputs).map((i: any) => {
        if (i.checked) {
          return i.value
        }
      })

      const ch: string[] = checked.filter(i => i !== undefined)
      FilterForm.estateType = FilterForm.estateType || {}
      FilterForm.estateType.commercial = ch
      props.onChange(SerializeData(FilterForm))
    },
    [props]
  )

  return (
    <div className={'ObjectsContent__wrapperContainer filterSubSection'}>
      <h4 className="Font_body_base">Коммерческая</h4>
      <div className={'CheckboxContainer'} onClick={onClick}>
        <Checkbox label={'Офис'} dataLabel={'office'} value={'office'} />
        <Checkbox label={'Гостиница'} dataLabel={'hotel'} value={'hotel'} />
        <Checkbox label={'Магазин'} dataLabel={'trade'} value={'trade'} />
        <Checkbox label={'Общепит'} dataLabel={'catering'} value={'catering'} />
        <Checkbox label={'Склад'} dataLabel={'warehouse'} value={'warehouse'} />
        <Checkbox
          label={'Производство'}
          dataLabel={'manufacture'}
          value={'manufacture'}
        />
        <Checkbox
          label={'Производство'}
          dataLabel={'manufacture'}
          value={'manufacture'}
        />
        <Checkbox
          label={'Свободное назначение'}
          dataLabel={'freePurpose'}
          value={'freePurpose'}
        />
      </div>
    </div>
  )
}

const RoomsSection = (props: SectionProps) => {
  const [isMoreContentVisible, setIsMoreContentVisible] =
    useState<boolean>(false)
  const toggleContentHandler = useCallback(() => {
    setIsMoreContentVisible(!isMoreContentVisible)
  }, [isMoreContentVisible])

  const onBedsClick = useCallback(
    (e: any) => {
      const rooms = parseInt(e.target.value)
      FilterForm.rooms = FilterForm.rooms || {}
      FilterForm.rooms.beds = rooms
      props.onChange(SerializeData(FilterForm))
    },
    [props]
  )

  const onBathsClick = useCallback(
    (e: any) => {
      const rooms = parseInt(e.target.value)
      FilterForm.rooms = FilterForm.rooms || {}
      FilterForm.rooms.baths = rooms
      props.onChange(SerializeData(FilterForm))
    },
    [props]
  )

  const onTotalClick = useCallback(
    (e: any) => {
      const rooms = parseInt(e.target.value)
      FilterForm.rooms = FilterForm.rooms || {}
      FilterForm.rooms.total = rooms
      props.onChange(SerializeData(FilterForm))
    },
    [props]
  )

  const renderMoreContent = () => {
    return (
      <>
        <div className="ObjectsContent_bedsRooms collapsable-row">
          <h4 className="Font_Accent_16_S">Спален</h4>
          <StyledRooms
            className="ObjectsContent__buttons"
            onClick={onBedsClick}
          >
            <li>
              <div className={'Button'} data-name={'1'}>
                <input
                  type="radio"
                  name={`${FORM_NAME}[rooms][beds]`}
                  value={1}
                />
                <span>1</span>
              </div>
            </li>
            <li>
              <div className={'Button'} data-name={'2'}>
                <input
                  type="radio"
                  name={`${FORM_NAME}[rooms][beds]`}
                  value={2}
                />
                <span>2</span>
              </div>
            </li>
            <li>
              <div className={'Button'} data-name={'3'}>
                <input
                  type="radio"
                  name={`${FORM_NAME}[rooms][beds]`}
                  value={3}
                />
                <span>3</span>
              </div>
            </li>
            <li>
              <div className={'Button'} data-name={'4'}>
                <input
                  type="radio"
                  name={`${FORM_NAME}[rooms][beds]`}
                  value={4}
                />
                <span>4</span>
              </div>
            </li>
            <li>
              <div className={'Button'} data-name={'5'}>
                <input
                  type="radio"
                  name={`${FORM_NAME}[rooms][beds]`}
                  value={5}
                />
                <span>5</span>
              </div>
            </li>
            <li>
              <div className={'Button'} data-name={'6'}>
                <input
                  type="radio"
                  name={`${FORM_NAME}[rooms][beds]`}
                  value={6}
                />
                <span>6+</span>
              </div>
            </li>
          </StyledRooms>
        </div>
        <div className="ObjectsContent_bathsRooms collapsable-row">
          <h4 className="Font_Accent_16_S">Санузлов</h4>
          <StyledRooms
            className="ObjectsContent__buttons"
            onClick={onBathsClick}
          >
            <li>
              <div className={'Button'} data-name={'1'}>
                <input
                  type="radio"
                  name={`${FORM_NAME}[rooms][baths]`}
                  value={1}
                />
                <span>1</span>
              </div>
            </li>
            <li>
              <div className={'Button'} data-name={'2'}>
                <input
                  type="radio"
                  name={`${FORM_NAME}[rooms][baths]`}
                  value={2}
                />
                <span>2</span>
              </div>
            </li>
            <li>
              <div className={'Button'} data-name={'3'}>
                <input
                  type="radio"
                  name={`${FORM_NAME}[rooms][baths]`}
                  value={3}
                />
                <span>3</span>
              </div>
            </li>
            <li>
              <div className={'Button'} data-name={'4'}>
                <input
                  type="radio"
                  name={`${FORM_NAME}[rooms][baths]`}
                  value={4}
                />
                <span>4</span>
              </div>
            </li>
            <li>
              <div className={'Button'} data-name={'5'}>
                <input
                  type="radio"
                  name={`${FORM_NAME}[rooms][baths]`}
                  value={5}
                />
                <span>5</span>
              </div>
            </li>
            <li>
              <div className={'Button'} data-name={'6'}>
                <input
                  type="radio"
                  name={`${FORM_NAME}[rooms][baths]`}
                  value={6}
                />
                <span>6+</span>
              </div>
            </li>
          </StyledRooms>
        </div>
      </>
    )
  }

  return (
    <div className="ObjectsContent__wrapperContainer roomsSection filterSection filterSection--padding">
      <div className="ObjectsContent_allRooms collapsable-row">
        <h4 className="Font_Accent_16_S">Всего комнат</h4>
        <StyledRooms className="ObjectsContent__buttons" onClick={onTotalClick}>
          <li>
            <div className={'Button'} data-name={'1'}>
              <input
                type="radio"
                name={`${FORM_NAME}[rooms][total]`}
                value={1}
              />
              <span>1</span>
            </div>
          </li>
          <li>
            <div className={'Button'} data-name={'2'}>
              <input
                type="radio"
                name={`${FORM_NAME}[rooms][total]`}
                value={2}
              />
              <span>2</span>
            </div>
          </li>
          <li>
            <div className={'Button'} data-name={'3'}>
              <input
                type="radio"
                name={`${FORM_NAME}[rooms][total]`}
                value={3}
              />
              <span>3</span>
            </div>
          </li>
          <li>
            <div className={'Button'} data-name={'4'}>
              <input
                type="radio"
                name={`${FORM_NAME}[rooms][total]`}
                value={4}
              />
              <span>4</span>
            </div>
          </li>
          <li>
            <div className={'Button'} data-name={'5'}>
              <input
                type="radio"
                name={`${FORM_NAME}[rooms][total]`}
                value={5}
              />
              <span>5</span>
            </div>
          </li>
          <li>
            <div className={'Button'} data-name={'6'}>
              <input
                type="radio"
                name={`${FORM_NAME}[rooms][total]`}
                value={6}
              />
              <span>6+</span>
            </div>
          </li>
        </StyledRooms>
      </div>
      {isMoreContentVisible && renderMoreContent()}

      <button
        type={'button'}
        className="ObjectsContent__checkboxesOpenButton Color_blue_primary Font_14_140"
        onClick={toggleContentHandler}
      >
        {isMoreContentVisible ? 'Свернуть' : 'Развернуть'}
      </button>
    </div>
  )
}

const PurposeSection = (props: SectionProps) => {
  const [isSectionVisible, setSectionVisible] = useState<boolean>(false)
  const visibleHandler = useCallback(() => {
    setSectionVisible(!isSectionVisible)
  }, [isSectionVisible])

  const onClick = useCallback(
    (e: any) => {
      const container = e.target.closest('.CheckboxContainer')
      const inputs = container.getElementsByTagName('input')
      const checked = Array.from(inputs).map((i: any) => {
        if (i.checked) {
          return i.value
        }
      })

      const ch: string[] = checked.filter(i => i !== undefined)
      FilterForm.purpose = FilterForm.purpose || []
      FilterForm.purpose = ch
      props.onChange(SerializeData(FilterForm))
    },
    [props]
  )

  const renderFields = () => {
    return (
      <div className={'filterSectionFields'}>
        <div className={'CheckboxContainer'} onClick={onClick}>
          <Checkbox
            label={'Для проживания'}
            dataLabel={'live'}
            name={`${FORM_NAME}[purpose][]`}
            value={'live'}
          />
          <Checkbox
            label={'Для сезонного отдыха'}
            dataLabel={'rest'}
            name={`${FORM_NAME}[purpose][]`}
            value={'rest'}
          />
          <Checkbox
            label={'Для инвестиций (сдавать)'}
            dataLabel={'rent'}
            name={`${FORM_NAME}[purpose][]`}
            value={'rent'}
          />
          <Checkbox
            label={'Для инвестиций (перепродать)'}
            dataLabel={'resale'}
            name={`${FORM_NAME}[purpose][]`}
            value={'resale'}
          />
          <Checkbox
            label={'Для ВНЖ/ПМЖ'}
            dataLabel={'residence'}
            name={`${FORM_NAME}[purpose][]`}
            value={'residence'}
          />
          <Checkbox
            label={'Для гражданства'}
            dataLabel={'citizenship'}
            name={`${FORM_NAME}[purpose][]`}
            value={'citizenship'}
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'ObjectsContent__wrapperContainer purposeSection filterSection',
        {
          isSectionVisible: isSectionVisible,
        }
      )}
    >
      <div className={'filterSectionTitle'} onClick={visibleHandler}>
        <h3 className="Font_Accent_16_S">Цель сделки</h3>
        <ArrowsIcon bottom attr={{ className: 'filterSectionTitle--arrow' }} />
      </div>

      {isSectionVisible && renderFields()}
    </div>
  )
}

const ReadyDealSection = (props: SectionProps) => {
  const [isSectionVisible, setSectionVisible] = useState<boolean>(false)
  const visibleHandler = useCallback(() => {
    setSectionVisible(!isSectionVisible)
  }, [isSectionVisible])

  const onClick = useCallback(
    (e: any) => {
      const container = e.target.closest('.CheckboxContainer')
      const inputs = container.getElementsByTagName('input')
      const checked = Array.from(inputs).map((i: any) => {
        if (i.checked) {
          return i.value
        }
      })

      const ch: string[] = checked.filter(i => i !== undefined)
      FilterForm.readyDeal = FilterForm.readyDeal || []
      FilterForm.readyDeal = ch
      props.onChange(SerializeData(FilterForm))
    },
    [props]
  )

  const renderFields = () => {
    return (
      <div className={'filterSectionFields'}>
        <div className={'CheckboxContainer'} onClick={onClick}>
          <Checkbox
            label={'Срочно'}
            dataLabel={'immediately'}
            value={'immediately'}
          />
          <Checkbox
            label={'Через 1 месяц'}
            dataLabel={'monthOne'}
            value={'monthOne'}
          />
          <Checkbox
            label={'Через 2 месяца'}
            dataLabel={'monthTwo'}
            value={'monthTwo'}
          />
          <Checkbox
            label={'Через 3 месяца'}
            dataLabel={'monthThree'}
            value={'monthThree'}
          />
          <Checkbox
            label={'Сразу как найду'}
            dataLabel={'whenFound'}
            value={'whenFound'}
          />
          <Checkbox
            label={'Пока просто изучаю'}
            dataLabel={'monitoring'}
            value={'monitoring'}
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'ObjectsContent__wrapperContainer readySection filterSection',
        {
          isSectionVisible: isSectionVisible,
        }
      )}
    >
      <div className={'filterSectionTitle'} onClick={visibleHandler}>
        <h3 className="Font_Accent_16_S">Готовность к сделке</h3>
        <ArrowsIcon bottom attr={{ className: 'filterSectionTitle--arrow' }} />
      </div>

      {isSectionVisible && renderFields()}
    </div>
  )
}

const AuthorSection = (props: SectionProps) => {
  const [isSectionVisible, setSectionVisible] = useState<boolean>(false)
  const visibleHandler = useCallback(() => {
    setSectionVisible(!isSectionVisible)
  }, [isSectionVisible])

  const onClick = useCallback(
    (e: any) => {
      const container = e.target.closest('.CheckboxContainer')

      const inputs = container.getElementsByTagName('input')
      const checked = Array.from(inputs).map((i: any) => {
        if (i.checked) {
          return i.value
        }
      })

      const ch: string[] = checked.filter(i => i !== undefined)
      FilterForm.author = FilterForm.author || []
      FilterForm.author = ch
      props.onChange(SerializeData(FilterForm))
    },
    [props]
  )

  const renderSection = () => {
    return (
      <div className={'filterSectionFields'}>
        <div className={'CheckboxContainer'} onClick={onClick}>
          <Checkbox
            label={'Клиент'}
            dataLabel={'client'}
            name={'client'}
            value={'client'}
          />
          <Checkbox
            label={'Риелтор'}
            dataLabel={'realtor'}
            name={'client'}
            value={'realtor'}
          />
          <Checkbox
            label={'Агентство недвижимости'}
            dataLabel={'realEstate'}
            name={'client'}
            value={'estate'}
          />
          <Checkbox
            label={'Застройщик'}
            dataLabel={'builder'}
            name={'client'}
            value={'builder'}
          />
          <Checkbox
            label={'Собственник'}
            dataLabel={'owner'}
            name={'client'}
            value={'owner'}
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'ObjectsContent__wrapperContainer authorSection filterSection',
        {
          isSectionVisible: isSectionVisible,
        }
      )}
    >
      <div className={'filterSectionTitle'} onClick={visibleHandler}>
        <h3 className="Font_Accent_16_S">Автор заявки</h3>
        <ArrowsIcon bottom attr={{ className: 'filterSectionTitle--arrow' }} />
      </div>
      {isSectionVisible && renderSection()}
    </div>
  )
}

const AreaSection = (props: SectionProps) => {
  const [isMoreContentVisible, setIsMoreContentVisible] =
    useState<boolean>(false)
  const toggleContentHandler = useCallback(() => {
    setIsMoreContentVisible(!isMoreContentVisible)
  }, [isMoreContentVisible])

  const onLivingClick = useCallback(
    (e: any) => {
      const type = e.target.getAttribute('name')
      const value = e.target.value
      FilterForm.livingArea = FilterForm.livingArea || {}
      if (type === 'from') {
        FilterForm.livingArea.from = value
      }

      if (type === 'to') {
        FilterForm.livingArea.to = value
      }
      props.onChange(SerializeData(FilterForm))
    },
    [props]
  )

  const onTotalClick = useCallback(
    (e: any) => {
      const type = e.target.getAttribute('name')
      const value = e.target.value
      FilterForm.totalArea = FilterForm.totalArea || {}

      if (type === 'from') {
        FilterForm.totalArea.from = value
      }

      if (type === 'to') {
        FilterForm.totalArea.to = value
      }

      props.onChange(SerializeData(FilterForm))
    },
    [props]
  )

  const onSteadClick = useCallback(
    (e: any) => {
      const type = e.target.getAttribute('name')
      const value = e.target.value
      FilterForm.steadArea = FilterForm.steadArea || {}

      if (type === 'from') {
        FilterForm.steadArea.from = value
      }

      if (type === 'to') {
        FilterForm.steadArea.to = value
      }

      props.onChange(SerializeData(FilterForm))
    },
    [props]
  )

  const renderMoreContent = () => {
    return (
      <>
        <div className="ObjectsContent_living_area collapsable-row">
          <h4 className="Font_Accent_16_S">Жилая площадь</h4>
          <div className="ObjectsContent__price">
            <TextInput
              className={'Input'}
              placeholder={'От'}
              onChange={onLivingClick}
              name={'from'}
            />
            <TextInput
              className={'Input'}
              placeholder={'До'}
              data-type={'from'}
              onChange={onLivingClick}
              name={'to'}
            />
          </div>
        </div>
        <div className="ObjectsContent_land_area collapsable-row">
          <h4 className="Font_Accent_16_S">Участок земли</h4>
          <div className="ObjectsContent__price">
            <TextInput
              className={'Input'}
              placeholder={'От'}
              name={'from'}
              onChange={onSteadClick}
            />
            <TextInput
              className={'Input'}
              placeholder={'До'}
              name={'to'}
              onChange={onSteadClick}
            />
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="ObjectsContent__wrapperContainer filterSection areaSection filterSection--padding">
      <div className="ObjectsContent_total_area collapsable-row">
        <h4 className="Font_Accent_16_S">Общая площадь</h4>
        <div className="ObjectsContent__price">
          <TextInput
            className={'Input'}
            placeholder={'От'}
            name={'from'}
            onChange={onTotalClick}
          />
          <TextInput
            className={'Input'}
            placeholder={'До'}
            name={'to'}
            onChange={onTotalClick}
          />
        </div>
      </div>

      {isMoreContentVisible && renderMoreContent()}

      <button
        type={'button'}
        className="ObjectsContent__checkboxesOpenButton Color_blue_primary Font_14_140"
        onClick={toggleContentHandler}
      >
        {isMoreContentVisible ? 'Свернуть' : 'Показать еще'}
      </button>
    </div>
  )
}

const TrueSection = (props: SectionProps) => {
  return (
    <div
      className={cn(
        'ObjectsContent__wrapperContainer trueSection filterSection isSectionVisible'
      )}
    >
      <div className={'filterSectionFields'}>
        <div className={'CheckboxContainer'}>
          <Checkbox
            label={'Только TRUE заявки'}
            dataLabel={'owner'}
            name={`[${FORM_NAME}][isTrue][]`}
            value={'owner'}
          />
        </div>
      </div>
    </div>
  )
}

const SerializeData = (data: LeadFilterFormStruct): string => {
  let str: FormData = new FormData()

  if (data.format) {
    str.append('f[format]', data.format)
  }

  if (data.status) {
    str.append('f[status]', data.status)
  }

  if (data.estateType) {
    const type = data.estateType
    const keyLiving: string = 'f[estateType][living][]'
    const keyCommercial: string = 'f[estateType][commercial][]'

    if (type.living) {
      type.living.map(i => {
        str.append(keyLiving, i)
      })
    }

    if (type.commercial) {
      type.commercial.map(i => {
        str.append(keyCommercial, i)
      })
    }
  }

  if (data.location) {
    const location = data.location
    console.log(location)
    const isCountries = instanceOfCountries(location)
    let locationKey = 'f[location]'
    if (isCountries) {
      locationKey += '[country]'
    } else {
      locationKey += '[city]'
    }

    const id: string = location.id.toString()
    str.append(locationKey, id)
  }

  if (data.rooms) {
    const total: number | undefined = data.rooms.total
    const baths: number | undefined = data.rooms.baths
    const beds: number | undefined = data.rooms.beds
    const key = 'f[rooms]'
    const totalKey: string = key + '[total]'
    const bedsKey: string = key + '[beds]'
    const bathsKey: string = key + '[baths]'
    if (total) {
      str.append(totalKey, total.toString())
    }

    if (beds) {
      str.append(bedsKey, beds.toString())
    }

    if (baths) {
      str.append(bathsKey, baths.toString())
    }
  }

  if (data.price) {
    const cur: number | undefined = data.price.unit
    const from: number | undefined = data.price.from
    const to: number | undefined = data.price.to
    const key: string = 'f[price]'
    const priceFromKey: string = key + '[from]'
    const priceToKey: string = key + '[to]'
    const unitKey: string = key + '[unit]'
    if (cur) str.append(unitKey, cur.toString())
    if (from) str.append(priceFromKey, from.toString())
    if (to) str.append(priceToKey, to.toString())
  }

  if (data.livingArea) {
    const key: string = 'f[livingArea]'
    const fromKey: string = key + '[from]'
    const toKey: string = key + '[to]'
    const from: number | undefined = data.livingArea.from
    const to: number | undefined = data.livingArea.to
    if (from) str.append(fromKey, from.toString())
    if (to) str.append(toKey, to.toString())
  }

  if (data.totalArea) {
    const key: string = 'f[totalArea]'
    const fromKey: string = key + '[from]'
    const toKey: string = key + '[to]'
    const from: number | undefined = data.totalArea.from
    const to: number | undefined = data.totalArea.to
    if (from) str.append(fromKey, from.toString())
    if (to) str.append(toKey, to.toString())
  }

  if (data.steadArea) {
    const key: string = 'f[steadArea]'
    const fromKey: string = key + '[from]'
    const toKey: string = key + '[to]'
    const from: number | undefined = data.steadArea.from
    const to: number | undefined = data.steadArea.to
    if (from) str.append(fromKey, from.toString())
    if (to) str.append(toKey, to.toString())
  }

  if (data.purpose) {
    const key: string = 'f[purpose][]'
    data.purpose.map(i => {
      str.append(key, i)
    })
  }

  if (data.readyDeal) {
    const key: string = 'f[readyDeal][]'
    data.readyDeal.map(i => {
      str.append(key, i)
    })
  }

  if (data.author) {
    const key: string = 'f[author][]'
    data.author.map(i => {
      str.append(key, i)
    })
  }

  // @ts-ignore
  return new URLSearchParams(str).toString()
}

const ResetForm = (): void => {
  const collection = document.getElementsByTagName('form')
  if (collection.length === 0) return

  const form = collection[0]

  form.reset()
  FilterForm = {}
}

const StyledType = styled.div`
  display: flex;
  outline: 2px solid #e1edfd;
  border-radius: 13px;
  padding: 3px;
  gap: 3px;

  span {
    padding: 9px 15px;
    display: block;
    border-radius: ${theme.border.radius};
  }

  input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    margin: 0;

    &:checked + span {
      background: ${theme.colors.main};
      color: #fff;
    }
  }

  .Button {
    border: none;
    border-radius: ${theme.border.radius};
    cursor: pointer;
    position: relative;
    flex-grow: 1;
    text-align: center;

    &:hover {
      background: #f1f7ff;
    }
  }
`

const StyledRooms = styled.ul`
  display: flex;
  gap: 10px;

  .Button {
    position: relative;
    border-radius: ${theme.border.radius};

    &:hover {
      background: #f1f7ff;
    }
  }

  input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    margin: 0;

    &:checked + span {
      background: ${theme.colors.main};
      color: #fff;
      outline: none;
    }
  }

  span {
    width: 40px;
    height: 40px;
    outline: 2px solid ${theme.colors.stroke.divider};
    border-radius: ${theme.border.radius};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const StyledApplicationsFilter = styled.form`
  background: #fff;
  border-radius: ${theme.border.radius};
  min-width: 355px;
  width: 100%;
  position: relative;

  .filterSection {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${theme.colors.stroke.divider};

    &--padding {
      padding: 0 ${SectionHSpace};
    }

    &:last-child {
      border-bottom: 1px solid transparent;
    }

    &.isSectionVisible {
      .filterSectionTitle--arrow {
        transform: rotate(180deg);
      }
    }

    &:not(.isSectionVisible) {
      .filterSectionFields {
        height: 0;
        overflow: hidden;
      }

      .filterSectionTitle {
        padding: 15px ${SectionHSpace} 15px;
      }
    }

    &.roomsSection {
      padding: 15px 30px 0;
    }
  }

  .filterSectionTitle--arrow {
    path {
      fill: ${theme.colors.text.disabled};
    }
  }

  .roomsSection {
    h4 {
      margin-bottom: 10px;
    }
  }

  .filterSectionTitle {
    padding: 15px ${SectionHSpace} 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }

  .filterSectionFields {
    padding: 0 ${SectionHSpace};
  }

  .filterSubSection {
    padding: 15px 0;
    border-bottom: 1px solid ${theme.colors.stroke.divider};

    &:last-of-type {
      border-bottom: 1px solid transparent;
    }

    &:first-of-type {
      border-bottom: 1px solid transparent;
    }

    &.ObjectsContent__type {
      padding-top: 0;
    }
  }

  .formatSection {
    padding-bottom: 15px;
    border-bottom-color: transparent;
  }

  .areaSection {
    padding-top: 15px;

    h4 {
      margin-bottom: 10px;
    }
  }

  .CheckboxContainer {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .ApplicationsFilter__head {
    display: flex;
    justify-content: space-between;
    padding: 15px ${SectionHSpace};
    align-items: center;

    button {
      border-radius: 50%;
      padding: 2px;
      width: 28px;
      height: 28px;

      :hover {
        background: #f1f7ff;
      }

      :active {
        background: #e1edfd;
      }
    }

    svg {
      path {
        fill: #7786a5;
      }
    }
  }

  .filterRest {
    color: ${theme.colors.main};
  }

  .ApplicationsFilter__tabs {
    margin-top: 20px;
    height: 100%;
    overflow-y: auto;

    .TabButtons__container {
      padding: 0 30px;
    }
  }

  .ObjectsContent__price {
    display: flex;
    gap: 10px;

    input {
      padding: 12px 20px;
      height: unset;
    }
  }

  .ObjectsContent__tabs {
    .TabButton {
      flex-grow: 1;
      position: relative;

      input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
  }

  .ObjectsContent__checkboxesOpenButton {
    text-align: left;
    padding: 14px 0;
  }

  .collapsable-row {
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .estateSection {
    .collapsable-row {
      padding-bottom: 0;
    }
  }

  .trueSection {
    .CheckboxContainer {
      margin-top: 0;
      padding: 15px 0;
    }
  }

  .budgetSection {
    padding-top: 15px;
    padding-bottom: 15px;

    .ObjectsContent__currency {
      display: flex;
      margin-bottom: 10px;
    }
  }

  .locationSection {
    padding-bottom: 15px;
    padding-top: 15px;

    .ObjectsContent__locations {
      margin-bottom: 10px;
    }
  }

  .purposeSection {
    .filterSectionFields {
      margin-bottom: 15px;
    }
  }

  .readySection {
    .filterSectionFields {
      margin-bottom: 15px;
    }
  }

  .authorSection {
    .filterSectionFields {
      margin-bottom: 15px;
    }
  }

  @media (max-width: 576px) {
    .Filter__headContainer {
      background: #fff;
      padding-bottom: 20px;
      position: sticky;
      top: 0;
    }

    .ApplicationsFilter__tabs {
      margin-top: 0;
    }

    .ApplicationsFilter__footer {
      display: block;
      position: fixed;
      bottom: 0;
      z-index: 999;
      width: 100%;
      padding: 20px 20px 20px 20px;
      border-top: 2px solid #eef1f5;
      background: #ffffff;

      button {
        padding: 15px;
        width: 100%;
      }
    }
  }
`

export { LeadFilter }
