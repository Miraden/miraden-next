import { Button, Sticker } from "@/components/ui";
import { Kebab24Icon, VerifiedIcon } from "@/icons";
import { StarIconFilled } from "@/icons/StarIconFilled";
import Image from "next/image";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface SellerCardProps {
  className?: string;
  name?: string;
  isPro?: boolean;
  rating?: number;
  isVerified?: boolean;
  image?: any;
  status?: string;
  agencyName?: string;
  isOnline?: boolean;
  unreadMessages?: number;
  href?: string;
}

const SellerCard = ({
  className,
  name,
  isPro,
  rating,
  isVerified,
  image,
  status,
  agencyName,
  isOnline,
  unreadMessages,
  href,
}: SellerCardProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpenDropdown = useCallback(() => {
    setOpenDropdown(!openDropdown);
  }, [openDropdown]);

  return (
    <StyledSellerCard className={className} href={href}>
      <div className="SellerCard__container">
        <div className="SellerCard">
          <div className="SellerCard__content">
            <div className="SellerCard__imageContainer">
              <Image src={image} alt="" width={72} height={72} />
              {isOnline && <div className="SellerCard__onlineDot" />}
            </div>
            <div className="SellerCard__info">
              <p className="Font_16_140">{name}</p>
              <p className="SellerCard__status Font_14_140 Color_blue_primary">
                {status?.includes("Агентство") ? (
                  <>
                    {status} - {agencyName}
                  </>
                ) : (
                  <>{status}</>
                )}
              </p>
              <div className="SellerCard__statusInfo">
                {isPro && (
                  <Sticker theme="black" className="SellerCard__sticker">
                    pro
                  </Sticker>
                )}
                {isVerified && (
                  <VerifiedIcon className="SellerCard__verifiedIcon" />
                )}
                {rating ? (
                  <div className="SellerCard__rating">
                    <StarIconFilled
                      width={14}
                      height={14}
                      className="SellerCard__ratingIcon"
                    />
                    <p className="Font_14_140">{rating.toFixed(1)}</p>
                  </div>
                ) : (
                  <>
                    {!isPro && (
                      <p className="Font_14_140 Color_text_disabled">
                        Без рейтинга
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="SellerCard__actions">
            <Button
              tertiary
              className="SellerCard__button"
              onClick={handleOpenDropdown}
            >
              <Kebab24Icon className="SellerCard__buttonIcon" />
            </Button>
            {openDropdown && <SellerDropdown agencyName={agencyName} />}
            {unreadMessages === 0 ? null : (
              <div className="SellerCard__unread Font_14_16_600">
                {unreadMessages}
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledSellerCard>
  );
};

const StyledSellerCard = styled.a`
  .SellerCard__container {
    border-radius: 10px;
    background: #fff;
    padding: 15px 20px;

    :hover {
      background: red;
    }
  }

  .SellerCard {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .SellerCard__content {
    display: flex;
    align-items: center;
  }

  .SellerCard__imageContainer {
    position: relative;
  }

  .SellerCard__onlineDot {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 8px;
    height: 8px;
    background: #0ab258;
    border-radius: 50%;
  }

  .SellerCard__info {
    margin-left: 15px;
  }

  .SellerCard__statusInfo {
    display: flex;
    align-items: center;
    margin-top: 8px;
    div {
      display: flex;
      align-items: center;
    }
  }

  .SellerCard__sticker {
    margin-right: 5px;
  }

  .SellerCard__verifiedIcon {
    margin-right: 10px;
  }

  .SellerCard__rating {
    p {
      margin-left: 5px;
    }
  }

  .SellerCard__ratingIcon {
    path {
      fill: #7786a5;
    }
  }

  .SellerCard__actions {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    align-self: flex-start;
    position: relative;
  }

  .SellerCard__button {
    padding: 2px !important;
    border-radius: 50%;

    :hover {
      background: #f1f7ff;
    }
  }
  .SellerCard__buttonIcon {
    transform: rotate(90deg);
  }

  .SellerCard__unread {
    margin-top: 18px;
    padding: 4px;
    width: 24px;
    text-align: center;
    color: #fff;
    background: #4e6af3;
    border-radius: 50%;
  }

  @media (max-width: 576px) {
    padding: 10px;
    .SellerCard__imageContainer {
      min-width: 72px;
    }

    .SellerCard__status {
      max-width: 215px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

const SellerDropdown = ({ agencyName }: SellerCardProps) => {
  return (
    <StyledSellerDropdown>
      <div>
        <a href="" className="Font_14_140">
          {agencyName ? agencyName : "Another link?"}
        </a>
      </div>
    </StyledSellerDropdown>
  );
};

const StyledSellerDropdown = styled.div`
  position: absolute;
  right: 0;
  top: 26px;
  background: #fff;
  padding: 10px 15px;
  box-shadow: 0 0 0 1px #e1edfd;
  border-radius: 10px;
  width: fit-content;
  :hover {
    background: #f1f7ff;
  }
  a:hover {
    color: #4e6af3;
  }
`;

export { SellerCard };
