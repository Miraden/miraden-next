import { PenIcon, PlusIcon } from '@/icons'
import {PaperClip24Icon, PaperclipIcon} from '@/icons/PaperclipIcon'
import { SendMessageIcon } from '@/icons/SendMessageIcon'
import { ObjectsList } from '@/modules/ApplicationsChatsAll/components/ObjectsList'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'

interface Props {
  className?: string
}

const MessageInput = ({ className }: Props) => {
  const [value, setValue] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    const textarea = textareaRef.current

    const adjustTextareaHeight = () => {
      if (textarea && textarea.value.length === 0) {
        textarea.style.height = '24px'
        return
      }
      if (textarea) {
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight + 2}px`
      }
    }

    if (textarea) {
      textarea.addEventListener('input', adjustTextareaHeight)

      return () => {
        textarea.removeEventListener('input', adjustTextareaHeight)
      }
    }
  }, [textareaRef])

  const [objectsListOpen, setObjectsListOpen] = useState(false)

  const handleObjectsListOpen = useCallback(() => {
    setObjectsListOpen(!objectsListOpen)
  }, [objectsListOpen])

  return (
    <StyledMessageInput className={className}>
      {value.length === 0 ? (
        <button>
          <PaperClip24Icon attr={{className:"MessageInput__button_paperclipMobile MessageInput__button_paperclip"}} />
        </button>
      ) : null}
      <InputWrapper>
        {value.length === 0 ? <PenIcon className="PenIcon" /> : null}
        <Input
          placeholder="Написать сообщение..."
          value={value}
          onChange={handleChange}
          ref={textareaRef}
        />
        {value.length === 0 && <Placeholder></Placeholder>}
      </InputWrapper>
      <ButtonWrapper>
        {value.length === 0 ? (
          <Button
            className="MessageInput__button_default"
            leftIcon={<PlusIcon />}
            onClick={handleObjectsListOpen}
          >
            Добавить объект
          </Button>
        ) : (
          <Button
            onClick={handleObjectsListOpen}
            className="MessageInput__button_typing"
            leftIcon={<SendMessageIcon />}
          />
        )}
        {value.length === 0 ? (
          <button>
            <PaperClip24Icon attr={{className: "MessageInput__button_paperclip"}} />
          </button>
        ) : null}
      </ButtonWrapper>
      {objectsListOpen && <ObjectsList onClose={handleObjectsListOpen} />}
    </StyledMessageInput>
  )
}

const StyledMessageInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
  border-radius: ${({theme}) => theme.border.radius};
  box-sizing: border-box;

  :hover {
    outline: 2px solid ${({theme}) => theme.colors.fields.stroke};
  }

  .MessageInput__button_paperclipMobile {
    display: none;
    align-items: center;
    margin-left: 20px;
  }

  .MessageInput__button_paperclip {
    path {
      stroke: ${({theme}) => theme.colors.text.grey};
    }
  }

  @media (max-width: 576px) {
    padding: 16px 20px;
    border-radius: ${({theme}) => theme.border.radius} ${({theme}) => theme.border.radius} 0 0;

    .MessageInput__button_paperclipMobile {
      display: flex;
      margin-left: 0;
    }
  }
`

const InputWrapper = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;
  flex: 1;

  svg {
    margin-left: 10px;
    flex-shrink: 0;
  }

  @media (max-width: 576px) {
    svg {
      display: none;
    }
  }
`

const Input = styled.textarea`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  width: 100%;
  padding-left: 8px;
  white-space: normal;
  resize: none;
  height: 24px;

  ::-webkit-scrollbar {
    display: none;
  }
`

const Placeholder = styled.span`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #808080;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  align-self: flex-end;
  transition: all 0.2s ease 0s;

  .MessageInput__button_paperclip {
    display: none;
  }

  .MessageInput__button_default {
    padding: 10px 24px;
  }

  .MessageInput__button_typing {
    padding: 10px;
  }

  .MessageInput__button_paperclip {
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-right: 10px;
  }

  @media (max-width: 576px) {
    .MessageInput__button_default {
      transition: all 0.2s ease 0s;
      padding: 2px;
      border-radius: 50%;
      width: 24px;
      height: 24px;

      .Button__iconContainer {
        margin-right: 0;
      }

      span {
        margin-right: 0;

        display: none;
      }
    }

    .MessageInput__button_paperclip {
      display: none;
    }
  }
`

export { MessageInput }
