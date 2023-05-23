import { ArrowIcon, CrossIcon } from "@/icons";
import cn from "classnames";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { DropdownLocationInput } from "../../ui/DropdownLocationInput/DropdownLocationInput";
import { Button } from "../Button";
import { Checkbox } from "../CheckBox";
import { CurrencySelect } from "../CurrencySelect/CurrencySelect";
import { NumberInputNoLabel } from "../NumberInputNoLabel";
import { RequestButton } from "../RequestButton";
import { TabButtons } from "../TabButtons";
interface FilterProps {
  className?: string;
  onClick?: any;
  onTabClick?: any;
  onChange?: any;
  onTouchStart?: any;
  onTouchEnd?: any;
}

const allRooms = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6+", value: 6 },
];

const sleeps = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6+", value: 6 },
];

const baths = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6+", value: 6 },
];

const ApplicationsFilter = ({
  className,
  onClick,
  onTabClick,
  onChange,
  onTouchStart,
  onTouchEnd,
}: FilterProps) => {
  return (
    <StyledApplicationsFilter className={className}>
      <div className="Filter__headContainer">
        <div
          className="ApplicationsFilter__swipe"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="ApplicationsFilter__swipeElement" />
        </div>
        <div className="ApplicationsFilter__head">
          <h2 className="Font_12_16_600">фильтр выключен</h2>
          <Button tertiary onClick={onClick} className="CloseFilter">
            <CrossIcon width={24} height={24} />
          </Button>
        </div>
      </div>

      <div>
        <TabButtons
          className="ApplicationsFilter__tabs"
          tabs={[
            { label: "Продавцы", id: "1", content: <SellerContent /> },
            { label: "Объекты", id: "2", content: <ObjectsContent /> },
          ]}
          defaultTabId="1"
          onTabClick={onTabClick}
        />
      </div>
      <div className="ApplicationsFilter__footer">
        <RequestButton active onClick={onClick} className="">
          Найдено 145 объектов
        </RequestButton>
      </div>
    </StyledApplicationsFilter>
  );
};

const StyledApplicationsFilter = styled.div`
  background: #fff;
  border-radius: 10px;
  min-width: 355px;
  width: 100%;
  position: relative;

  .ApplicationsFilter__swipe {
    background: #fff;
    padding-top: 4px;
    padding-bottom: 5px;
    display: none;
    border-radius: 10px 10px 0 0;
  }

  .ApplicationsFilter__swipeElement {
    width: 36px;
    height: 5px;
    background: #c7d2e9;
    margin: 0 auto;
    border-radius: 5px;
  }

  .ApplicationsFilter__head {
    display: flex;
    justify-content: space-between;

    padding: 15px 15px 0 30px;

    h2 {
      margin-top: 15px;
      text-transform: uppercase;
    }
    button {
      border-radius: 50%;
      padding: 2px;
      width: 28px;
      height: 28px;
      :hover {
        background: #f1f7ff;
      }

      :active {
        background: #e1edfd;
      }
    }
    svg {
      path {
        fill: #7786a5;
      }
    }
  }

  .ApplicationsFilter__footer {
    display: none;
  }

  .ApplicationsFilter__tabs {
    margin-top: 20px;
    /* max-height: calc(100vh - 184px); */
    height: 100%;
    overflow-y: auto;
    .TabButtons__container {
      padding: 0px 30px;
    }
  }

  @media (max-width: 576px) {
    .ApplicationsFilter__swipe {
      display: flex;
    }

    .CloseFilter {
      display: none;
    }
    .Filter__headContainer {
      background: #fff;
      padding-bottom: 20px;
      position: sticky;
      top: 0;
    }

    .ApplicationsFilter__tabs {
      margin-top: 0;
    }

    .ApplicationsFilter__footer {
      display: block;
      position: fixed;
      bottom: 0;
      z-index: 999;
      width: 100%;
      padding: 20px 20px 0 20px;
      border-top: 2px solid #eef1f5;
      background: #ffffff;

      button {
        padding: 15px;
        width: 100%;
      }
    }
  }
`;

interface SellerProps {
  onChange?: any;
}

