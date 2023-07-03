import { Button, Link, Search } from "@/components/ui";
import { ApplicationsFilter } from "@/components/ui/ApplicationsFilter";
import { CrossIcon } from "@/icons";
import { FilterIcon } from "@/icons/FilterIcon";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { ObjectSmallCard } from "./ObjectSmallCard";

interface Props {
  className?: string;
  onClose?: any;
}

const objectsArray = [
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Кипр",
    year: "2022 г",
    square: "110 м²",
    rooms: 5,
    price: "250 000 €",
    image: "/images/img.jpg",
  },
];

const ObjectsList = ({ className, onClose }: Props) => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = useCallback(() => {
    setOpenFilter(!openFilter);
  }, [openFilter]);

  const [activeButtons, setActiveButtons] = useState(
    objectsArray.map((object, index) => index === null)
  );

  const handleActive = useCallback(
    (index: number) => {
      const newActiveButtons = [...activeButtons];
      newActiveButtons[index] = !newActiveButtons[index];
      setActiveButtons(newActiveButtons);
    },
    [activeButtons]
  );

  const selectedOptions = objectsArray.filter(
    (object, index) => activeButtons[index]
  );

  function getNoun(number: any, one: any, two: any, five: any) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }

  return (
    <StyledObjectsList className={className}>
      <div className="ObjectsList__container">
        <div className="ObjectsList">
          <div className="Head">
            <div className="ObjectsList__head">
              <h2 className="Font_32_120">Мои объекты</h2>
              <button onClick={onClose} className="CloseButton">
                <CrossIcon attr={{width: 24, height: 24, className: "CloseIcon"}} />
              </button>
            </div>
            <div className="ObjectsList__linkContainer Font_14_140 Color_blue_primary">
              <span>Выберите объект из списка или </span>
              <Link href="/" underlined>
                создайте новый
              </Link>
            </div>

            <Search
              options={[]}
              placeholder="Поиск"
              rightIcon={<FilterIcon />}
              className="ObjectsList__search"
              onClick={handleOpenFilter}
            />
          </div>

          <ul className="ObjectsList__list">
            {objectsArray.map((object, index) => (
              <li key={index}>
                <ObjectSmallCard
                  onChange={() => handleActive(index)}
                  onClick={() => handleActive(index)}
                  title={object.title}
                  image={object.image}
                  location={object.location}
                  year={object.year}
                  rooms={object.rooms}
                  square={object.square}
                  price={object.price}
                  active={activeButtons[index]}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="ObjectsList__buttonContainer">
          {selectedOptions.length <= 0 ? (
            <Button disabled className="ObjectsList__button">
              Отправить
            </Button>
          ) : (
            <Button className="ObjectsList__button">
              Отправить{" "}
              {`${selectedOptions.length}` +
                getNoun(
                  `${selectedOptions.length}`,
                  " объект",
                  " объекта",
                  " объектов"
                )}
            </Button>
          )}
        </div>
      </div>

      {openFilter && (
        <div className="Filter__mobile">
          <ApplicationsFilter onClick={handleOpenFilter} className="Filter" />
        </div>
      )}
    </StyledObjectsList>
  );
};

const StyledObjectsList = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 200;
  display: flex;
  background: rgba(60, 75, 97, 0.6);

  backdrop-filter: blur(11px);

  .Head {
    position: sticky;
    top: 0;
  }

  .ObjectsList__container {
    position: absolute;
    height: 100vh;
    background: #eef1f5;
    overflow: auto;

    right: 0;
  }
  .ObjectsList {
    width: 390px;
  }

  .ObjectsList__buttonContainer {
    position: sticky;
    bottom: 0;
    width: 100%;
    background: #eef1f5;
    padding: 20px 30px;
    border-top: 2px solid #d4ddee;
    display: flex;
    justify-content: center;
  }

  .ObjectsList__button {
    width: 100%;
  }

  .ObjectsList__head {
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 15px 15px 20px 20px;
    h2 {
      margin-top: 15px;
    }
  }

  .CloseButton {
    padding: 2px;
    height: 28px;
  }

  .CloseIcon {
    path {
      fill: #7786a5;
    }
  }

  .ObjectsList__linkContainer {
    display: flex;
    padding: 5px 20px;
    background: #f1f7ff;
    flex-wrap: wrap;
  }

  .ObjectsList__search {
    border-bottom: 2px solid #eef1f5;
    input {
      border-radius: 0 0 10px 10px;
      box-shadow: none;
    }
  }

  .ObjectsList__list {
    margin-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 20px;

    li:not(:first-child) {
      margin-top: 10px;
    }
  }

  .Filter {
    position: absolute;
    right: 410px;
    top: 20px;
    max-width: 355px;
    height: calc(100vh - 40px);
    overflow: auto;
  }

  @media (max-width: 768px) {
    .Filter__mobile {
      position: fixed;
      right: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(60, 75, 97, 0.6);
      backdrop-filter: blur(4px);
      display: flex;
      justify-content: flex-end;
    }

    .Filter {
      position: relative;
      top: 20px;
      right: 15px;
    }
  }

  @media (max-width: 576px) {
    .Filter__mobile {
      justify-content: center;
    }

    .Filter {
      position: relative;
      top: 20px;
      right: 0;
      width: 100%;
      max-width: unset;
    }

    .ObjectsList {
      width: 100%;
      max-width: 390px;
    }
  }
`;

export { ObjectsList };
