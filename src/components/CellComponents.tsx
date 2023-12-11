import { FC } from 'react'
import { Cell } from '../logic/Cell';
//import cn from 'classnames'
//import styles from './CellComponents.module.css'

interface CellProps {
  cell: Cell
}

const CellComponents: FC<CellProps> = ({cell}) => {

  return (
    <div className={['cell', cell.color].join('  ')}
    >
      
    </div>
  );
};

export default CellComponents;