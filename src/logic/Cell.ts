import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  free: boolean;
  id: number;

  constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
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
    if  (target.figure) {
      return this.figure?.color !== target.figure.color;
    }
    return false;
  }

  isEmptyDiagonal(target: Cell): boolean {
    /*const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);
    for (let y = min + 1; y < max; y++) {
      if (this.board.getCell(this.x, y).isEmpty()) {

      }
    }
    return true;*/
    if (this.y === target.y || this.x === target.x) 
      return false;

    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);
    if (absY !== absX) 
      return false;
    
    const diagonalY = this.y < target.y ? 1 : -1;
    const diagonalX = this.x < target.x ? 1 : -1;

    for (let i = 1; i < absY; i++) {
      if (!this.board.getCell(this.x + diagonalX * i, this.y + diagonalY * i).isEmpty())
        return false;
    }
    return true;
  }

  setFigure(figure: Figure) {
    this.figure = figure;
    this.figure.cell = this;
  }

  addEatenChecker(figure: Figure) {
    figure.color === Colors.BLACK ? this.board.eatenBlackCheckers.push(figure) : this.board.eatenWhiteCheckers.push(figure);
  }

  moveFigure(target: Cell) { // target - ячецка, на котору хотим переместить
    if (this.figure && this.figure?.canMove(target)) {
      this.figure.moveFigure(target);
      if (target.figure) {
        this.addEatenChecker(target.figure);
      }
      target.setFigure(this.figure);
      this.figure = null;
    }
  }
}