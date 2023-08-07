import { CrossIcon } from '@/icons'
import React, {useCallback, useEffect, useState} from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import { PayFormContent } from './PayFormContent'

interface PayFormProps {
  className?: string
  onClose?: Function
  onOpen?: Function
  testCost?: any
  totalPrice?: any
  openToEveryone?: any
  additionalRequests?: any
  getUp?: any
  onPayClick?: Function
}

const PayForm = ({
  className,
  onClose,
  onOpen,
  testCost,
  totalPrice,
  openToEveryone,
  additionalRequests,
  getUp,
  onPayClick
}: PayFormProps) => {
  const [totalPay, setTotalPay] = useState<number>(totalPrice)
  const [selectedOption, setSelectedOption] = useState<any>(true)

  useEffect(() => {
    if(onOpen) onOpen()
  }, [onOpen])

  const onCloseHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      if (onClose) onClose(event)
    },
    [onClose]
  )

  const OnPayClick = useCallback(() => {
    if(onPayClick) onPayClick()
  }, [onPayClick])

  function renderForm(): JSX.Element {
    return (
      <>
        <StyledPayForm className={className}>
          <div className="PayForm">
            <div className="PayForm__head">
              <h2 className="Font_32_120">Форма оплаты</h2>
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  onCloseHandler(e)
                }
              >
                <CrossIcon
                  attr={{ width: 24, height: 24, className: 'CrossIcon' }}
                />
              </button>
            </div>
            <PayFormContent
              className="PayFormContent"
              totalTax={totalPrice}
              setTotalPay={setTotalPay}
              openToEveryone={openToEveryone}
              additionalRequests={additionalRequests}
              getUp={getUp}
              onOptionSelect={setSelectedOption}
            />
            <div className="PayFormContent__totalPay">
              <Button onClick={OnPayClick} disabled={!selectedOption}>Оплатить {totalPay}€</Button>
            </div>
          </div>
        </StyledPayForm>
      </>
    )
  }

  return <>{renderForm()}</>
}

const StyledPayForm = styled.div`
  position: absolute;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(60, 75, 97, 0.6);
  backdrop-filter: blur(11px);

  .PayForm {
    background: #fff;
    right: 0;
    height: 100vh;
    top: 0;
    position: absolute;
    z-index: 21;
    width: 390px;
  }

  .PayForm__head {
    position: absolute;
    padding: 15px 15px 18px 30px;
    display: flex;
    justify-content: space-between;
    page-break-after: 18px;
    background: #fff;
    width: 100%;
    border-bottom: 2px solid #f1f7ff;
    z-index: 2;

    h2 {
      margin-top: 15px;
    }

    button {
      border-radius: 50%;
      height: 28px;
      width: 28px;
      display: flex;
      align-items: center;
      justify-content: center;

      :hover {
        background: #f1f7ff;
      }
    }

    button:focus {
      outline: 2px solid ${({ theme }) => theme.colors.stroke.purple};
    }
  }

  .CrossIcon {
    border-radius: 50%;
    padding: 2px;

    path {
      fill: #7786a5;
    }
  }

  .PayFormContent {
    position: relative;
    margin-top: 88px;
    overflow: scroll;
  }

  .PayFormContent__totalPay {
    position: absolute;
    background: #fff;
    bottom: 0;
    width: 100%;
    padding: 20px 30px;
    border-top: 2px solid #e1edfd;

    button {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .PayForm {
      width: 100%;
      max-width: unset;
    }
  }
`

export { PayForm }
