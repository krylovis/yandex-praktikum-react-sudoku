import { useMemo } from 'react';
import style from './GameCell.module.scss';

import NumbersCanvas from '../numbers-canvas/NumbersCanvas';

interface GameCellProps {
  colIndex: number;
  isHighlight: boolean;
  isSelected: boolean;
  notes: number[];
  onClick: () => void;
  rowIndex: number;
  value: number | null;
}

function GameCell({
  onClick,
  value,
  isSelected,
  rowIndex,
  colIndex,
  isHighlight,
  notes,
}: GameCellProps) {
  const className = useMemo(() => {
    const names = [style.main];

    if (rowIndex === 2 || rowIndex === 5) {
      names.push(style.marginBottom);
    }

    if (colIndex === 2 || colIndex === 5) {
      names.push(style.marginRight);
    }

    if (isSelected) {
      names.push(style.selected);
    }

    if (isHighlight) {
      names.push(style.highlight);
    }

    return names.join(' ');
  }, [style, isSelected, isHighlight]);

  return (
    <button
      className={className}
      onClick={() => onClick()}
      type="button"
    >
      {value ? (<NumbersCanvas value={value} color="black" />) : notes }
    </button>
  );
}

export default GameCell;
