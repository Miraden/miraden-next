import styled from 'styled-components'
import { useCallback, useState } from 'react'
import { Button } from '@/components/ui'
import StepCommonLayout from '@/modules/Leads/Maker/StepCommonLayout'
import {theme} from "../../../../styles/tokens";

interface Props {
  className?: string
  onChanged?: Function
}

type Option = 'buy' | 'rent'

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

const StepFormat = (props: Props): JSX.Element => {
  const [selected, setSelected] = useState<Option | null>(null)

  const handleSelect = useCallback(
    (option: Option) => {
      setSelected(option)
      if (props.onChanged) props.onChanged(option)
    },
    [props]
  )

  return (
    <StyledRegStep1>
      <StepCommonLayout className={'FormatList'}>
        <Button
          request
          onClick={() => handleSelect('buy')}
          active={selected === 'buy'}
        >
          Хочу купить
        </Button>
        <Button
          request
          onClick={() => handleSelect('rent')}
          active={selected === 'rent'}
        >
          Хочу арендовать
        </Button>
      </StepCommonLayout>
    </StyledRegStep1>
  )
}

const StyledRegStep1 = styled.section`
  .FormatList {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 20px;

    button {
      justify-content: flex-start;
      width: 100%;

      span {
        text-align: initial;
      }
    }
  }

  @media (max-width: ${tablet}) {
    .FormatList {
      gap: 12px;
    }
  }

  @media (max-width: ${mobile}) {
    .FormatList {
      display: flex;
      flex-direction: column;
    }
  }
`

export default StepFormat
