import { FC, MouseEventHandler } from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { ArrowsIcon } from '@/icons/ArrowsIcon'
import { Button } from '@/components/ui/Button'

enum Types {
  Dotted = 'dotted',
  Pages = 'pages',
}

type Props = {
  className?: string
  type?: Types
  total: number
  current?: number
  onClick?: MouseEventHandler<HTMLDivElement>
}

const Pagination: FC<Props> = (props: Props) => {
  const renderCurrent = (id: number): JSX.Element => {
    return (
      <span
        className={cn('Pagination__link Pagination__button active')}
        key={id}
      >
        {props.type === Types.Pages && id}
      </span>
    )
  }

  const renderAsLink = (id: number): JSX.Element => {
    return (
      <Button
        secondary
        attr={{ 'data-page': id }}
        className={'Pagination__link Pagination__button'}
        key={id}
      >
        {props.type === Types.Pages && id}
      </Button>
    )
  }

  return (
    <StyledPagination
      className={cn('Pagination', props.className, 'Pagination--' + props.type)}
      onClick={props.onClick}
    >
      {props.type === Types.Pages && (
        <Button
          secondary
          href={'#'}
          disabled={props.total <= 1}
          className={cn('Pagination__prev Pagination__button')}
        >
          <ArrowsIcon left />
        </Button>
      )}

      <div className={'Pagination__nav'}>
        {[...Array(props.total)].map((x, i) =>
          i + 1 == props.current ? renderCurrent(i + 1) : renderAsLink(i + 1)
        )}
      </div>

      {props.type === Types.Pages && (
        <Button
          secondary
          href={'#'}
          disabled={props.total <= 1}
          className={cn('Pagination__prev Pagination__button')}
        >
          <ArrowsIcon right />
        </Button>
      )}
    </StyledPagination>
  )
}

const StyledPagination = styled.div`
  display: flex;
  gap: 10px;

  .Pagination__nav {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  &.Pagination--pages {
    .Pagination__nav {
      gap: 10px;
    }

    .Pagination__button {
      width: 30px;
      height: 30px;
      background: transparent;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;

      &:hover {
        background: ${({ theme }) => theme.colors.button.secondary.bg.hover};
      }

      &:active,
      &.active {
        background: ${({ theme }) => theme.colors.main};
        color: white;

        svg path {
          fill: white;
        }
      }

      &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.stroke.focused};
        background: ${({ theme }) => theme.colors.fields.stroke};
      }
    }
  }

  &.Pagination--dotted {
    .Pagination__nav {
      gap: 15px;
    }

    .Pagination__button {
      width: 8px;
      height: 8px;
      padding: 0;
      border-radius: 100%;
      background: ${({ theme }) => theme.colors.background.disabled};

      &:hover {
        background: ${({ theme }) => theme.colors.main};
      }

      &:active,
      &.active {
        background: ${({ theme }) => theme.colors.main};
      }

      &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.stroke.focused};
        background: ${({ theme }) => theme.colors.fields.stroke};
      }
    }
  }
`

export { Pagination, Types }
