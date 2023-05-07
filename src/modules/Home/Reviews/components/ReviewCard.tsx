import { Sticker } from "@/components/ui";
import { VerifiedIcon } from "@/icons";
import { StarIconFilled } from "@/icons/StarIconFilled";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  className?: string;
  name: string;
  role: string;
  image: string;
  title: string;
  text: string;
}

const ReviewCard = ({ className, name, role, image, text, title }: Props) => {
  return (
    <StyledReviewCard className={className}>
      <div className="Card__head">
        <Image src={image} alt="" width={72} height={72} />
        <div className="Card__userInfo">
          <p className="Font_16_140">{name}</p>
          <p className="Font_14_140 Color_blue_primary">{role}</p>
          <div className="Card__userInfoStatus">
            <Sticker theme="black">PRO</Sticker>
            <VerifiedIcon className="VerifiedIcon" />
            <StarIconFilled
              width={14}
              hanging={14}
              className="Card__userInfoStar"
            />
            <p className="Font_14_140 Rating Color_text_grey">4.8</p>
          </div>
        </div>
      </div>
      <div className="Card__starsCount">
        <StarIconFilled width={18} hanging={18} />{" "}
        <StarIconFilled width={18} hanging={18} />{" "}
        <StarIconFilled width={18} hanging={18} />{" "}
        <StarIconFilled width={18} hanging={18} />{" "}
        <StarIconFilled width={18} hanging={18} />
      </div>
      <div className="Card__text">
        <h3 className="Font_22_120_600 sm:Font_18_120_600">{title}</h3>
        <p className="Font_16_24 sm:Font_16_24">{text}</p>
      </div>
    </StyledReviewCard>
  );
};

const StyledReviewCard = styled.div`
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 0 2px inset #e1edfd;
  border-radius: 10px;

  .Card__head {
    display: flex;
    align-items: center;
  }

  .Card__userInfo {
    margin-left: 15px;
  }

  .Card__userInfoStatus {
    display: flex;
    margin-top: 9px;
  }

  .VerifiedIcon {
    margin-left: 6px;
  }

  .Card__userInfoStar {
    margin-left: 10px;
    path {
      fill: #7786a5;
    }
  }

  .Rating {
    margin-left: 5px;
  }

  .Card__starsCount {
    display: flex;
    margin-top: 30px;

    svg:not(:first-child) {
      margin-left: 4px;
    }
  }

  .Card__text {
    margin-top: 15px;
    p {
      margin-top: 15px;
    }
  }
`;

export { ReviewCard };
