import './Input.module.scss';

interface InputProps {
  value: string|undefined;
  name: string;
  className: string;
  disabled: boolean;
  type: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}

function Input({ value, type, onChange, onBlur, name, disabled, className }: InputProps) {
  return (
    <input
      type={type}
      id={name}
      name={name}
      disabled={disabled}
      value={value}
      className={className}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      onKeyDown={(e) => e.key === 'Enter' && onBlur()}
    />
  );
}

export default Input;
