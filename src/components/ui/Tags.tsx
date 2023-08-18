import React, { ReactNode } from 'react'
import styled from 'styled-components'
import cn from 'classnames'

const baseClass = 'Tags'

interface TagsProps {
  className?: string
  children?: ReactNode
}

interface TagProps {
  className?: string
  label?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const Tags = (props: TagsProps) => {
  return (
    <StyledTag className={cn(baseClass, props.className)}>
      {props.children}
    </StyledTag>
  )
}

const TagItem = (props: TagProps) => {
  const className = baseClass + 'Item'
  return (
    <>
      <div className={cn(className, props.className)}>
        {props.leftIcon && (
          <div className="[ Button__iconContainer Button__leftIconContainer ]">
            {props.leftIcon}
          </div>
        )}
        <span>{props.label}</span>
        {props.rightIcon && (
          <div className="[ Button__iconContainer Button__rightIconContainer ]">
            {props.rightIcon}
          </div>
        )}
      </div>
    </>
  )
}

const StyledTag = styled.div`
  width: fit-content;
  background: ${({ theme }) => theme.colors.background.lightBlue};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.colors.text.black};
  padding: 7px 4px;
  position: relative;
  display: flex;
  height: 30px;

  .TagsItem {
    display: flex;
    align-items: center;
    position: relative;
    line-height: 1;
    padding: 0 5px;
    white-space: nowrap;
    border-right: 1px solid ${({ theme }) => theme.colors.stroke.lightGrey};

    .Button__leftIconContainer {
      svg {
        width: 18px;
        height: 18px;
      }
    }

    .Button__rightIconContainer {
      margin-left: 5px;

      svg {
        width: 18px;
        height: 18px;
      }
    }

    path {
      fill: black;
    }

    &:last-child {
      border-right: none;

      &:after {
        display: none;
      }

      margin-right: 0;
    }
  }
`

export { Tags, TagItem }
