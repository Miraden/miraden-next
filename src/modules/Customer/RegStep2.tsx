import { Button, Link } from "@/components/ui";
import { TextInput } from "@/components/ui/TextInput";
import { ArrowIcon } from "@/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const RegStep2 = ({ className }: Props) => {
  const [valid, setValid] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  useEffect(() => {
    if (name && email) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [name, email]);

  return (
    <StyledRegStep1 className={className}>
      <div className="">
        <div className="Reg__head">
          <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
            Регистрация! Укажите имя и электронную почту
          </h1>
        </div>
        <div className="Reg__link Color_blue_primary">
          <span>Пройдите простую регистрацию или </span>
          <Link underlined href="/customer/login">
            войдите в свой аккаунт
          </Link>
        </div>
        <div className="Reg__options">
          <TextInput label="Имя " onChange={handleNameChange} />
          <TextInput
            label="Электронная почта "
            className="Reg__email"
            onChange={handleEmailChange}
          />
          <span className="Font_12_16">
            Нажимая на кнопку «Далее», вы соглашаетесь с обработкой  
            <a href="">персональных данных</a> и 
            <a href="">политикой конфиденциальности</a>
          </span>
        </div>
        <div className="Reg__progressBar"></div>

        <div className="Reg__footer">
          <div className="Reg__footerBack">
            <Button
              secondary
              href="/customer/reg-1"
              className="Reg__goBackButton"
            >
              Назад
            </Button>
            <Button
              secondary
              href="/"
              leftIcon={<ArrowIcon />}
              className="Reg__goBackButtonMobile"
            ></Button>
            <div className="Reg__footerSteps">
              <span className="Font_16_24">Шаг</span>
              <span className="Reg__footerCount Font_16_140 Color_blue_primary">
                2
              </span>
              <span className="Font_16_140 Color_text_grey">/ 2</span>
            </div>
          </div>
          <Button disabled={!valid} href="/customer/reg-3">
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
    padding-top: 41px;
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

    input {
      cursor: text;

      :focus {
        outline: none;
        box-shadow: 0 0 0 2px inset #4e6af3;
      }
    }
  }

  .Reg__email {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .Reg__progressBar {
    position: relative;
    height: 6px;
    background-color: #d4ddee;
    ::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 6px;
      background-color: #4e6af3;
    }
  }

  .Reg__footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
  }

  .Reg__footerSteps {
    margin-left: 30px;

    span:last-child {
      margin-left: 6px;
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
    .Reg__head {
      padding: 20px;
    }

    .Reg__options {
      padding: 38px 20px;
      display: flex;
      flex-direction: column;
      height: 566px;

      span {
        text-align: start;
      }
    }

    .Reg__email {
      margin-bottom: 24px;
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
  }
`;

export { RegStep2 };
