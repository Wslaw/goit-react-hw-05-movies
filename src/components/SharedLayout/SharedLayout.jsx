import MainMenu from 'components/MainMenu/MainMenu';
import styles from './shared-layout.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <MainMenu />
      <Suspense fallback={<p>Wait...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
