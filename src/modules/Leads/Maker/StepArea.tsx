import { Button, RequestButton } from '@/components/ui'
import { InfoIconGrey } from '@/icons/InfoIconGrey'
import { TooltipComponent } from '@/components/ui/Tooltip/MyComponent'
import styled from 'styled-components'
import { useCallback, useState } from 'react'
import StepCommonLayout from "@/modules/Leads/Maker/StepCommonLayout";

interface Props {
  className?: string
  context: string
  onChanged: (options: EstateAreaResult) => void
}

export interface EstateAreaResult {
  total: number
  living: number
}

const StepArea = (props: Props): JSX.Element => {
  const [selectedTotal, setSelectedTotal] = useState<number>(0)
  const [selectedLiving, setSelectedLiving] = useState<number>(0)

  const onTotal = useCallback(
    (e: any, area: number) => {
      setSelectedTotal(area)
      if (props.onChanged)
        props.onChanged({
          living: selectedLiving,
          total: area,
        })
    },
    [props, selectedLiving]
  )

  const onLiving = useCallback(
    (e: any, area: number) => {
      setSelectedLiving(area)
      if (props.onChanged)
        props.onChanged({
          living: area,
          total: selectedTotal,
        })
    },
    [props, selectedTotal]
  )

  return (
    <RenderStep>
      <StepCommonLayout>
        {(props.context === 'apartment' || props.context === 'house') && (
          <>
            <RenderTotal selected={selectedTotal} onChanged={onTotal} />
            <RenderLiving selected={selectedLiving} onChanged={onLiving} />
          </>
        )}

        {(props.context === 'land' || props.context === 'commercial') && (
          <RenderTotal selected={selectedTotal} onChanged={onTotal} />
        )}

        {props.context === 'rent' && (
          <RenderTotal selected={selectedTotal} onChanged={onTotal} />
        )}
      </StepCommonLayout>
    </RenderStep>
  )
}

interface AreasProps {
  selected: number
  onChanged?: Function
}

const RenderTotal = (props: AreasProps): JSX.Element => {
  const areas: number[] = generateAreas(10, 200, 10)

  const onClick = useCallback(
    (e: any, area: number) => {
      if (props.onChanged) props.onChanged(e, area)
    },
    [props]
  )

  return (
    <div className={'EstateAreas EstateAreas__Total EstateAreas__Values'}>
      {areas.map(area => {
        const label = area + ' м²'

        return (
          <Button
            request
            compact
            active={props.selected === area}
            key={area}
            onClick={e => onClick(e, area)}
          >
            {label}
          </Button>
        )
      })}
    </div>
  )
}

const RenderLiving = (props: AreasProps): JSX.Element => {
  const areas: number[] = generateAreas(10, 220, 10)
  const onClick = useCallback(
    (e: any, area: number) => {
      if (props.onChanged) props.onChanged(e, area)
    },
    [props]
  )
  return (
    <div className={'EstateAreas EstateAreas__Living'}>
      <div className="EstateAreas__Title">
        <h5 className="Font_headline_5">Жилая площадь</h5>
        <TooltipComponent
          className="Tooltip"
          trigger={<InfoIconGrey />}
          text="В жилую площадь не входят кухни, санузлы, коридоры, балконы и прочие подобные помещения"
        />
      </div>

      <div className="EstateAreas__Values">
        <Button request compact>
          Неважно
        </Button>

        {areas.map(area => {
          const label = area + ' м²'

          return (
            <Button
              request
              compact
              active={props.selected === area}
              key={area}
              onClick={e => onClick(e, area)}
            >
              {label}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

function generateAreas(min: number, max: number, step: number): number[] {
  let areas: number[] = []

  let i = min
  while (i <= max) {
    areas.push(i)
    i += step
  }

  return areas
}

const RenderStep = styled.div`
  .EstateAreas {
    &__Title {
      display: flex;
      align-items: baseline;
      margin-bottom: 15px;
    }

    &__Values {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
    }
  }
`

export default StepArea