const SellerContent = ({ onChange }: SellerProps) => {
  return (
    <StyledSellerContent>
      <div className="SellerContent__status">
        <div className="ObjectsContent__wrapperContainer">
          <h3 className="Font_16_140">Статус продавца</h3>
          <Checkbox label="PRO аккаунт" onChange={onChange} />
          <Checkbox label="Только с объектами" onChange={onChange} />
          <Checkbox label="С проверенными документами" onChange={onChange} />
          <Checkbox label="С рейтингом выше 4" onChange={onChange} />
        </div>
      </div>
      <div className="SellerContent__type">
        <div className="ObjectsContent__wrapperContainer">
          <h3 className="Font_16_140">Тип продавца</h3>
          <Checkbox label="Клиент (ищу для себя)" />
          <Checkbox label="Риелтор" />
          <Checkbox label="Агентство недвижимости" />
          <Checkbox label="Застройщик" />
          <Checkbox label="Собственник" />
        </div>
      </div>
    </StyledSellerContent>
  );
};

const StyledSellerContent = styled.div`
  .SellerContent__status {
    margin-top: 30px;

    label {
      margin-top: 10px;
    }
  }

  .ObjectsContent__wrapperContainer {
    padding-left: 30px;
    padding-right: 30px;
  }

  .SellerContent__type {
    border-top: 1px solid #e1edfd;
    padding-top: 15px;
    margin-top: 14px;
    padding-bottom: 15px;

    label {
      margin-top: 10px;
    }
  }
`;

const currency = ["евро", "доллар", "фунт стерлингов", "рубль"];

