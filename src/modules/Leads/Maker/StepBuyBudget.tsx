import styled from 'styled-components'
import { theme } from '../../../../styles/tokens'
import React, { useCallback, useEffect, useState } from 'react'
import { Button, NumberInput } from '@/components/ui'
import { TextInput } from '@/components/ui/TextInput'
import CurrencyProvider, {
  CurrencyStruct,
} from '@/infrastructure/Currencies/CurrencyProvider'

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

interface Props {
  className?: string
  onChanged?: (select: BuyBudgetResult) => void
}

export interface BuyBudgetResult {
  currencyId: number
  from: number
  to: number
}

const StepBuyBudget = (props: Props): JSX.Element => {
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
        })
    },
    [fromValue, props, toValue]
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
        })
    }
  }

  return (
    <StyledStep>
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
        <TextInput label="До" values={toValue} onChange={handleToValueChange} />
      </div>
    </StyledStep>
  )
}

const StyledStep = styled.div`
  padding: 30px 40px;
  display: flex;
  gap: 30px;
  flex-direction: column;

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

  @media (max-width: ${tablet}) {
    gap: 12px;
    padding: 30px 36px;
  }

  @media (max-width: ${mobile}) {
    padding: 20px 24px;

    .Reg__options {
      flex-wrap: wrap;
    }

    .Reg__inputs {
      display: flex;
      flex-direction: column;
    }
  }
`

export default StepBuyBudget
