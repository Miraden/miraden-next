import { BuyBudgetResult } from '@/modules/Leads/Maker/StepBuyBudget'
import React, { useCallback, useEffect, useState } from 'react'
import CurrencyProvider, {
  CurrencyStruct,
} from '@/infrastructure/Currencies/CurrencyProvider'
import { theme } from '../../../../styles/tokens'
import styled from 'styled-components'
import { Button, Radio } from '@/components/ui'
import { TextInput } from '@/components/ui/TextInput'
import {
  LeadPeriodEnum,
  LeadPeriods,
  LeadPeriodsStruct,
} from '@/modules/Leads/LeadTypesDefintion'
import StepCommonLayout from '@/modules/Leads/Maker/StepCommonLayout'

export interface Props {
  className?: string
  onChanged: (select: RentBudgetResult) => void
}

export interface RentBudgetResult {
  currencyId: number
  from: number
  to: number
  period: string
}

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

const StepRentBudget = (props: Props): JSX.Element => {
  const [currencies, setCurrencies] = useState<CurrencyStruct[]>([])
  const [defaultCurrency, setCurrencyDefault] = useState<CurrencyStruct>()

  useEffect(() => {
    const provider: CurrencyProvider = new CurrencyProvider()
    provider.fetch().then(res => {
      const list: CurrencyStruct[] = provider.getList()
      setCurrencies(list)
      setCurrencyDefault(provider.findDefault())
    })
  }, [])

  const [selectedCurrency, setSelectedCurrency] = useState<
    CurrencyStruct | undefined
  >(defaultCurrency)

  const [fromValue, setFromValue] = useState('')
  const [toValue, setToValue] = useState('')

  const onCurrency = useCallback(
    (selected: CurrencyStruct) => {
      setSelectedCurrency(selected)
      if (props.onChanged)
        props.onChanged({
          currencyId: Number(selected.id),
          to: Number(toValue),
          from: Number(fromValue),
          period: '',
        })
    },
    [fromValue, props, toValue]
  )

  const [selectedPeriod, setSelectedPeriod] = useState<LeadPeriodEnum>(
    LeadPeriodEnum.Night
  )

  const handleFromValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputFromValue = event.target.value
    if (/^\d*$/.test(inputFromValue)) {
      // проверка вводимых символов
      setFromValue(inputFromValue)
      if (props.onChanged)
        props.onChanged({
          currencyId: selectedCurrency?.id || 0,
          to: Number(toValue),
          from: Number(inputFromValue),
          period: selectedPeriod,
        })
    }
  }

  const handleToValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputToValue = event.target.value
    if (/^\d*$/.test(inputToValue)) {
      // проверка вводимых символов
      setToValue(inputToValue)
      if (props.onChanged)
        props.onChanged({
          currencyId: selectedCurrency?.id || 0,
          to: Number(toValue),
          from: Number(inputToValue),
          period: selectedPeriod,
        })
    }
  }

  const onPeriods = useCallback(
    (e: LeadPeriodsStruct) => {
      setSelectedPeriod(e.label)
      if (props.onChanged)
        props.onChanged({
          currencyId: selectedCurrency?.id || 0,
          to: Number(toValue),
          from: Number(fromValue),
          period: e.label,
        })
    },
    [fromValue, props, selectedCurrency?.id, toValue]
  )

  return (
    <StyledStep>
      <StepCommonLayout>
        <div className="RentPeriod">
          {LeadPeriods.map(period => {
            return (
              <Radio
                value={period.name.ru}
                key={period.label}
                checked={selectedPeriod === period.label}
                onChange={e => onPeriods(period)}
              />
            )
          })}
        </div>

        <div className="Reg__options">
          {currencies.map(currency => (
            <Button
              request
              compact
              key={currency.id}
              onClick={() => onCurrency(currency)}
              active={selectedCurrency === currency}
            >
              {currency.symbol}
            </Button>
          ))}
        </div>
        <div className="Reg__inputs">
          <TextInput
            label="От"
            values={fromValue}
            onChange={handleFromValueChange}
          />
          <TextInput
            label="До"
            values={toValue}
            onChange={handleToValueChange}
          />
        </div>
      </StepCommonLayout>
    </StyledStep>
  )
}

const StyledStep = styled.div`
  .Reg__options {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .Reg__inputs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .RentPeriod {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: ${tablet}) {
  }

  @media (max-width: ${mobile}) {
    .Reg__options {
      flex-wrap: wrap;
    }

    .Reg__inputs {
      display: flex;
      flex-direction: column;
    }
  }
`

export default StepRentBudget
