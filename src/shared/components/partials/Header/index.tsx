import { useEffect, useRef, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import gsap from 'gsap';
import cx from 'classnames';

// Components
import Logo from '../Logo';
import Nav from '../Nav';

// Styles
import styles from './styles.module.scss';

const Header: React.FC = () => {
  const header = useRef<HTMLHeadElement | null>(null);
  const [isNavActive, setNavActive] = useState<boolean>(false);

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
      <div
        className={styles.menuBtn}
        onClick={() => setNavActive(!isNavActive)}
      >
        <span className={styles.menuBtnLine}></span>
        <span className={styles.menuBtnLine}></span>
        <span className={styles.menuBtnLine}></span>
      </div>
    </>
  );
};

export default Header;
