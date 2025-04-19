import style from './InputNumberButton.module.scss';

import NumbersCanvas from '../../numbers-canvas/NumbersCanvas';

interface InputNumberButtonProps {
    onClick: () => void;
    value: number;
}

function InputNumberButton(props: InputNumberButtonProps) {
  const { onClick, value } = props;

  return (
    <button
      className={style.inputNumber}
      onClick={() => onClick()}
      type="button"
    >
      <NumbersCanvas
        value={value}
        color="black"
        size={40}
      />
    </button>
  );
}

export default InputNumberButton;
