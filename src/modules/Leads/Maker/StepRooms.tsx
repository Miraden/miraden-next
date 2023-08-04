import styled from 'styled-components'
import { Button } from '@/components/ui'
import { useCallback, useState } from 'react'
import StepCommonLayout from '@/modules/Leads/Maker/StepCommonLayout'
import ButtonFoldGroup, {
  ButtonFoldsFormatOptions,
} from '@/components/ui/Buttons/ButtonFoldGroup'

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

  const rooms: number[] = generateRooms(1, 10, 1)
  const beds: number[] = generateRooms(1, 10, 1)
  const baths: number[] = generateRooms(1, 10, 1)

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
      <StepCommonLayout>
        <div className="RoomsTotal">
          <ButtonFoldGroup
            className="RoomsList"
            alwaysVisible={5}
            intl={{
              more: `Еще ${ButtonFoldsFormatOptions.Count}`,
              less: 'Свернуть',
            }}
          >
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
          </ButtonFoldGroup>
        </div>

        <div className="RoomsBeds">
          <h5 className="Font_headline_5 RoomsTitle">Спальня</h5>
          <ButtonFoldGroup
            className="RoomsList"
            alwaysVisible={5}
            intl={{
              more: `Еще ${ButtonFoldsFormatOptions.Count}`,
              less: 'Свернуть',
            }}
          >
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
          </ButtonFoldGroup>
        </div>

        <div className="RoomsBaths">
          <h5 className="Font_headline_5 RoomsTitle">Санузел</h5>
          <ButtonFoldGroup
            className="RoomsList"
            alwaysVisible={5}
            intl={{
              more: `Еще ${ButtonFoldsFormatOptions.Count}`,
              less: 'Свернуть',
            }}
          >
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
          </ButtonFoldGroup>
        </div>
      </StepCommonLayout>
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
