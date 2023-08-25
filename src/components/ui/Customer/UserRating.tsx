import styled from 'styled-components'
import cn from 'classnames'
import { StarIconFilled } from '@/icons/StarIconFilled'
import React from 'react'

interface Props {
  rating: number
  className?: string
}

const UserRating = (props: Props): JSX.Element => {
  return (
    <Styled className={cn('CustomerRating', props.className)}>
      <StarIconFilled width={14} height={14} className="CustomerRating--Icon" />
      <p className="CustomerRating--value Font_body_alt">{props.rating}</p>
    </Styled>
  )
}

const Styled = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .CustomerRating {
    &--Icon {
      path {
        fill: ${({ theme }) => theme.colors.text.grey};
      }
    }
  }
`

export default UserRating
