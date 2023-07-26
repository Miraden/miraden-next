import { useCallback, useState } from 'react'
import { Button, Radio } from '@/components/ui'
import styled from 'styled-components'

type Option =
  | 'flat'
  | 'house'
  | 'penthouse'
  | 'townhouse'
  | 'duplex'
  | 'land'
  | 'hotel'
  | 'office'
  | 'selling'
  | 'warehouse'
  | 'catering'
  | 'production'
  | 'landing'
  | 'free'

const StepEstateType = (): JSX.Element => {
  const [isResidentialChecked, setIsResidentialChecked] = useState(true)
  const [isCommercialChecked, setIsCommercialChecked] = useState(false)
  const [selected, setSelected] = useState<Option | null>(null)
  const handleResidentialCheck = useCallback(() => {
    setIsResidentialChecked(true)
    setIsCommercialChecked(false)
  }, [])

  const handleCommercialCheck = useCallback(() => {
    setIsResidentialChecked(false)
    setIsCommercialChecked(true)
  }, [])

  const handleSelect = useCallback((option: Option) => {
    setSelected(option)
  }, [])

  return (
    <StyledRegStep1>
      <div className="Reg__radioButtons">
        <Radio
          value="Жилая"
          checked={isResidentialChecked}
          onChange={handleResidentialCheck}
        />
        <Radio
          value="Коммерческая"
          checked={isCommercialChecked}
          onChange={handleCommercialCheck}
        />
      </div>
      <div className="Reg__options ">
        {isResidentialChecked ? (
          <>
            <Button
              request
              onClick={() => handleSelect('flat')}
              active={selected === 'flat'}
            >
              Квартира / апартаменты
            </Button>
            <Button
              request
              onClick={() => handleSelect('house')}
              active={selected === 'house'}
            >
              Дом / вилла
            </Button>
            <Button
              request
              onClick={() => handleSelect('penthouse')}
              active={selected === 'penthouse'}
            >
              Пентхаус
            </Button>
            <Button
              request
              onClick={() => handleSelect('townhouse')}
              active={selected === 'townhouse'}
            >
              Таунхаус
            </Button>
            <Button
              request
              onClick={() => handleSelect('duplex')}
              active={selected === 'duplex'}
            >
              Дуплекс
            </Button>
            <Button
              request
              onClick={() => handleSelect('land')}
              active={selected === 'land'}
            >
              Участок земли
            </Button>
          </>
        ) : (
          <>
            <Button
              request
              onClick={() => handleSelect('hotel')}
              active={selected === 'hotel'}
            >
              Отель
            </Button>
            <Button
              request
              onClick={() => handleSelect('office')}
              active={selected === 'office'}
            >
              Офис
            </Button>
            <Button
              request
              onClick={() => handleSelect('selling')}
              active={selected === 'selling'}
            >
              Торговля
            </Button>
            <Button
              request
              onClick={() => handleSelect('warehouse')}
              active={selected === 'warehouse'}
            >
              Склад
            </Button>
            <Button
              request
              onClick={() => handleSelect('catering')}
              active={selected === 'catering'}
            >
              Общепит
            </Button>
            <Button
              request
              onClick={() => handleSelect('production')}
              active={selected === 'production'}
            >
              Производство
            </Button>
            <Button
              request
              onClick={() => handleSelect('landing')}
              active={selected === 'landing'}
            >
              Участок земли
            </Button>
            <Button
              request
              onClick={() => handleSelect('free')}
              active={selected === 'free'}
            >
              Свободное назначение
            </Button>
          </>
        )}
      </div>
    </StyledRegStep1>
  )
}

const StyledRegStep1 = styled.section`
  .Reg__radioButtons {
    display: flex;
    align-items: center;

    input {
      margin-left: 30px;
    }
  }

  .Reg__options {
    padding: 41px 30px 0 30px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow-y: auto;

    button {
      justify-content: flex-start;
      max-width: 340px;
      width: 100%;

      span {
        text-align: initial;
      }
    }
  }

  @media (max-width: 960px) {
    margin-top: 10px;
    .Reg__options {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: max-content;
      grid-gap: 12px;
      margin-left: 0;
      margin-top: 0;
      padding-top: 24px;

      button {
        max-width: unset;
        width: 100%;
        margin-left: 0;
        margin-top: 0;
      }
    }
  }

  @media (max-width: 576px) {
    .Reg__radioButtons {
      margin-top: 24px;
    }

    .Reg__options {
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      grid-gap: 12px;
    }
  }
`

export default StepEstateType
