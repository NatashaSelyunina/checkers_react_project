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
}