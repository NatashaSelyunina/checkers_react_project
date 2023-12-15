import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Header from '../headers/Header';
import Footer from '../footer/Footer';


const Layout: FC = () => (
  <div className={styles.container}>

    <Header />
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;