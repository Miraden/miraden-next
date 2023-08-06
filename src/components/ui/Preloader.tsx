import { FC } from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/tokens'

const baseClassName = 'Preloader'

interface Props {
  className?: string
  isVisible?: boolean
  color?: string
}

const DefaultProps: Props = {
  className: baseClassName,
  isVisible: false,
  color: theme.colors.blue.default,
}

const Preloader: FC<Props> = (args: Props) => {
  const props: Props = Object.assign(DefaultProps, args)

  return (
    <StyledPreloader className={props.className} color={props.color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledPreloader>
  )
}

const StyledPreloader = styled.div<Props>`
  display: inline-block;
  position: absolute;
  width: 40px;
  height: 40px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  filter: blur(0);

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    margin: 8px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.main};
    animation: Preloader 1200ms cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.main} transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes Preloader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export { Preloader }
