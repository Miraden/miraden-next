import cn from 'classnames'
import { useMemo, useRef } from 'react'
import styled from 'styled-components'

interface RadioProps {
  className?: string
  value?: string
  disabled?: boolean
  error?: boolean
  checked?: any
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement
    >
  ) => void
}
const Radio = ({
  className,
  value,
  disabled,
  error,
  checked,
  onChange,
}: RadioProps) => {
  const inputId = useMemo(() => Math.random().toString(36).substr(2, 9), [])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  return (
    <StyledRadio>
      <input
        ref={inputRef}
        type="radio"
        id={inputId}
        className={cn('Radio__input', { Radio__input_error: error }, className)}
        onChange={onChange}
        checked={checked}
        tabIndex={0}
        disabled={disabled}
        onMouseDown={handleMouseDown}
        onFocus={handleFocus} // Добавлен обработчик onFocus
      />
      <Label className="Font_16_24" htmlFor={inputId}>
        {value}
      </Label>
    </StyledRadio>
  )
}

const StyledRadio = styled.div`
  display: flex;
  align-items: center;

  .Radio__input {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #c7d2e9;
    border-radius: 50%;
    transition: 0.15s ease;
    outline: none; /* добавлено свойство outline: none */
    ::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 2px;
    }

    :hover {
      border: 3px solid #4e6af3;
    }
    &:focus,
    &:focus-within {
      outline: none; /* добавлено свойство outline: none */
      box-shadow: 0 0 0 2px #f845fc;
    }
    :checked {
      border: 3px solid #4e6af3;

      ::after {
        background-color: #4e6af3;
      }
      :hover {
        background-color: white;
        border: 3px solid #4e6af3;
        ::after {
          background-color: #4e6af3;
        }
      }
    }

    :disabled {
      cursor: not-allowed;
      border: 3px solid #c7d2e9;
      background-color: #c7d2e9;
      :hover {
        ::after {
          background-color: #c7d2e9;
        }
      }
      :checked {
        ::after {
          background-color: white;
        }
      }
    }
  }

  .Radio__input_error {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    width: 20px;
    height: 20px;
    border: 3px solid red;
    border-radius: 50%;
    transition: 0.15s ease;
    outline: none; /* добавлено свойство outline: none */
    ::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 2px;
    }

    :hover {
      border: 3px solid red;
    }
    &:focus,
    &:focus-within {
      outline: none; /* добавлено свойство outline: none */
      box-shadow: 0 0 0 2px #f845fc;
    }
    :checked {
      border: 3px solid red;

      ::after {
        background-color: red;
      }
      :hover {
        background-color: white;
        border: 3px solid red;
        ::after {
          background-color: red;
        }
      }
    }
  }
`

export const RadioButton = styled.input``

export const Label = styled.label<{ disabled?: boolean }>`
  cursor: pointer;
  margin-left: 10px;
`
export { Radio }
