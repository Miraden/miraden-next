import { Button, Tag } from "@/components/ui";
import { PricingSelect } from "@/components/ui/PricingDropdown/PricingSelect";
import {
  BackIcon20,
  BathsIcon,
  BuildYearIcon,
  Kebab24Icon,
  SquareIcon,
} from "@/icons";
import { BedroomIcon } from "@/icons/BedroomIcon";
import { BuildingIcon } from "@/icons/BuildingIcon";
import { CashIcon } from "@/icons/CashIcon";
import { EyeIcon } from "@/icons/EyeIcon";
import { LivingSquareIcon } from "@/icons/LivingSquareIcon";
import { LocationMapIcon } from "@/icons/LocationMapIcon";
import { PurposeCheckIcon } from "@/icons/PurposeCheckIcon";
import { RoomsIcon } from "@/icons/RoomsIcon";
import { UnpublishedIcon } from "@/icons/UnpublishedIcon";
import Image from "next/image";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface ObjectCardProps {
  className?: string;
  title?: string;
  location?: string;
  id?: string;
  cashBack?: number;
  yieldCount?: number;
  square?: string;
  rooms?: number;
  baths?: number;
  sleeps?: number;
  price?: string;
  status?: string;
  name?: string;
  image?: any;
  isBooked?: boolean;
  isUnpublished?: boolean;
  year?: string;
  image1?: any;
  image2?: any;
  image3?: any;
  agencyName?: string;
  firstInstallment?: string;
  firstInstallmentPercent?: string;
  yieldCountPercent?: number;
  singleCost?: string;
  href?: string;
}

const currencyOptions = ["€", "$", "£", "₽"];

const item = {
  title: "3-х комнатная квартира на Кипре для ВНЖ",
  location: "Северный Кипр",
  id: "1445",
  cashBack: 6,
  yieldCount: 8,
  year: "2022",
  square: "294",
  rooms: 3,
  sleeps: 6,
  baths: 2,
  price: "158 000",
  status: "Собственник",
  name: "Анастасия Петрова",
  image: "/images/avatar.jpg",
  isBooked: false,
  isUnpublished: false,
  image1: "/images/img.jpg",
  image2: "/images/img.jpg",
  image3: "/images/img.jpg",
  firstInstallment: "34 000 $",
  singleCost: "1 200 $",
  firstInstallmentPercent: "30 %",
};

