import { Button, TextAreaInput } from "@/components/ui";
import { TextInput } from "@/components/ui/TextInput";
import { ArrowIcon } from "@/icons";
import styled from "styled-components";

interface Props {
  className?: string;
}

const CreateStep11 = ({ className }: Props) => {
  return (
    <StyledRegStep1 className={className}>
      <div className="">
        <div className="Reg__head">
          <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
            Опишите ваши дополнительные пожелания
          </h1>
        </div>
        <div className="Reg__inputsContainer">
          <div className="Reg__inputs">
            <TextInput label="Заголовок заявки " />
            <TextAreaInput
              label="Опишите дополнительные пожелания"
              className="Reg__textArea"
            />
          </div>
        </div>

        <div className="Reg__progressBar"></div>
        <div className="Reg__footer">
          <div className="Reg__footerBack">
            <Button
              secondary
              href="/customer/create-step-10"
              className="Reg__goBackButton"
            >
              Назад
            </Button>
            <Button
              secondary
              href="/customer/create-step-10"
              leftIcon={<ArrowIcon />}
              className="Reg__goBackButtonMobile"
            ></Button>
            <div className="Reg__footerSteps">
              <span className="Font_16_24">Шаг</span>
              <span className="Reg__footerCount Font_16_140 Color_blue_primary">
                11
              </span>
              <span className="Font_16_140">/ 11</span>
            </div>
          </div>
          <div className="Reg__nextButtonContainer">
            <div>
              <span className="Color_text_grey Font_16_24">
                Найдено продавцов
              </span>
              <p className="Color_blue_primary Font_16_140">317</p>
            </div>
            <Button href="/customer/create-payment">Далее</Button>
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
    padding: 30px 30px 18px 30px;
    border-bottom: 2px solid #f1f7ff;
  }

  .Reg__inputsContainer {
    height: 416px;
    overflow-y: scroll;
  }

  .Reg__inputs {
    padding: 40px 30px 0 30px;
    max-width: 840px;
    height: 416px;
    overflow-y: scroll;
  }

  .Reg__textArea {
    margin-top: 11px;
    max-width: 840px;
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
      margin-left: 4px;
    }
  }

  .Reg__footerCount {
    margin-left: 10px;
  }

  .Reg__nextButtonContainer {
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
    }
    p {
      margin-left: 10px;
      margin-right: 30px;
    }
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
    .Reg__inputsContainer {
      height: 827px;
    }
  }

  @media (max-width: 768px) {
    .Reg__nextButtonContainer {
      div {
        display: none;
      }
    }
  }

  @media (max-width: 576px) {
    margin-top: 0;
    .Reg__head {
      padding: 20px;
    }

    .Reg__inputsContainer {
      height: 616px;
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

export { CreateStep11 };
