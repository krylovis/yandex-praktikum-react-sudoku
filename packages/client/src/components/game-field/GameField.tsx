import { useCallback, useEffect, useState } from 'react';
import GameCell from '../game-cell';
import mockField from './mockField';

import style from './GameField.module.scss';
import addOrRemove from '../../utils/addOrRemove';
import GameFieldButton from '../buttons/game-field-button';

export interface CellInfo {
  colIndex: number;
  isFixed: boolean;
  notes: number[];
  rowIndex: number;
  value: number | null;
}

function GameField() {
  const [field, setField] = useState<CellInfo[][]>(mockField);
  const [selectedCell, setSelectedCell] = useState<CellInfo>();
  const [isEnabledNotes, setIsEnabledNotes] = useState<boolean>(false);
  const [moveHistory, setMoveHistory] = useState<CellInfo[]>([]);

  const handleChangeValue = useCallback(
    (newValue: number | null): void => {
      if (!selectedCell) return;

      const { rowIndex, colIndex, isFixed } = selectedCell;

      if (isFixed) {
        alert('Нельзя менять изначальные значения');
        return;
      }

      const newField = [...field];
      const currentCell = newField[rowIndex][colIndex];
      const copyCurrentCell = structuredClone(currentCell);

      setMoveHistory((prevState) => [...prevState, copyCurrentCell].slice(-50));

      if (isEnabledNotes) {
        if (!newValue) {
          currentCell.notes = [];
        } else {
          addOrRemove(currentCell.notes, newValue);
        }
      } else {
        currentCell.value = newValue;
      }

      setField(newField);
    },
    [selectedCell, isEnabledNotes]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '9') {
        handleChangeValue(parseInt(e.key, 10));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCell, isEnabledNotes]);

  const undoLastMove = useCallback(() => {
    if (moveHistory.length === 0) return;

    const lastState = moveHistory[moveHistory.length - 1];

    const newField = [...field];
    newField[lastState.rowIndex][lastState.colIndex] = lastState;
    setField(newField);

    setSelectedCell(lastState);
    setMoveHistory((prevState) => prevState.slice(0, -1));
  }, [moveHistory]);

  return (
    <section className={style.section}>
      <div className={style.main}>
        {field.map((row, rowIndex) =>
          row.map((item, colIndex) => (
            <GameCell
              colIndex={colIndex}
              isHighlight={
                selectedCell?.rowIndex === rowIndex
                || selectedCell?.colIndex === colIndex
              }
              isSelected={
                selectedCell?.rowIndex === rowIndex
                && selectedCell?.colIndex === colIndex
              }
              notes={item.notes}
              onClick={() => setSelectedCell(item)}
              rowIndex={rowIndex}
              value={item.value}
            />
          ))
        )}
      </div>

      <div className={style.buttons}>
        <GameFieldButton
          srcImage="./clear-button.svg"
          onClick={() => handleChangeValue(null)}
          titleBtn="Очистить"
        />
        <GameFieldButton
          srcImage="./back-move-button.svg"
          onClick={() => undoLastMove()}
          titleBtn="Восстановить"
        />
        <GameFieldButton
          srcImage="./notes-button.svg"
          onClick={() => setIsEnabledNotes(!isEnabledNotes)}
          titleBtn="Заметки"
        />
        <GameFieldButton
          srcImage="./help-button.svg"
          onClick={() => console.log('Реализовать')}
          titleBtn="Подсказка"
        />
      </div>

      <div className={style.main}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <GameCell
            value={item}
            key={item}
            onClick={() => handleChangeValue(item)}
            colIndex={0}
            isHighlight={false}
            isSelected={false}
            notes={[]}
            rowIndex={0}
          />
        ))}
      </div>
    </section>
  );
}

export default GameField;
