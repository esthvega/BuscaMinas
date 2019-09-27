import { Cell } from './cell';
import settings from '../../settings';

export type Board = Cell[][];

let allCells = new Array<Cell>();

export const getAllCells = (): Cell[] => allCells;

export const fillInitialBoard = (): Board => {
  allCells = new Array<Cell>();
  const retBoard = new Array<Cell[]>();
  const { width, height } = settings;
  for (let x = 0; x < width; x++) {
    const row = new Array<Cell>();
    for (let y = 0; y < height; y++) {
      const cell = {
        x,
        y,
        isOpen: false,
        isMine: false,
        numMines: 0,
      };
      row.push(cell);
      allCells.push(cell);
    }
    retBoard.push(row);
  }

  return retBoard;
};

let board;

const fillBombs = (): void => {
  const { totalMines } = settings;
  allCells.sort(() => Math.random() -0.5);
  for(let i = 0; i< totalMines; i++) {
    allCells[i].isMine = true;
  }
}
export const getBoard = (): Board => board;


const init = (): void => {
  board = fillInitialBoard();
  fillBombs();
}
init();

