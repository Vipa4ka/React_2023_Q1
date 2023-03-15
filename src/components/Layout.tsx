import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
// import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
