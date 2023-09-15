import { TextInput } from '@/components/ui/TextInput'
import RegisterCommonLayout from './RegisterCommonLayout'
import styled from 'styled-components'
import { useCallback, useState } from 'react'

interface Props {
  className?: string
  onChanged: (selected: RegisterUserDataResult) => void
}

export interface RegisterUserDataResult {
  email: string
  name: string
}

const RegisterStepEmail = (props: Props): JSX.Element => {
  const [selectedData, setSelectedData] = useState<RegisterUserDataResult>({
    email: '',
    name: '',
  })

  const onEmailChangeCallback = useCallback(
    (e: any) => {
      setSelectedData({
        email: e.target.value,
        name: selectedData.name,
      })
      if (props.onChanged)
        props.onChanged({
          email: e.target.value,
          name: selectedData.name,
        })
    },
    [selectedData]
  )

  const onNameChangeCallback = useCallback(
    (e: any) => {
      setSelectedData({ email: selectedData.email, name: e.target.value })
      if (props.onChanged)
        props.onChanged({ email: selectedData.email, name: e.target.value })
    },
    [selectedData]
  )

  return (
    <RegisterCommonLayout>
      <StyledStep>
        <TextInput
          label="Имя"
          isRequired={true}
          onChange={onNameChangeCallback}
        />
        <TextInput
          isRequired={true}
          label="Электронная почта"
          onChange={onEmailChangeCallback}
        />
      </StyledStep>
    </RegisterCommonLayout>
  )
}

const StyledStep = styled.div`
  width: 50%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 0 auto;
`

export default RegisterStepEmail
