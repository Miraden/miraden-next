import { Button, Sticker, ToggleButton } from "@/components/ui";
import { PricingSelect } from "@/components/ui/PricingDropdown/PricingSelect";
import {
  BuildYearIcon,
  Kebab24Icon,
  ListItemsIcon,
  PointIconFooter,
  SquareIcon,
} from "@/icons";
import { BuildingIcon } from "@/icons/BuildingIcon";
import { KeyIcon } from "@/icons/KeyIcon";
import { CreditCardIcon } from "@/icons/CreditCardIcon";
import { UrgencyIcon } from "@/icons/UrgencyIcon";
import { EyeIcon } from "@/icons/EyeIcon";
import { LikeIcon } from "@/icons/LikeIcon";
import { LivingSquareIcon } from "@/icons/LivingSquareIcon";
import { PurposeCheckIcon } from "@/icons/PurposeCheckIcon";
import { RoomsIcon } from "@/icons/RoomsIcon";
import { WanaIcon } from "@/icons/WanaIcon";
import { BedIcon } from "@/icons/BedIcon";
import { useCallback, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";

interface Props {
  className?: string;
  someContent?: string;
}

const currencyOptions = ["€", "$", "£", "₽"];

let price = "158 000 – 230 000 ";
let yieldCount = 8;
let firstInstallment = "30";

let firstInstallmentPercent = "30";

let singleCost = "30";
const SingleApplication = ({ className, someContent }: Props) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpenDropdown = useCallback(() => {
    setOpenDropdown(!openDropdown);
  }, [openDropdown]);

  const [openText, setOpenText] = useState(false);

  const handleOpenText = useCallback(() => {
    setOpenText(!openText);
  }, [openText]);

  return (
    <StyledSingleApplication className={className}>
      <div className="SingleApplication__head">
        <div className="SingleApplication__headToggle">
          <ToggleButton className="SingleApplication__headToggleButton" />
          <Sticker theme="black" className="SingleApplication__headSticker">
            TRUE
          </Sticker>
          <p className="SingleApplication__app Font_14_140">Заявка № 10445</p>
        </div>
        <div className="SingleApplication__headDropdown">
          <p className="Color_text_disabled">
            <span>Создана</span> 12 января, <span> 12:09</span>
          </p>
          <p className="Color_text_disabled--mobile">12 января</p>
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpenDropdown(false);
            }}
          >
            <Button
              tertiary
              className={`ObjectCard__button ${
                openDropdown ? "ObjectCard__button--open" : ""
              }`}
              onClick={handleOpenDropdown}
            >
              <Kebab24Icon />

              {openDropdown && (
                <SingleApplicationDropdown someContent={someContent} />
              )}
            </Button>
          </OutsideClickHandler>
        </div>
      </div>
      <div className="SingleApplication__pricing">
        <div className="SingleApplication__pricingSelect Font_24_120">
          <PricingSelect
            options={currencyOptions}
            price={price}
            yieldCount={yieldCount}
            yieldCountPercent={yieldCount}
            firstInstallment={firstInstallment}
            firstInstallmentPercent={firstInstallmentPercent}
            singleCost={singleCost}
          />
        </div>
        <div className="SingleApplication__pricingInfo">
          <div>
            <div>
              <ListItemsIcon className="ListIcon" />
              <p className="Color_blue_primary Font_16_140">1 268</p>
            </div>
            <div>
              <EyeIcon />
              <p className="Color_blue_primary Font_16_140">264</p>
            </div>
          </div>
          <Sticker theme="blue" className="SingleApplication__pricingSticker">
            <span>Предложений</span>
            <span className="SingleApplication__pricingSticker--count">5</span>
          </Sticker>
        </div>
      </div>
      <div className="SingleApplication__pricingSelectMobile Font_24_120">
        <PricingSelect
          options={currencyOptions}
          price={price}
          yieldCount={yieldCount}
          yieldCountPercent={yieldCount}
          firstInstallment={firstInstallment}
          firstInstallmentPercent={firstInstallmentPercent}
          singleCost={singleCost}
        />
      </div>
      <div className="SingleApplication__structureInfo">
        <div className="SingleApplication__structureInfoContent">
          <div>
            <div className="SingleApplication__structureInfoDetails">
              <BuildYearIcon width={18} height={18} />
              <p className="Font_24_120">2022</p>
            </div>
            <p className="structureInfoContent-text Font_16_150 Color_text_grey">
              Год постройки
            </p>
          </div>
        </div>{" "}
        <div className="SingleApplication__structureInfoContent">
          <div>
            <div className="SingleApplication__structureInfoDetails">
              <SquareIcon width={18} height={18} />
              <p className="Font_24_120">294 м²</p>
            </div>
            <p className="structureInfoContent-text Font_16_150 Color_text_grey">
              Общая
            </p>
          </div>
        </div>
        <div className="SingleApplication__structureInfoContent">
          <div>
            <div className="SingleApplication__structureInfoDetails">
              <LivingSquareIcon width={18} height={18} />
              <p className="Font_24_120">194 м²</p>
            </div>
            <p className="structureInfoContent-text Font_16_150 Color_text_grey">
              Жилая
            </p>
          </div>
        </div>{" "}
        <div className="SingleApplication__structureInfoContent">
          <div>
            <div className="SingleApplication__structureInfoDetails">
              <RoomsIcon width={18} height={18} />
              <p className="Font_24_120">10</p>
            </div>
            <p className="structureInfoContent-text Font_16_150 Color_text_grey">
              Комнат
            </p>
          </div>
        </div>{" "}
        <div className="SingleApplication__structureInfoContent">
          <div>
            <div className="SingleApplication__structureInfoDetails">
              <BedIcon width={18} height={18} />
              <p className="Font_24_120">2</p>
            </div>
            <p className="structureInfoContent-text Font_16_150 Color_text_grey">
              Спален
            </p>
          </div>
        </div>{" "}
        <div className="SingleApplication__structureInfoContent">
          <div>
            <div className="SingleApplication__structureInfoDetails">
              <WanaIcon width={18} height={18} />
              <p className="Font_24_120">2</p>
            </div>
            <p className="structureInfoContent-text Font_16_150 Color_text_grey">
              Санузлов
            </p>
          </div>
        </div>{" "}
        <div className="SingleApplication__shine" />
      </div>
      <div className="Divider"></div>
      <div className="SingleApplication__fullInfo Font_16_24">
        <div className="SingleApplication__location">
          <div>
            <div>
              <PointIconFooter width={18} height={18} />
              <p className="SingleApplication__location--title">Расположение</p>
            </div>
            <div className="SingleApplication__locationInfo">
              <p>Кипр</p>
              <p>Лимассол</p>
            </div>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <div>
              <KeyIcon width={18} height={18} />
              <p className="SingleApplication__location--title">
                Формат сделки
              </p>
            </div>
            <div>
              <p className="SingleApplication__locationInfo">Покупка</p>
            </div>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <div>
              <BuildingIcon width={18} height={18} />
              <p className="SingleApplication__location--title">Тип</p>
            </div>
            <div className="SingleApplication__locationInfo">
              <p>Жилая</p>
              <p>Дом / вилла</p>
            </div>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div className="SingleApplication__location--detail">
            <div>
              <BuildYearIcon width={18} height={18} />
              <p className="SingleApplication__location--title">Состояние</p>
            </div>
            <div className="SingleApplication__locationInfo">
              <p>Новая</p>
              <p>Ввод в эксплуатацию через 6 – 10 месяцев</p>
            </div>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div className="SingleApplication__location--detail">
            <div>
              <SquareIcon width={18} height={18} />
              <p className="SingleApplication__location--title">Площадь</p>
            </div>
            <div className="SingleApplication__locationInfo">
              <p>Общая — 294 м²</p>
              <p>Жилая — 194 м²</p>
              <p>Участок земли — 100 м²</p>
            </div>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div className="SingleApplication__location--detail">
            <div>
              <RoomsIcon width={18} height={18} />
              <p className="SingleApplication__location--title">Комнаты</p>
            </div>
            <div className="SingleApplication__locationInfo">
              <p>Всего — 10</p>
              <p>Спальни — 6</p>
              <p>Санузлы — 2</p>
            </div>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div className="SingleApplication__location--detail">
            <div>
              <PurposeCheckIcon width={18} height={18} />
              <p className="SingleApplication__location--title">Цель покупки</p>
            </div>
            <div className="SingleApplication__locationInfo">
              <p>Для инвестиций (сдавать в аренду)</p>
              <p>ВНЖ</p>
            </div>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <div>
              <UrgencyIcon width={18} height={18} />
              <p className="SingleApplication__location--title">Срочность</p>
            </div>
            <div className="SingleApplication__locationInfo">
              <p>Через 1 месяц</p>
            </div>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div className="SingleApplication__location--detail">
            <div>
              <CreditCardIcon width={18} height={18} />
              <p className="SingleApplication__location--title">
                Способ покупки
              </p>
            </div>
            <div className="SingleApplication__locationInfo">
              <p>В рассрочку</p>
              <p>Первый взнос — 30%</p>
              <p>Безналичный расчет</p>
            </div>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <LikeIcon width={18} height={18} />
            <p>Пожелания</p>
          </div>
          <div className="SingleApplication__locationInfoText">
            <p className="SingleApplication__locationInfo">
              {openText ? (
                <span>
                  Добраться до острова можно двумя способами: воздушным и
                  морским. Для иностранных туристов открыты аэропорты в Ларнаке
                  и Пафосе и морские порты в Лимассоле и Ларнаке. Всего на
                  острове 15 аэропортов, из них 7 крупных. Более 230 рейсов в
                  неделю, выполняемые 33-мя авиакомпаниями, связывают Кипр с
                  Западной и Восточной Европой, Африкой и Ближним Востоком
                  <br /> <br />
                  Плюс пассажирские и грузовые чартерные рейсы. Добраться до
                  острова можно двумя способами: воздушным и морским. Для
                  иностранных туристов открыты аэропорты в Ларнаке и Пафосе и
                  морские порты в Лимассоле и Ларнаке. Всего на острове 15
                  аэропортов, из них 7 крупных. Более 230 рейсов в неделю,
                  выполняемые 33-мя авиакомпаниями, связывают Кипр с Западной и
                  Восточной Европой, Африкой и Ближним Востоком. Плюс
                  пассажирские и грузовые чартерные рейсы.
                  <br />
                  <br />А тут будет какой-то нереально длинный текст
                </span>
              ) : (
                <span>
                  Добраться до острова можно двумя способами: воздушным и
                  морским. Для иностранных туристов открыты аэропорты в Ларнаке
                  и Пафосе и морские порты в Лимассоле и Ларнаке. Всего на
                  острове 15 аэропортов, из них 7 крупных. Более 230 рейсов в
                  неделю, выполняемые 33-мя авиакомпаниями, связывают Кипр с
                  Западной и Восточной Европой, Африкой и Ближним Востоком
                  <br /> <br />
                  Плюс пассажирские и грузовые чартерные рейсы. Добраться до
                  острова можно двумя способами: воздушным и морским. Для
                  иностранных туристов открыты аэропорты в Ларнаке и Пафосе и
                  морские порты в Лимассоле и Ларнаке. Всего на острове 15
                  аэропортов, из них 7 крупных. Более 230 рейсов в неделю,
                  выполняемые 33-мя авиакомпаниями, связывают Кипр с Западной и
                  Восточной Европой, Африкой и Ближним Востоком. Плюс
                  пассажирские и грузовые чартерные рейсы
                </span>
              )}
            </p>
            {!openText ? (
              <button
                onClick={handleOpenText}
                className="Color_blue_primary Font_14_140"
              >
                Открыть больше
              </button>
            ) : (
              <button
                onClick={handleOpenText}
                className="Color_blue_primary Font_14_140"
              >
                Свернуть
              </button>
            )}
          </div>
        </div>
      </div>
    </StyledSingleApplication>
  );
};

