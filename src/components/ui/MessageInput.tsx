import { PenIcon, PlusIcon } from "@/icons";
import { PaperclipIcon } from "@/icons/PaperclipIcon";
import { SendMessageIcon } from "@/icons/SendMessageIcon";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const MessageInput = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <StyledMessageInput>
      <InputWrapper>
        {value.length === 0 ? <PenIcon /> : null}
        <Input
          type="text"
          placeholder="Text"
          value={value}
          onChange={handleChange}
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
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  width: 100%;
  padding: 8px;
  white-space: pre-wrap;
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
