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
  const [toValue, setToValue] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [selected, setSelected] = useState(false);

  const handleSelect = useCallback(() => {
    setSelected(!selected);
  }, [selected]);

  const handleFromValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputFromValue = event.target.value;
    if (/^\d*$/.test(inputFromValue)) {
      // проверка вводимых символов
      setFromValue(inputFromValue);
    }
  };

  const handleToValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputToValue = event.target.value;
    if (/^\d*$/.test(inputToValue)) {
      // проверка вводимых символов
      setToValue(inputToValue);
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
          value={fromValue}
          onChange={handleFromValueChange}
        />
        <NumberInput
          label="До"
          value={toValue}
          onChange={handleToValueChange}
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
              value={fromValue}
              onChange={handleFromValueChange}
            />
            <NumberInput
              label="До"
              value={toValue}
              onChange={handleToValueChange}
            />
          </div>
        </div>
        <div className="ObjectsContent_allRooms">
          <h4>Всего комнат</h4>
          <div className="ObjectsContent__buttons">
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              1
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              2
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              3
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              4
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              5
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              6+
            </RequestButton>
          </div>
        </div>
        <div className="ObjectsContent__sleeps">
          <h4>Спален</h4>
          <div className="ObjectsContent__buttons">
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              1
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              2
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              3
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              4
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              5
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              6+
            </RequestButton>
          </div>
        </div>
        <div className="ObjectsContent__baths">
          <h4>Санузлов</h4>
          <div className="ObjectsContent__buttons">
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              1
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              2
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              3
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              4
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              5
            </RequestButton>
            <RequestButton onClick={handleSelect} activeBlue={selected}>
              6+
            </RequestButton>
          </div>
        </div>
        <div className="ObjectsContent__squares">
          <h4>Общая площадь</h4>
          <div className="ObjectsContent__price">
            <NumberInput
              label="От"
              value={fromValue}
              onChange={handleFromValueChange}
            />
            <NumberInput
              label="До"
              value={toValue}
              onChange={handleToValueChange}
            />
          </div>
          <h4>Жилая</h4>
          <div className="ObjectsContent__price">
            <NumberInput
              label="От"
              value={fromValue}
              onChange={handleFromValueChange}
            />
            <NumberInput
              label="До"
              value={toValue}
              onChange={handleToValueChange}
            />
          </div>
          <h4>Участок земли</h4>
          <div className="ObjectsContent__price">
            <NumberInput
              label="От"
              value={fromValue}
              onChange={handleFromValueChange}
            />
            <NumberInput
              label="До"
              value={toValue}
              onChange={handleToValueChange}
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
