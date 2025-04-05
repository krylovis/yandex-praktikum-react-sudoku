import style from './CustomButton.module.scss';

interface Props {
  type: 'submit' | 'reset' | 'button',
  color: 'primary' | 'secondary' | 'succes' | 'transparent',
  text?: string,
  title?: string,
  onClick?: () => void,
}

export default function CustomButton({ text, title, type, color, onClick }: Props) {
  const className = [style.customButton];
  className.push(style[`customButton_${color}`]);

  return (
    <button
      className={className.join(' ')}
      type={type}
      title={title}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

CustomButton.defaultProps = {
  text: '',
  title: '',
  onClick: () => {},
};
