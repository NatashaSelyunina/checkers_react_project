import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blacklogo from '../../img/blackKingSprite.png'
import whitelogo from '../../img/whiteKingSprite.png'

export class King extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target))
      return false;
    return true;
  }
}