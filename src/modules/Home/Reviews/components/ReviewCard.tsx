import { Sticker } from '@/components/ui'
import { VerifiedIcon } from '@/icons'
import { StarIconFilled } from '@/icons/StarIconFilled'
import styled from 'styled-components'
import Image from 'next/image'
import { theme } from '../../../../../styles/tokens'

interface Props {
  className?: string
  name: string
  role: string
  image: string
  title: string
  text: string
  rating?: string
  isVerified: boolean
  isPro: boolean
}

const ReviewCard = ({
  className,
  name,
  role,
  image,
  text,
  title,
  rating,
  isVerified,
  isPro,
}: Props) => {
  return (
    <StyledReviewCard className={className}>
      <div className="Card__head">
        <Image src={image} alt="" width={72} height={72} />
        <div className="Card__userInfo">
          <p className="Font_16_140">{name}</p>
          <p className="Font_14_140 Color_blue_primary">{role}</p>
          <div className="Card__userInfoStatus">
            {isPro && <Sticker theme="black">PRO</Sticker>}
            {isVerified && <VerifiedIcon className="VerifiedIcon" />}
            {rating && (
              <div className={'Card__userRating'}>
                <StarIconFilled
                  width={14}
                  hanging={14}
                  className="Card__userInfoStar"
                />
                <p className="Font_14_140 Rating Color_text_grey">{rating}</p>
              </div>
            )}
            {!rating && (
              <p className={'Font_14_140 Rating Color_text_grey'}>
                Без рейтинга
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="Card__starsCount">
        <StarIconFilled width={18} hanging={18} />{' '}
        <StarIconFilled width={18} hanging={18} />{' '}
        <StarIconFilled width={18} hanging={18} />{' '}
        <StarIconFilled width={18} hanging={18} />{' '}
        <StarIconFilled width={18} hanging={18} />
      </div>
      <div className="Card__text">
        <h3 className="Font_22_120_600 sm:Font_18_120_600">{title}</h3>
        <p className="Font_16_24 sm:Font_16_24 Color_grey_dark" dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
    </StyledReviewCard>
  )
}

const StyledReviewCard = styled.div`
  background: #fff;
  padding: 20px;
  outline: 2px solid ${theme.colors.stroke.divider};
  border-radius: 10px;
  height: 100%;

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
    gap: 5px;
  }

  .Card__userRating {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .VerifiedIcon {
    margin-left: 6px;
  }

  .Card__userInfoStar {
    path {
      fill: #7786a5;
    }
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
`

export { ReviewCard }
