import {
  LeadPurposes,
  LeadPurposesEnum,
} from '@/modules/Leads/LeadTypesDefintion'
import { Button } from '@/components/ui'
import styled from 'styled-components'
import { theme } from '../../../../styles/tokens'
import { useCallback, useState } from 'react'
import StepCommonLayout from "@/modules/Leads/Maker/StepCommonLayout";

interface Props {
  className?: string
  onChanged: (select: LeadPurposesEnum) => void
}

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

const StepPurpose = (props: Props) => {
  const [selected, setSelected] = useState<string>('')

  const onClick = useCallback(
    (e: any, label: LeadPurposesEnum) => {
      setSelected(String(label))
      if (props.onChanged) props.onChanged(label)
    },
    [props]
  )

  return (
    <StyledPurpose>
      <StepCommonLayout className={"PurposesList"}>
        {LeadPurposes.map(i => (
          <Button
            request
            compact
            key={i.label}
            onClick={e => onClick(e, i.label)}
            active={(selected as LeadPurposesEnum) === i.label}
            className={"WideButton"}
          >
            {i.name.ru}
          </Button>
        ))}
      </StepCommonLayout>
    </StyledPurpose>
  )
}

const StyledPurpose = styled.div`
  .PurposesList {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: center;

    @media (max-width: ${tablet}) {
      gap: 12px;
    }

    @media (max-width: ${mobile}) {
      display: flex;
      flex-direction: column;

      button {
        width: 100%;
      }
    }
  }

`

export default StepPurpose
