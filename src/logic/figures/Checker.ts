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
    ((target.x === this.cell.x + 1) || (target.x === this.cell.x - 1)) && this.cell.board.getCell(target.x, target.y).isEmpty()) {
      return true;
    }

    if ((Math.abs(target.x - this.cell.x) === 2) && (Math.abs(target.y - this.cell.y) === 2)) {
      const dy = this.cell.y < target.y ? 1 : -1;
      const dx = this.cell.x < target.x ? 1 : -1;
      if ((this.cell.board.getCell(this.cell.x + dx, this.cell.y + dy).figure) && (this.cell.isEnemy(target)) && (this.cell.board.getCell(this.cell.x + dx * 2, this.cell.y + dy * 2).isEmpty()) && ((this.cell.x + dx * 2) < 8) && ((this.cell.y + dy * 2) < 8) && ((this.cell.x + dx * 2) >= 0) && ((this.cell.y + dy * 2) >= 0) && this.cell.figure?.color !== this.cell.board.getCell(this.cell.x + dx, this.cell.y + dy).figure?.color) {
        return true;
      }
    }

  
    /*if (target.y === this.cell.y + direction
      && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
      && this.cell.isEnemy(target)) {
      return true;
    }*/

    return false;
  }
}