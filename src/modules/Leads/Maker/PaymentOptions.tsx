import { useCallback, useEffect, useState } from 'react'
import { CreatePaymentButton, PayForm } from '@/components/ui'
import StepBlankLayout from '@/modules/Leads/Maker/StepBlankLayout'
import styled from 'styled-components'
import { theme } from '../../../../styles/tokens'

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

const paymentOptions = [
  {
    buttonTitle: 'Открыть отклик для всех',
    buttonText:
      'На заявку смогут откликнуться все пользователи, а не только PRO',
    price: 10,
  },
  {
    buttonTitle: 'Закрепить вверху на 24 часа',
    buttonText:
      'Заявка будет закреплена вверху ленты. После чего сместится вниз по мере поступления новых',
    price: 15,
  },
  {
    buttonTitle: 'Поднимать каждые 3 дня',
    buttonText:
      'Заявка будет автоматически подниматься в самый верх ленты каждые 3 дня',
    price: 20,
  },
]

interface Props {
  className?: string
  onLoad?: (tax: number) => void
  onPrice: (tax: number) => void
}

export const PaymentOptions = (props: Props): JSX.Element => {
  const [activeButtons, setActiveButtons] = useState(
    paymentOptions.map((option, index) => index === 0)
  )
  const [totalTax, setTotalPrice] = useState<number>(0)

  useEffect(() => {
    const selectedPriceValues = paymentOptions
      .filter((option, index) => activeButtons[index])
      .map(option => option.price)

    const totalPrice = selectedPriceValues.reduce((acc, id) => acc + id, 0)
    props.onPrice(totalPrice)
    setTotalPrice(totalPrice)
    if (props.onLoad) props.onLoad(totalTax)
  }, [props, totalTax])

  const handleActive = useCallback(
    (index: number) => {
      const newActiveButtons = [...activeButtons]
      newActiveButtons[index] = !newActiveButtons[index]
      setActiveButtons(newActiveButtons)

      const selectedPriceValues = paymentOptions
        .filter((option, index) => newActiveButtons[index])
        .map(option => option.price)

      const totalPrice = selectedPriceValues.reduce((acc, id) => acc + id, 0)
      props.onPrice(totalPrice)
      setTotalPrice(totalPrice)
    },
    [activeButtons, props]
  )

  const [isOpen, setIsOpen] = useState(false)

  const handleCloseMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <Styled>
      <StepBlankLayout className={props.className}>
        <div className="Reg">
          <div className="Reg__link Font_body_alt">
            <span>
              Важно! Любая выбранная опция даёт вашей заявке отметку TRUE и
              повышенный интерес исполнителей
            </span>
          </div>

          <ul className="Reg__paymentOptions">
            {paymentOptions.map((option, index) => (
              <li key={index}>
                <CreatePaymentButton
                  onChange={() => handleActive(index)}
                  onClick={() => handleActive(index)}
                  buttonTitle={option.buttonTitle}
                  buttonText={option.buttonText}
                  price={option.price}
                  active={activeButtons[index]}
                />
              </li>
            ))}
            {isOpen && (
              <PayForm
                onClose={handleCloseMenu}
                totalPrice={totalTax}
                openToEveryone={0}
                additionalRequests={0}
                getUp={0}
              />
            )}
          </ul>
        </div>
      </StepBlankLayout>
    </Styled>
  )
}

const Styled = styled.div`
  .Reg__paymentOptions {
    padding: 0 30px;
  }

  .Reg {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  .Reg__link {
    padding: 6px 30px;
    color: ${({ theme }) => theme.colors.main};
    background: ${({ theme }) => theme.colors.stroke.dividerForm};
  }

  .Reg__paymentOptions {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: ${mobile}) {
    .Reg__paymentOptions {
      padding: 0 20px;
    }
  }
`

export default PaymentOptions
