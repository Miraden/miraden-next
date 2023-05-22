import { Sticker } from "@/components/ui";
import { VerifiedIcon } from "@/icons";
import { PerformerIcon } from "@/icons/PerformerIcon";
import Image from "next/image";
import styled from "styled-components";

interface SingleChatProps {
  className?: string;
  image?: any;
  name?: string;
  isPro?: boolean;
  message?: string;
  isVerified?: boolean;
  isPerformer?: boolean;
  unreadMessages?: number;

  time?: string;
}

const SingleChat = ({
  className,
  image,
  name,
  isPerformer,
  isPro,
  message,
  isVerified,
  unreadMessages,

  time,
}: SingleChatProps) => {
  return (
    <StyledSingleChat className={className}>
      <div className="SingleChatContainer">
        <div className="SingleChat">
          <div className="SingleChat__content">
            <div className="SingleChat__contentMain">
              <div className="SingleChat__imageContainer">
                <Image src={image} alt="" width={60} height={60} />

                {isPerformer && (
                  <div className="SingleChat__performerIcon">
                    <PerformerIcon />
                  </div>
                )}
              </div>
              <div className="Status">
                <div className="FullStatus">
                  <div className="FullStatus__name">
                    <p className="Font_16_140">{name}</p>
                    <div className="Application__infoStatus">
                      {isVerified && (
                        <VerifiedIcon className="SingleChat__verifiedIcon" />
                      )}
                      {isPro && (
                        <Sticker theme="black" className="SingleChat__sticker">
                          pro
                        </Sticker>
                      )}
                    </div>
                  </div>
                </div>
                <p className="Font_16_150 Color_text_grey Message">{message}</p>
              </div>
            </div>

            <div className="SingleChat__info">
              <div className="SingleChat__statusInfo">
                <p className="Color_text_grey Font_12_16">{time}</p>
                {unreadMessages === 0 ? null : (
                  <div className="SingleChat__unread Font_14_16_600">
                    {unreadMessages}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSingleChat>
  );
};

const StyledSingleChat = styled.div`
  .SingleChatContainer {
    background: #fff;
    padding: 10px 30px;

    :hover {
      cursor: pointer;
      background: #f1f7ff;
    }
  }

  .SingleChat {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .SingleChat__content {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .SingleChat__contentMain {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .SingleChat__imageContainer {
    position: relative;
    border-radius: 50%;
    flex-shrink: 0;

    img {
      border-radius: 50%;
    }
  }

  .SingleChat__onlineDot {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 8px;
    height: 8px;
    background: #0ab258;
    border-radius: 50%;
  }

  .SingleChat__performerIcon {
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

  .SingleChat__info {
    margin-left: 15px;
  }

  .SingleChat__statusInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      align-items: center;
    }
  }

  .Message {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 400px;
  }

  .SingleChat__sticker {
    margin-right: 5px;
  }

  .SingleChat__verifiedIcon {
    margin-right: 10px;
  }

  .SingleChat__rating {
    p {
      margin-left: 5px;
    }
  }

  .SingleChat__ratingIcon {
    path {
      fill: #7786a5;
    }
  }

  .SingleChat__inviteButton {
    padding: 10px 24px;
  }

  .SingleChat__actions {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    align-self: flex-start;
    position: relative;
  }

  .SingleChat__button {
    padding: 2px !important;
    border-radius: 50%;

    :hover {
      background: #f1f7ff;
    }
  }
  .SingleChat__buttonIcon {
    transform: rotate(90deg);
  }

  .SingleChat__unread {
    margin-top: 2px;
    padding: 4px;
    width: 24px;
    display: flex;
    align-self: flex-end;
    justify-content: center;
    text-align: center;
    color: #fff;
    background: #4e6af3;
    border-radius: 50%;
  }

  .Status {
    margin-left: 12px;
  }

  .FullStatus {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .FullStatus__name {
    display: flex;
  }

  .Application__infoStatus {
    display: flex;
    margin-left: 8px;
  }

  .ContactInfo__rating {
    display: flex;
  }

  .ApplicationInfo {
    display: flex;
  }

  @media (max-width: 576px) {
    padding: 10px;
    .SingleChat__imageContainer {
      min-width: 72px;
    }

    .SingleChat__status {
      max-width: 215px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

export { SingleChat };
