import RestoreLayout from '@/modules/Security/Restore/RestoreLayout'
import { TextInput } from '@/components/ui/TextInput'
import styled from 'styled-components'
import { PasswordInput } from '@/components/ui'
import { useCallback, useRef, useState } from 'react'

export interface RestorePasswordResult {
  email: string
  password: string
}

interface Props {
  className?: string
  onValid: (selected: RestorePasswordResult) => void
  onError: () => void
  serverErrorMsg?: string
}

const RestoreForm = (props: Props): JSX.Element => {
  const [isFormValid, setFormValid] = useState<boolean>(true)
  const [isPasswordEqual, setPasswordEqual] = useState<boolean>(true)
  const [selectedData, setSelectedData] = useState<RestorePasswordResult>({
    email: '',
    password: '',
  })
  const originalPass = useRef<HTMLDivElement>(null)
  const repeatedPass = useRef<HTMLDivElement>(null)
  console.log(props.serverErrorMsg)

  const onEmailChanged = useCallback(
    (e: any) => {
      const selected = {
        email: e.target.value,
        password: selectedData.password,
      }
      const newPass =
        originalPass.current?.getElementsByTagName('input')[0].value
      const confirmedPass =
        repeatedPass.current?.getElementsByTagName('input')[0].value
      const passwordEqual = newPass === confirmedPass
      setPasswordEqual(passwordEqual)

      const emailValid = selected.email.length !== 0

      const formValid = emailValid && passwordEqual
      setFormValid(formValid)
      setSelectedData(selected)
      if (props.onValid && formValid) props.onValid(selected)
      if (props.onError && !formValid) props.onError()
    },
    [props, selectedData.password]
  )

  const onPasswordChanged = useCallback(
    (e: any) => {
      const selected = {
        email: selectedData.email,
        password: e.target.value,
      }
      const newPass =
        originalPass.current?.getElementsByTagName('input')[0].value
      const confirmedPass =
        repeatedPass.current?.getElementsByTagName('input')[0].value
      const passwordEqual = newPass === confirmedPass
      setPasswordEqual(passwordEqual)

      const emailValid = selected.email.length !== 0
      const formValid = emailValid && passwordEqual
      setFormValid(formValid)
      setSelectedData(selected)
      if (props.onValid && formValid) props.onValid(selected)
      if (props.onError && !formValid) props.onError()
    },
    [props, selectedData.email]
  )

  return (
    <RestoreLayout>
      <StyledStep className="RestoreStep">
        <TextInput
          label="Электронная почта"
          isRequired={true}
          onChange={onEmailChanged}
        />
        <div ref={originalPass}>
          <PasswordInput
            label={'Новый пароль'}
            onChange={onPasswordChanged}
            error={!isPasswordEqual}
          />
        </div>

        <div ref={repeatedPass}>
          <PasswordInput
            error={!isPasswordEqual}
            label={'Повторите пароль'}
            onChange={onPasswordChanged}
          />
        </div>
        {props.serverErrorMsg && (
          <div className={'Error__message'}>{props.serverErrorMsg}</div>
        )}
      </StyledStep>
    </RestoreLayout>
  )
}

const StyledStep = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  gap: 20px;

  .Button_request.Button_compact {
    padding: 15px 20px;
  }

  .Error__message {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.error};
  }
`

export default RestoreForm
