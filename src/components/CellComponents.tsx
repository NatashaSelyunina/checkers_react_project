import { FC } from 'react'
import { Cell } from '../logic/Cell';
//import cn from 'classnames'
//import styles from './CellComponent.module.css'

interface CellProps {
  cell: Cell
}

const CellComponent: FC<CellProps> = ({cell}) => { 

  return (
    <div 
      className={['cell', cell.color].join('  ')} 
    >
      {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
    </div>
    );
  };

export default CellComponent;