import { useEffect, useRef, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useWindowSize } from 'rooks';
import gsap from 'gsap';
import cx from 'classnames';

// Components
import { Logo, Nav } from '@components/partials';

// Constants
import { BREAKPOINT } from '@shared/constants';

// Styles
import styles from './styles.module.scss';

const Header: React.FC = () => {
  const header = useRef<HTMLHeadElement | null>(null);
  const [isNavActive, setNavActive] = useState(false);
  const { innerWidth } = useWindowSize();

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
    if (innerWidth > BREAKPOINT.SM && isNavActive) {
      setNavActive(false);
    }
  }, [innerWidth]);

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
