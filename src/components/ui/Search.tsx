import { SearchIcon } from '@/icons'
import cn from 'classnames'
import React, {ReactNode, useCallback, useState} from 'react'
import styled from 'styled-components'
import { Button } from '@/components/ui/Button'
import { theme } from '../../../styles/tokens'
import { MenuSort } from '@/components/ui/Menu/MenuSort'

interface SearchProps {
  sort: string[]
  disabled?: boolean
  className?: string
  placeholder?: string
  filterIcon?: ReactNode
  withSort?: boolean
  onFilterClick?: any
  onSortChange?: Function
  onSearchChange?: Function
}

const mobile = theme.breakpoints.mobile.max + 'px'

const Search = ({
  sort,
  disabled,
  className,
  placeholder,
  filterIcon,
  withSort,
  onFilterClick,
  onSortChange,
  onSearchChange
}: SearchProps) => {
  const [searchValue, setSearchValue] = useState('')
  const [isFocused, setFocused] = useState(false)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value
    setSearchValue(searchValue)
    if(onSearchChange) onSearchChange(searchValue)
  }

  const handleBlur = () => {
    setFocused(false)
  }

  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true)
  }

  const onSortSelect = useCallback((e: any) => {
    if(onSortChange) onSortChange(e)
  }, [onSortChange])

  return (
    <SearchContainer
      className={cn(className, 'Search__menu', {
        Search_container_disabled: disabled,
        Search_focused: isFocused,
        Search_has_sort: withSort,
      })}
    >
      <div className={'Search__input'}>
        <SearchIcon
          attr={{
            className: 'Search__searchIcon',
          }}
        />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleSearchChange}
          onBlur={handleBlur}
          onFocus={onFocus}
          className={cn('Text_16_24', { Search_disabled: disabled })}
          disabled={disabled}
        />
      </div>
      <div className={'Search__options'}>
        {withSort && <MenuSort options={sort} onSelect={onSortSelect} />}

        {filterIcon && (
          <Button
            secondary
            className="Search__filterIcon"
            onClick={onFilterClick}
          >
            {filterIcon}
          </Button>
        )}
      </div>
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: 2px solid ${({ theme }) => theme.colors.fields.stroke};
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 0 20px;
  gap: 10px;

  .Search__input {
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: 10px;
  }

  .Search__options {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeHover};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.fields.title};
    opacity: 1;
    outline: 2px solid ${({ theme }) => theme.colors.text.grey};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeFocused};
  }

  &.Search_focused {
    .Search__searchIcon path {
      fill: ${({ theme }) => theme.colors.main};
    }
  }

  .Search__filterIcon {
    padding: 8px;
    height: auto;
    line-height: 0;
    background: transparent;

    svg path {
      fill: ${({ theme }) => theme.colors.fields.title};
    }
  }

  .Search__rightIcon,
  .Search__crossIconWithButton {
    position: relative;
    z-index: 21;
  }

  .SortContainer {
    position: absolute;
    top: 12px;
    right: 58px;
    z-index: 40;
  }

  .Sort__mobile {
    background: transparent;
    padding: 8px;

    svg path {
      fill: ${({ theme }) => theme.colors.fields.title};
    }

    @media (max-width: ${mobile}) {
      display: block;
    }
  }

  .Search__searchIcon {
    width: 18px;
    height: 18px;
    top: 22px;
    left: 20px;
    z-index: 21;
    min-width: 18px;

    path {
      fill: ${({ theme }) => theme.colors.fields.title};
    }
  }

  :focus-within .Search__crossIcon {
    opacity: 1 !important;
  }

  &.Search_container_disabled {
    .Search__searchIcon {
      path {
        fill: ${({ theme }) => theme.colors.text.disabled};
      }
    }
  }

  .Search_disabled,
  &.Search_container_disabled {
    background: ${({ theme }) => theme.colors.background.disabled};
    box-shadow: none;
    pointer-events: none;
    outline: none;
    color: ${({ theme }) => theme.colors.text.disabled};

    &:focus-within {
      pointer-events: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.disabled};
    }
  }
`

const Input = styled.input`
  position: relative;
  height: 60px;
  padding: 18px 0 18px 0;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  width: 100%;
  background: #fff;
  z-index: 20;

  &::placeholder {
    color: ${({ theme }) => theme.colors.fields.title};
    opacity: 1;
  }

  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0;
    }
  }
`

export { Search }