const ObjectsContent = () => {
  const [priceToValue, setPriceToValue] = useState("");
  const [priceFromValue, setPriceFromValue] = useState("");
  const [yearToValue, setYearToValue] = useState("");
  const [yearFromValue, setYearFromValue] = useState("");
  const [fullSquareToValue, setFullSquareToValue] = useState("");
  const [fullSquareFromValue, setFullSquareFromValue] = useState("");
  const [livingSquareToValue, setLivingSquareToValue] = useState("");
  const [livingSquareFromValue, setLivingSquareFromValue] = useState("");
  const [landSquareToValue, setLandSquareToValue] = useState("");
  const [landSquareFromValue, setLandSquareFromValue] = useState("");
  const [selectedRoomsId, setSelectedRoomsId] = useState(null);
  const [selectedBathsId, setSelectedBathsId] = useState(null);
  const [selectedSleepsId, setSelectedSleepsId] = useState(null);
  const [objectTypeOpen, setObjectTypeOpen] = useState(false);
  const [allRoomsOpen, setAllRoomsOpen] = useState(false);
  const [squareOpen, setSquareOpen] = useState(false);
  const [purposeOpen, setPurposeOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  const handleObjectTypeOpen = useCallback(() => {
    setObjectTypeOpen(!objectTypeOpen);
  }, [objectTypeOpen]);

  const handleAllRoomsOpen = useCallback(() => {
    setAllRoomsOpen(!allRoomsOpen);
  }, [allRoomsOpen]);

  const handleSquareOpen = useCallback(() => {
    setSquareOpen(!squareOpen);
  }, [squareOpen]);

  const handlePurposeOpen = useCallback(() => {
    setPurposeOpen(!purposeOpen);
  }, [purposeOpen]);

  const handleStatusOpen = useCallback(() => {
    setStatusOpen(!statusOpen);
  }, [statusOpen]);

  const handleSelectRooms = useCallback(
    (id: any) => {
      setSelectedRoomsId(id === selectedRoomsId ? null : id);
    },
    [selectedRoomsId]
  );
  const handleSelectBaths = useCallback(
    (id: any) => {
      setSelectedBathsId(id === selectedBathsId ? null : id);
    },
    [selectedBathsId]
  );

  const handleSelectSleeps = useCallback(
    (id: any) => {
      setSelectedSleepsId(id === selectedSleepsId ? null : id);
    },
    [selectedSleepsId]
  );

  const handlePriceFromValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputPriceFromValue = event.target.value;
    if (/^\d*$/.test(inputPriceFromValue)) {
      setPriceFromValue(inputPriceFromValue);
    }
  };

  const handlePriceToValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputPriceToValue = event.target.value;
    if (/^\d*$/.test(inputPriceToValue)) {
      setPriceToValue(inputPriceToValue);
    }
  };

  const handleYearFromValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputYearFromValue = event.target.value;
    if (/^\d*$/.test(inputYearFromValue)) {
      setYearFromValue(inputYearFromValue);
    }
  };

  const handleYearToValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputYearToValue = event.target.value;
    if (/^\d*$/.test(inputYearToValue)) {
      setYearToValue(inputYearToValue);
    }
  };

  const handleFullSquareFromValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputFullSquareFromValue = event.target.value;
    if (/^\d*$/.test(inputFullSquareFromValue)) {
      setFullSquareFromValue(inputFullSquareFromValue);
    }
  };

  const handleFullSquareToValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputFullSquareToValue = event.target.value;
    if (/^\d*$/.test(inputFullSquareToValue)) {
      setFullSquareToValue(inputFullSquareToValue);
    }
  };

  const handleLivingSquareFromValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputLivingSquareFromValue = event.target.value;
    if (/^\d*$/.test(inputLivingSquareFromValue)) {
      setLivingSquareFromValue(inputLivingSquareFromValue);
    }
  };

  const handleLivingSquareToValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputLivingSquareToValue = event.target.value;
    if (/^\d*$/.test(inputLivingSquareToValue)) {
      setLivingSquareToValue(inputLivingSquareToValue);
    }
  };

  const handleLandSquareFromValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputLandSquareFromValue = event.target.value;
    if (/^\d*$/.test(inputLandSquareFromValue)) {
      setLandSquareFromValue(inputLandSquareFromValue);
    }
  };

  const handleLandSquareToValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputLandSquareToValue = event.target.value;
    if (/^\d*$/.test(inputLandSquareToValue)) {
      setLandSquareToValue(inputLandSquareToValue);
    }
  };

  return (
    <StyledObjectsContent>
      <div className="ObjectsContent__wrapperContainer">
        <h3 className="ObjectsContent__locations Font_16_140">
          Локация недвижимости
        </h3>
        <DropdownLocationInput
          className="ObjectsContent__locationsSelect"
          placeholder="Все страны"
          options={[
            { label: "Турция", subOptions: ["1", "2", "3", "4"] },
            { label: "Кипр", subOptions: ["52", "43", "23", "41"] },
            { label: "Черногория", subOptions: ["11", "242", "43", "45"] },
            { label: "Северный Кипр", subOptions: ["11", "22", "34", "43"] },
          ]}
        />
      </div>
      <div className="ObjectsContent__wrapperContainerPricing">
        <h3 className="ObjectsContent__currency Font_16_140">
          <span>Цена в </span>
          <CurrencySelect options={currency} />
        </h3>
        <div className="ObjectsContent__price">
          <NumberInputNoLabel
            label="От"
            value={priceFromValue}
            onChange={handlePriceFromValueChange}
          />
          <NumberInputNoLabel
            label="До"
            value={priceToValue}
            onChange={handlePriceToValueChange}
          />
        </div>
      </div>
      <div className="ObjectsContent__type">
        <div className="ObjectsContent__wrapperContainer">
          <h3 className="Font_16_140">Тип недвижимости</h3>
          <TabButtons
            className="ObjectsContent__tabs"
            tabs={[
              { label: "Вся", id: "1" },
              { label: "Новая", id: "2" },
              { label: "Вторичная", id: "3" },
            ]}
            defaultTabId="1"
          />
        </div>
      </div>

      <div className="ObjectsContent__checkboxes">
        <div className="ObjectsContent__wrapperContainer">
          <h4 className="Font_16_24">Жилая</h4>
          <Checkbox label="Квартира / апартаменты" className="CheckBox" />
          <Checkbox label="Дом / вилла" className="CheckBox" />
          <Checkbox label="Пентхаус" className="CheckBox" />
          <Checkbox label="Таунхаус" className="CheckBox" />
          <Checkbox label="Дуплекс" className="CheckBox" />
          <Checkbox label="Участок земли" className="CheckBox" />
          {!objectTypeOpen && (
            <button
              onClick={handleObjectTypeOpen}
              className="ObjectsContent__checkboxesOpenButton Color_blue_primary Font_14_140"
            >
              Открыть еще 5
            </button>
          )}
        </div>
        {objectTypeOpen && (
          <>
            <div className="ObjectsContent__wrapperContainer">
              <div className="ObjectsContent__commercial">
                <h4 className="Font_16_24">Коммерческая</h4>
                <Checkbox label="Офис" className="CheckBox" />
                <Checkbox label="Гостиница" className="CheckBox" />
                <Checkbox label="Магазин" className="CheckBox" />
                <Checkbox label="Торговый центр" className="CheckBox" />
                <Checkbox label="Склад" className="CheckBox" />
              </div>
            </div>
            <div className="ObjectsContent__wrapperContainer">
              <div className="ObjectsContent_year">
                <h4 className="Font_16_150">Год постройки</h4>
                <div className="ObjectsContent__price">
                  <NumberInputNoLabel
                    label="От"
                    value={yearFromValue}
                    onChange={handleYearFromValueChange}
                  />
                  <NumberInputNoLabel
                    label="До"
                    value={yearToValue}
                    onChange={handleYearToValueChange}
                  />
                </div>
              </div>

              <button
                onClick={handleObjectTypeOpen}
                className="ObjectsContent__checkboxesOpenButton Color_blue_primary Font_14_140"
              >
                Свернуть
              </button>
            </div>
          </>
        )}

        <div className="ObjectsContent_allRooms">
          <div className="ObjectsContent__wrapperContainer">
            <h4 className="Font_16_140">Всего комнат</h4>
            <ul className="ObjectsContent__buttons">
              {allRooms.map((room, index) => (
                <li key={index}>
                  <RequestButton
                    onClick={() => handleSelectRooms(room.value)}
                    activeBlue={selectedRoomsId === room.value}
                  >
                    {room.label}
                  </RequestButton>
                </li>
              ))}
            </ul>
            {!allRoomsOpen && (
              <button
                onClick={handleAllRoomsOpen}
                className="ObjectsContent__checkboxesOpenButton Color_blue_primary Font_14_140"
              >
                Открыть еще 2
              </button>
            )}
            {allRoomsOpen && (
              <>
                <h4 className="Font_16_140">Спален</h4>
                <ul className="ObjectsContent__buttons">
                  {sleeps.map((sleep, index) => (
                    <li key={index}>
                      <RequestButton
                        onClick={() => handleSelectSleeps(sleep.value)}
                        activeBlue={selectedSleepsId === sleep.value}
                      >
                        {sleep.label}
                      </RequestButton>
                    </li>
                  ))}
                </ul>
                <h4 className="Font_16_140">Санузлов</h4>
                <ul className="ObjectsContent__buttons">
                  {baths.map((bath, index) => (
                    <li key={index}>
                      <RequestButton
                        onClick={() => handleSelectBaths(bath.value)}
                        activeBlue={selectedBathsId === bath.value}
                      >
                        {bath.label}
                      </RequestButton>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleAllRoomsOpen}
                  className="ObjectsContent__checkboxesOpenButton Color_blue_primary Font_14_140"
                >
                  Свернуть
                </button>
              </>
            )}
          </div>
        </div>

        <div className="ObjectsContent__squares">
          <div className="ObjectsContent__wrapperContainer">
            <h4 className="Font_16_140">Общая площадь</h4>
            <div className="ObjectsContent__price">
              <NumberInputNoLabel
                label="От"
                value={fullSquareFromValue}
                onChange={handleFullSquareFromValueChange}
              />
              <NumberInputNoLabel
                label="До"
                value={fullSquareToValue}
                onChange={handleFullSquareToValueChange}
              />
            </div>
            {!squareOpen && (
              <button
                onClick={handleSquareOpen}
                className="ObjectsContent__checkboxesOpenButton Color_blue_primary Font_14_140"
              >
                Открыть ещё 2
              </button>
            )}

            {squareOpen && (
              <>
                <h4 className="Font_16_140">Жилая</h4>
                <div className="ObjectsContent__price">
                  <NumberInputNoLabel
                    label="От"
                    value={livingSquareFromValue}
                    onChange={handleLivingSquareFromValueChange}
                  />
                  <NumberInputNoLabel
                    label="До"
                    value={livingSquareToValue}
                    onChange={handleLivingSquareToValueChange}
                  />
                </div>
                <h4 className="Font_16_140">Участок земли</h4>
                <div className="ObjectsContent__price">
                  <NumberInputNoLabel
                    label="От"
                    value={landSquareFromValue}
                    onChange={handleLandSquareFromValueChange}
                  />
                  <NumberInputNoLabel
                    label="До"
                    value={landSquareToValue}
                    onChange={handleLandSquareToValueChange}
                  />
                </div>
                {squareOpen && (
                  <button
                    onClick={handleSquareOpen}
                    className="ObjectsContent__checkboxesOpenButton Color_blue_primary Font_14_140"
                  >
                    Свернуть
                  </button>
                )}
              </>
            )}
          </div>
        </div>
        <div className="ObjectsContent__purpose">
          <div className="ObjectsContent__wrapperContainer">
            <div
              className="ObjectsContent__purposeHead"
              onClick={handlePurposeOpen}
            >
              <h4 className="Font_16_140">Назначение</h4>

              <ArrowIcon
                width={20}
                height={20}
                className={cn("ArrowIcon", { PurposeOpen: purposeOpen })}
              />
            </div>
            {purposeOpen && (
              <>
                <Checkbox label="Для проживания" className="CheckBox" />
                <Checkbox label="Для сезонного отдыха" className="CheckBox" />
                <Checkbox
                  label="Для инвестиций (сдавать)"
                  className="CheckBox"
                />
                <Checkbox
                  label="Для инвестиций (перепродать)"
                  className="CheckBox"
                />
                <Checkbox label="Для ВНЖ / ПМЖ" className="CheckBox" />
                <Checkbox label="Для гражданства" className="CheckBox" />
              </>
            )}
          </div>
        </div>
        <div className="ObjectsContent__status">
          <div className="ObjectsContent__wrapperContainer">
            <div
              className="ObjectsContent__purposeHead"
              onClick={handleStatusOpen}
            >
              <h4 className="Font_16_140">Статус продавца</h4>
              <ArrowIcon
                width={20}
                height={20}
                className={cn("ArrowIcon", { PurposeOpen: statusOpen })}
              />
            </div>
            {statusOpen && (
              <>
                <Checkbox label="Клиент (ищу для себя)" className="CheckBox" />
                <Checkbox label="Риелтор" className="CheckBox" />
                <Checkbox label="Агентство недвижимости" className="CheckBox" />
                <Checkbox label="Застройщик" className="CheckBox" />
                <Checkbox label="Собственник" className="CheckBox" />
              </>
            )}
          </div>
        </div>
        <div className="ObjectsContent__onlyPro">
          <div className="ObjectsContent__wrapperContainer">
            <Checkbox label="Только PRO" />
          </div>
        </div>
      </div>
    </StyledObjectsContent>
  );
};

const StyledObjectsContent = styled.div`
  margin-top: 30px;

  .ObjectsContent__wrapperContainer,
  .ObjectsContent__wrapperContainerPricing {
    padding-left: 30px;
    padding-right: 30px;
  }

  .ObjectsContent__wrapperContainerPricing {
    border-top: 1px solid #e1edfd;
    margin-top: 14px;
  }

  .ObjectsContent__locations {
    margin-bottom: 10px;
  }

  .ObjectsContent__locationsSelect {
    button {
      padding: 15px 20px !important;
    }
  }

  .ObjectsContent__currency {
    display: flex;
    padding-top: 15px;
  }
  .ObjectsContent__pricing {
    .DropdownInput_select {
      box-shadow: none !important;
    }
  }

  .ObjectsContent__price {
    display: flex;
    margin-top: 10px;
    div:not(:first-child) {
      margin-left: 10px;
    }

    input {
      padding: 12px 20px;
      height: unset;
    }
  }

  .ObjectsContent__type {
    padding-top: 15px;
    margin-top: 14px;
    border-top: 1px solid #e1edfd;

    .TabButtons__container {
      padding: 0;
    }
  }

  .ObjectsContent__tabs {
    margin-top: 10px;
  }

  .ObjectsContent__checkboxes {
    .CheckBox {
      margin-top: 10px;
    }
  }

  .ObjectsContent__checkboxesOpenButton {
    margin-top: 10px;
  }

  .ObjectsContent__commercial,
  .ObjectsContent_year,
  .ObjectsContent__squares,
  .ObjectsContent__purpose,
  .ObjectsContent__status,
  .ObjectsContent__onlyPro {
    margin-top: 14px;
    padding-top: 15px;
    border-top: 1px solid #e1edfd;

    h4:not(:first-child) {
      margin-top: 20px;
    }
  }

  .ObjectsContent__purposeHead {
    display: flex;
    justify-content: space-between;
    align-items: center;

    :hover {
      cursor: pointer;
    }
    svg {
      path {
        stroke: #b8c6e3;
      }
    }
  }

  .ArrowIcon {
    transform: rotate(180deg);
  }

  .PurposeOpen {
    transition: 0.15s ease-in-out;
    transform: rotate(360deg);
  }

  .ObjectsContent__onlyPro {
    padding-bottom: 20px;
  }

  .ObjectsContent_allRooms {
    padding-top: 5px;
    margin-top: 14px;
    border-top: 1px solid #e1edfd;

    h4 {
      padding-top: 10px;
    }
  }

  .ObjectsContent__sleeps,
  .ObjectsContent__baths {
    margin-top: 20px;

    .ObjectsContent__buttons {
      margin-top: 10px;
    }
  }

  .ObjectsContent__buttons {
    display: flex;
    li {
      margin-top: 10px;
    }
    button {
      background: #fff;
      padding: 10px 15.5px;
      box-shadow: 0 0 0 2px inset #e1edfd;
    }

    li:not(:first-child) {
      margin-left: 10px;
    }
  }
`;

export { ApplicationsFilter };
