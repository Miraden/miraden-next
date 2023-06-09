import { Button, Link } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TechSupport } from "./TechSupport";

interface Props {
  className?: string;
  onChange: (value: string) => void;
}
const COUNTDOWN_SECONDS = 180;

const PhoneNum2 = ({ className, onChange }: Props) => {
  const [valid, setValid] = useState(false);
  const [inputValues, setInputValues] = useState<string[]>(["", "", "", ""]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleCloseMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const fourthInputRef = useRef<HTMLInputElement>(null);

  const handleDigitChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      setInputValues((prevInputValues) => {
        const newInputValues = [...prevInputValues];
        newInputValues[index] = value;
        return newInputValues;
      });

      onChange(value);

      if (index === 0 && value && secondInputRef.current) {
        secondInputRef.current.focus();
      } else if (index === 1 && value && thirdInputRef.current) {
        thirdInputRef.current.focus();
      } else if (index === 2 && value && fourthInputRef.current) {
        fourthInputRef.current.focus();
      }
    };

  useEffect(() => {
    const allInputsFilled = inputValues.every((value) => value !== "");
    setValid(allInputsFilled);
  }, [inputValues]);

  const [secondsRemaining, setSecondsRemaining] =
    useState<number>(COUNTDOWN_SECONDS);

  useEffect(() => {
    if (secondsRemaining > 0) {
      const intervalId = setInterval(() => {
        setSecondsRemaining((prevSecondsRemaining) => prevSecondsRemaining - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [secondsRemaining]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <StyledRegStep1 className={className}>
      <div className="Reg">
        <div className="Reg__headContainer">
          <div className="Reg__head">
            <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
              Введите код из СМС для подтверждения телефона
            </h1>
          </div>
        </div>
        <div className="Reg__link Color_blue_primary">
          <span>
            На номер +7 919 778-83-33 был отправлен код для подтверждения.
            Если код не поступил, тогда напишите об этом в{" "}
            <button onClick={handleOpenMenu} className="Color_blue_primary">
              поддержку
            </button>
          </span>
        </div>
        {isOpen && <TechSupport onClose={handleCloseMenu} />}
        <div className="Reg__options">
          <div>
            <DigitInput
              autoFocus
              onChange={handleDigitChange(0)}
              maxLength={1}
            />
            <DigitInput
              ref={secondInputRef}
              onChange={handleDigitChange(1)}
              maxLength={1}
            />
            <DigitInput
              ref={thirdInputRef}
              onChange={handleDigitChange(2)}
              maxLength={1}
            />
            <DigitInput
              ref={fourthInputRef}
              onChange={handleDigitChange(3)}
              maxLength={1}
            />
          </div>
          <div className="Reg__countdown">
            <p className="Color_text_disabled">Отправить код ещё раз через </p>
            <div className="Color_blue_primary">
              (
              {`${minutes.toString().padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}`}
              )
            </div>
          </div>
          <Link href="/customer/reg-1" className="Reg__changeNumber">
            Изменить номер телефона
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
            <Button disabled={!valid} href="/customer/login">
              Далее
            </Button>
          </div>
        </div>
      </div>
    </StyledRegStep1>
  );
};

const DigitInput = styled.input`
  width: 60px;
  height: 60px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-right: 10px;
  border: none;
  box-shadow: 0 0 0 2px inset #e1edfd;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 0 0 2px #cddef4 inset;
    cursor: text;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #4e6af3 inset !important;
  }
`;

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
    button {
      text-decoration: underline;
      padding: 0;
      outline: none;
    }
  }

  .Reg__options {
    padding-top: 38px;
    padding-bottom: 174px;
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

  .Reg__countdown {
    display: flex;
    margin-top: 30px;
  }

  .Reg__changeNumber {
    margin-top: 50px;

    a:focus {
      outline: none;
    }
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

export { PhoneNum2 };
