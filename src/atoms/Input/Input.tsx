import React, { useCallback, useMemo } from 'react';

import Loading from '../Loading/Loading';
import { FieldProps } from '../../@types/form';
import Label from '../Label/Label';

import { StyledContainer, StyledInput, StyledMaskedInput , StyledInputLoading } from './Input.styles';

export interface InputProps extends FieldProps {
  type?: 'text' | 'number' | 'email' | 'date' | 'password';
  autoComplete?: string;
  isLoading?: boolean;
  mask?: string;
}

export default function Input({
  autoComplete,
  value,
  onChange,
  type = 'text',
  label,
  name,
  placeholder,
  inputTestId,
  required = false,
  onBlur,
  isLoading = false,
  mask
}: InputProps) {
  const formatNumber = useMemo(() => type === 'number' && Boolean(mask), [type, mask]);

  const handleChangeInputValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]);

  const handleChangeFormattedNumberValue = useCallback(({ formattedValue }: { formattedValue: string; }) =>
    onChange(formattedValue)
  , [onChange]);

  const { props: inputProps, component: Component  } = useMemo(() => {
    const commonProps = {
      required,
      'data-testid': inputTestId,
      placeholder,
      id: name,
      name,
      value,
      autoComplete,
      onBlur,
    };

    if (formatNumber) {
      return {
        props: {
          ...commonProps,
          onValueChange: handleChangeFormattedNumberValue,
          displaytext: 'input',
          format: mask,
          type: 'text'
        },
        component: StyledMaskedInput
      };
    }

    return {
      props: {
        ...commonProps,
        onChange: handleChangeInputValue,
        type,
      },
      component: StyledInput
    };
  }, [
    required,
    inputTestId,
    placeholder,
    name,
    value,
    type,
    autoComplete,
    onBlur,
    mask,
    handleChangeFormattedNumberValue,
    formatNumber,
    handleChangeInputValue
  ]);

  return (
    <StyledContainer>
      {label && <Label text={label} htmlFor={name} required={required} />}
      {isLoading && (
        <StyledInputLoading>
          <Loading />
        </StyledInputLoading>
      )}
      <Component {...inputProps} />
    </StyledContainer>
  );
}
