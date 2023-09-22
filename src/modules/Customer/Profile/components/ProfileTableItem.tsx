import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useTableKeyValueContext } from '@/components/ui/Tables/TableKeyValue'
import styled from 'styled-components'
import TableKeyValueItem from '@/components/ui/Tables/TableKeyValueItem'
import EditableInput from '@/modules/Customer/Profile/components/EditableInput'
import { EditIcon } from '@/icons/EditIcon'
import { Button } from '@/components/ui'
import cn from 'classnames'
import { PersonalProviderItem } from '@/modules/Customer/Profile/UserProfileDataProvider'

interface Props {
  className?: string
  active: boolean
  onValueSelect?: Function
  OnSaveReady: (value: Profile.PersistStruct) => void
  savePending?: boolean
  item?: PersonalProviderItem
  isServerResponse?: boolean
}

const ProfileTableItem = (props: Props): JSX.Element => {
  const context = useTableKeyValueContext()
  const [value, setValue] = useState<string | number>(
    props.item?.getValue() && props.item?.getValue() !== 'null'
      ? props.item?.getValue()
      : ''
  )
  const [showEditable, setShowEditable] = useState<boolean>(false)
  const [isBusy, setBusy] = useState<boolean>(false)

  const onEditClick = useCallback(() => {
    if (props.item?.getEditComponent()) setShowEditable(true)
  }, [props.item])

  const onEditCancel = useCallback(() => {
    setShowEditable(false)
  }, [])

  const onSave = useCallback(() => {
    setBusy(true)
    if (!props.item?.IsValid()) {
      setBusy(false)
      return
    }
    props.OnSaveReady({
      value: String(props.item?.getSelectedData().value),
      label: String(props.item?.getLabel()),
    })
    if (props.item?.getSelectedData().label) {
      setValue(String(props.item?.getSelectedData().label))
    }

    if (!props.item?.getSelectedData().label) {
      setValue(String(props.item?.getSelectedData().value))
    }
  }, [props])

  useEffect(() => {
    if (props.isServerResponse) {
      setShowEditable(false)
      setBusy(false)
    }
  }, [props.isServerResponse])

  return (
    <StyledTable className={cn(props.className, 'TableItem')}>
      <TableKeyValueItem
        Key={props.item?.getKey()}
        className={cn({ isActive: showEditable, isBusy: isBusy })}
        Value={
          <>
            {showEditable && (
              <div className={'EditComponent'}>
                {props.item?.getEditable()}
                <EditableInput
                  baseClass={context.baseClass}
                  value={''}
                  OnCancel={onEditCancel}
                  OnSave={onSave}
                />
              </div>
            )}
            {!showEditable && <div>{value}</div>}
            {!showEditable && (
              <div className={'EditGroup'}>
                <Button
                  onClick={onEditClick}
                  compact
                  tertiary
                  leftIcon={<EditIcon />}
                />
              </div>
            )}
          </>
        }
      />
    </StyledTable>
  )
}

const StyledTable = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.stroke.divider};

  .table-item.isBusy {
    position: relative;
    pointer-events: none;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 1);
      opacity: 0.6;
    }
  }

  &:last-of-type {
    border-bottom: none;
  }

  .EditComponent {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      height: 44px;
    }

    .DropdownInput_select {
      min-width: 200px;
    }
  }

  .table-item.isActive .table-item-value {
    padding-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile.max}px) {
    .EditGroup {
    }

    .table-item.isActive .table-item-value {
      padding-left: 20px;
    }
  }
`

export default ProfileTableItem
