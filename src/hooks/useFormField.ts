import React, { Dispatch, SetStateAction, useCallback, useState } from "react";

interface IOptions {
  initialValue?: string;
  mask?: any;
}

export interface IFormField {
  value?: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement
    >
  ) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocus: boolean;
  isValid: boolean;
  setIsValid: Dispatch<SetStateAction<boolean>>;
}

export const useFormField = (
  options: IOptions = { initialValue: "", mask: null }
): IFormField => {
  const [value, setValue] = useState(options.initialValue);
  const [isFocus, setIsFocus] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const onChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement
      >
    ) => {
      setIsValid(true);
      setValue(() => {
        return !options.mask ? e.target.value : options.mask(e);
      });
    },
    [options]
  );
  const onFocus = useCallback(() => {
    setIsFocus(true);
  }, []);
  const onBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  return { value, onChange, onFocus, onBlur, isFocus, isValid, setIsValid };
};