const ObjectItem = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openLinks, setOpenLinks] = useState(false);

  const handleOpenDropdown = useCallback(
    (event: any) => {
      event.preventDefault();
      setOpenDropdown(!openDropdown);
    },
    [openDropdown]
  );

  const handleClickPrice = useCallback((event: any) => {
    event.preventDefault();
  }, []);

  return (
    <StyledObjectCard className={"className"}>
      <div>
        <div className="ObjectCard">
          <div className="Object__head">
            <div className="Object__heading">
              <Button
                href="/applications-full"
                className="Application__headButton"
              >
                <BackIcon20
                  width={20}
                  height={20}
                  className="Application__headArrow"
                />
              </Button>

              <p className="Font_32_120 lg:Font_26_120_50">{item.title}</p>
            </div>

            <div className="Object__heading">
              <p className="Color_text_grey">ID {item.id}</p>
              <Button
                tertiary
                className="ObjectCard__button"
                onClick={handleOpenDropdown}
              >
                <Kebab24Icon className="ObjectCard__buttonIcon" />
              </Button>
            </div>
          </div>
          {item.isUnpublished ? (
            <div className="ObjectCard__unpublishedContainer">
              <div className="ObjectCard__unpublished">
                <UnpublishedIcon />
                <p className="Font_20_120_700">
                  Объект снят
                  <br />
                  с публикации
                </p>
                <p className="Font_12_16">И будет удалён 26.01.2023</p>
              </div>
              <Image alt="" src={item.image1} width={400} height={210} />
            </div>
          ) : (
            <div className="ObjectCard__mainImages">
              <div className="ObjectCard__mainImage">
                {item.isBooked && (
                  <div className="ObjectCard__booked Font_14_16_600">
                    Забронирован
                  </div>
                )}
                <Image
                  src={item.image1}
                  alt=""
                  width={645}
                  height={430}
                  className="Image1"
                />
              </div>

              <div>
                <Image
                  src={item.image2}
                  alt=""
                  width={275}
                  height={210}
                  className="Image2"
                />
                <Image
                  src={item.image3}
                  alt=""
                  width={275}
                  height={210}
                  className="Image3"
                />
              </div>
            </div>
          )}

          <div className="ObjectCard__infoWrapper">
            <div className="ObjectItem__info">
              <div className="ObjectItem__location Font_16_24 Color_primary">
                <LocationMapIcon width={18} height={18} />
                <p>{item.location}</p>
              </div>

              <div className="ObjectItem__view Font_14_140 Color_text_grey">
                <p>Создано 6 дней назад</p>

                <p className="">
                  <EyeIcon width={18} height={18} />
                  <span>162</span>
                </p>
              </div>
            </div>

            <div className="ObjectCard__footer">
              <div className="Color_blue_primary Font_20_120_700">
                <PricingSelect
                  onClick={handleClickPrice}
                  options={currencyOptions}
                  price={item.price}
                  yieldCount={item.yieldCount}
                  yieldCountPercent={item.yieldCount}
                  firstInstallment={item.firstInstallment}
                  firstInstallmentPercent={item.firstInstallmentPercent}
                  singleCost={item.singleCost}
                />
              </div>

              <div className="ObjectCard__indicators Font_14_16">
                <Tag className="ObjectCard__indicatorButton">Рассрочка 0%</Tag>
                <Tag className="ObjectCard__indicatorButton">
                  Дистанционная сделка
                </Tag>
                <Tag className="ObjectCard__indicatorButton">
                  За криптовалюту
                </Tag>
              </div>
            </div>

            <div className="ObjectCard__objectInfo Font_16_140">
              <div>
                <p>
                  <BuildYearIcon width={18} height={18} />
                  <span className="Font_24_120"> {item.year}</span>
                </p>
                <p className="Font_16_150 Color_text_grey">Год постройки</p>
              </div>

              <div>
                <p>
                  <SquareIcon width={18} height={18} />
                  <span className="Font_24_120">{item.square}</span>
                </p>
                <p className="Font_16_150 Color_text_grey">Общая</p>
              </div>

              <div>
                <p>
                  <LivingSquareIcon width={18} height={18} />
                  <span className="Font_24_120">194 м²</span>
                </p>
                <p className="Font_16_150 Color_text_grey">Жилая</p>
              </div>

              <div>
                <p>
                  <RoomsIcon width={18} height={18} />
                  <span className="Font_24_120">{item.rooms}</span>
                </p>
                <p className="Font_16_150 Color_text_grey">Всего комнат</p>
              </div>

              <div>
                <p>
                  <BedroomIcon width={18} height={18} />
                  <span className="Font_24_120">{item.rooms}</span>
                </p>
                <p className="Font_16_150 Color_text_grey">Спален</p>
              </div>

              <div>
                <p>
                  <BathsIcon width={18} height={18} />
                  <span className="Font_24_120">{item.rooms}</span>
                </p>
                <p className="Font_16_150 Color_text_grey">Санузлов</p>
              </div>
            </div>

            <div className="ObjectItem__devider" />

            <div className="SingleApplication__fullInfo Font_16_24">
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
                  <p>Год постройки — 2024 / 2 квартал</p>
                </div>
              </div>

              <div className="SingleApplication__location">
                <div>
                  <PurposeCheckIcon width={18} height={18} />
                  <p>Назначение</p>
                </div>
                <div className="SingleApplication__locationInfo">
                  <p>Для инвестиций (сдавать в аренду)</p>
                  <p>ВНЖ</p>
                </div>
              </div>

              <div className="SingleApplication__location">
                <div>
                  <BuildYearIcon width={18} height={18} />
                  <p>Виды</p>
                </div>
                <div className="SingleApplication__locationInfo">
                  <p>На море</p>
                  <p>На горы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledObjectCard>
  );
};

