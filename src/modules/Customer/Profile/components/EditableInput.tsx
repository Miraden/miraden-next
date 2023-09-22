import { Button } from '@/components/ui'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { CrossIcon } from '@/icons'
import { CheckLineIcon } from '@/icons/CheckLineIcon'

interface Props {
  baseClass: string
  value: string
  OnCancel?: Function
  OnSave?: Function
  savePending?: boolean
}

const EditableInput = (props: Props): JSX.Element => {
  const [Value, setValue] = useState<string>(
    props.value === 'null' ? '' : props.value
  )

  const onCancel = useCallback(() => {
    if (props.OnCancel) props.OnCancel()
  }, [props])

  const onSave = useCallback(() => {
    if (props.OnSave) props.OnSave()
  }, [props])

  return (
    <StyledComponent
      className={props.baseClass + '__editableGroup'}
      baseClass={props.baseClass}
    >
      <div className={props.baseClass + '__ButtonActions'}>
        <Button
          tertiary
          compact
          onClick={onSave}
          className={props.baseClass + '--buttonSave'}
          leftIcon={<CheckLineIcon />}
          disabled={props.savePending}
        />
        <Button
          tertiary
          compact
          onClick={onCancel}
          className={props.baseClass + '--buttonCancel'}
          leftIcon={<CrossIcon />}
        />
      </div>
    </StyledComponent>
  )
}

const StyledComponent = styled.div<{ baseClass: string }>`
  display: flex;
  align-items: center;

  .${({ baseClass }) => baseClass}--buttonSave {
    height: 45px;
    box-sizing: content-box;
    padding-top: 0;
    padding-bottom: 0;
  }

  .${({ baseClass }) => baseClass}__ButtonActions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .${({ baseClass }) => baseClass}--buttonSave {
    svg {
      //animation: rotate 1s linear infinite;
    }

    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.success};
    }
  }

  .${({ baseClass }) => baseClass}--buttonCancel {
    .Button__iconContainer svg path {
      fill: ${({ theme }) => theme.colors.error};
    }
  }

  .${({ baseClass }) => baseClass}__editableValue {
    height: 100%;
  }

  input {
    height: 45px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: none;
    outline: none;
    background: transparent;

    &:hover,
    &:focus-visible {
      border: none;
      outline: none;
      background: transparent;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default EditableInput
