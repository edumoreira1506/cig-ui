import { VFC, forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';

import { Input } from '..';
import { InputProps } from '../Input/Input';

import 'react-datepicker/dist/react-datepicker.css';

type DatePickerProps = InputProps & {
  value: Date;
  onChange: (date: Date) => void;
}



export const DatePicker: VFC<DatePickerProps> = ({ value, onChange, ...rest }: DatePickerProps) => {
  const CustomInput = forwardRef(function CustomInput({ value, onClick }: any, ref) {
    return <Input
      {...rest}
      value={value}
      onChange={() => undefined}
      onClick={onClick}
      ref={ref}
    />; 
  });

  return (
    <ReactDatePicker
      selected={value}
      onChange={onChange}
      customInput={<CustomInput />}
    />
  );
};
