import { TextInput } from '@/components/ui/TextInput'
import { TextAreaInput } from '@/components/ui'
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import StepCommonLayout from '@/modules/Leads/Maker/StepCommonLayout'

interface Props {
  className?: string
  onChange: (options: WishesResult) => void
}

export interface WishesResult {
  title: string
  wishes: string
}

const StepWishes = (props: Props): JSX.Element => {
  const [title, setTitle] = useState('')
  const [wishes, setWishes] = useState('')

  const onTitle = useCallback(
    (event: any) => {
      setTitle(event.target.value)
      props.onChange({ wishes: wishes, title: event.target.value })
    },
    [props, wishes]
  )

  const onWishes = useCallback(
    (e: any) => {
      setWishes(e.target.value)
      props.onChange({ wishes: e.target.value, title: title })
    },
    [props, title]
  )

  return (
    <StyledStep>
      <StepCommonLayout className={'StepWishes'}>
        <TextInput
          maxLength={45}
          isRequired={true}
          label="Заголовок заявки"
          onChange={onTitle}
        />
        <TextAreaInput
          label="Опишите дополнительные пожелания"
          onChange={onWishes}
        />
      </StepCommonLayout>
    </StyledStep>
  )
}

const StyledStep = styled.div`
  .StepWishes {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export default StepWishes
