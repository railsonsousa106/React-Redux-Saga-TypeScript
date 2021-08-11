import React, { ReactType, ReactElement, BaseSyntheticEvent, useState } from 'react';

import { MainContainer, InputContainer, ImageContainer, ErrorMessage } from './Input.style';

interface IProps {
  BeforeIcon?: ReactType;
  errors?: { [key: string]: string };
  placeholder?: string;
  StyledComponent: ReactType;
  onBlur?: (e: BaseSyntheticEvent, name: string) => void;
  name: string;
  defaultValue?: string;
  value?: string;
  type: string;
  onClick?: (e: BaseSyntheticEvent, name: string) => void;
  checked?: string | boolean;
  changed?: string;
  onChange?: (...args: any[]) => void;
  onKeyDown?: (...args: any[]) => void;
  autoComplete?: string;
  onInput?: (e: BaseSyntheticEvent, name: string) => void;
  maxLength?: string;
  multiple?: boolean;
  autoFocus?: boolean;
  isBlocked?: boolean;
  onDrop?: (...args: any[]) => void;
  accept?: string;
  titleForFileInput?: string | ReactElement;
  pattern?: string;
  ref?: any;
  min?: number;
}

const Input = ({
  BeforeIcon,
  errors,
  placeholder,
  StyledComponent,
  onBlur,
  name,
  defaultValue,
  value,
  type,
  onClick,
  checked,
  changed,
  onChange,
  onKeyDown,
  autoComplete,
  onInput,
  maxLength,
  multiple,
  autoFocus,
  isBlocked,
  onDrop,
  accept,
  titleForFileInput,
  pattern,
  ref,
  min,
}: IProps) => {
  const [isFocus, setFocus] = useState<boolean>(false);

  return (
    <MainContainer>
      <InputContainer>
        {BeforeIcon && (
          <ImageContainer>
            <BeforeIcon isFocus={isFocus} isError={Boolean(errors && errors[name])} />
          </ImageContainer>
        )}
        <StyledComponent
          placeholder={placeholder}
          onBlur={(e: BaseSyntheticEvent) => {
            setFocus(false);
            if (onBlur) {
              onBlur(e, name);
            }
          }}
          onClick={(e: BaseSyntheticEvent) => onClick && onClick(e, name)}
          checked={checked}
          value={value && value}
          name={name}
          ref={ref}
          onChange={onChange && onChange}
          onKeyDown={onKeyDown && onKeyDown}
          onInput={(e: BaseSyntheticEvent) => onInput && onInput(e, name)}
          defaultValue={defaultValue}
          type={type}
          changed={changed === name}
          autoComplete={autoComplete}
          maxLength={maxLength && maxLength}
          multiple={multiple}
          autoFocus={autoFocus}
          disabled={isBlocked}
          error={errors && errors[name]}
          onDrop={onDrop}
          accept={accept}
          titleForFileInput={titleForFileInput}
          onFocus={() => setFocus(true)}
          pattern={pattern}
          min={min}
        />
      </InputContainer>
      {errors && errors[name] && <ErrorMessage>{errors[name]}</ErrorMessage>}
    </MainContainer>
  );
};

export default Input;
export { Input };
