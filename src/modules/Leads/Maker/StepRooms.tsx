import styled from 'styled-components'
import { Button } from '@/components/ui'

interface Props {
  className?: string
  onChanged: (select: number) => void
}

export interface StepRoomsResult {
  rooms: number
  beds: number
  baths: number
}

const StepRooms = (props: Props): JSX.Element => {
  const rooms: number[] = generateRooms(1, 8, 1)
  const beds: number[] = generateRooms(1, 5, 1)
  const baths: number[] = generateRooms(1, 5, 1)

  return (
    <StyledRooms>
      <div className="RoomsTotal">
        <div className="RoomsList">
          {rooms.map(i => (
            <Button compact request key={i}>
              {i}
            </Button>
          ))}
        </div>
      </div>

      <div className="RoomsBeds">
        <h5 className="Font_headline_5 RoomsTitle">Спальня</h5>
        <div className="RoomsList">
          {beds.map(i => (
            <Button compact request key={i}>
              {i}
            </Button>
          ))}
        </div>
      </div>

      <div className="RoomsBaths">
        <h5 className="Font_headline_5 RoomsTitle">Санузел</h5>
        <div className="RoomsList">
          {baths.map(i => (
            <Button compact request key={i}>
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
