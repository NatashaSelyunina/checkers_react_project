import { FC } from 'react'
import { Cell } from '../logic/Cell';
//import cn from 'classnames'
//import styles from './CellComponent.module.css'

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => { 

  return (
    <div 
      className={['cell', cell.color, selected ? "selected" : ''].join('  ')} 
      onClick={() => click(cell)}
      style={{background: cell.free && cell.figure ? 'green' : ''}}
    >
      {cell.free && !cell.figure && <div className={"free"}/>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
    </div>
    );
  };

export default CellComponent;