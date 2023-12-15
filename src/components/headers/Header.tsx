import { FC } from 'react';
import { NavLink } from 'react-router-dom';
// import cn from 'classnames'
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <div className={styles.navbar}>
      {/* в аттрибуте 'to' мы указываем тот же путь, что и в Route для соответствующего компонента */}
      <NavLink to="/">Главная</NavLink>
      <NavLink to="boardcomponent">Boardcomponent</NavLink>

    </div>
  ); 
};

export default Header;