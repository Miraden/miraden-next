import { Button, Sticker, ToggleButton } from "@/components/ui";
import { PricingSelect } from "@/components/ui/PricingDropdown/PricingSelect";
import {
  BuildYearIcon,
  KebabIcon,
  ListItemsIcon,
  PointIconFooter,
  SquareIcon,
} from "@/icons";
import { BuildingIcon } from "@/icons/BuildingIcon";
import { CashIcon } from "@/icons/CashIcon";
import { CreditCardIcon } from "@/icons/CreditCardIcon";
import { DealIcon } from "@/icons/DealIcon";
import { EyeIcon } from "@/icons/EyeIcon";
import { LikeIcon } from "@/icons/LikeIcon";
import { LivingSquareIcon } from "@/icons/LivingSquareIcon";
import { PurposeCheckIcon } from "@/icons/PurposeCheckIcon";
import { RoomsIcon } from "@/icons/RoomsIcon";
import { useCallback, useState } from "react";
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
          <p className="Font_14_140">ID 1445</p>
        </div>
        <div className="SingleApplication__headDropdown">
          <p className="Color_text_disabled">Создана 12 января, 12:09</p>
          <Button
            tertiary
            className="ObjectCard__button"
            onClick={handleOpenDropdown}
          >
            <KebabIcon />
          </Button>
          {openDropdown && (
            <SingleApplicationDropdown someContent={someContent} />
          )}
        </div>
      </div>
      <div className="SingleApplication__pricing">
        <div className="Font_24_120">
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
            <ListItemsIcon className="ListIcon" />
            <p className="Color_blue_primary Font_16_140">1 268</p>
          </div>
          <div>
            <EyeIcon />
            <p className="Color_blue_primary Font_16_140">264</p>
          </div>
          <Sticker theme="blue" className="SingleApplication__pricingSticker">
            Новых откликов 5
          </Sticker>
        </div>
      </div>
      <div className="SingleApplication__structureInfo">
        <div className="SingleApplication__structureInfoContent">
          <BuildYearIcon width={18} height={18} />
          <div>
            <p className="Font_24_120">294 м²</p>
            <p className="Font_16_150 Color_text_grey">Год постройки</p>
          </div>
        </div>
        <div className="SingleApplication__structureInfoContent">
          <SquareIcon width={18} height={18} />
          <div>
            <p className="Font_24_120">2022</p>
            <p className="Font_16_150 Color_text_grey">Общая площадь</p>
          </div>
        </div>{" "}
        <div className="SingleApplication__structureInfoContent">
          <LivingSquareIcon width={18} height={18} />
          <div>
            <p className="Font_24_120">194 м²</p>
            <p className="Font_16_150 Color_text_grey">Жилая площадь</p>
          </div>
        </div>{" "}
        <div className="SingleApplication__structureInfoContent">
          <RoomsIcon width={18} height={18} />
          <div>
            <p className="Font_24_120">10</p>
            <p className="Font_16_150 Color_text_grey">Комнат</p>
          </div>
        </div>
      </div>
      <div className="SingleApplication__fullInfo Font_16_24">
        <div className="SingleApplication__location">
          <div>
            <PointIconFooter width={18} height={18} />
            <p>Локация</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>Кипр</p>
            <p>Лимассол</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <CashIcon width={18} height={18} />
            <p>Формат сделки</p>
          </div>
          <div>
            <p className="SingleApplication__locationInfo">Покупка</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <BuildingIcon width={18} height={18} />
            <p>Тип</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>Жилая</p>
            <p>Дом / вилла</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <BuildYearIcon width={18} height={18} />
            <p>Состояние</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>Новая</p>
            <p>Ввод в эксплуатацию через 6 – 10 месяцев</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <SquareIcon width={18} height={18} />
            <p>Площадь</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>Общая — 294 м²</p>
            <p>Жилая — 194 м²</p>
            <p>Участок земли — 100 м²</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <RoomsIcon width={18} height={18} />
            <p>Комнаты</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>Всего — 10</p>
            <p>Спальни — 6</p>
            <p>Санузлы — 2</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <PurposeCheckIcon width={18} height={18} />
            <p>Цель покупки</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>Для инвестиций (сдавать в аренду)</p>
            <p>ВНЖ</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <DealIcon width={18} height={18} />
            <p>Срочность</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>Через 1 месяц</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <CreditCardIcon width={18} height={18} />
            <p>Способ покупки</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>В рассрочку</p>
            <p>Первый взнос — 30%</p>
            <p>Безналичный расчет</p>
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
                  <br />А тут будет какой-то нереально длинный текст, понимаете?
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
              <button onClick={handleOpenText} className="Color_blue_primary">
                Открыть больше
              </button>
            ) : (
              <button onClick={handleOpenText} className="Color_blue_primary">
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
  margin-top: 10px;

  .SingleApplication__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 19px;
    border-bottom: 1px solid #e1edfd;
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
      margin-left: 20px;
    }
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
  .SingleApplication__pricing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 19px;
    border-bottom: 1px solid #e1edfd;
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
    div {
      padding: 4px 10px;
    }
  }

  .ObjectCard__button {
    padding: 2px;
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
    padding-top: 20px;
    padding-bottom: 18px;
    border-bottom: 4px solid #e1edfd;
  }

  .SingleApplication__structureInfoContent {
    display: flex;

    svg {
      margin-top: 5.5px;
      margin-right: 15px;
    }
  }

  .SingleApplication__structureInfoContent:not(:first-child) {
    margin-left: 45px;
  }

  .SingleApplication__fullInfo {
    display: flex;
    flex-direction: column;
  }

  .SingleApplication__location {
    display: flex;
    padding-top: 20px;
    padding-bottom: 19px;
    border-bottom: 1px solid #e1edfd;

    div {
      display: flex;
      align-items: center;
      svg {
        margin-right: 15px;
      }
    }

    div:first-child {
      min-width: 250px;
      color: #7786a5;
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

    p:not(:first-child) {
      margin-left: 10px;
      border-left: 2px solid #c7d2e9;
      padding-left: 10px;
    }
  }
`;

const SingleApplicationDropdown = ({ someContent }: Props) => {
  return (
    <StyledSingleApplicationDropdown>
      <div>
        <a href="" className="Font_12_16">
          {someContent ? someContent : "Какой-то контент"}
        </a>
      </div>
    </StyledSingleApplicationDropdown>
  );
};

const StyledSingleApplicationDropdown = styled.div`
  position: absolute;
  right: 0;
  top: 34px;
  background: #fff;
  padding: 10px 15px;
  box-shadow: 0 0 0 2px #d4ddee;
  border-radius: 10px;
  :hover {
    background: #f1f7ff;
  }
  a:hover {
    color: #4e6af3;
  }
`;

export { SingleApplication };
