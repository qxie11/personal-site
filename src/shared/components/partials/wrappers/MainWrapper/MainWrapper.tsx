import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';

// Actions
import { setMode } from '@store/reducers/mode';

// Components
import { Footer } from '@components/partials';
const Header = dynamic(() => import('@components/partials/Header/Header'), {
  ssr: false,
});

// Styles
import styles from './styles.module.scss';

const MainWrapper = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const mode = localStorage.getItem('theme') === 'true' ? true : false;

    if (mode) {
      dispatch(setMode(mode));
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
