import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Logo from '../Logo';
import Nav from '../Nav';
import styles from './styles.module.scss';

const Header: React.FC = () => {
    const header = useRef<HTMLHeadElement | null>(null);

    useEffect(() => {
        gsap.from(header.current, {y: -50, duration: 1.9, delay: 0.2, ease: 'elastic'})
    })

    return (
        <div className='container'>
            <header ref={header} className={styles.header}>
                <Logo />
                <Nav />
            </header>
        </div>
    )
};

export default Header;