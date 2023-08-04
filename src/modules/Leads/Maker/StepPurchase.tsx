import styled from 'styled-components'
import {
  LeadPurchases as PurchasesProvider,
  LeadPurchasesFormats as FormatsProvider,
  LeadPurchasesFormatStruct as FormatSt,
  LeadPurchasesStruct as PurchaseSt,
} from '@/modules/Leads/LeadTypesDefintion'
import { Button } from '@/components/ui'
import { useCallback, useState } from 'react'
import StepCommonLayout from '@/modules/Leads/Maker/StepCommonLayout'

interface Props {
  className?: string
  onChange: (options: PurchaseResult) => void
}

export interface PurchaseResult {
  purchaseType: string
  firstInstallment: number
  purchaseFormat: string
}

const StepPurchase = (props: Props): JSX.Element => {
  const [selectedPurchase, setSelectedPurchase] = useState<string>('')
  const [selectedInstallment, setSelectedInstallment] = useState<number>(0)
  const [selectedFormat, setSelectedFormat] = useState<string>('')

  const onPurchase = useCallback(
    (option: PurchaseSt) => {
      setSelectedPurchase(option.label)
      props.onChange({
        firstInstallment: selectedInstallment,
        purchaseFormat: selectedFormat,
        purchaseType: option.label,
      })
    },
    [props, selectedFormat, selectedInstallment]
  )

  const onFirstInstallment = useCallback(
    (option: number) => {
      setSelectedInstallment(option)
      props.onChange({
        firstInstallment: option,
        purchaseFormat: selectedFormat,
        purchaseType: selectedPurchase,
      })
    },
    [props, selectedFormat, selectedPurchase]
  )

  const onFormat = useCallback(
    (option: FormatSt) => {
      setSelectedFormat(option.label)
      props.onChange({
        firstInstallment: selectedInstallment,
        purchaseFormat: option.label,
        purchaseType: selectedPurchase,
      })
    },
    [props, selectedInstallment, selectedPurchase]
  )

  return (
    <StyledStep>
      <StepCommonLayout>
        <Purchases selected={selectedPurchase} onChanged={onPurchase} />
        <Installment
          selected={selectedInstallment}
          onChanged={onFirstInstallment}
        />
        <Format selected={selectedFormat} onChanged={onFormat} />
      </StepCommonLayout>
    </StyledStep>
  )
}

interface purchaseProps {
  onChanged?: (options: PurchaseSt) => void
  selected: string
}

const Purchases = (props: purchaseProps): JSX.Element => {
  const onClick = useCallback(
    (option: PurchaseSt) => {
      if (props.onChanged) props.onChanged(option)
    },
    [props]
  )

  return (
    <div className={'PurchasesRow'}>
      <div className="PurchasesContent">
        {PurchasesProvider.map(i => {
          return (
            <Button
              request
              compact
              active={props.selected === i.label}
              key={i.label}
              onClick={e => onClick(i)}
            >
              {i.name.ru}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

interface firstInstallmentProps {
  onChanged?: (option: number) => void
  selected: number
}

const Installment = (props: firstInstallmentProps): JSX.Element => {
  const percents: number[] = generateInstallments(10, 100, 10)
  const onClick = useCallback(
    (percent: number) => {
      if (props.onChanged) props.onChanged(percent)
    },
    [props]
  )

  return (
    <div className={'PurchasesRow'}>
      <h5 className={'Font_headline_5'}>Первый взнос</h5>
      <div className="PurchasesContent">
        {percents.map(i => {
          return (
            <Button
              compact
              request
              key={i}
              active={props.selected === i}
              onClick={e => onClick(i)}
            >
              {i} %
            </Button>
          )
        })}
      </div>
    </div>
  )
}

interface formatProps {
  onChanged?: (option: FormatSt) => void
  selected: string
}

const Format = (props: formatProps): JSX.Element => {
  const onClick = useCallback(
    (format: FormatSt) => {
      if (props.onChanged) props.onChanged(format)
    },
    [props]
  )

  return (
    <div className={'PurchasesRow'}>
      <h5 className={'Font_headline_5'}>Формат расчета</h5>
      <div className="PurchasesContent">
        {FormatsProvider.map(format => {
          return (
            <Button
              request
              compact
              key={format.label}
              active={props.selected === format.label}
              onClick={e => onClick(format)}
            >
              {format.name.ru}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

function generateInstallments(
  min: number,
  max: number,
  step: number
): number[] {
  let areas: number[] = []

  let i = min
  while (i <= max) {
    areas.push(i)
    i += step
  }

  return areas
}

const StyledStep = styled.div`
  .Purchases {
    &Row {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    &Content {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
  }
`

export default StepPurchase
