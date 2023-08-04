import React from 'react'
import styled from 'styled-components'
import cn from 'classnames'

interface Props {
  className?: string
}

const StepBlankLayout = (
  props: React.PropsWithChildren<Props>
): JSX.Element => {
  return (
    <StyledLayout className={cn(props.className, 'StepBlankLayout')}>
      {props.children}
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
`

export default StepBlankLayout
