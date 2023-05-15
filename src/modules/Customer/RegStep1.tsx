import { Button, Link, RequestButton } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

type Option = "client" | "owner" | "realtor" | "agency" | "developer";

const RegStep1 = ({ className }: Props) => {
  const [selected, setSelected] = useState<Option | null>(null);

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
  }, []);

  return (
    <StyledRegStep1 className={className}>
      <div className="">
        <div className="Reg__head">
          <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
            Регистрация! Укажите ваш статус
          </h1>
        </div>
        <div className="Reg__link Color_blue_primary">
          <span>Пройдите простую регистрацию или </span>
          <Link underlined href="/customer/login">
            войдите в свой аккаунт
          </Link>
        </div>
        <div className="Reg__options">
          <RequestButton
            onClick={() => handleSelect("client")}
            active={selected === "client"}
          >
            Клиент (ищу для себя)
          </RequestButton>
          <RequestButton
            onClick={() => handleSelect("owner")}
            active={selected === "owner"}
          >
            Собственник
          </RequestButton>
          <RequestButton
            onClick={() => handleSelect("realtor")}
            active={selected === "realtor"}
          >
            Риелтор
          </RequestButton>
          <RequestButton
            onClick={() => handleSelect("agency")}
            active={selected === "agency"}
          >
            Агентство недвижимости
          </RequestButton>
          <RequestButton
            onClick={() => handleSelect("developer")}
            active={selected === "developer"}
          >
            Застройщик
          </RequestButton>
        </div>
        <div className="Reg__progressBar"></div>

        <div className="Reg__footer">
          <div className="Reg__footerBack">
            <Button secondary href="/" className="Reg__goBackButton">
              На главную
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
                1
              </span>
              <span className="Font_16_140 Color_text_grey">/ 2</span>
            </div>
          </div>
          <Button disabled={!selected} href="/customer/reg-2">
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

    a:focus {
      outline: none;
    }
  }

  .Reg__options {
    height: 388px;
    padding: 21px 30px 0 30px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    place-content: start;

    button {
      justify-content: flex-start;
      max-width: 340px;
      width: 100%;
      margin-left: 20px;
      margin-top: 20px;

      span {
        text-align: initial;
      }
    }
  }

  .Reg__progressBar {
    position: relative;
    height: 6px;
    background-color: #d4ddee;
    ::after {
      position: absolute;
      border-radius: 0 10px 10px 0;
      content: "";
      width: 50%;
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
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: max-content;
      grid-gap: 20px;
      margin-left: 0;
      margin-top: 0;
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
      grid-gap: 12px;
      height: 566px;
      button {
      }
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

export { RegStep1, type Option };
