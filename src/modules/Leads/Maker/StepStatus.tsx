import styled from 'styled-components'
import { useCallback, useState } from 'react'
import {
  LeadEstateStatuses as Statuses,
  LeadEstateStatusesEnum as StatusesEnum,
} from '@/modules/Leads/LeadTypesDefintion'
import { Button } from '@/components/ui'
import { theme } from '../../../../styles/tokens'
import StepCommonLayout from "@/modules/Leads/Maker/StepCommonLayout";
import ButtonFoldGroup, {
  ButtonFoldsFormatOptions
} from "@/components/ui/Buttons/ButtonFoldGroup";

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

interface Props {
  className?: string
  onChanged?: (options: EstateStatusResult) => void
}

export interface EstateStatusResult {
  status: StatusesEnum
  deadlineAfter: string
  buildYear: string
}

const StepStatus = (props: Props) => {
  const [selectedStatus, setSelectedStatus] = useState<string>('')
  const [selectedMonth, setSelectedMonth] = useState<number>(0)
  const [selectedYear, setSelectedYear] = useState<number>(0)

  const onStatus = useCallback(
    (e: any, label: string) => {
      setSelectedStatus(label)
      setSelectedMonth(0)
      setSelectedYear(0)
      if (props.onChanged)
        props.onChanged({
          status: castToStatesEnum(label),
          deadlineAfter: '',
          buildYear: '',
        })
    },
    [props]
  )

  const onBuildingYear = useCallback(
    (e: any, year: number) => {
      setSelectedYear(year)
      setSelectedMonth(0)
      if (props.onChanged)
        props.onChanged({
          status: castToStatesEnum(selectedStatus),
          buildYear: String(year),
          deadlineAfter: '',
        })
    },
    [props, selectedStatus]
  )

  const onDeadlineMonth = useCallback(
    (e: any, month: number) => {
      setSelectedMonth(month)
      setSelectedYear(0)
      if (props.onChanged)
        props.onChanged({
          status: castToStatesEnum(selectedStatus),
          buildYear: '',
          deadlineAfter: String(month),
        })
    },
    [props, selectedStatus]
  )

  return (
    <StyledStep>
      <StepCommonLayout>
        <RenderStatuses
          selectedStatus={selectedStatus}
          className={'EstateStatus__List WideButtons'}
          onChanged={onStatus}
        />

        {selectedStatus === StatusesEnum.New && (
          <RenderNewDeadline
            selected={selectedMonth}
            onChanged={onDeadlineMonth}
          />
        )}
        {selectedStatus === StatusesEnum.Secondary && (
          <RenderSecondaryBuildingYear
            selected={selectedYear}
            onChanged={onBuildingYear}
          />
        )}
      </StepCommonLayout>
    </StyledStep>
  )
}

interface StatusProps {
  className?: string
  selectedStatus: string
  onChanged?: Function
}

const RenderStatuses = (props: StatusProps): JSX.Element => {
  const onClick = useCallback(
    (e: any, label: string) => {
      if (props.onChanged) props.onChanged(e, label)
    },
    [props]
  )

  return (
    <div className={props.className}>
      {Statuses.map((i, id) => (
        <Button
          active={props.selectedStatus === i.label}
          compact
          request
          key={i.label}
          onClick={e => onClick(e, i.label)}
        >
          {i.name.ru}
        </Button>
      ))}
    </div>
  )
}

interface BuildYearProps {
  className?: string
  selected: number
  onChanged?: Function
}

const RenderSecondaryBuildingYear = (props: BuildYearProps): JSX.Element => {
  const onClick = useCallback(
    (e: any, year: number) => {
      if (props.onChanged) props.onChanged(e, year)
    },
    [props]
  )

  const years = getHistoryYears(50)
  return (
    <div className={'EstateStatus__BuildDate'}>
      <h2 className="Font_headline_5">Год постройки</h2>
      <ButtonFoldGroup
        className="EstateStatus__BuildDateYears"
        alwaysVisible={5}
        intl={{
          more: `Еще ${ButtonFoldsFormatOptions.Count}`,
          less: 'Свернуть',
        }}
      >
        {years.map((year: number) => (
          <Button
            active={props.selected === year && props.selected !== 0}
            request
            compact
            key={year}
            onClick={e => onClick(e, year)}
          >
            {year}
          </Button>
        ))}
      </ButtonFoldGroup>
    </div>
  )
}

interface DeadlineProps {
  className?: string
  selected: number
  onChanged?: Function
}

const RenderNewDeadline = (props: DeadlineProps): JSX.Element => {
  const onClick = useCallback(
    (e: any, month: number) => {
      if (props.onChanged) props.onChanged(e, month)
    },
    [props]
  )

  return (
    <div className={'EstateStatus__Deadline'}>
      <h2 className="Font_headline_5">Ввод в эксплуатацию через</h2>

      <ButtonFoldGroup
        className="EstateStatus__DeadlineMonths"
        alwaysVisible={5}
        intl={{
          more: `Еще ${ButtonFoldsFormatOptions.Count}`,
          less: 'Свернуть',
        }}
      >
        {[...Array(64)].map((_, index) => {
          const month = index % 12

          const label = index + ' мес'
          if (index === 0) {
            return label === 'уже построена'
          }
          if (index >= 18) {
            return null
          }

          const isRanged = index > 1 && index < 20

          return (
            <Button
              request
              compact
              key={index}
              active={props.selected === index}
              onClick={e => onClick(e, index)}
            >
              {label}
            </Button>
          )
        })}
      </ButtonFoldGroup>
    </div>
  )
}

function getHistoryYears(max: number): number[] {
  const years: number[] = []
  const currentYear = new Date().getFullYear()
  const minYear = currentYear - max

  for (let year = currentYear; year >= minYear; year--) {
    years.push(year)
  }

  return years
}

function castToStatesEnum(state: string): StatusesEnum {
  return state as StatusesEnum
}

const StyledStep = styled.div`
  .EstateStatus__List {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 20px;

    button {
      flex-grow: 1;
      justify-content: flex-start;
      width: 100%;
    }
  }

  .EstateStatus__Deadline,
  .EstateStatus__BuildDate {
    &Months,
    &Years {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 15px;
    }
  }

  @media (max-width: ${tablet}) {
    .EstateStatus__List {
      gap: 12px;
    }
  }

  @media (max-width: ${mobile}) {
    .EstateStatus__List {
      display: flex;
      flex-direction: column;
    }
  }
`

export default StepStatus
