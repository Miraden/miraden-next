import {FC} from "react";
import styled from "styled-components";
import {theme} from "../../../styles/tokens";

const baseClassName = "Preloader"

interface Props {
  className?: string
  isVisible?: boolean
  color?: string
}

const DefaultProps: Props = {
  className: baseClassName,
  isVisible: false,
  color: theme.colors.blue.default
}

const Preloader: FC<Props> = (args: Props) => {
  const props: Props = Object.assign(DefaultProps, args)

  return (
    <StyledPreloader className={props.className} color={props.color}>
      <div></div>
      <div></div>
    </StyledPreloader>
  )
}

const StyledPreloader = styled.div<Props>`
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  filter: blur(0);

  div {
    position: absolute;
    border: 4px solid ${(props) => props.color};
    opacity: 1;
    border-radius: 50%;
    animation: Preloader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes Preloader {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0;
      left: 0;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }

`

export {Preloader}
