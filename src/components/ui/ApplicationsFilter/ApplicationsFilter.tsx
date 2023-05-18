import { ArrowIcon, CrossIcon } from "@/icons";
import cn from "classnames";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Checkbox } from "../CheckBox";
import { CurrencySelect } from "../CurrencySelect/CurrencySelect";
import { DropdownInput } from "../DropdownInput";
import { NumberInput } from "../NumberInput";
import { RequestButton } from "../RequestButton";
import { TabButtons } from "../TabButtons";
interface FilterProps {
  className?: string;
  onClick?: any;
  onTabClick?: any;
  onChange?: any;
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
}: FilterProps) => {
  return (
    <StyledApplicationsFilter className={className}>
      <div className="ApplicationsFilter__head">
        <h2 className="Font_12_16_600">фильтр выключен</h2>
        <Button tertiary onClick={onClick}>
          <CrossIcon width={24} height={24} />
        </Button>
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
    </StyledApplicationsFilter>
  );
};

const StyledApplicationsFilter = styled.div`
  background: #fff;
  border-radius: 10px;
  max-width: 355px;
  width: 100%;

  .ApplicationsFilter__head {
    display: flex;
    justify-content: space-between;

    padding: 15px 15px 0 30px;

    h2 {
      margin-top: 15px;
      text-transform: uppercase;
    }
    button {
      padding: 2px;
    }
    svg {
      path {
        fill: #7786a5;
      }
    }
  }

  .ApplicationsFilter__tabs {
    margin-top: 20px;
    max-height: calc(100vh - 184px);
    height: 100%;
    overflow-y: auto;
    .TabButtons__container {
      padding: 0px 30px;
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

const currency = ["Евро, €", "Доллар, $", "Фунт стерлингов, £", "Рубль, ₽"];

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
        <h3 className="ObjectsContent__locations">Локация недвижимости</h3>
        <DropdownInput
          className="ObjectsContent__locationsSelect"
          placeholder="Все страны"
          options={["Турция", "Кипр", "Черногоря", "Северный Кипр"]}
        />
      </div>
      <div className="ObjectsContent__wrapperContainer">
        <h3 className="ObjectsContent__currency Font_16_140">
          <span>Цена в </span>
          <CurrencySelect options={currency} />
        </h3>
        <div className="ObjectsContent__price">
          <NumberInput
            label="От"
            value={priceFromValue}
            onChange={handlePriceFromValueChange}
          />
          <NumberInput
            label="До"
            value={priceToValue}
            onChange={handlePriceToValueChange}
          />
        </div>
      </div>
      <div className="ObjectsContent__type">
        <div className="ObjectsContent__wrapperContainer">
          <h3>Тип недвижимости</h3>
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
                <h4>Год постройки</h4>
                <div className="ObjectsContent__price">
                  <NumberInput
                    label="От"
                    value={yearFromValue}
                    onChange={handleYearFromValueChange}
                  />
                  <NumberInput
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
            <h4>Всего комнат</h4>
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
                <h4>Спален</h4>
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
                <h4>Санузлов</h4>
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
            <h4>Общая площадь</h4>
            <div className="ObjectsContent__price">
              <NumberInput
                label="От"
                value={fullSquareFromValue}
                onChange={handleFullSquareFromValueChange}
              />
              <NumberInput
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

            <h4>Жилая</h4>

            {squareOpen && (
              <>
                <div className="ObjectsContent__price">
                  <NumberInput
                    label="От"
                    value={livingSquareFromValue}
                    onChange={handleLivingSquareFromValueChange}
                  />
                  <NumberInput
                    label="До"
                    value={livingSquareToValue}
                    onChange={handleLivingSquareToValueChange}
                  />
                </div>
                <h4>Участок земли</h4>
                <div className="ObjectsContent__price">
                  <NumberInput
                    label="От"
                    value={landSquareFromValue}
                    onChange={handleLandSquareFromValueChange}
                  />
                  <NumberInput
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
  margin-top: 10px;

  .ObjectsContent__wrapperContainer {
    padding-left: 30px;
    padding-right: 30px;
  }

  .ObjectsContent__locations {
    margin-bottom: 10px;
  }

  .ObjectsContent__locationsSelect {
    button {
      padding: 12px 20px !important;
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
    margin-top: 15px;
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
    margin-top: 15px;
    padding-top: 9px;
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
