import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Checker } from "./figures/Checker";
import { King } from "./figures/King";

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

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  private addCheckers() {
    /*for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 3; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Checker());
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null));
        }
      }

      this.cells.push(row);
    }*/
    for (let i = 0; i < 8; i++) {
      new Checker(Colors.BLACK, this.getCell(i, 1))
    }
    
  }

  public addFigures() {
    this.addCheckers();
  }
}
