import { Button, Sticker } from "@/components/ui";
import { Kebab24Icon, VerifiedIcon } from "@/icons";
import { InviteIcon } from "@/icons/InviteIcon";
import { PerformerIcon } from "@/icons/PerformerIcon";
import { RefusalIcon } from "@/icons/RefusalIcon";
import { StarIconFilled } from "@/icons/StarIconFilled";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { InviteModal } from "./InviteModal";

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
  isPerformer?: boolean;
  isRefusal?: boolean;
  isRecommend?: boolean;
  onClick?: any;
  submit?: boolean;
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
  isPerformer,
  isRefusal,
  isRecommend,
  onClick,
  submit,
}: SellerCardProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpenDropdown = useCallback(() => {
    setOpenDropdown(!openDropdown);
  }, [openDropdown]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = useCallback(() => {
    setIsSubmit(true);
    setIsOpenModal(false);
  }, []);

  return (
    <StyledSellerCard className={className}>
      <div className="SellerCard">
        <div className="SellerCard__content">
          <div className="SellerCard__imageContainer">
            <img src={image} alt="" width={72} height={72} />
            {isOnline && <div className="SellerCard__onlineDot" />}
            {isPerformer && (
              <div className="SellerCard__performerIcon">
                <PerformerIcon />
              </div>
            )}
            {isRefusal && (
              <div className="SellerCard__performerIcon">
                <RefusalIcon />
              </div>
            )}
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
        {isRecommend ? (
          <>
            {isSubmit ? (
              <Button
                isSubmit
                className="SellerCard__inviteButton"
                onClick={onClick}
                rightIcon={<InviteIcon />}
              >
                Приглашение отправлено
              </Button>
            ) : (
              <Button
                className="SellerCard__inviteButton"
                onClick={handleOpenModal}
                rightIcon={<InviteIcon />}
              >
                Пригласить откликнуться
              </Button>
            )}

            {isOpenModal && (
              <InviteModal
                closeModal={handleCloseModal}
                onSubmit={handleSubmit}
              />
            )}
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </StyledSellerCard>
  );
};

const StyledSellerCard = styled.div`
  border-radius: 10px;
  background: #fff;
  padding: 15px 20px;

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

  .SellerCard__performerIcon {
    position: absolute;
    left: -12px;
    bottom: -3px;
    width: 24px;
    height: 24px;
    background: #fffbf4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
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

  .SellerCard__inviteButton {
    padding: 10px 24px;

    div {
      display: none;
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

  @media (max-width: 670px) {
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

    .SellerCard__inviteButton {
      padding: 11px;
      border-radius: 50%;
      span {
        display: none;
      }

      div {
        display: flex;
        margin: 0;
      }
    }
  }
`;

const SellerDropdown = ({ agencyName }: SellerCardProps) => {
  return (
    <StyledSellerDropdown>
      <div>
        <a href="" className="Font_12_16">
          {agencyName ? agencyName : "Another link?"}
        </a>
      </div>
    </StyledSellerDropdown>
  );
};

const StyledSellerDropdown = styled.div`
  position: absolute;
  right: 0;
  top: 32px;
  background: #fff;
  padding: 10px 15px;
  box-shadow: 0 0 0 2px #e1edfd;
  border-radius: 10px;

  a:hover {
    color: #4e6af3;
  }
`;

export { SellerCard };
