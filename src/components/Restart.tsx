import { FC } from 'react'
//import cn from 'classnames'
//import styles from './Timer.module.css'

interface RestartProps {
  restart: () => void;
}

const Restart: FC<RestartProps> = ({restart}) => {

  return (
    <div>
      <button onClick={restart}>Start new game</button>
    </div>
    );
  };

export default Restart;