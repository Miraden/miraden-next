import cn from 'classnames'
import Link from 'next/link'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface LinkProps {
  href: string
  children: ReactNode
  disabled?: boolean
  underlined?: boolean
  className?: string
}

const RegularLink = ({
  href,
  children,
  disabled,
  underlined,
  className,
}: LinkProps) => {
  return (
    <StyledLink className={className}>
      <Link
        href={href}
        className={cn(
          'Link',
          { Disabled: disabled },
          { Underlined: underlined }
        )}
      >
        <span className="">{children}</span>
      </Link>
    </StyledLink>
  )
}

const StyledLink = styled.div`
  .Underlined {
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .Disabled {
    color: #b8c6e3 !important;
    pointer-events: none;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .Link {
    color: ${({ theme }) => theme.colors.blue['default']};
    padding: 2px;
    border-radius: 5px;
    span {
    }
    :focus {
      outline: 2px solid ${({ theme }) => theme.colors.stroke['purple']};
    }
  }

  .Link:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`

export { RegularLink as Link }
