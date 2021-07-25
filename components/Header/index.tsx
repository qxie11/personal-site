import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Logo from './Logo';
import Nav from './Nav';
import styles from './styles.module.scss';
import classNames from 'classnames';

const Header: React.FC = () => {
    const header = useRef<HTMLHeadElement | null>(null);
    const [isNavActive, setNavActive] = useState<boolean>(false);

    useEffect(() => {
        gsap.from(header.current, {y: -50, duration: 1.9, delay: 0.2, ease: 'elastic'});
    }, []);

    return (
        <>
            <header ref={header} className={classNames({
                [styles.header]: true,
                [styles.active]: isNavActive,
            })}>
                <Logo />
                <Nav />
            </header>
            <div className={styles.menuBtn} onClick={() => setNavActive(!isNavActive)}>
                <span className={styles.menuBtnLine}></span>
                <span className={styles.menuBtnLine}></span>
                <span className={styles.menuBtnLine}></span>
            </div>
        </>
    )
};

export default Header;