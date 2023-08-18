import {Button, Link, PasswordInput} from "@/components/ui";
import {TextInput} from "@/components/ui/TextInput";
import {ArrowIcon, ShowPassIcon} from "@/icons";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {
  ApiRequest,
  ApiRequestMethods,
} from "@/infrastructure/Network/Http/ApiRequest";
import AuthManager from "@/modules/Security/Authentication/AuthManager";
import {HttpCodes} from "@/infrastructure/Network/Http/ApiResponse";
import Form from "@/components/ui/Form";

interface Props {
  className?: string;
  onSuccess?: Function
  onFailure?: Function
  onResponse?: Function
}

const authManager = new AuthManager()

const Login = ({className, onFailure, onResponse, onSuccess}: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [isLoginHasError, setLoginHasErrors] = useState(false)

  useEffect(() => {
    if (email && password) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [email, password]);

  function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {

    setPassword(event.target.value)
    setLoginHasErrors(false)
  }

  function onEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value)
  }

  const [isFormSubmitted, setFormSubmitted] = useState(false)

  async function loginAction(email: string, password: string): Promise<any> {
    setFormSubmitted(true)
    const apiRequest: ApiRequest = new ApiRequest()
    const headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    const data: string = new URLSearchParams({
      email: email,
      password: password
    }).toString()

    const result = apiRequest.fetch({
      method: ApiRequestMethods.POST,
      headers: headers,
      body: data,
      endpoint: "/user/login"
    })

    result.then(async (res) => {
      const responseModule = (await import('@/infrastructure/Network/Http/ApiResponse')).ApiResponse
      const ApiResponse = new responseModule()
      const a = ApiResponse.makeFromObject(res)
      if(onResponse) onResponse()
      if (a.code === HttpCodes.OK) {
        setLoginHasErrors(false)
        // @ts-ignore
        authManager.authUser(a.payload.token)
        if(onSuccess) onSuccess()
        return
      }
      if(onFailure) onFailure()
      setLoginHasErrors(true)
    }).catch((reason) => {
      if(onFailure) onFailure()
      setLoginHasErrors(true)
      setFormSubmitted(false)
    }).finally(() => {
      if(onSuccess) onSuccess()
      setFormSubmitted(false)
    })
  }

  return (
    <StyledRegStep1 className={className}>
      <div className="Reg__headContainer">
        <div className="Reg__head">
          <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
            Вход в аккаунт
          </h1>
        </div>
      </div>
      <div className="Reg__body">
        <div className="Reg__link Color_blue_primary">
          <span>Если у вас ещё нет своего аккаунта, тогда&nbsp;</span>
          <Link underlined href="/user/register">
            зарегистрируйтесь
          </Link>
        </div>
        <div className="Reg__options">
          <Form
            name={"Login_form"}
            method={ApiRequestMethods.POST}
            action='/'
            className="form__login"
            isSubmitted={isFormSubmitted}
          >
            <TextInput
              className={"Reg__email"}
              name={"Login_form[email]"}
              isRequired={true}
              label={"Электронная почта"}
              values={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => onEmailChange(event)}
            />

            <PasswordInput
              icon={<ShowPassIcon/>}
              label="Пароль"
              name={"Login_form[password]"}
              className={"Reg__password"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => onPasswordChange(event)}
            />
            <Link
              href="/customer/pass-recover-1"
              className="Font_14_16 Reg__restorePass"
            >
              Напомнить пароль
            </Link>
            {isLoginHasError && (
              <div className="Error__message Text_12_16">Bad credentials</div>)}
          </Form>
        </div>
      </div>
      <div className="Reg__footerContainer">
        <div className="Reg__progressBar"></div>

        <div className="Reg__footer">
          <div className="Reg__footerBack">
            <Button
              secondary
              href="/"
              className="Reg__goBackButton"
            >
              На главную
            </Button>
            <Button
              secondary
              href="/"
              leftIcon={<ArrowIcon/>}
              className="Reg__goBackButtonMobile"
            ></Button>
          </div>
          <Button
            type="submit"
            disabled={valid}
            onClick={async (e) => await loginAction(email, password)}
          >
            Далее
          </Button>
        </div>
      </div>
    </StyledRegStep1>
  );
};

const StyledRegStep1 = styled.section`
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

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

      :focus {
        outline: none;
      }
    }
  }

  .Reg__options {
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
    margin-top: 40px;
    width: 100%;
  }

  .Reg__password {
    width: 100%;
    max-width: 100%;
    margin-top: 20px;
    margin-bottom: 8px;
  }

  .Reg__restorePass {
    width: 100%;
    text-align: right;

    a:focus {
      outline: none;
    }
  }

  .Reg__progressBar {
    position: relative;
    height: 6px;
    background-color: #d4ddee;
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

  .Error__message {
    width: 100%;
    text-align: left;
    color: ${({theme}) => theme.colors.error}
  }

  .Reg__footerContainer {
    margin-top: 180px;
  }

  .Reg__body {
    flex-grow: 1;
  }

  @media (max-width: 960px) {
    margin-top: 0;
    height: 100%;

    .Reg__options {

      button {
        max-width: unset;
        width: 100%;
        margin-left: 0;
        margin-top: 0;
      }
    }
  }

  @media (max-width: 576px) {

    .Reg {
      height: 100%;
    }

    .Reg__head {
      padding: 20px 20px 16px 20px;
    }

    .Reg__options {
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      max-width: 100%;

      span {
        text-align: start;
      }
    }

    .Reg__password {
      margin-top: 20px;
      margin-bottom: 8px;
    }

    .Reg__link {
      padding: 5px 20px;
    }

    .Reg__goBackButton {
      display: none;
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
  }
`;

export {Login};
