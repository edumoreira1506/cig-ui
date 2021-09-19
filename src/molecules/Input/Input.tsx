import * as React from 'react';

import Loading from '../../atoms/Loading/Loading';
import { FieldProps } from '../../@types/form';
import Label from '../../atoms/Label/Label';

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
  const formatNumber = React.useMemo(() => type === 'number' && Boolean(mask), [type, mask]);

  const handleChangeInputValue = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]);

  const handleChangeFormattedNumberValue = React.useCallback(({ formattedValue }: { formattedValue: string; }) =>
    onChange(formattedValue)
  , [onChange]);

  const { props: inputProps, component: Component  } = React.useMemo(() => {
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
