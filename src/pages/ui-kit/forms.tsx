import {Button, PasswordInput, PayForm} from "@/components/ui";
import Link from "next/link";
import styled from "styled-components";
import Form from "@/components/ui/Form";
import {ApiRequestMethods} from "@/infrastructure/Network/Http/ApiRequest";
import {BlankLayout} from "@/modules/Base/BlankLayout";
import React, {MouseEvent, useCallback, useState} from "react";
import {TextInput} from "@/components/ui/TextInput";
import {ShowPassIcon} from "@/icons";

export default function FormsPage() {

  const [payFormVisible, setPayFormVisible] = useState(false)

  const showPayFormHandler = useCallback(() => {
    setPayFormVisible(!payFormVisible)
  }, [payFormVisible])

  const [isFormSubmitted, setFormSubmitted] = useState(false)
  const onFormSubmit = useCallback((e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const form = e.target.closest('form')
    if (!form) return

    const data = new FormData(form)
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
    }, 1000)
  }, [setFormSubmitted])

  return (
    <>
      <BlankLayout className="Container">
        <Link href="/ui-kit">Go back</Link>
        <h1 className="Font_52_120">Формы</h1>
        <StyledDiv>
          <Button onClick={showPayFormHandler}>
            Open pay form
          </Button>
          {payFormVisible && <PayForm onClose={showPayFormHandler}/>}
          <Form
            name={"Testing_form"}
            method={ApiRequestMethods.POST}
            action='/'
            className="form__testing"
            isSubmitted={isFormSubmitted}
          >
            <h2>Generic Form</h2>
            <TextInput name={"Testing_form[name]"} isRequired={true}/>
            <PasswordInput
              icon={<ShowPassIcon/>}
              label="Пароль"
              name={"Testing_form[pass]"}
            />
            <Button
              secondary
              type={"submit"}
              onClick={onFormSubmit}>Submit</Button>
          </Form>
        </StyledDiv>
      </BlankLayout>
    </>
  );
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 400px);
  gap: 40px;

  .form__testing {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
