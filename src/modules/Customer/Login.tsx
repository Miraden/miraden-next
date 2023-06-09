import { Button, Link } from "@/components/ui";
import { TextInput } from "@/components/ui/TextInput";
import { ArrowIcon } from "@/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const Login = ({ className }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (email && password) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [email, password]);

  return (
    <StyledRegStep1 className={className}>
      <div className="Reg">
        <div className="Reg__headContainer">
          <div className="Reg__head">
            <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
              Вход в аккаунт
            </h1>
          </div>
        </div>
        <div className="Reg__link Color_blue_primary">
          <span>Если у вас ещё нет своего аккаунта, тогда  </span>
          <Link underlined href="/customer/reg-1">
            зарегистрируйтесь
          </Link>
        </div>
        <div className="Reg__options">
          <TextInput
            className="Reg__email"
            label="Электронная почта "
            values={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          />
          <TextInput
            label="Пароль "
            className="Reg__password"
            values={password}
            onChange={
              (event: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value) // Update the password state
            }
          />
          <Link
            href="/customer/pass-recover-1"
            className="Font_14_16 Reg__restorePass"
          >
            Напомнить пароль
          </Link>
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
                На главную
              </Button>
              <Button
                secondary
                href="/"
                leftIcon={<ArrowIcon />}
                className="Reg__goBackButtonMobile"
              ></Button>
            </div>
            <Button disabled={valid} href="/customer/pass-recover-1">
              Далее
            </Button>
          </div>
        </div>
      </div>
    </StyledRegStep1>
  );
};

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
      :focus {
        outline: none;
      }
    }
  }

  .Reg__options {
    height: 388px;
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
  }

  .Reg__password {
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

  @media (max-width: 1200px) {
    margin-top: 100px;
  }
  @media (max-width: 960px) {
    margin-top: 10px;
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
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      height: 566px;

      span {
        text-align: start;
      }
    }

    .Reg__email {
      margin-top: 4px;
      margin-bottom: 0;
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
`;

export { Login };
