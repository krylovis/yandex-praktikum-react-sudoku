import React, { useCallback, useRef, useState } from 'react';
import { GameCell } from '../index';
import mockField from './mockField';

import style from './GameField.module.scss';
import addOrRemove from '../../utils/addOrRemove';
import GameFieldButton from '../buttons';
import { GAME_BUTTONS } from '../../constants/constants';

export interface CellInfo {
  colIndex: number;
  isFixed: boolean;
  notes: number[];
  rowIndex: number;
  value: number | null;
}

interface IFullscreenElement extends HTMLElement {
  webkitRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  msRequestFullscreen?: () => void;
}

interface IDocument {
  webkitExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  msExitFullscreen?: () => void;
  exitFullscreen?: () => void;
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

      setMoveHistory((prevState: CellInfo[]) =>
        [...prevState, copyCurrentCell].slice(-50)
      );

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key >= '1' && event.key <= '9') {
      handleChangeValue(parseInt(event.key, 10));
    }
  };

  const undoLastMove = useCallback(() => {
    if (moveHistory.length === 0) return;

    const lastState = moveHistory[moveHistory.length - 1];

    const newField = [...field];
    newField[lastState.rowIndex][lastState.colIndex] = lastState;
    setField(newField);

    setSelectedCell(lastState);
    setMoveHistory((prevState: CellInfo[]) => prevState.slice(0, -1));
  }, [moveHistory]);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const enterFullscreen = () => {
    const fullscreenElement = containerRef.current as IFullscreenElement;

    if (fullscreenElement.requestFullscreen) {
      fullscreenElement.requestFullscreen();
    } else if (fullscreenElement.webkitRequestFullscreen) {
      fullscreenElement.webkitRequestFullscreen();
    } else if (fullscreenElement.mozRequestFullScreen) {
      fullscreenElement.mozRequestFullScreen();
    } else if (fullscreenElement.msRequestFullscreen) {
      fullscreenElement.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    const documentF = document as IDocument;

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (documentF.webkitExitFullscreen) {
      documentF.webkitExitFullscreen();
    } else if (documentF.mozCancelFullScreen) {
      documentF.mozCancelFullScreen();
    } else if (documentF.msExitFullscreen) {
      documentF.msExitFullscreen();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={style.section} onKeyDown={handleKeyDown} ref={containerRef}>
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
        <GameFieldButton
          srcImage="./fullscreen.svg"
          onClick={toggleFullscreen}
          titleBtn="На весь экран"
        />
      </div>

      <div className={style.main}>
        {GAME_BUTTONS.map((item: number) => (
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
    </div>
  );
}

export default GameField;
