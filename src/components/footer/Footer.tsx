import { FC } from 'react';
// import cn from 'classnames'
import styles from './Footer.module.css';

const Footer: FC = () => (
  <div className={styles.footer}>
    <p style={{ cursor: 'pointer' }}>ООО "Игры для всех"</p>
  </div>
);

export default Footer;