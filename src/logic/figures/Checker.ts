import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blacklogo from '../../img/blackSprite.png'
import whitelogo from '../../img/whiteSprite.png'

export class Checker extends Figure {
  
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
    this.name = FigureNames.CHECKER;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target))
      return false;

    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;

    if ((target.y === this.cell.y + direction) && 
    ((target.x === this.cell.x + 1) || (target.x === this.cell.x - 1))  && 
    this.cell.board.getCell(target.x, target.y).isEmpty()) {
      return true;
    }

    if (this.cell.isEmptyDiagonal(target))
      return true;

    return false;
  }

  /*canKill(target: Cell) {
    if (this.cell.isEmptyDiagonal(target))
      return true;
    return false;
  }*/
}