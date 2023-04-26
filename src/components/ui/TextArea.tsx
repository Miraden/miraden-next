import cn from "classnames";
import React, { FC } from "react";
import styled from "styled-components";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  isValid: boolean;
};

export const TextArea: FC<Props> = ({
  id,
  type = "text",
  value,
  onChange,
  isValid,
  className,
  onFocus,
  onBlur,
}) => {
  return (
    <StyledTextArea
      id={id}
      value={value}
      className={cn(className, { TextArea_invalid: !isValid })}
    />
  );
};

const StyledTextArea = styled.textarea`
  min-height: 60px;

  position: relative;
  &::placeholder {
    color: #7786a5;
  }

  &:hover::placeholder {
    color: #7786a5;
  }

  width: 100%;
  padding: 8px 12px;
  box-shadow: 0px 0px 0px 2px #e1edfd inset;
  border-radius: 10px;
  border: none;
  background: #ffffff;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #4e6af3 inset !important;
  }

  &:hover {
    box-shadow: 0px 0px 0px 2px #cddef4 inset;
  }

  &.TextArea_invalid {
    box-shadow: 0px 0px 0px 2px #ffd8d8 inset;
  }

  @media (max-width: 992px) {
    & {
      padding: 11px 12px;
    }
  }
`;
