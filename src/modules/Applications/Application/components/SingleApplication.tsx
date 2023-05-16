import { Button, Sticker, ToggleButton } from "@/components/ui";
import { BuildYearIcon, KebabIcon, PointIconFooter, SquareIcon } from "@/icons";
import { LivingSquareIcon } from "@/icons/LivingSquareIcon";
import { RoomsIcon } from "@/icons/RoomsIcon";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  someContent?: string;
}

const SingleApplication = ({ className, someContent }: Props) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpenDropdown = useCallback(() => {
    setOpenDropdown(!openDropdown);
  }, [openDropdown]);

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
      <div className="SingleApplication__structureInfo">
        <div className="SingleApplication__structureInfoContent">
          <BuildYearIcon />
          <div>
            <p className="Font_24_120">294 м²</p>
            <p className="Font_16_150 Color_text_grey">Год постройки</p>
          </div>
        </div>
        <div className="SingleApplication__structureInfoContent">
          <SquareIcon />
          <div>
            <p className="Font_24_120">2022</p>
            <p className="Font_16_150 Color_text_grey">Общая площадь</p>
          </div>
        </div>{" "}
        <div className="SingleApplication__structureInfoContent">
          <LivingSquareIcon />
          <div>
            <p className="Font_24_120">194 м²</p>
            <p className="Font_16_150 Color_text_grey">Жилая площадь</p>
          </div>
        </div>{" "}
        <div className="SingleApplication__structureInfoContent">
          <RoomsIcon />
          <div>
            <p className="Font_24_120">10</p>
            <p className="Font_16_150 Color_text_grey">Комнат</p>
          </div>
        </div>
      </div>
      <div className="SingleApplication__fullInfo Font_16_24">
        <div className="SingleApplication__location">
          <div>
            <PointIconFooter width={18} />
            <p>Локация</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>Кипр</p>
            <p>Лимассол</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <PointIconFooter width={18} />
            <p>Формат сделки</p>
          </div>
          <div>
            <p className="SingleApplication__locationInfo">Покупка</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <PointIconFooter width={18} />
            <p>Тип</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>Жилая</p>
            <p>Дом / вилла</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <PointIconFooter width={18} />
            <p>Состояние</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>Новая</p>
            <p>Ввод в эксплуатацию через 6 – 10 месяцев</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <PointIconFooter width={18} />
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
            <PointIconFooter width={18} />
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
            <PointIconFooter width={18} />
            <p>Цель покупки</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>Для инвестиций (сдавать в аренду)</p>
            <p>ВНЖ</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <PointIconFooter width={18} />
            <p>Срочность</p>
          </div>
          <div className="SingleApplication__locationInfo">
            <p>Через 1 месяц</p>
          </div>
        </div>
        <div className="SingleApplication__location">
          <div>
            <PointIconFooter width={18} />
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
            <PointIconFooter width={18} />
            <p>Пожелания</p>
          </div>
          <div>
            <p className="SingleApplication__locationInfo">
              Добраться до острова можно двумя способами: воздушным и морским.
              Для иностранных туристов открыты аэропорты в Ларнаке и Пафосе
              и морские порты в Лимассоле и Ларнаке. Всего на острове
              15 аэропортов, из них 7 крупных. Более 230 рейсов в неделю,
              выполняемые 33-мя авиакомпаниями, связывают Кипр с Западной
              и Восточной Европой, Африкой и Ближним Востоком Плюс пассажирские
              и грузовые чартерные рейсы. Добраться до острова можно двумя
              способами: воздушным и морским. Для иностранных туристов открыты
              аэропорты в Ларнаке и Пафосе и морские порты в Лимассоле
              и Ларнаке. Всего на острове 15 аэропортов, из них 7 крупных. Более
              230 рейсов в неделю, выполняемые 33-мя авиакомпаниями, связывают
              Кипр с Западной и Восточной Европой, Африкой и Ближним Востоком.
              Плюс пассажирские и грузовые чартерные рейсы
            </p>
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

    button {
      margin-left: 20px;
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
    }
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
  top: 26px;
  background: #fff;
  padding: 10px 15px;
  box-shadow: 0 0 0 1px #e1edfd;
  border-radius: 10px;

  a:hover {
    color: #4e6af3;
  }
`;

export { SingleApplication };
