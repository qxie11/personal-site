import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Actions
import { setMode } from '@store/reducers/mode';

// Components
import { Header, Footer } from '@components/partials';

// Styles
import styles from './styles.module.scss';

const MainWrapper = ({ children }) => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

  const dispatch = useDispatch();
  useEffect(() => {
    const mode = localStorage.getItem('theme') === 'true' ? true : false;

    if (mode) {
      dispatch(setMode(mode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainWrapper;
