import { Button } from '@/components/ui'
import { PhoneInput } from '@/components/ui/PhoneInput'
import { ArrowIcon } from '@/icons'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const PhoneNum1 = ({ className }: Props) => {
  const [valid, setValid] = useState(true)
  const [phone, setPhone] = useState('')

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value
    const numericValue = inputValue.replace(/\D/g, '') // Удалить все символы, кроме цифр
    setPhone(numericValue)
  }

  useEffect(() => {
    if (phone) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [phone])

  return (
    <StyledRegStep1 className={className}>
      <div className="Reg">
        <div className="Reg__headContainer">
          <div className="Reg__head">
            <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
              Укажите ваш номер телефона
            </h1>
          </div>
        </div>
        <div className="Reg__link Color_blue_primary">
          <span>
            Это конфиденциально! Только вы решаете, кто увидит ваш номер
            телефона
          </span>
        </div>
        <div className="Reg__options">
          <PhoneInput
            label="Номер телефона "
            values={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="Reg__footerContainer">
          <div className="Reg__progressBar"></div>
          <div className="Reg__footer">
            <div className="Reg__footerBack">
              <Button
                secondary
                href="/customer/reg-1"
                className="Reg__goBackButton"
              >
                Назад
              </Button>
              <Button
                secondary
                href="/"
                leftIcon={<ArrowIcon />}
                className="Reg__goBackButtonMobile"
              ></Button>
              <div className="Reg__footerSteps">
                <span className="Font_16_24">Шаг</span>
                <span className="Reg__footerCount Font_16_140 Color_blue_primary">
                  1
                </span>
                <span className="Font_16_140 Color_text_grey">/ 2</span>
              </div>
            </div>
            <Button disabled={!valid} href="/customer/login">
              Далее
            </Button>
          </div>
        </div>
      </div>
    </StyledRegStep1>
  )
}

const StyledRegStep1 = styled.section`
  background: #fff;
  border-radius: 10px;
  margin-top: 150px;

  .Reg__head {
    padding: 30px 30px 20px 30px;
  }

  .Reg__link {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 30px;
    background: #f1f7ff;
    a {
      padding: 0;
    }
  }

  .Reg__options {
    padding-top: 43px;
    padding-bottom: 285px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 370px;
    width: 100%;
    text-align: center;
    margin: 0 auto;

    span {
      max-width: 320px;
    }

    a {
      color: #4e6af3;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  .Reg__email {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .Reg__progressBar {
    position: relative;
    height: 6px;
    background-color: #d4ddee;
    ::after {
      position: absolute;
      border-radius: 0 10px 10px 0;
      content: '';
      width: 50%;
      height: 6px;
      background-color: #4e6af3;
    }
  }

  .Reg__footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
  }

  .Reg__footerSteps {
    margin-left: 30px;

    span:last-child {
      margin-left: 4px;
    }
  }

  .Reg__footerCount {
    margin-left: 10px;
  }

  .Reg__footerBack {
    display: flex;
    align-items: center;
  }

  .Reg__goBackButtonMobile {
    display: none;
  }
  @media (max-width: 1200px) {
    margin-top: 100px;
  }

  @media (max-width: 960px) {
    margin-top: 0;
    .Reg__options {
      height: 797px;
      button {
        max-width: unset;
        width: 100%;
        margin-left: 0;
        margin-top: 0;
      }
    }
  }

  @media (max-width: 576px) {
    margin-top: 0;
    height: 100vh;

    .Reg {
      height: 100%;
    }
    .Reg__head {
      padding: 20px 20px 16px 20px;
    }

    .Reg__options {
      padding: 38px 20px;
      display: flex;
      flex-direction: column;
      height: 566px;

      span {
        text-align: start;
      }
    }

    .Reg__email {
      margin-bottom: 24px;
    }

    .Reg__link {
      padding: 5px 20px;
    }

    .Reg__goBackButton {
      display: none;
    }

    .Reg__footer {
      padding: 20px;
    }

    .Reg__footerSteps {
      margin-left: 20px;
    }

    .Reg__goBackButtonMobile {
      padding: 16px;
      display: flex;
      svg {
        transform: rotate(-90deg);
        path {
          fill: none !important;
        }
      }
    }
    .Reg__headContainer {
      position: sticky;
      top: 0;
      background: #fff;
      width: 100%;
    }

    .Reg__footerContainer {
      position: fixed;
      bottom: 0;
      width: 100%;
      background: #fff;
    }
  }
`

export { PhoneNum1 }
