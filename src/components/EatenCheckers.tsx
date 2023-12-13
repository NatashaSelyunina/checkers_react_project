//import { FC } from 'react'
//import cn from 'classnames'
//import styles from './EatenCheckers.module.css'

import { FC } from "react";
import { Figure } from "../logic/figures/Figure";

interface EatenCheckersProps {
  title: string;
  figures: Figure[]
}

const EatenCheckers: FC<EatenCheckersProps> = ({title, figures}) => {
  return (
    <div className="eaten">
      <h3>{title}</h3>
      {figures.map(figure => 
        <div key={figure.id}>
          {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo}/>}
        </div>
      )};
    </div>
    );
  };

export default EatenCheckers;