const StyledSingleApplication = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  padding-top: 0;
  margin-top: 16px;

  @media (max-width: 1441px) {
    padding: 0;
  }

  .SingleApplication__pricingSelectMobile {
    display: none;
  }

  .SingleApplication__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 19px;
    border-bottom: 1px solid #e1edfd;

    @media (max-width: 360px)  {
      .SingleApplication__app {
        display: none;
      }
    }
  }

  .SingleApplication__headToggle {
    display: flex;
    align-items: center;
  }

  .SingleApplication__headToggleButton {
    input:checked + .ToggleButton__slider {
      background-color: #0ab258;
    }
  }

  .SingleApplication__headSticker {
    margin-left: 10px;
    margin-right: 10px;
  }

  .SingleApplication__headDropdown {
    display: flex;
    align-items: center;
    position: relative;

    button {
      flex-shrink: 0;
      margin-left: 20px;
      
      @media (max-width: 360px) {
        margin-left: 8px;
      }
    }

    .Color_text_disabled--mobile {
      font-weight: 400;
      font-size: 14px;
      color: #7786A5;
    }

    @media (min-width: 768px) {
      .Color_text_disabled--mobile {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .Color_text_disabled {
        display: none;
      }
    }
  }

  .SingleApplication__pricing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-right: 30px;
    padding-left: 15px;
    padding-bottom: 19px;
    border-bottom: 1px solid #e1edfd;
    @media (max-width: 576px) {
      height: 56px;
      .SingleApplication__pricingInfo {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .SingleApplication__pricingInfo {
    display: flex;

    div {
      display: flex;
      align-items: center;

      svg {
        margin-right: 8px;
      }
    }

    div:not(:first-child) {
      margin-left: 20px;
    }
  }

  .ListIcon {
    width: 18px;
    height: 18px;
    path {
      fill: #7786a5;
    }
  }

  .SingleApplication__pricingSticker {
    display: flex;

    .SingleApplication__pricingSticker--count {
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: #FFFFFF;
      margin-left: 8px;
    }
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #fff;
    }
    div {
      padding: 4px 10px;
    }
  }

  .ObjectCard__button--open {
    background: #f1f7ff;
  }

  .ObjectCard__button {
    padding: 2px !important;
    width: 28px;
    height: 28px;
    border-radius: 50%;

    :hover {
      background: #f1f7ff;
    }
  }

  .SingleApplication__structureInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 20px; 20px; 18px; 20px;

    @media (max-width: 1024px) {
      .SingleApplication__shine {
        position: absolute;
        right: 0;
        width: 70px;
        height: 100%;
        background: linear-gradient(270deg, #FFFFFF 52%, rgba(255, 255, 255, 0) 100%);
        border-radius: 0px;
      }
    }
  }

  .Divider {
    background: #e1edfd;
    height: 4px;
    border-radius: 4px;
  }

  .SingleApplication__structureInfoContent {
    display: flex;

    .structureInfoContent-text {
      white-space: nowrap;
    }

    svg {
      margin-top: 5.5px;
      margin-right: 15px;
    }

    .SingleApplication__structureInfoDetails {
      display: flex;
    }
  }

  .SingleApplication__structureInfoContent:not(:first-child) {
    margin-left: 45px;
  }

  .SingleApplication__fullInfo {
    display: flex;
    flex-direction: column;

    

    @media (max-width: 1441px) {
      padding: 0;
    }
  }

  .SingleApplication__location {
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e1edfd;

    @media (max-width: 568px) {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .SingleApplication__location--detail {
      flex-wrap: wrap;
    }

    > div {
      padding: 0 18px;
    }

    @media (max-width: 769px) {
      .SingleApplication__location--title {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #7786A5;
      }
      > div {
        .SingleApplication__locationInfo {
          margin: 0;
        }
        p {
          font-weight: 400;
          font-size: 16px;
          color: #2A344A;
        }
      }
    }

    div {
      display: flex;
      align-items: center;
      svg {
        margin-right: 15px;
      }
    }

    div:first-child {
      min-width: 215px;
      color: #2A344A;
      
      @media (max-width: 576px) {
        min-width: auto !important;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        div:nth-child(1) {
          margin-right: 20px;
        }
      }
    }
  }

  .SingleApplication__locationInfoText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button {
      align-self: flex-start;
      margin-top: 20px;
    }
  }

  .SingleApplication__location:last-child {
    border-bottom: none;
    align-items: start;
  }

  .SingleApplication__locationInfo {
    display: flex;
    p {
      color: #2A344A;
    }
    p:not(:first-child) {
      margin-left: 10px;
      border-left: 2px solid #c7d2e9;
      padding-left: 10px;
    }
  }

  @media (max-width: 767px) {
    padding-left: 0;
    padding-right: 0;

    .SingleApplication__location {
      flex-direction: column;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 16px;
      padding-bottom: 16px;
    }

    .SingleApplication__locationInfo {
      margin-left: 33px;
      margin-top: 4px;
      flex-wrap: wrap;
      p:not(:last-child) {
        margin-left: 0;
        margin-right: 9px;
        border-right: 2px solid #c7d2e9;
        border-left: none !important;
        padding-right: 9px;
      }

      p:not(:first-child) {
        margin-left: 0;
        border-left: none !important;
        padding-left: 0;
      }
    }

    .SingleApplication__structureInfo {
      display: none;
    }

    .SingleApplication__pricing {
      .SingleApplication__pricingSelect {
        display: none;
        outline: none;

        &:focus {
          outline: none;
        }
      }
    }

    .SingleApplication__head {
      padding-left: 20px;
      padding-right: 20px;
    }

    .SingleApplication__pricing {
      padding-left: 20px;
      padding-right: 20px;
    }

    .SingleApplication__pricingSelectMobile {
      padding-left: 20px;
      display: block;
      padding-top: 16px;
      padding-bottom: 20px;
      border-bottom: 3px solid #e1edfd;
      @media (max-width: 768px) {
        border-bottom: 0;
      }
    }

    .SingleApplication__headDropdown {
      p {
        span {
          display: none !important;
        }
      }
    }

    .SingleApplication__locationInfoText {
      button {
        margin-left: 32px;
      }
    }
  }
`;

const SingleApplicationDropdown = ({ someContent }: Props) => {
  return (
    <StyledSingleApplicationDropdown>
      <a href="" className="Font_14_16">
        {someContent ? someContent : "Какой-то контент"}
      </a>
    </StyledSingleApplicationDropdown>
  );
};

const StyledSingleApplicationDropdown = styled.div`
  position: absolute;
  right: 0;
  top: 34px;
  background: #fff;
  width: 200px;
  text-align: center;
  padding: 10px 15px;
  box-shadow: 0 0 0 2px #d4ddee;
  border-radius: 10px;
  a {
    color: #2a34aa;
  }
  :hover {
    background: #f1f7ff;
  }
`;

export { SingleApplication };
