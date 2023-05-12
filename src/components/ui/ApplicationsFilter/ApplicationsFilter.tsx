import { CrossIcon } from "@/icons";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Checkbox } from "../CheckBox";
import { DropdownInput } from "../DropdownInput";
import { NumberInput } from "../NumberInput";
import { RequestButton } from "../RequestButton";
import { TabButtons } from "../TabButtons";

interface FilterProps {
  className?: string;
  onClick?: any;
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

const ApplicationsFilter = ({ className, onClick }: FilterProps) => {
  return (
    <StyledApplicationsFilter className={className}>
      <div className="ApplicationsFilter__head">
        <h2 className="Font_12_16_600">фильтр выключен</h2>
        <Button tertiary onClick={onClick}>
          <CrossIcon width={24} height={24} />
        </Button>
      </div>
      <div className="ApplicationsFilter__tabs">
        <TabButtons
          tabs={[
            { label: "Продавцы", id: "1", content: <SellerContent /> },
            { label: "Объекты", id: "2", content: <ObjectsContent /> },
          ]}
          defaultTabId={"1"}
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
    padding: 0px 30px;
  }
`;

const SellerContent = () => {
  return (
    <StyledSellerContent>
      <div className="SellerContent__status">
        <h3 className="Font_16_140">Статус продавца</h3>
        <Checkbox label="PRO аккаунт" />
        <Checkbox label="Только с объектами" />
        <Checkbox label="С проверенными документами" />
        <Checkbox label="С рейтингом выше 4" />
      </div>
      <div className="SellerContent__type">
        <h3 className="Font_16_140">Тип продавца</h3>
        <Checkbox label="Клиент (ищу для себя)" />
        <Checkbox label="Риелтор" />
        <Checkbox label="Агентство недвижимости" />
        <Checkbox label="Застройщик" />
        <Checkbox label="Собственник" />
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

  .SellerContent__type {
    border-top: 1px solid #e1edfd;
    padding-top: 15px;
    margin-top: 14px;

    label {
      margin-top: 10px;
    }
  }
`;

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
      <h3>Локация недвижимости</h3>
      <DropdownInput
        placeholder="Все страны"
        options={["Турция", "Кипр", "Черногоря", "Северный Кипр"]}
      />
      <h3 className="Font_16_140">Цена в евро</h3>
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
      <div className="ObjectsContent__type">
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
      <div className="ObjectsContent__checkboxes">
        <div>
          <h4 className="Font_16_24">Жилая</h4>
          <Checkbox label="Квартира / апартаменты" />
          <Checkbox label="Дом / вилла" />
          <Checkbox label="Пентхаус" />
          <Checkbox label="Таунхаус" />
          <Checkbox label="Дуплекс" />
          <Checkbox label="Участок земли" />
        </div>
        <div className="ObjectsContent__commercial">
          <h4 className="Font_16_24">Коммерческая</h4>
          <Checkbox label="Офис" />
          <Checkbox label="Гостиница" />
          <Checkbox label="Магазин" />
          <Checkbox label="Торговый центр" />
          <Checkbox label="Склад" />
        </div>
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
        <div className="ObjectsContent_allRooms">
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
        </div>
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

        <div className="ObjectsContent__squares">
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
          <h4>Жилая</h4>
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
        </div>
        <div className="ObjectsContent__purpose">
          <h4 className="Font_16_140">Назначение</h4>
          <Checkbox label="Для проживания" />
          <Checkbox label="Для сезонного отдыха" />
          <Checkbox label="Для инвестиций (сдавать)" />
          <Checkbox label="Для инвестиций (перепродать)" />
          <Checkbox label="Для ВНЖ / ПМЖ" />
          <Checkbox label="Для гражданства" />
        </div>
        <div className="ObjectsContent__status">
          <h4 className="Font_16_140">Статус продавца</h4>
          <Checkbox label="Клиент (ищу для себя)" />
          <Checkbox label="Риелтор" />
          <Checkbox label="Агентство недвижимости" />
          <Checkbox label="Застройщик" />
          <Checkbox label="Собственник" />
        </div>
        <div className="ObjectsContent__onlyPro">
          <Checkbox label="Только PRO" />
        </div>
      </div>
    </StyledObjectsContent>
  );
};

const StyledObjectsContent = styled.div`
  margin-top: 10px;

  .ObjectsContent__pricing {
    .DropdownInput_select {
      box-shadow: none !important;
    }
  }

  .ObjectsContent__price {
    display: flex;
    div:not(:first-child) {
      margin-left: 10px;
    }
  }

  .ObjectsContent__type {
    padding-top: 15px;
    margin-top: 14px;
    border-top: 1px solid #e1edfd;
  }

  .ObjectsContent__tabs {
    margin-top: 15px;
  }

  .ObjectsContent__checkboxes {
    label {
      margin-top: 10px;
    }
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

  .ObjectsContent_allRooms {
    padding-top: 15px;
    margin-top: 14px;
    border-top: 1px solid #e1edfd;
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
    button {
      background: #fff;
      padding: 10px 15.5px;
      box-shadow: 0 0 0 2px inset #e1edfd;
    }

    button:not(:first-child) {
      margin-left: 10px;
    }
  }
`;

export { ApplicationsFilter };
