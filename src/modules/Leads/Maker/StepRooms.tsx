import styled from 'styled-components'
import { Button } from '@/components/ui'
import { useCallback, useState } from 'react'

interface Props {
  className?: string
  onChanged: (select: StepRoomsResult) => void
}

export interface StepRoomsResult {
  rooms: number
  beds: number
  baths: number
}

const StepRooms = (props: Props): JSX.Element => {
  const [selectedRooms, setSelectedRooms] = useState<number>(0)
  const [selectedBeds, setSelectedBeds] = useState<number>(0)
  const [selectedBaths, setSelectedBaths] = useState<number>(0)

  const rooms: number[] = generateRooms(1, 8, 1)
  const beds: number[] = generateRooms(1, 5, 1)
  const baths: number[] = generateRooms(1, 5, 1)

  const onRooms = useCallback(
    (option: number) => {
      setSelectedRooms(option)
      props.onChanged({
        baths: selectedBaths,
        beds: selectedBeds,
        rooms: option,
      })
    },
    [props, selectedBaths, selectedBeds]
  )

  const onBeds = useCallback(
    (option: number) => {
      setSelectedBeds(option)
      props.onChanged({
        baths: selectedBaths,
        beds: option,
        rooms: selectedRooms,
      })
    },
    [props, selectedBaths, selectedRooms]
  )

  const onBath = useCallback(
    (option: number) => {
      setSelectedBaths(option)
      props.onChanged({
        baths: option,
        beds: selectedBeds,
        rooms: selectedRooms,
      })
    },
    [props, selectedBeds, selectedRooms]
  )

  return (
    <StyledRooms>
      <div className="RoomsTotal">
        <div className="RoomsList">
          {rooms.map(i => (
            <Button
              compact
              request
              key={i}
              active={selectedRooms === i}
              onClick={e => onRooms(i)}
            >
              {i}
            </Button>
          ))}
        </div>
      </div>

      <div className="RoomsBeds">
        <h5 className="Font_headline_5 RoomsTitle">Спальня</h5>
        <div className="RoomsList">
          {beds.map(i => (
            <Button
              compact
              request
              key={i}
              active={selectedBeds === i}
              onClick={e => onBeds(i)}
            >
              {i}
            </Button>
          ))}
        </div>
      </div>

      <div className="RoomsBaths">
        <h5 className="Font_headline_5 RoomsTitle">Санузел</h5>
        <div className="RoomsList">
          {baths.map(i => (
            <Button
              compact
              request
              key={i}
              active={selectedBaths === i}
              onClick={e => onBath(i)}
            >
              {i}
            </Button>
          ))}
        </div>
      </div>
    </StyledRooms>
  )
}

function generateRooms(min: number, max: number, step: number): number[] {
  let areas: number[] = []

  let i = min
  while (i <= max) {
    areas.push(i)
    i += step
  }

  return areas
}

const StyledRooms = styled.div`
  padding: 30px 40px;

  display: flex;
  flex-direction: column;
  gap: 50px;

  .RoomsTitle {
    margin-bottom: 15px;
  }

  .RoomsList {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }
`

export default StepRooms
