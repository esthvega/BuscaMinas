export interface Cell {
  x: number;
  y: number;
  isMine: boolean;
  isOpen: boolean;
  numMines: number;
}