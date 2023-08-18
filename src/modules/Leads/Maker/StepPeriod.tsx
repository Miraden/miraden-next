import ru from 'date-fns/locale/ru'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../../styles/tokens'
import { useWindowSize } from '@/hooks/useWindowSize'
import StepCommonLayout from '@/modules/Leads/Maker/StepCommonLayout'

interface Props {
  className?: string
  onChange: (period: StepPeriodResult) => void
}

export interface StepPeriodResult {
  dateFrom: string
  dateTo: string
}

const mobile = theme.breakpoints.mobile.max
const mobilePx = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.mobile.max + 'px'

const StepPeriod = (props: Props): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const onChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
    props.onChange({
      dateFrom: start.toISOString().split('T')[0],
      dateTo: end.toISOString().split('T')[0],
    })
  }

  const [showMonths, setShowMonths] = useState<number>(2)

  useWindowSize(() => {
    const stepWrapper = document.getElementsByClassName('StepsWrapper')[0]
    if (stepWrapper.getBoundingClientRect().width > mobile) {
      setShowMonths(2)
    }
    if (stepWrapper.getBoundingClientRect().width <= mobile) {
      setShowMonths(3)
    }
  })

  return (
    <StepCommonLayout>
      <StyledStep className={'StepPeriod'}>
        <DatePicker
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          locale={ru}
          monthsShown={showMonths}
          className={'PeriodDatePicker'}
        />
      </StyledStep>
    </StepCommonLayout>
  )
}

const StyledStep = styled.div`
  .react-datepicker {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    background: transparent;
    border: none;
    outline: 2px solid ${theme.colors.stroke.divider};
    border-radius: 10px;

    .react-datepicker__day:not(:last-child),
    .react-datepicker__day-name:not(:last-child) {
      margin-right: 15px !important;
    }

    .react-datepicker__month-container:nth-of-type(2n + 1) {
      margin-left: 30px;
    }

    .react-datepicker__header {
      background: transparent;
      padding: 17px 30px 0 23px;
    }

    .react-datepicker__navigation {
    }

    .react-datepicker__navigation--previous {
      top: 10px;
      left: 28px;
    }

    .react-datepicker__navigation--next {
      top: 5px;
      right: 34px;
    }

    .react-datepicker__navigation--next {
      .react-datepicker__navigation-icon--next {
        ::before {
          content: '';
          display: inline-block;
          border: none;
          width: 18px;
          height: 18px;
          transform: rotate(180deg);
          background-image: url('/icons/arrow.svg');
          background-repeat: no-repeat;
        }
      }
    }

    .react-datepicker__navigation-icon--previous {
      ::before {
        content: '';
        display: inline-block;
        border: none;
        width: 18px;
        height: 18px;
        transform: rotate(0);
        background-image: url('/icons/arrow.svg');
        background-repeat: no-repeat;
      }
    }

    .react-datepicker__current-month {
      color: #2a344a;
    }

    .react-datepicker__day-name {
      color: #7786a5;
      font-size: 10px;
      line-height: 24px;
      font-weight: 400;
      text-transform: uppercase;
    }

    .react-datepicker__header {
      border: none;
    }

    .react-datepicker__month {
      margin: 0;
      width: fit-content;
      padding-left: 23px;
      padding-right: 30px;
      padding-bottom: 19px;
    }

    .react-datepicker__week {
      margin-top: 5px;
    }

    .react-datepicker__day {
      color: #2a344a;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      margin: 0;
      padding: 3px;
      width: 30px;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--range-end {
      background: #2a344a !important;
      color: #fff;
      border-radius: ${theme.border.radius} !important;
    }

    .react-datepicker__day--range-end {
    }

    .react-datepicker__day--in-selecting-range {
      background: #f1f7ff;
      border-radius: 10px !important;
    }

    .react-datepicker__day--in-range {
      background: #f1f7ff;
      border-radius: ${theme.border.radius};
    }

    .react-datepicker__day--outside-month {
      color: #b8c6e3;
    }

    .react-datepicker__day--outside-month {
      padding: 0;
    }

    .react-datepicker__current-month {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
    }

    .react-datepicker__week:not(:first-child) {
      margin-top: 5px;
    }

    .react-datepicker__week:nth-child(3n + 2) {
    }

    .react-datepicker__week:nth-child(3n + 3) {
    }
  }

  @media (max-width: ${tablet}) {
    padding: 30px 36px;
  }

  @media (max-width: ${mobilePx}) {
    padding: 0;
    .react-datepicker {
      outline: none;

      &__navigation {
        display: none;
      }

      &__month-container {
        margin: 0 !important;
      }
    }
  }
`

export default StepPeriod
