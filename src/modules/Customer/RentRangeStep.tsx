import { Button } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import ru from "date-fns/locale/ru";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
interface Props {
  className?: string;
}

const RentRangeStep = ({ className }: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <StyledRegStep1 className={className}>
      <div className="Reg">
        <div className="Reg__headContainer">
          <div className="Reg__head">
            <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
              Укажите период аренды
            </h1>
          </div>
        </div>
        <div className="Test">
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            locale={ru}
            monthsShown={2}
          />
        </div>
        <div className="Reg__footerContainer">
          <div className="Reg__progressBar"></div>
          <div className="Reg__footer">
            <div className="Reg__footerBack">
              <Button
                secondary
                href="/customer/create-step-4"
                className="Reg__goBackButton"
              >
                Назад
              </Button>
              <Button
                secondary
                href="/customer/create-step-4"
                leftIcon={<ArrowIcon />}
                className="Reg__goBackButtonMobile"
              ></Button>
              <div className="Reg__footerSteps">
                <span className="Font_16_24">Шаг</span>
                <span className="Reg__footerCount Font_16_140 Color_blue_primary">
                  5
                </span>
                <span className="Font_16_140 Color_text_grey">/ 7</span>
              </div>
            </div>
            <div className="Reg__nextButtonContainer">
              <div>
                <span className="Color_text_grey Font_16_24">
                  Найдено продавцов
                </span>
                <p className="Color_blue_primary Font_16_140">317</p>
              </div>

              <Button href="/customer/rent-range-step-7">Далее</Button>
            </div>
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

  .Test {
    width: fit-content;
    padding-left: 30px;
    padding-top: 40px;
    padding-bottom: 96px;
    padding-right: 30px;
  }

  .react-datepicker {
    background: transparent;
    border: none;
    box-shadow: 0 0 0 2px inset #e1edfd !important;
    border-radius: 10px;

    .react-datepicker__day:not(:last-child),
    .react-datepicker__day-name:not(:last-child) {
      margin-right: 15px !important;
    }

    .react-datepicker__month-container:nth-of-type(2n + 1) {
      margin-left: 30px;
    }

    .react-datepicker__header {
      background: transparent;
      padding: 17px 30px 0 23px;
    }

    .react-datepicker__navigation {
    }

    .react-datepicker__navigation--previous {
      top: 10px;
      left: 28px;
    }

    .react-datepicker__navigation--next {
      top: 5px;
      right: 34px;
    }

    .react-datepicker__navigation--next {
      .react-datepicker__navigation-icon--next {
        ::before {
          content: "";
          display: inline-block;
          border: none;
          width: 18px;
          height: 18px;
          transform: rotate(180deg);
          background-image: url("/icons/arrow.svg");
          background-repeat: no-repeat;
        }
      }
    }

    .react-datepicker__navigation-icon--previous {
      ::before {
        content: "";
        display: inline-block;
        border: none;
        width: 18px;
        height: 18px;
        transform: rotate(0);
        background-image: url("/icons/arrow.svg");
        background-repeat: no-repeat;
      }
    }

    .react-datepicker__current-month {
      color: #2a344a;
    }

    .react-datepicker__day-name {
      color: #7786a5;
      font-size: 10px;
      line-height: 24px;
      font-weight: 400;
      text-transform: uppercase;
    }

    .react-datepicker__header {
      border: none;
    }

    .react-datepicker__month {
      margin: 0;
      width: fit-content;
      padding-left: 23px;
      padding-right: 30px;
      padding-bottom: 19px;
    }

    .react-datepicker__week {
      margin-top: 5px;
    }

    .react-datepicker__day {
      color: #2a344a;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      margin: 0;
      padding: 3px;
      width: 30px;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--range-end {
      background: #2a344a !important;
      color: #fff;
      border-radius: 10px !important;
    }

    .react-datepicker__day--range-end {
    }

    .react-datepicker__day--in-selecting-range {
      background: #f1f7ff;
      border-radius: 10px !important;
    }

    .react-datepicker__day--in-range {
      background: #f1f7ff;
      border-radius: 0;
      border-radius: 10px !important;
    }

    .react-datepicker__day--outside-month {
      color: #b8c6e3;
    }

    .react-datepicker__day--outside-month {
      padding: 0;
    }

    .react-datepicker__current-month {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
    }
    .react-datepicker__week:not(:first-child) {
      margin-top: 5px;
    }
    .react-datepicker__week:nth-child(3n + 2) {
    }
    .react-datepicker__week:nth-child(3n + 3) {
    }
  }

  .Reg__head {
    padding: 30px 30px 18px 30px;
    border-bottom: 2px solid #f1f7ff;
  }

  .Reg__radioButtons {
    padding-left: 30px;
    margin-top: 42px;
    margin-left: -30px;
    display: flex;
    align-items: center;

    input {
      margin-left: 30px;
    }
  }

  .Reg__options {
    padding: 41px 30px 30px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-top: -20px;

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

  .Reg__monthsContainer {
    padding: 30px;
  }

  .Reg__months {
    display: flex;
    flex-wrap: wrap;

    margin-left: -10px;
    margin-top: -10px;
    button {
      padding: 10px 20px;
      width: fit-content;
      margin-left: 10px;
      margin-top: 10px;
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
      width: 73%;
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

  @media (max-width: 820px) {
    .react-datepicker__navigation {
      display: none;
    }

    .react-datepicker {
      box-shadow: none !important;

      .react-datepicker__month-container:nth-of-type(2n + 1) {
        margin-left: 0;
      }
    }

    .Test {
      width: fit-content;
      padding-left: 0;
      padding-top: 40px;
      padding-bottom: 96px;
      padding-right: 20px;
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
      grid-gap: 12px;
      height: 566px;
      button {
      }
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

export { RentRangeStep };
