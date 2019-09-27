import React from 'react';
import { getAllCells } from '../model/types/board';
import Cell from './Cell';

export default (): JSX.Element => {
  const myBoard = getAllCells();
  return (
    <div>
      {myBoard.map((cell): JSX.Element => (
        <Cell key={`${cell.x}-${cell.y}`} cell={cell} />
      ))}
    </div>
  );
};
