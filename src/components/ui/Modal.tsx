import styled from 'styled-components'
import React, { ReactNode } from 'react'
import {theme} from "../../../styles/tokens";

interface Props {
  className?: string
  children?: ReactNode
}

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

const Modal = (props: React.PropsWithChildren<Props>): JSX.Element => {
  return (
    <StyledModal>
      <div className={'ModalContent'}>{props.children}</div>
    </StyledModal>
  )
}

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100%;
  width: 100%;
  background: rgba(60, 75, 97, 0.6);
  backdrop-filter: blur(11px);

  .ModalContent {
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    max-width: 970px;
    width: 100%;

    .CloseButton {
      position: absolute;
      right: 15px;
      top: 15px;
    }
  }

  @media (max-width: ${tablet}) {
    .ModalContent {
      width: 100%;
      height: 100%;
    }
  }
`

export default Modal
