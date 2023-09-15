import { Button } from '@/components/ui'
import RegisterCommonLayout from './RegisterCommonLayout'
import styled from 'styled-components'
import { useCallback, useState } from 'react'

interface Props {
  className?: string
  onSelected: (selected: string) => void
}

const Statuses = [
  {
    name: 'Клиент (ищу для себя)',
    label: 'client',
  },
  {
    name: 'Риелтор',
    label: 'realtor',
  },
  {
    name: 'Застройщик',
    label: 'owner',
  },
  {
    name: 'Собственник',
    label: 'builder',
  },
  {
    name: 'Агентство недвижимости',
    label: 'estate',
  },
]

const RegisterStepStatus = (props: Props): JSX.Element => {
  const [selected, setSelected] = useState<string>('')
  const selectedCallback = useCallback((e: any) => {
    setSelected(e)
    if (props.onSelected) props.onSelected(e)
  }, [])

  return (
    <RegisterCommonLayout>
      <StyledStep className="RegisterStep">
        {Statuses.map(i => {
          return (
            <Button
              request
              key={i.label}
              active={selected === i.label}
              onClick={e => selectedCallback(i.label)}
            >
              {i.name}
            </Button>
          )
        })}
      </StyledStep>
    </RegisterCommonLayout>
  )
}

const StyledStep = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 20px;

  .Button_request.Button_compact {
    padding: 15px 20px;
  }
`

export default RegisterStepStatus
