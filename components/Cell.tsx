import React from 'react';
import { Cell } from '../model/types/cell';

interface CellProps {
  cell: Cell;
}

export default ({ cell }: CellProps): JSX.Element => {
  const style: React.CSSProperties = {
    border: '1px solid black',
    position: 'absolute',
    color: 'yellow',
    height: '40px',
    width: '40px',
    top: cell.y * 40,
    left: cell.x * 40,
    textAlign: 'center',
    backgroundColor: cell.isMine ? 'pink' : 'purple'
  };
  return <div style={style}>{cell.x}</div>;
};
