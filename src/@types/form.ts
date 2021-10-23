export interface FieldProps {
  value: string | number;
  onChange: (value: string | number) => void;
  label?: string;
  name?: string;
  placeholder?: string;
  inputTestId?: string;
  required?: boolean;
  disabled?: boolean;
  onBlur?: () => void;
}
