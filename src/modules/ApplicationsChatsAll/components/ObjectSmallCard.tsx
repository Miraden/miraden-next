import { Checkbox } from "@/components/ui";
import { BuildYearIcon, PointIconFooter, SquareIcon } from "@/icons";
import { RoomsIcon } from "@/icons/RoomsIcon";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  className?: string;
  title?: string;
  location?: string;
  year?: string;
  square?: string;
  rooms?: number;
  price?: string;
  image?: any;
  onChange?: any;
}

const ObjectSmallCard = ({
  className,
  title,
  location,
  year,
  square,
  rooms,
  price,
  image,
  onChange,
}: Props) => {
  return (
    <StyledObjectSmallCard className={className}>
      <div className="ObjectCard">
        <div>
          <Image
            alt=""
            src={image}
            width={120}
            height={120}
            className="ObjectCard__image"
          />
        </div>
        <div className="ObjectCard__infoContainer">
          <h3 className="Font_16_120">{title}</h3>
          <div className="ObjectCard__indicator">
            <PointIconFooter width={14} height={14} />{" "}
            <p className="Font_12_16 Color_text_grey">{location}</p>
          </div>
          <div className="ObjectCard__indicatorsList Font_12_16_600">
            <div className="ObjectCard__indicator">
              <BuildYearIcon width={14} /> <p>{year}</p>
            </div>
            <div className="ObjectCard__indicator">
              <SquareIcon width={14} height={14} /> <p>{square}</p>
            </div>
            <div className="ObjectCard__indicator">
              <RoomsIcon width={14} /> <p>{rooms}</p>
            </div>
          </div>
          <div className="ObjectCard__pricing">
            <p className="Font_14_16_600 Color_blue_primary">{price}</p>
            <Checkbox onChange={onChange} />
          </div>
        </div>
      </div>
    </StyledObjectSmallCard>
  );
};

const StyledObjectSmallCard = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  transition: 0.15s ease;
  :hover {
    box-shadow: 0 0 0 2px inset #c7d2e9;
    cursor: pointer;
  }
  .ObjectCard {
    display: flex;
  }

  .ObjectCard__image {
    border-radius: 10px;
    min-width: 120px;
    object-fit: cover;
  }

  .ObjectCard__infoContainer {
    margin-left: 16px;
  }

  .ObjectCard__indicatorsList {
    display: flex;
    align-items: center;
    margin-top: 5px;
    div:not(:first-child) {
      margin-left: 10px;
    }
  }

  .ObjectCard__indicator {
    display: flex;
    align-items: center;
    margin-top: 5px;

    p {
      margin-left: 6px;
    }
  }

  .ObjectCard__pricing {
    display: flex;
    justify-content: space-between;
    margin-top: 6px;
    padding-top: 6px;
    border-top: 1px solid #e1edfd;
  }
`;

export { ObjectSmallCard };
