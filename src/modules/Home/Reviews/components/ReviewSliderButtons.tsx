import { SliderButton } from '@/icons'
import { SliderButtonDisabled } from '@/icons/SliderButtonDisabled'
import styled from 'styled-components'

interface Props {
  className?: string
  currentSlide: number
  maxSlide: number
  handleClickPrevButton: () => void | undefined
  handleClickNextButton: () => void | undefined
}

const ReviewButtons = ({
  className,
  currentSlide,
  maxSlide,
  handleClickPrevButton,
  handleClickNextButton,
}: Props) => {
  return (
    <StyledReviewButtons className={className}>
      <button onClick={handleClickPrevButton}>
        {currentSlide == 0 ? (
          <SliderButtonDisabled />
        ) : (
          <SliderButton className="ActiveButton__prev" />
        )}
      </button>
      <button onClick={handleClickNextButton}>
        {currentSlide == maxSlide ? (
          <SliderButtonDisabled className="DisabledButton" />
        ) : (
          <SliderButton />
        )}
      </button>
    </StyledReviewButtons>
  )
}

const StyledReviewButtons = styled.div`
  .DisabledButton {
    transform: rotate(180deg);
  }

  .ActiveButton__prev {
    transform: rotate(180deg);
  }
`

export { ReviewButtons }
