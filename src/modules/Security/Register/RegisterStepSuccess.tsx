import styled from 'styled-components'
import RegisterCommonLayout from './RegisterCommonLayout'
import Image from 'next/image'

const RegisterStepSuccess = (): JSX.Element => {
  return (
    <RegisterCommonLayout>
      <StyledStep>
        <Image
          src="/images/successReg.svg"
          alt={'register_ok'}
          width={120}
          height={120}
        />
        <div className="registerMessage">
          <h4 className="Font_headline_5 registerMessage--title">
            Вы отлично справились с регистрацией!
          </h4>
          <p className="Font_body_base registerMessage--text">
            На вашу почту был отправлен пароль
          </p>
        </div>
      </StyledStep>
    </RegisterCommonLayout>
  )
}

const StyledStep = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  gap: 30px;
  margin-top: 10px;

  .registerMessage {
    &--title {
      margin-bottom: 10px;
    }

    &--text {
      color: ${({ theme }) => theme.colors.text.grey};
    }
  }
`

export default RegisterStepSuccess
