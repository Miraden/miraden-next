import React, { createContext, PropsWithChildren, useContext } from 'react'
import styled from 'styled-components'
import cn from 'classnames'

declare namespace Tables {
  interface KeyValue {
    baseClass: string
  }
}

const Default: Tables.KeyValue = {
  baseClass: 'table',
}

interface Props {
  className?: string
}

const TableKeyValueContext = createContext<Tables.KeyValue>(Default)

const TableKeyValue = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <TableKeyValueContext.Provider value={Default}>
      <StyledTable className={cn(Default.baseClass, props.className)}>
        {props.children}
      </StyledTable>
    </TableKeyValueContext.Provider>
  )
}

export function useTableKeyValueContext() {
  return useContext(TableKeyValueContext)
}

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile.max}px) {
    flex-direction: column;
  }
`

export default TableKeyValue
