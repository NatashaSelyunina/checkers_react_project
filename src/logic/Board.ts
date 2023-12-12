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
    new Checker(Colors.BLACK, this.getCell(1, 0))
    new Checker(Colors.BLACK, this.getCell(3, 0))
    new Checker(Colors.BLACK, this.getCell(5, 0))
    new Checker(Colors.BLACK, this.getCell(7, 0))
    new Checker(Colors.BLACK, this.getCell(0, 1))
    new Checker(Colors.BLACK, this.getCell(2, 1))
    new Checker(Colors.BLACK, this.getCell(4, 1))
    new Checker(Colors.BLACK, this.getCell(6, 1))
    new Checker(Colors.BLACK, this.getCell(1, 2))
    new Checker(Colors.BLACK, this.getCell(3, 2))
    new Checker(Colors.BLACK, this.getCell(5, 2))
    new Checker(Colors.BLACK, this.getCell(7, 2))

    new Checker(Colors.WHITE, this.getCell(0, 5))
    new Checker(Colors.WHITE, this.getCell(2, 5))
    new Checker(Colors.WHITE, this.getCell(4, 5))
    new Checker(Colors.WHITE, this.getCell(6, 5))
    new Checker(Colors.WHITE, this.getCell(1, 6))
    new Checker(Colors.WHITE, this.getCell(3, 6))
    new Checker(Colors.WHITE, this.getCell(5, 6))
    new Checker(Colors.WHITE, this.getCell(7, 6))
    new Checker(Colors.WHITE, this.getCell(0, 7))
    new Checker(Colors.WHITE, this.getCell(2, 7))
    new Checker(Colors.WHITE, this.getCell(4, 7))
    new Checker(Colors.WHITE, this.getCell(6, 7))
  }

  public addFigures() {
    this.addCheckers();
  }
}
