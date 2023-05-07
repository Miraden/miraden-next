import { Button, Sticker } from "@/components/ui";
import {
  BathsIcon,
  BuildYearIcon,
  PointIconFooter,
  SleepsIcon,
  SquareIcon,
} from "@/icons";
import styled from "styled-components";

interface Props {
  className?: string;
  title: string;
  location: string;
  year: number;
  square: number;
  sleeps: number;
  baths: number;
  price: string;
  application: any;
}

const ApplicationsCard = ({
  className,
  title,
  location,
  year,
  sleeps,
  square,
  baths,
  price,
  application,
}: Props) => {
  return (
    <StyledApplicationsCard className={className}>
      <div className="Card__head">
        <div className="Card__headContent">
          <Sticker theme="black">true</Sticker>
          <span className="Card__headDivider Color_text_grey">От</span>
          <span className="Color_blue_primary">Агентство</span>
        </div>

        <p className="Color_text_disabled">3 часа назад</p>
      </div>
      <p className="Card__title Font_18_120">{title}</p>
      <div className="Card__location">
        <PointIconFooter />
        <p className="Color_text_grey">{location}</p>
      </div>

      <div className="Card__objectInfo Font_16_140">
        <div>
          <BuildYearIcon />
          <span>{year} г</span>
        </div>
        <div>
          <SquareIcon />
          <span>{square} м²</span>
        </div>
        <div>
          <SleepsIcon />
          <span>{sleeps}</span>
        </div>
        <div>
          <BathsIcon />
          <span>{baths}</span>
        </div>
      </div>
      <div className="Card__price">
        <p className="Color_blue_primary Font_16_120">{price} €</p>
        <Button>Предложить</Button>
      </div>
    </StyledApplicationsCard>
  );
};

const StyledApplicationsCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;

  .Card__head {
    justify-content: space-between;
  }

  .Card__head,
  .Card__headContent {
    display: flex;
    align-items: center;
  }

  .Card__headDivider {
    margin-left: 10px;
    margin-right: 5px;
  }

  .Card__title {
    margin-top: 15px;
  }

  .Card__location {
    display: flex;
    align-items: center;
    margin-top: 10px;
    p {
      margin-left: 5px;
    }

    svg {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }
  }

  .Card__objectInfo {
    margin-top: 22px;
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      span {
        margin-left: 8px;
      }
    }
    div:not(:first-child) {
      margin-left: 20px;
    }
  }

  .Card__price {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 10px;
    padding-top: 9px;
    border-top: 1px solid #e1edfd;

    button {
      padding: 10px 20px;
    }
  }
`;

export { ApplicationsCard };
