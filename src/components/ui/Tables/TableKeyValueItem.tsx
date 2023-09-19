import React from 'react'
import { useTableKeyValueContext } from '@/components/ui/Tables/TableKeyValue'
import styled from 'styled-components'
import cn from 'classnames'

interface Props {
  className?: string
  Key: React.ReactNode
  Value: React.ReactNode
}

const TableKeyValueItem = (props: Props): JSX.Element => {
  const context = useTableKeyValueContext()

  return (
    <StyledTable
      baseClass={context.baseClass}
      className={cn(context.baseClass + '-item', props.className)}
    >
      <div className={context.baseClass + '-item-key'}>{props.Key}</div>
      <div className={context.baseClass + '-item-value'}>{props.Value}</div>
    </StyledTable>
  )
}

const StyledTable = styled.div<{ baseClass: string }>`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.colors.stroke.divider};
  gap: 30px;

  &:last-of-type {
    border-bottom: none;
  }

  // Item Key
  .${({ baseClass }) => baseClass}-item-key {
    width: 250px;
    display: flex;
    padding: 20px 0 20px 20px;
    align-items: center;
    gap: 15px;
    color: ${({ theme }) => theme.colors.grey.textGrey};

    svg path {
      fill: ${({ theme }) => theme.colors.grey.textGrey};
    }
  }

  // Item Value
  .${({ baseClass }) => baseClass}-item-value {
    padding: 20px 0 20px 20px;
    flex-grow: 1;
    position: relative;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile.max}px) {
    gap: 0;

    flex-direction: column;
    .${({ baseClass }) => baseClass}-item-key {
      width: 100%;
      padding: 17px 20px 4px;
      font-size: 14px;
      line-height: 140%;
      font-weight: 400;
      gap: 8px;
    }

    .${({ baseClass }) => baseClass}-item-value {
      padding: 0 20px 16px 47px;
    }
  }
`

export default TableKeyValueItem
