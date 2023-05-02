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
      <div className="Card__userInfo">
        <Image src={image} alt="" width={72} height={72} />
        <div>
          <p className="Font_16_140">{name}</p>
          <p className="Font_14_140 Color_blue_primary">{role}</p>
        </div>
      </div>
      <div>
        <p className="Font_22_120_600">{title}</p>
        <p className="Font_16_24">{text}</p>
      </div>
    </StyledReviewCard>
  );
};

const StyledReviewCard = styled.div`
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 0 2px inset #e1edfd;
  border-radius: 10px;

  .Card__userInfo {
    display: flex;
    align-items: center;
  }
`;

export { ReviewCard };
