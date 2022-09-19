import dynamic from 'next/dynamic';

// Components
import { Footer } from '@components/partials';

// Hooks
import { useOnAppInit } from '@shared/hooks';

const Header = dynamic(() => import('@components/partials/Header/Header'), {
  ssr: false,
});

// Styles
import styles from './styles.module.scss';

const MainWrapper = ({ children }) => {
  useOnAppInit();

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainWrapper;
