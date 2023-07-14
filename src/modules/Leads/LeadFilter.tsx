import { Button, Checkbox } from '@/components/ui'
import { CrossIcon } from '@/icons'
import styled from 'styled-components'
import { theme } from '../../../styles/tokens'
import { DropdownLocationInput } from '@/components/ui/DropdownLocationInput/DropdownLocationInput'
import { CurrencySelect } from '@/components/ui/CurrencySelect/CurrencySelect'
import React, { useCallback, useState } from 'react'
import cn from 'classnames'
import { ArrowsIcon } from '@/icons/ArrowsIcon'
import { TextInput } from '@/components/ui/TextInput'

interface FilterProps {
  className?: string
  onChange?: any
  onCloseClick: any
}

interface SectionProps {
  onChange: any
  className?: string
}

const FORM_NAME: string = 'f'
const SectionHSpace = '30px'

const LeadFilter = (props: FilterProps) => {
  const onResetHandler = useCallback((e: any) => {
    const form = e.target.closest('form')
    form.reset()
  }, [])

  return (
    <StyledApplicationsFilter
      name={FORM_NAME}
      className={props.className}
      onChange={props.onChange}
    >
      <div className="Filter__headContainer">
        <div className="ApplicationsFilter__head">
          <div className="Font_Accent_12_caps">фильтр выключен</div>
          <div className={"Font_Accent_12_caps filterRest"} onClick={onResetHandler}>Сбросить</div>
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
  const [inputValue, setInputValue] = useState<string>('')
  const onTypeHandler = useCallback((e: any) => {
    const target = e.target
    const typeName = target.closest('.Button').getAttribute('data-name')
    setInputValue(typeName)
  }, [])

  return (
    <div className="ObjectsContent__type filterSection formatSection filterSection--padding">
      <div className="ObjectsContent__wrapperContainer">
        <StyledType className={'ObjectsContent__tabs'}>
          <div
            className={'Button'}
            data-name={'buy'}
            style={{ position: 'relative' }}
          >
            <input
              onClick={onTypeHandler}
              type="radio"
              name={`${FORM_NAME}[format]`}
              value={'buy'}
              checked={inputValue === 'buy'}
            />
            <span>Покупка</span>
          </div>
          <div
            className={'Button'}
            data-name={'rent'}
            style={{ position: 'relative' }}
          >
            <input
              onClick={onTypeHandler}
              type="radio"
              name={`${FORM_NAME}[format]`}
              value={'rent'}
              checked={inputValue === 'rent'}
            />
            <span>Аренда</span>
          </div>
        </StyledType>
      </div>
    </div>
  )
}

const LocationSection = (props: SectionProps) => {
  return (
    <div className="ObjectsContent__wrapperContainer locationSection filterSection filterSection--padding">
      <h3 className="ObjectsContent__locations Font_16_140">
        Локация недвижимости
      </h3>
      <DropdownLocationInput
        className="ObjectsContent__locationsSelect"
        placeholder="Все страны"
        options={[
          { label: 'Турция', subOptions: ['1', '2', '3', '4'] },
          { label: 'Кипр', subOptions: ['52', '43', '23', '41'] },
          { label: 'Черногория', subOptions: ['11', '242', '43', '45'] },
          { label: 'Северный Кипр', subOptions: ['11', '22', '34', '43'] },
        ]}
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
        <BuildDateSection onChange={props.onChange} />
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
  const [inputValue, setInputValue] = useState<string>('any')
  const onTypeHandler = useCallback((e: any) => {
    const target = e.target
    const typeName = target.closest('.Button').getAttribute('data-name')
    setInputValue(typeName)
  }, [])

  return (
    <div className="ObjectsContent__type filterSubSection collapsable-row">
      <div className="ObjectsContent__wrapperContainer">
        <StyledType className={'ObjectsContent__tabs'}>
          <div
            className={'Button'}
            data-name={'any'}
            style={{ position: 'relative' }}
          >
            <input
              onClick={onTypeHandler}
              type="radio"
              name={`${FORM_NAME}[status]`}
              value={'any'}
              checked={inputValue === 'any'}
            />
            <span>Вся</span>
          </div>
          <div
            className={'Button'}
            data-name={'new'}
            style={{ position: 'relative' }}
          >
            <input
              onClick={onTypeHandler}
              type="radio"
              name={`${FORM_NAME}[status]`}
              value={'new'}
              checked={inputValue == 'new'}
            />
            <span>Новая</span>
          </div>
          <div
            className={'Button'}
            data-name={'secondary'}
            style={{ position: 'relative' }}
          >
            <input
              onClick={onTypeHandler}
              type="radio"
              name={`${FORM_NAME}[status]`}
              value={'secondary'}
              checked={inputValue == 'secondary'}
            />
            <span>Вторичная</span>
          </div>
        </StyledType>
      </div>
    </div>
  )
}

const BudgetSection = (props: SectionProps) => {
  return (
    <div className="ObjectsContent__wrapper budgetSection filterSection filterSection--padding">
      <h3 className="ObjectsContent__currency Font_16_140">
        <span>Цена в </span>
        <CurrencySelect options={[{label: "евро", id: 2}, {label: "доллар", id: 1}, {label: "рубль", id: 3}]} />
      </h3>
      <div className="ObjectsContent__price">
        <div className="ObjectsContent_total_area">
          <div className="ObjectsContent__price">
            <TextInput
              className={'Input'}
              placeholder={'От'}
              name={`${FORM_NAME}[price][from]`}
            />
            <TextInput
              className={'Input'}
              placeholder={'До'}
              name={`${FORM_NAME}[price][to]`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const LivingTypeSection = (props: SectionProps) => {
  return (
    <div className={'ObjectsContent__wrapperContainer filterSubSection'}>
      <h4 className="Font_body_base">Жилая</h4>
      <div className={'CheckboxContainer'}>
        <Checkbox
          label={'Квартира / апартаменты'}
          dataLabel={'apartments'}
          name={`${FORM_NAME}[estateType][]`}
          value="apartments"
        />
        <Checkbox
          label={'Пентхаус'}
          dataLabel={'penthouse'}
          name={`${FORM_NAME}[estateType][]`}
          value="penthouse"
        />
        <Checkbox
          label={'Таунхаус'}
          dataLabel={'townhouse'}
          name={`${FORM_NAME}[estateType][]`}
          value="townhouse"
        />
        <Checkbox
          label={'Вилла'}
          dataLabel={'villa'}
          name={`${FORM_NAME}[estateType][]`}
          value="villa"
        />
        <Checkbox
          label={'Дуплекс'}
          dataLabel={'duplex'}
          name={`${FORM_NAME}[estateType][]`}
          value="duplex"
        />
        <Checkbox
          label={'Земельный участок'}
          dataLabel={'duplex'}
          name={`${FORM_NAME}[estateType][]`}
          value="stead"
        />
      </div>
    </div>
  )
}

const CommercialTypeSection = (props: SectionProps) => {
  return (
    <div className={'ObjectsContent__wrapperContainer filterSubSection'}>
      <h4 className="Font_body_base">Коммерческая</h4>
      <div className={'CheckboxContainer'}>
        <Checkbox
          label={'Офис'}
          dataLabel={'office'}
          name={`${FORM_NAME}[estateType][]`}
          value={'office'}
        />
        <Checkbox
          label={'Гостиница'}
          dataLabel={'hotel'}
          name={`${FORM_NAME}[estateType][]`}
          value={'hotel'}
        />
        <Checkbox
          label={'Магазин'}
          dataLabel={'trade'}
          name={`${FORM_NAME}[estateType][]`}
          value={'trade'}
        />
        <Checkbox
          label={'Общепит'}
          dataLabel={'catering'}
          name={`${FORM_NAME}[estateType][]`}
          value={'catering'}
        />
        <Checkbox
          label={'Склад'}
          dataLabel={'warehouse'}
          name={`${FORM_NAME}[estateType][]`}
          value={'warehouse'}
        />
        <Checkbox
          label={'Производство'}
          dataLabel={'manufacture'}
          name={`${FORM_NAME}[estateType][]`}
          value={'manufacture'}
        />
        <Checkbox
          label={'Производство'}
          dataLabel={'manufacture'}
          name={`${FORM_NAME}[estateType][]`}
          value={'manufacture'}
        />
        <Checkbox
          label={'Свободное назначение'}
          dataLabel={'freePurpose'}
          name={`${FORM_NAME}[estateType][]`}
          value={'freePurpose'}
        />
      </div>
    </div>
  )
}

const BuildDateSection = (props: SectionProps) => {
  return (
    <div className="ObjectsContent__wrapperContainer filterSubSection">
      <div className="ObjectsContent_year">
        <h4 className="Font_body_base">Год постройки</h4>
        <div className="ObjectsContent__price">
          <TextInput
            className={'Input'}
            placeholder={'От'}
            name={`[${FORM_NAME}][buildDate][from]`}
          />
          <TextInput
            className={'Input'}
            placeholder={'До'}
            name={`[${FORM_NAME}][buildDate][to]`}
          />
        </div>
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

  const renderMoreContent = () => {
    return (
      <>
        <div className="ObjectsContent_bedsRooms collapsable-row">
          <h4 className="Font_Accent_16_S">Спален</h4>
          <StyledRooms className="ObjectsContent__buttons">
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
          <StyledRooms className="ObjectsContent__buttons">
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
        <StyledRooms className="ObjectsContent__buttons">
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

  const renderFields = () => {
    return (
      <div className={'filterSectionFields'}>
        <div className={'CheckboxContainer'}>
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
      className={cn('ObjectsContent__wrapperContainer purposeSection filterSection', {
        isSectionVisible: isSectionVisible,
      })}
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

  const renderFields = () => {
    return (
      <div className={'filterSectionFields'}>
        <div className={'CheckboxContainer'}>
          <Checkbox
            label={'Срочно'}
            dataLabel={'immediately'}
            name={`${FORM_NAME}[readyDeal][]`}
            value={'immediately'}
          />
          <Checkbox
            label={'Через 1 месяц'}
            dataLabel={'monthOne'}
            name={`${FORM_NAME}[readyDeal][]`}
            value={'monthOne'}
          />
          <Checkbox
            label={'Через 2 месяца'}
            dataLabel={'monthTwo'}
            name={`${FORM_NAME}[readyDeal][]`}
            value={'monthTwo'}
          />
          <Checkbox
            label={'Через 3 месяца'}
            dataLabel={'monthTwo'}
            name={`${FORM_NAME}[readyDeal][]`}
            value={'monthThree'}
          />
          <Checkbox
            label={'Сразу как найду'}
            dataLabel={'whenFound'}
            name={`${FORM_NAME}[readyDeal][]`}
            value={'whenFound'}
          />
          <Checkbox
            label={'Пока просто изучаю'}
            dataLabel={'monitoring'}
            name={`${FORM_NAME}[readyDeal][]`}
            value={'monitoring'}
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn('ObjectsContent__wrapperContainer readySection filterSection', {
        isSectionVisible: isSectionVisible,
      })}
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

  const renderSection = () => {
    return (
      <div className={'filterSectionFields'}>
        <div className={'CheckboxContainer'}>
          <Checkbox
            label={'Клиент'}
            dataLabel={'client'}
            name={`[${FORM_NAME}][author][]`}
            value={'client'}
          />
          <Checkbox
            label={'Риелтор'}
            dataLabel={'rieltor'}
            name={`[${FORM_NAME}][author][]`}
            value={'rieltor'}
          />
          <Checkbox
            label={'Агентство недвижимости'}
            dataLabel={'realEstate'}
            name={`[${FORM_NAME}][author][]`}
            value={'realEstate'}
          />
          <Checkbox
            label={'Застройщик'}
            dataLabel={'builder'}
            name={`[${FORM_NAME}][author][]`}
            value={'builder'}
          />
          <Checkbox
            label={'Собственник'}
            dataLabel={'owner'}
            name={`[${FORM_NAME}][author][]`}
            value={'owner'}
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn('ObjectsContent__wrapperContainer authorSection filterSection', {
        isSectionVisible: isSectionVisible,
      })}
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

  const renderMoreContent = () => {
    return (
      <>
        <div className="ObjectsContent_living_area collapsable-row">
          <h4 className="Font_Accent_16_S">Жилая площадь</h4>
          <div className="ObjectsContent__price">
            <TextInput
              className={'Input'}
              placeholder={'От'}
              name={`${FORM_NAME}[livingArea][from]`}
            />
            <TextInput
              className={'Input'}
              placeholder={'До'}
              name={`${FORM_NAME}[livingArea][to]`}
            />
          </div>
        </div>
        <div className="ObjectsContent_land_area collapsable-row">
          <h4 className="Font_Accent_16_S">Участок земли</h4>
          <div className="ObjectsContent__price">
            <TextInput
              className={'Input'}
              placeholder={'От'}
              name={`${FORM_NAME}[steadArea][from]`}
            />
            <TextInput
              className={'Input'}
              placeholder={'До'}
              name={`${FORM_NAME}[steadArea][to]`}
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
            name={`${FORM_NAME}[totalArea][from]`}
          />
          <TextInput
            className={'Input'}
            placeholder={'До'}
            name={`${FORM_NAME}[totalArea][to]`}
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
      className={cn('ObjectsContent__wrapperContainer trueSection filterSection isSectionVisible')}
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
