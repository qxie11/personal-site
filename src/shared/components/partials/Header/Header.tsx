import { useEffect, useRef, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import gsap from 'gsap';
import cx from 'classnames';

// Components
import { Logo, Nav } from '@components/partials';

// Constants
import { BREAKPOINT } from '@shared/constants';

// Styles
import styles from './styles.module.scss';
import useScreen from '@shared/hooks/useScreen';

const Header: React.FC = () => {
  const header = useRef<HTMLHeadElement | null>(null);
  const [isNavActive, setNavActive] = useState(false);
  const { width } = useScreen();

  useEffect(() => {
    gsap.from(header.current, {
      y: -50,
      duration: 1.9,
      delay: 0.2,
      ease: 'elastic',
    });
  }, []);

  useEffect(() => {
    if (isNavActive) {
      disableBodyScroll(document);
    } else {
      enableBodyScroll(document);
    }
  }, [isNavActive]);

  useEffect(() => {
    if (width > BREAKPOINT.SM && isNavActive) {
      setNavActive(false);
    }
  }, [width]);

  return (
    <>
      <header
        ref={header}
        className={cx(styles.header, {
          [styles.active]: isNavActive,
        })}
      >
        <Logo />
        <Nav />
      </header>
      <button
        className={styles.menuBtn}
        onClick={() => setNavActive(!isNavActive)}
      >
        <span className={styles.menuBtnLine}></span>
        <span className={styles.menuBtnLine}></span>
        <span className={styles.menuBtnLine}></span>
      </button>
    </>
  );
};

export default Header;
