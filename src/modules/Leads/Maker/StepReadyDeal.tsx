import { Button } from "@/components/ui"
import { LeadReadyDealEnum, LeadReadyDeals } from "../LeadTypesDefintion"
import styled from "styled-components"
import { theme } from "../../../../styles/tokens"
import { useCallback, useState } from "react"
import StepCommonLayout from "@/modules/Leads/Maker/StepCommonLayout";

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

interface Props {
  className?: string
  onChanged?: (select: string) => void
}

const StepReadyDeal = (props: Props): JSX.Element => {
  const [selected, setSelected] = useState<string>('')

  const onClick = useCallback(
    (e: any, label: LeadReadyDealEnum) => {
      setSelected(String(label))
      if (props.onChanged) props.onChanged(label)
    },
    [props]
  )

  return (
    <StyledStep>
      <StepCommonLayout className={"ButtonsList"}>
        {LeadReadyDeals.map(i => {
          return (
            <Button
              request
              compact
              active={selected === i.label}
              onClick={e => onClick(e, i.label)}
              key={i.label}
            >
              {i.name.ru}
            </Button>
          )
        })}
      </StepCommonLayout>
    </StyledStep>
  )
}

const StyledStep = styled.div`
  .ButtonsList {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: ${tablet}) {
    .ButtonsList {
      gap: 12px;
    }
  }

  @media (max-width: ${mobile}) {
    .ButtonsList {
      display: flex;
      flex-direction: column;

      button {
        width: 100%;
      }
    }
  }
`

export default StepReadyDeal
