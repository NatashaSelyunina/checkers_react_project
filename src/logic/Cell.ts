import { Board } from "./Board";
import { Colors } from "./Colors";
import { Checker } from "./checkers/Checker";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  checker: Checker | null;
  board: Board;
  free: boolean;
  id: number;

  constructor(board: Board, x: number, y: number, color: Colors, checker: Checker | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.checker = checker;
    this.board = board;
    this.free = false;
    this.id = Math.random();
  }
}