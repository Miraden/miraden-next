import React, { useState } from "react";
import styled, { css } from "styled-components";

type CheckboxProps = {
  label?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  error?: boolean;
};

const Checkbox = ({
  label,
  defaultChecked = false,
  disabled = false,
  error = false,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <CheckboxContainer disabled={disabled} error={error}>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        disabled={disabled}
      />
      <CheckboxBox checked={isChecked} disabled={disabled} error={error}>
        {isChecked && (
          <svg width="14" height="11" viewBox="0 0 14 11">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="3"
              d="M1 5.6L4.6 9.2L13 1"
            />
          </svg>
        )}
      </CheckboxBox>
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.label<{ disabled?: boolean; error?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  ${(props) =>
    props.error &&
    css`
      color: red;
    `}
`;

const CheckboxInput = styled.input<{ disabled?: boolean }>`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;

const CheckboxBox = styled.div<{
  checked: boolean;
  disabled?: boolean;
  error?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid
    ${(props) =>
      props.disabled ? `${({ theme }: any) => theme.colors.error}` : "#C7D2E9"};
  border-radius: 5px;
  transition: border-color 0.2s ease;
  ${(props) =>
    props.checked &&
    css`
      background-color: ${({ theme }) => theme.colors.blue.default};
    `}
  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        border-color: ${({ theme }) => theme.colors.blue.default};
      }
      &:focus-within {
        outline: 2px solid ${({ theme }) => theme.colors.stroke.purple};
      }
    `}
    ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
    ${(props) =>
    props.error &&
    css`
      border-color: red;
    `}
`;

const CheckboxLabel = styled.span`
  margin-left: 10px;
`;

export { Checkbox };
