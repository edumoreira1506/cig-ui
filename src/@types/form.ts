export interface FieldProps {
  value: string | number;
  onChange: (value: string | number) => void;
  onFocus?: () => void;
  label?: string;
  name?: string;
  placeholder?: string;
  inputTestId?: string;
  required?: boolean;
  disabled?: boolean;
  onBlur?: () => void;
  max?: number;
  min?: number;
}
