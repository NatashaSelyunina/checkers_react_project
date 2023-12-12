import { FC, useEffect, useState } from 'react'
import { Board } from '../logic/Board';
import CellComponents from './CellComponents';
import React from 'react';
import { Cell } from '../logic/Cell';
//import cn from 'classnames'
//import styles from './BoardComponent.module.css'

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    }
    if (cell.figure) {
      setSelectedCell(cell);
    }
  }

  useEffect(() => {
    strokeIllumination();
  }, [selectedCell])

  function strokeIllumination() { // подсвечивает ячейки, которые доступны
    board.strokeIllumination(selectedCell);
    updateBoard();
  }

  function updateBoard() { // обновление состояния
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className="board">
      {board.cells.map((row, index) => 
        <React.Fragment key={index}>
          {row.map(cell => 
            <CellComponents 
              click={click}
              cell={cell}
              key={cell.id}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
            />
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default BoardComponent;