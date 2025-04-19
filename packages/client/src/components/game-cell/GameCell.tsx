import { useMemo } from 'react';
import style from './GameCell.module.scss';

import NumbersCanvas from '../numbers-canvas/NumbersCanvas';
import { CellInfo } from '../game-field/GameField';
import { Notes } from '../index';

interface GameCellProps {
  colIndex: number;
  currentCell: CellInfo;
  onClick: () => void;
  rowIndex: number;
  selectedCell?: CellInfo;
}

function GameCell(props: GameCellProps) {
  const { colIndex, currentCell, onClick, rowIndex, selectedCell } = props;

  const isSelectedCell = selectedCell?.rowIndex === rowIndex && selectedCell?.colIndex === colIndex;
  const isSelectedAxis = selectedCell?.rowIndex === rowIndex || selectedCell?.colIndex === colIndex;
  const isMatched = !isSelectedCell && selectedCell?.value === currentCell.value;

  const className = useMemo(() => {
    const names = [style.main];

    if (rowIndex === 2 || rowIndex === 5) {
      names.push(style.marginBottom);
    }

    if (colIndex === 2 || colIndex === 5) {
      names.push(style.marginRight);
    }

    if (isSelectedCell) {
      names.push(style.selectedCell);
    }

    if (isSelectedAxis) {
      names.push(style.selectedAxis);
    }

    if (currentCell.value && isMatched) {
      names.push(style.matched);
    }

    return names.join(' ');
  }, [isSelectedCell, isMatched, isSelectedAxis, rowIndex, colIndex]);

  const numberColor: string = useMemo(() => {
    if (isSelectedCell) {
      if (selectedCell?.isFixed) {
        return 'white';
      }

      if (selectedCell?.value === selectedCell?.correctValue) {
        return 'rgba(41, 255, 255, 1)';
      }

      return 'rgba(255, 0, 4, 1)';
    }

    if (currentCell.isFixed) {
      return 'black';
    }

    if (currentCell?.value === currentCell?.correctValue) {
      return 'rgba(41, 141, 255, 1)';
    }

    return 'rgba(255, 0, 4, 1)';
  }, [isSelectedCell, isMatched, isSelectedAxis, rowIndex, colIndex, selectedCell?.value]);

  return (
    <button
      className={className}
      onClick={() => onClick()}
      type="button"
    >
      {currentCell.value && (
        <NumbersCanvas
          value={currentCell.value}
          color={numberColor}
          size={40}
        />
      )}
      {!currentCell.value && (
        <Notes
          notes={currentCell.notes}
          size={40}
        />
      )}
    </button>
  );
}

export default GameCell;
