import styled from 'styled-components'
import RestoreLayout from './RestoreLayout'
import { useCallback, useRef, useState } from 'react'
import { NumberInput } from '@/components/ui'

interface Props {
  className?: string
  onValid: (token: string) => void
  onError: Function
}

const RestoreConfirm = (props: Props): JSX.Element => {
  const [isDataValid, setDataValid] = useState<boolean>(true)
  const first = useRef<HTMLDivElement>(null)
  const second = useRef<HTMLDivElement>(null)
  const third = useRef<HTMLDivElement>(null)
  const fourth = useRef<HTMLDivElement>(null)

  const onChanged = useCallback(
    (e: any) => {
      const value = e.target.value
      const firstValue = Number(
        first.current?.getElementsByTagName('input')[0].value
      )
      const secondValue = Number(
        second.current?.getElementsByTagName('input')[0].value
      )
      const thirdValue = Number(
        third.current?.getElementsByTagName('input')[0].value
      )
      const fourthValue = Number(
        fourth.current?.getElementsByTagName('input')[0].value
      )
      const token = '' + firstValue + secondValue + thirdValue + fourthValue
      const validData =
        firstValue !== 0 &&
        secondValue !== 0 &&
        thirdValue !== 0 &&
        fourthValue !== 0
      setDataValid(validData)
      if (validData) props.onValid(token)
      if (!validData) props.onError(token)
    },
    [props]
  )

  return (
    <RestoreLayout>
      <StyledStep className="RestoreStep">
        <div className={'Confirm'} ref={first}>
          <NumberInput onChange={onChanged} maxLength={1} />
        </div>
        <div className={'Confirm'} ref={second}>
          <NumberInput onChange={onChanged} maxLength={1} />
        </div>
        <div className={'Confirm'} ref={third}>
          <NumberInput onChange={onChanged} maxLength={1} />
        </div>
        <div className={'Confirm'} ref={fourth}>
          <NumberInput onChange={onChanged} maxLength={1} />
        </div>
      </StyledStep>
    </RestoreLayout>
  )
}

const StyledStep = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;

  .Confirm {
    width: 60px;
    text-align: center;

    input {
      text-align: center;
      padding: 0;
    }
  }
`

export default RestoreConfirm
