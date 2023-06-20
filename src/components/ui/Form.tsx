import {ApiRequestMethods} from "@/infrastructure/Network/Http/ApiRequest";
import React, {ReactNode} from "react";
import styled from "styled-components";
import cn from "classnames";
import {Preloader} from "@/components/ui/Preloader";

const baseClassName = 'form'

interface Props {
  className?: string
  method: ApiRequestMethods,
  action: string,
  name: string,
  children?: ReactNode,
  noValidate?: boolean,
  isSubmitted?: boolean,
}

const DefaultProps: Props = {
  className: baseClassName,
  method: ApiRequestMethods.POST,
  action: "",
  name: "",
  children: null,
  noValidate: true,
  isSubmitted: false,
}

const Form = (args: Props) => {
  const props: Props = Object.assign(DefaultProps, args)

  return (
    <StyledContainer>
      <StyledForm
        id={props.name}
        className={cn(baseClassName, props.className, (props.isSubmitted) ? "formIsSubmitted" : "")}
        action={props.action}
        method={props.method}
        name={props.name}
        noValidate={props.noValidate}
      >
        {props.children}
      </StyledForm>
      {props.isSubmitted && <Preloader/>}
    </StyledContainer>
  )
}

const StyledForm = styled.form`
  position: relative;

  &.formIsSubmitted {
    filter: blur(2px);

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      opacity: 0.6;
    }
  }
`

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`

export default Form
