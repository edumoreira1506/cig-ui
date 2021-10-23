import * as React from 'react';

import Loading from '../../atoms/Loading/Loading';
import { FieldProps } from '../../@types/form';
import Label from '../../atoms/Label/Label';

import {
  StyledContainer,
  StyledInput,
  StyledMaskedInput,
  StyledInputLoading,
  StyledRequiredMessage,
} from './Input.styles';

export interface InputProps extends FieldProps {
  type?: 'text' | 'number' | 'email' | 'date' | 'password';
  autoComplete?: string;
  isLoading?: boolean;
  mask?: string;
  requiredMessage?: string;
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
  mask,
  requiredMessage,
  disabled = false
}: InputProps) {
  const [showRequiredMessage, setShowRequiredMessage] = React.useState(false);

  const formatNumber = React.useMemo(() => type === 'number' && Boolean(mask), [type, mask]);

  const handleChangeInputValue = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]);

  const handleChangeFormattedNumberValue = React.useCallback(({ formattedValue }: { formattedValue: string; }) =>
    onChange(formattedValue)
  , [onChange]);

  const handleBlur = React.useCallback(() => {
    if (onBlur) onBlur();

    if (required && requiredMessage) {
      setShowRequiredMessage(!value);
    }
  }, [onBlur, required, requiredMessage, value]);

  const { props: inputProps, component: Component  } = React.useMemo(() => {
    const commonProps = {
      required,
      'data-testid': inputTestId,
      placeholder,
      id: name,
      name,
      value,
      autoComplete,
      onBlur: handleBlur,
      requiredError: showRequiredMessage,
      disabled
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
    disabled,
    required,
    inputTestId,
    placeholder,
    name,
    value,
    type,
    autoComplete,
    mask,
    handleChangeFormattedNumberValue,
    formatNumber,
    handleChangeInputValue,
    handleBlur,
    showRequiredMessage
  ]);

  return (
    <StyledContainer>
      {label && <Label text={label} htmlFor={name} required={required} />}
      {isLoading && (
        <StyledInputLoading>
          <Loading />
        </StyledInputLoading>
      )}
      {showRequiredMessage && <StyledRequiredMessage>{requiredMessage}</StyledRequiredMessage>}
      <Component {...inputProps} />
    </StyledContainer>
  );
}
