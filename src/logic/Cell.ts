import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell {
  if(arg0: boolean) {
    throw new Error("Method not implemented.");
  }
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  free: boolean;
  id: number;

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.free = false;
    this.id = Math.random();
  }

  isEmpty(): boolean {
    return this.figure === null;
  }

  isEnemy(target: Cell): boolean {
    if ((Math.abs(target.x - this.x) === 2) && (Math.abs(target.y - this.y) === 2)) {
      if (((this.board.getCell(this.x + 1, this.y + 1)?.figure) && ((this.board.getCell(this.x + 1, this.y + 1)?.figure)?.color !== this.figure?.color)) || ((this.board.getCell(this.x + 1, this.y - 1)?.figure) && ((this.board.getCell(this.x + 1, this.y - 1)?.figure)?.color !== this.figure?.color)) || ((this.board.getCell(this.x - 1, this.y + 1)?.figure) && ((this.board.getCell(this.x - 1, this.y + 1)?.figure)?.color !== this.figure?.color)) || ((this.board.getCell(this.x - 1, this.y - 1)?.figure) && ((this.board.getCell(this.x - 1, this.y - 1)?.figure)?.color !== this.figure?.color))) {
        return true;
      }
    }
    return false;
  }

  canKill(target: Cell) {
    if (this.isEnemy(target))
      return true;
    return false;
  }


  /*isEmptyDiagonal(target: Cell): boolean {
  
    if (this.y === target.y || this.x === target.x) return false;

    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);
    if (absY !== absX) return false;

    const diagonalYOneStep = this.y < target.y ? 1 : -1;
    const diagonalXOneStep = this.x < target.x ? 1 : -1;
    const diagonalYTwoSteps = this.y < target.y ? 2 : -2;
    const diagonalXTwoSteps = this.x < target.x ? 2 : -2;
    const currentFigure = this.board.getCell(this.x + diagonalXOneStep, this.y + diagonalYOneStep)?.figure;

    if (currentFigure?.color === this.figure?.color) {
      return false;
    } else if ((currentFigure) && this.board.getCell(this.x + diagonalXTwoSteps, this.y + diagonalYTwoSteps)?.isEmpty()) {
      return true;
    }
    return false;
  }*/

  setFigure(figure: Figure) {
    this.figure = figure;
    this.figure.cell = this;
  }

  addEatenChecker(figure: Figure) {
    figure.color === Colors.BLACK
      ? this.board.eatenBlackCheckers.push(figure)
      : this.board.eatenWhiteCheckers.push(figure);
  }

  moveFigure(target: Cell) {
    /*const diagonalYOneStep = this.y < target.y ? 1 : -1;
    const diagonalXOneStep = this.x < target.x ? 1 : -1;
    let currentFigure = this.board.getCell(this.x + diagonalXOneStep, this.y + diagonalYOneStep).figure;*/
    // target - ячецка, на которую хотим переместить
    if (this.figure && this.figure?.canMove(target)) {
      this.figure.moveFigure(target);
      /*if (target.isEmpty() && currentFigure) {
        this.addEatenChecker(currentFigure);
        currentFigure = null;
      }*/
      target.setFigure(this.figure);
      this.figure = null;
    }
  }

  killFigure(target: Cell) {
    while (this.figure && this.isEnemy(target)) {
      this.canKill(target);
      target.setFigure(this.figure);
      this.figure = null;
      if (this.board.getCell(this.x + 1, this.y + 1)?.figure && this.board.getCell(this.x + 1, this.y + 1).figure !== null) {
        this.addEatenChecker(this.board.getCell(this.x + 1, this.y + 1).figure)
        this.board.getCell(this.x + 1, this.y + 1).figure = null;
      } else if (this.board.getCell(this.x + 1, this.y - 1)?.figure) {
        this.addEatenChecker(this.board.getCell(this.x + 1, this.y - 1).figure)
        this.board.getCell(this.x + 1, this.y - 1).figure = null;
      } else if (this.board.getCell(this.x - 1, this.y + 1)?.figure) {
        this.addEatenChecker(this.board.getCell(this.x - 1, this.y + 1).figure)
        this.board.getCell(this.x - 1, this.y + 1).figure = null;
      } else if (this.board.getCell(this.x - 1, this.y - 1)?.figure) {
        this.addEatenChecker(this.board.getCell(this.x - 1, this.y - 1).figure)
        this.board.getCell(this.x - 1, this.y - 1).figure = null;
      }
    }
  }
}
