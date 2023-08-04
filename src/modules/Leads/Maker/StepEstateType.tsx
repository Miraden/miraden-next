import styled from 'styled-components'
import { Button } from '@/components/ui'
import {
  findLeadEstateTypesSubLevelByRoot,
  LeadEstateTypes,
} from '@/modules/Leads/LeadTypesDefintion'
import { useCallback, useEffect, useState } from 'react'
import StepCommonLayout from "@/modules/Leads/Maker/StepCommonLayout";

interface Props {
  onChanged?: (options: EstateTypeResult) => void
  locale?: string
}

export interface EstateTypeResult {
  root: string
  subLevel: string
}

const StepEstateType = (props: Props): JSX.Element => {
  const [selectedRootLevel, setRootLevel] = useState<string>('')
  const [selectedSubType, setSelectedSubtype] = useState<string>('')
  const [showSubtypes, setShowSubtypes] = useState<boolean>(false)

  useEffect(() => {
    setShowSubtypes(selectedRootLevel.length > 0)
  }, [selectedRootLevel.length])

  const onRootLevelChanged = useCallback(
    (e: any, label: string) => {
      setRootLevel(label)
      setSelectedSubtype('')
      if (props.onChanged) props.onChanged({ root: label, subLevel: '' })
    },
    [props]
  )

  const onSubLevelsChanged = useCallback(
    (e: any, label: string) => {
      setSelectedSubtype(label)
      if (props.onChanged)
        props.onChanged({
          root: selectedRootLevel,
          subLevel: label,
        })
    },
    [props, selectedRootLevel]
  )

  return (
    <StyledRegStep1>
      <StepCommonLayout>
        <RenderRootLevelTypes
          selectedKey={selectedRootLevel}
          className={'EstateTypes__topLevel EstateTypes__list'}
          locale={'ru'}
          onChanged={onRootLevelChanged}
        />
        {showSubtypes && (
          <RenderSubLevelsByRoot
            locale={'ru'}
            selectedKey={selectedSubType}
            className={'EstateTypes__subLevel'}
            selectedRoot={selectedRootLevel}
            onChanged={onSubLevelsChanged}
          />
        )}
      </StepCommonLayout>
    </StyledRegStep1>
  )
}

interface RootLevelsOptions {
  className?: string
  locale: string
  selectedKey: string
  onChanged?: Function
}

const RenderRootLevelTypes = (props: RootLevelsOptions): JSX.Element => {
  const onClick = useCallback(
    (e: any, label: string) => {
      if (props.onChanged) props.onChanged(e, label)
    },
    [props]
  )

  return (
    <div className={props.className}>
      {LeadEstateTypes.map((i, data) => (
        <Button
          onClick={e => onClick(e, i.label)}
          active={props.selectedKey === i.label}
          request
          key={i.label}
        >
          {i.name.ru}
        </Button>
      ))}
    </div>
  )
}

interface SubLevelsOptions {
  className?: string
  locale: string
  selectedKey: string
  selectedRoot: string
  onChanged?: Function
}

const RenderSubLevelsByRoot = (props: SubLevelsOptions): JSX.Element => {
  const subLevels = findLeadEstateTypesSubLevelByRoot(props.selectedRoot)

  const onClick = useCallback(
    (e: any, label: string) => {
      if (props.onChanged) props.onChanged(e, label)
    },
    [props]
  )

  return (
    <div className={props.className}>
      <h5 className={'Font_headline_5'}>Подтип</h5>
      <div className={'EstateTypes__list'}>
        {subLevels.map((i, data) => (
          <Button
            active={props.selectedKey === i.label}
            request
            key={i.label}
            onClick={e => onClick(e, i.label)}
          >
            {i.name.ru}
          </Button>
        ))}
      </div>
    </div>
  )
}

const StyledRegStep1 = styled.section`
  .Button_request {
    padding: 10px 20px;
  }

  .EstateTypes__list {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .EstateTypes__subLevel {
    .EstateTypes__list {
      margin-top: 15px;
    }
  }
`

export default StepEstateType
