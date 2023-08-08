import Modal from '@/components/ui/Modal'
import { useCallback } from 'react'
import { Button } from '@/components/ui'
import styled from 'styled-components'

interface Props {
  OnExit?: Function
}

const PaySuccessModal = (props: Props): JSX.Element => {
  const onExit = useCallback(() => {
    if (props.OnExit) props.OnExit()
  }, [props])

  return (
    <Styled>
      <Modal>
        <div className="Modal__head">
          <h4 className={'Font_headline_4'}>Заявка создана</h4>
        </div>
        <div className="Modal__body"></div>
        <div className="Modal__footer">
          <Button onClick={onExit} secondary>Перейти в заявку</Button>
        </div>
      </Modal>
    </Styled>
  )
}

const Styled = styled.div`
  .ModalContent {
    height: fit-content;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .Modal__body {
    flex-grow: 1;
  }

  .Modal__footer {
    display: flex;
    justify-content: center;
  }
`

export default PaySuccessModal
