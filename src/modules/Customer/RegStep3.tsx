import { Button, Link } from "@/components/ui";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  className?: string;
}

const RegStep3 = ({ className }: Props) => {
  return (
    <StyledRegStep1 className={className}>
      <div className="">
        <div className="Reg__head">
          <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
            Поздравляем с успешной регистрацией!
          </h1>
        </div>
        <div className="Reg__options">
          <Image src="/images/SuccesReg.svg" alt="" width={150} height={120} />
          <h2 className="Font_20_120">Вы отлично справились с регистрацией!</h2>
          <span className="Font_16_24 Color_text_grey">
            На вашу почту{" "}
            <span className="Color_blue_primary">info@miraden.com</span>{" "}
            отправлен пароль
          </span>
          <Link
            href="/customer/reg-step-2"
            className="Reg__changeEmail Font_14_16"
          >
            Изменить электронную почту
          </Link>
        </div>
        <div className="Reg__progressBar"></div>
        <div className="Reg__footer">
          <div className="Reg__footerBack">
            <Button secondary className="Reg__goBackButton">
              Настроить профиль
            </Button>
            <Button secondary className="Reg__goBackButtonMobile">
              Профиль
            </Button>
          </div>
          <Button href="/customer/create-1">Далее</Button>
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
    border-bottom: 2px solid #f1f7ff;
  }

  .Reg__link {
    display: flex;
    padding: 5px 30px;
    background: #f1f7ff;
  }

  .Reg__options {
    padding-top: 50px;
    padding-bottom: 78px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 390px;
    width: 100%;
    text-align: center;
    margin: 0 auto;

    div {
      width: 100%;
    }

    h2 {
      margin-top: 30px;
    }

    span {
      margin-top: 10px;
      max-width: 320px;
    }

    a {
      margin-top: 40px;
    }
  }

  .Reg__email {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .Reg__changeEmail {
    margin-top: 40px;

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
      padding-top: 100;
      padding-bottom: 495px;
    }
  }

  @media (max-width: 576px) {
    margin-top: 0;
    .Reg__head {
      padding: 20px;
    }

    .Reg__options {
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 260px;
    }

    .Reg__link {
      padding: 5px 20px;
    }

    .Reg__goBackButton {
      display: none;
    }

    .Reg__footer {
      padding: 20px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 12px;
    }

    .Reg__footerSteps {
      margin-left: 20px;
    }

    .Reg__goBackButtonMobile {
      width: 100% !important;
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

export { RegStep3 };