const StyledObjectCard = styled.div`
  .ObjectCard {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    transition: 0.15s ease;
    :hover {
      cursor: pointer;
      box-shadow: 0 0 0 2px inset #c7d2e9;
    }
  }

  .Object__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
  }

  .Object__heading {
    display: flex;
    align-items: center;
  }

  .ObjectCard__unpublishedContainer {
    max-width: 400px;
    width: 100%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }

  .ObjectCard__unpublished {
    position: absolute;
    backdrop-filter: blur(16px);
    width: 100%;
    height: 100%;
    background: rgba(60, 75, 97, 0.6);
    color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    p {
      margin-top: 10px;
    }
  }

  .ObjectCard__mainImages {
    display: flex;
    /* max-width: 400px; */
    width: 100%;
    justify-content: center;
    img {
      border-radius: 10px;
      object-fit: cover;
    }
    .Image2 {
      margin-left: 10px;
    }
    .Image3 {
      margin-left: 10px;
      margin-top: 10px;
    }
  }

  .ObjectCard__mainImage {
    position: relative;
  }

  .ObjectCard__booked {
    position: absolute;
    padding: 7px 10px;
    background: #4e6af3;
    border-radius: 10px;
    color: #fff;
    top: 10px;
    right: 10px;
  }

  .ObjectCard__infoWrapper {
    margin: 0 20px;
    /* width: 100%; */
  }

  .ObjectItem__info {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #e1edfd;
  }

  .ObjectCard__head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .ObjectCard__button,
  .ObjectCard__buttonMobile {
    padding: 2px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    flex-shrink: 0;
    :hover {
      background: #f1f7ff;
    }
  }

  .ObjectItem__location {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .ObjectItem__view {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .ObjectItem__view p {
    display: -webkit-flex;
  }

  .ObjectItem__view p span {
    margin-left: 8px;
  }

  .ObjectCard__indicators,
  .ObjectCard__objectInfo {
    display: flex;
    align-items: center;
  }

  .ObjectCard__indicators {
    div:not(:first-child) {
      margin-left: 10px;
    }
  }

  .ObjectCard__objectInfo {
    margin-top: 29px;
    gap: 70px;

    p {
      display: flex;
      align-items: center;
      span {
        margin-left: 8px;
      }
    }
  }

  .ObjectCard__indicatorButton,
  .ObjectCard__indicatorButtonFav {
    border-radius: 10px;
    background: #eafff3;
    padding: 10px 20px;
  }

  .ObjectCard__indicatorButtonFav:hover {
    background: #4e6af3;

    svg {
      path {
        fill: #fff;
      }
    }
  }

  .ObjectItem__devider {
    height: 4px;
    background: #e1edfd;
    border-radius: 10px;
    width: 100%;
    margin: 20px 0;
  }

  .ObjectCard__footer {
    display: flex;
    justify-content: space-between;
    padding-top: 9px;
    margin-top: 10px;
  }

  .ObjectCard__footerPerson {
    display: flex;
    text-align: end;
    align-items: center;
    img {
      margin-left: 10px;
      border-radius: 50%;
    }
  }

  .IconLinks {
    display: flex;

    button,
    a {
      background: #f1f7ff;
      border-radius: 50%;
      padding: 11px;
      margin-left: 10px;
      :hover {
        background: #e1edfd;
      }
    }
  }

  .PhoneIcon {
    fill: #2a344a !important;

    path {
      fill: #2a344a !important;
    }
  }

  .ObjectCard__buttonMobile {
    display: none;
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

  @media (max-width: 1024px) {
    .ObjectCard__mainImages,
    .ObjectCard__unpublishedContainer {
      min-width: 240px;
      max-width: 240px;

      img {
        width: unset;
        height: unset;
        object-fit: cover;
        border-radius: 10px;
      }
    }
    .Image2,
    .Image3 {
      display: none;
    }

    .ObjectItem__location {
      margin-top: 8px;
    }

    .ObjectCard__indicators {
      margin-top: 10px;
    }

    .ObjectCard__objectInfo {
      margin-top: 14px;
    }

    .ObjectCard__unpublished {
      display: none;
    }

    .ObjectCard__unpublishedContainer {
      max-width: 240px;
    }

    .ObjectCard__booked {
      display: none;
    }
  }

  @media (max-width: 768px) {
    /* padding: 10px; */

    .ObjectCard {
      padding: 10px;
    }
    .ObjectCard__mainImages,
    .ObjectCard__unpublishedContainer {
      min-width: 120px;
      max-width: 120px;

      img {
        height: 120px;
      }
    }

    .ObjectCard__infoWrapper {
      margin-left: 15px;
    }

    .ObjectItem__location {
      margin-top: 5px;
    }

    .ObjectCard__indicators {
      display: none;
    }

    .ObjectCard__objectInfo {
      margin-top: 10px;
      svg {
        width: 14px;
        height: 14px;
      }
      p:not(:first-child) {
        margin-left: 16px;
      }

      .Sleeps,
      .Baths {
        display: none;
      }
    }

    .ObjectCard__footerPerson {
      display: none;
    }

    .ObjectCard__button {
      display: none;
    }

    .ObjectCard__buttonMobile {
      display: flex;
    }
  }
`;

export { ObjectItem };
