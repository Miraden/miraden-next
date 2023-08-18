import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Checkbox } from './CheckBox'
import cn from 'classnames'

interface Option {
  label: string
  value: string
}

interface Props {
  options: Option[]
  placeholder?: string
}

const DropdownInputCheckbox: React.FC<Props> = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [containerRef])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: Option) => {
    const index = selectedOptions.findIndex(o => o.value === option.value)
    if (index >= 0) {
      setSelectedOptions([
        ...selectedOptions.slice(0, index),
        ...selectedOptions.slice(index + 1),
      ])
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  return (
    <Container
      ref={containerRef}
      className={cn({
        DropDownInputCheckbox: true,
        DropDownInputCheckbox_active: isOpen,
      })}
    >
      <Input
        type="text"
        placeholder="Select"
        value={selectedOptions.map(o => o.label).join(', ')}
        onClick={toggleDropdown}
        readOnly
        className={cn({
          DropDownInput_active: isOpen,
        })}
      />
      {isOpen && (
        <Dropdown
          className={cn({
            DropDown_active: isOpen,
            DropDown: true,
          })}
        >
          {options.map(option => (
            <Checkbox
              onChange={() => handleOptionClick(option)}
              key={option.value}
              checked={selectedOptions.some(o => o.value === option.value)}
              label={option.label}
              isSelected={selectedOptions.some(o => o.value === option.value)}
              className={'Font_body_alt'}
            />
          ))}
        </Dropdown>
      )}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: inline-block;
`

const Input = styled.input`
  padding: 18px 20px;
  max-width: 300px;
  width: 100%;
  outline: 2px solid ${({ theme }) => theme.colors.fields.stroke};
  border-radius: ${({ theme }) => theme.border.radius};
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.fields.title};

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeHover};
  }

  &.DropDownInput_active {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeHover};
  }
`

const Dropdown = styled.div`
  position: absolute;
  top: 61px;
  left: 0;
  width: 100%;
  border: none;
  max-height: 200px;
  overflow-y: auto;
  outline: 2px solid ${({ theme }) => theme.colors.fields.stroke};
  border-radius: 10px;
  z-index: 1;
  background: #fff;

  &.DropDown_active {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    outline: 2px solid ${({ theme }) => theme.colors.fields.strokeHover};
  }

  label.Checkbox {
    padding: 12px 20px 13px 20px;
    width: 100%;

    :hover {
      background: #f1f7ff;
    }
  }
`

const Option = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 8px;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? '#f0f0f0' : 'transparent'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.stroke.lightGrey};
  }
`

export { DropdownInputCheckbox }
