import { FC, useEffect, useState } from "react";
import { Board } from "../../logic/Board";
import CellComponents from "../CellComponents";
import React from "react";
import { Cell } from "../../logic/Cell";
import { Player } from "../../logic/Player";
import Restart from "../Restart";
import EatenCheckers from "../EatenCheckers";
//import cn from 'classnames'
import styles from './BoardComponent.module.css'

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  changePlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  changePlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      const dy = selectedCell.y < cell.y ? 1 : -1;
      const dx = selectedCell.x < cell.x ? 1 : -1;

      selectedCell.moveFigure(cell);
      changePlayer();
      setSelectedCell(null);
      updateBoard();
    } else {
    /*else if (selectedCell && selectedCell !== cell && selectedCell.canKill(cell)) {
      selectedCell.canKill(cell);
      changePlayer();
      setSelectedCell(null);
      updateBoard();
    }*/
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  useEffect(() => {
    strokeIllumination();
  }, [selectedCell]);

  function strokeIllumination() {
    // подсвечивает ячейки, которые доступны
    board.strokeIllumination(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    // обновление состояния
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div>
      <div className="divH3">
      <h3>Текущий игрок {currentPlayer?.color}</h3>
      </div>
  
      <div>
        <Restart
           restart={function (): void{} }
          {...Restart}
        />
      </div>
      <div className={styles.div}>
        <div className="board">
          {board.cells.map((row, index) => (
            <React.Fragment key={index}>
              {row.map((cell) => (
                <CellComponents
                  click={click}
                  cell={cell}
                  key={cell.id}
                  selected={
                    cell.x === selectedCell?.x && cell.y === selectedCell?.y
                  }
                />
              ))}
            </React.Fragment>
          ))}
        </div>
        <div className={styles.divCheckers}>
          <EatenCheckers
            title={"Черные шашки"}
            figures={board.eatenBlackCheckers}
          />
          <EatenCheckers
            title={"Белые шашки"}
            figures={board.eatenWhiteCheckers}
          />
        </div>
      </div>
    </div>
  );
};

export default BoardComponent;
