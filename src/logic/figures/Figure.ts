import { Colors } from "../Colors";
import logo from '../../img/blackSprite.png'
import { Cell } from "../Cell";

export enum FigureNames {
  FIGURE = "Фигура",
  CHECKER = "Шашка",
  KING = "Дамка",
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    return true;
  }
  moveFigure(target: Cell) {

  }
} 