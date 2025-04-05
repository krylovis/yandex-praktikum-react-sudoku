import './Input.scss';

interface InputProps {
  value: string|undefined;
  name: string;
  type: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}

function Input({ value, type, onChange, onBlur, name }: InputProps) {
  return (
    <input
      className="input"
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      onKeyDown={(e) => e.key === 'Enter' && onBlur()}
    />
  );
}

export default Input;
