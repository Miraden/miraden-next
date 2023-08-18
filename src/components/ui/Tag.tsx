import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  children?: ReactNode
}

const Tag = ({ className, children }: Props) => {
  return (
    <StyledTag className={className}>
      <span>{children}</span>
    </StyledTag>
  )
}

const StyledTag = styled.div`
  padding: 7px 10px;
  background: #f1f7ff;
  border-radius: 5px;
  width: fit-content;
`

export { Tag }
