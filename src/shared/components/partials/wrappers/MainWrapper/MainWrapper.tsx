import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Components
import { Footer } from '@components/partials';

// Hooks
import { useActions } from '@shared/hooks';

const Header = dynamic(() => import('@components/partials/Header/Header'), {
  ssr: false,
});

// Styles
import styles from './styles.module.scss';

const MainWrapper = ({ children }) => {
  const { setMode } = useActions();

  useEffect(() => {
    const mode = localStorage.getItem('theme') === 'true' ? true : false;

    if (mode) {
      setMode(mode);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainWrapper;
