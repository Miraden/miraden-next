import { SetStateAction, useCallback, useState } from 'react'
import {Button, RequestButton} from '@/components/ui'
import { TooltipComponent } from '@/components/ui/Tooltip/MyComponent'
import { InfoIconGrey } from '@/icons/InfoIconGrey'
import styled from 'styled-components'

const StepEstateTypeRent = (): JSX.Element => {
  const [selected, setSelected] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [startSquare, setStartSquare] = useState<number | null>(null)
  const [selectedRange, setSelectedRange] = useState<number[]>([])
  const [maxVisibleSquare, setMaxVisibleSquare] = useState(21)

  const handleSelect = useCallback(() => {
    setSelected(!selected)
    setSelectedRange([])
  }, [selected])

  const handleSquareClick = (squareIndex: number) => {
    setSelected(false)

    if (startSquare === null) {
      // start new range
      setStartSquare(squareIndex)
      setSelectedRange([squareIndex])
    } else {
      // continue existing range
      const endSquare = squareIndex
      const rangeStart = Math.min(startSquare, endSquare)
      const rangeEnd = Math.max(startSquare, endSquare)
      const selectedRange: SetStateAction<number[]> = []
      for (let i = rangeStart; i <= rangeEnd; i++) {
        selectedRange.push(i)
      }

      if (selectedRange.every(m => selectedRange.includes(m))) {
        // update existing range
        setSelectedRange(selectedRange)
      } else {
        // create new range
        setSelectedRange(selectedRange)
        setStartSquare(null)
      }
    }

    if (startSquare !== null && squareIndex !== startSquare) {
      const rangeStart = Math.min(startSquare, squareIndex)
      const rangeEnd = Math.max(startSquare, squareIndex)
      const newRange = []
      for (let i = rangeStart; i <= rangeEnd; i++) {
        newRange.push(i)
      }

      if (
        selectedRange.length > 0 &&
        newRange.every(m => selectedRange.includes(m))
      ) {
        // update existing range
        setSelectedRange(newRange)
      } else {
        // add new range to existing range
        setSelectedRange([...selectedRange, ...newRange])
      }
    }
  }

  const handleShowMore = useCallback(() => {
    setShowMore(true)
    setMaxVisibleSquare(64)
  }, [])

  const handleShowLess = useCallback(() => {
    setShowMore(false)
    setMaxVisibleSquare(18)
  }, [])

  const squares = []
  for (let square = 10; square <= 800; square += 10) {
    squares.push(square)
  }
  const [selectedLiving, setSelectedLiving] = useState(false)
  const [startLivingSquare, setStartLivingSquare] = useState<number | null>(
    null
  )
  const [selectedLivingRage, setSelectedLivingRage] = useState<number[]>([])
  const [showMoreLiving, setShowMoreLiving] = useState(false)
  const [maxVisibleLivingSquare, setMaxVisibleLivingSquare] = useState(21)

  const handleSelectLiving = useCallback(() => {
    setSelectedLiving(!selectedLiving)
    setSelectedLivingRage([])
  }, [selectedLiving])

  const handleLivingSquareClick = (squareIndexLiving: number) => {
    if (startLivingSquare === null) {
      // start new range
      setSelectedLiving(false)
      setStartLivingSquare(squareIndexLiving)
      setSelectedLivingRage([squareIndexLiving])
    } else {
      // continue existing range
      const endLivingSquare = squareIndexLiving
      const livingRangeStart = Math.min(startLivingSquare, endLivingSquare)
      const livingRangeEnd = Math.max(startLivingSquare, endLivingSquare)
      const selectedLivingRage: SetStateAction<number[]> = []
      for (let i = livingRangeStart; i <= livingRangeEnd; i++) {
        selectedLivingRage.push(i)
      }

      if (selectedLivingRage.every(m => selectedLivingRage.includes(m))) {
        // update existing range
        setSelectedLivingRage(selectedLivingRage)
      } else {
        // create new range
        setSelectedLivingRage(selectedLivingRage)
        setStartLivingSquare(null)
      }
    }

    if (startLivingSquare !== null && squareIndexLiving !== startLivingSquare) {
      const livingRangeStart = Math.min(startLivingSquare, squareIndexLiving)
      const livingRangeEnd = Math.max(startLivingSquare, squareIndexLiving)
      const newRange = []
      for (let i = livingRangeStart; i <= livingRangeEnd; i++) {
        newRange.push(i)
      }

      if (
        selectedLivingRage.length > 0 &&
        newRange.every(m => selectedLivingRage.includes(m))
      ) {
        // update existing range
        setSelectedLivingRage(newRange)
      } else {
        // add new range to existing range
        setSelectedLivingRage([...selectedLivingRage, ...newRange])
      }
    }
  }

  const handleShowMoreLiving = useCallback(() => {
    setShowMoreLiving(true)
    setMaxVisibleLivingSquare(64)
  }, [])

  const handleShowLessLiving = useCallback(() => {
    setShowMoreLiving(false)
    setMaxVisibleLivingSquare(18)
  }, [])

  const livingSquares = []
  for (let livingSquare = 10; livingSquare <= 800; livingSquare += 10) {
    livingSquares.push(livingSquare)
  }

  const minIndex = Math.min(...selectedRange)
  const maxIndex = Math.max(...selectedRange)
  const minIndexLiving = Math.min(...selectedLivingRage)
  const maxIndexLiving = Math.max(...selectedLivingRage)
  return (
    <StyledRegStep1>
      <div className="Reg__selectContainer">
        <div className="Reg__squareContainer">
          <div className="Reg__square">
            <Button request onClick={handleSelect} active={selected}>
              Неважно
            </Button>
            {[...Array(64)].map((_, index) => {
              const label = index + '0 м²'
              if (index === 0) {
                return label === 'уже построена'
              }
              if (index >= maxVisibleSquare) {
                return null
              }

              const isRanged = index > minIndex && index < maxIndex
              return (
                <RequestButton
                  key={`${index}`}
                  onClick={() => handleSquareClick(index)}
                  active={isRanged ? false : selectedRange.includes(index)}
                  ranged={isRanged}
                >
                  {label}
                </RequestButton>
              )
            })}
            {maxVisibleSquare < 64 && (
              <RequestButton
                onClick={handleShowMore}
                className="ShowMoreButton Color_blue_primary"
              >
                Ещё {squares.length - maxVisibleSquare}
              </RequestButton>
            )}
            {maxVisibleSquare >= 64 && (
              <RequestButton
                onClick={handleShowLess}
                className="ShowMoreButton Color_blue_primary"
              >
                Скрыть
              </RequestButton>
            )}
          </div>
        </div>
        <div className="Reg__squareLivingContainer">
          <div className="Reg__squareHead">
            <h2 className="Font_20_120 sm:Font_18_120_500">Жилая площадь</h2>
            <TooltipComponent
              className="Tooltip"
              trigger={<InfoIconGrey />}
              text="В жилую площадь не входят кухни, санузлы, коридоры, балконы и прочие подобные помещения"
            />
          </div>
          <div className="Reg__square">
            <RequestButton onClick={handleSelectLiving} active={selectedLiving}>
              Неважно
            </RequestButton>
            {[...Array(64)].map((_, index) => {
              const label = index + '0 м²'
              if (index === 0) {
                return label === 'уже построена'
              }
              if (index >= maxVisibleLivingSquare) {
                return null
              }

              const isRanged = index > minIndexLiving && index < maxIndexLiving
              return (
                <RequestButton
                  key={`${index}`}
                  onClick={() => handleLivingSquareClick(index)}
                  active={isRanged ? false : selectedLivingRage.includes(index)}
                  ranged={isRanged}
                >
                  {label}
                </RequestButton>
              )
            })}
            {maxVisibleLivingSquare < 64 && (
              <RequestButton
                onClick={handleShowMoreLiving}
                className="ShowMoreButton Color_blue_primary"
              >
                Ещё {livingSquares.length - maxVisibleLivingSquare}
              </RequestButton>
            )}
            {maxVisibleLivingSquare >= 64 && (
              <RequestButton
                onClick={handleShowLessLiving}
                className="ShowMoreButton Color_blue_primary"
              >
                Скрыть
              </RequestButton>
            )}
          </div>
        </div>
      </div>
    </StyledRegStep1>
  )
}

const StyledRegStep1 = styled.section`
  padding: 40px 30px;
  .Reg__squareHead {
    display: flex;
    align-items: center;
    margin-bottom: 25px;

    h2 {
      margin-right: 10px;
    }
  }

  .Tooltip {
    height: 18px;

    svg {
      :hover {
        path,
        circle {
          stroke: #4e6af3;
        }
      }
    }
  }

  .Reg__square {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    button {
      padding: 10px 20px;
      width: fit-content;
    }
  }

  @media (max-width: 576px) {

  }
`;

export default StepEstateTypeRent
