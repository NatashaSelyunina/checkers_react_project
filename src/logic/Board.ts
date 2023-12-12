import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Checker } from "./figures/Checker";

export class Board {
  cells: Cell[][] = [];

  public createCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null));
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null));
        }
      }

      this.cells.push(row);
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    return newBoard;
  }

  public strokeIllumination(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        if ((i + j) % 2 !== 0) {
          const target = row[j];
          target.free = !!selectedCell?.figure?.canMove(target);
        } 
      }
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  private addCheckers() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 3; j++) {
        if ((i + j) % 2 !== 0) {
          new Checker(Colors.BLACK, this.getCell(i, j));
        } 
      }
    }
    for (let i = 0; i < 8; i++) {
      for (let j = 5; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          new Checker(Colors.WHITE, this.getCell(i, j));
        } 
      }
    }
  }

  public addFigures() {
    this.addCheckers();
  }
}