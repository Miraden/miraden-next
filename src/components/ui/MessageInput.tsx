import { PenIcon, PlusIcon } from "@/icons";
import { PaperclipIcon } from "@/icons/PaperclipIcon";
import { SendMessageIcon } from "@/icons/SendMessageIcon";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const MessageInput = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const textareaRef = useRef(null);
  useEffect(() => {
    const textarea = textareaRef.current;

    const adjustTextareaHeight = () => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight + 2}px`;
    };

    textarea.addEventListener("input", adjustTextareaHeight);

    return () => {
      textarea.removeEventListener("input", adjustTextareaHeight);
    };
  }, []);
  return (
    <StyledMessageInput>
      <InputWrapper>
        {value.length === 0 ? <PenIcon /> : null}
        <Input
          placeholder="Text"
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
          >
            Button
          </Button>
        ) : (
          <Button
            className="MessageInput__button_typing"
            leftIcon={<SendMessageIcon />}
          />
        )}
        {value.length === 0 ? (
          <button>
            <PaperclipIcon className="MessageInput__button_paperclip" />
          </button>
        ) : null}
      </ButtonWrapper>
    </StyledMessageInput>
  );
};

const StyledMessageInput = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  :hover {
    box-shadow: 0 0 0 2px #c7d2e9;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;

  svg {
    flex-shrink: 0;
  }
`;

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
`;

const Placeholder = styled.span`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #808080;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  align-self: flex-end;

  .MessageInput__button_default {
    padding: 10px 24px;
  }

  .MessageInput__button_typing {
    padding: 16px;
  }

  .MessageInput__button_paperclip {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
`;

export { MessageInput };
