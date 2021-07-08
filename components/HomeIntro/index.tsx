import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import gsap from 'gsap';

interface Link {
    name: string,
    link: string,
    color: string,
}

interface Data {
    greeting: string,
    title: string,
    sub: string,
    links: Link[]
}

interface Props {
    data: Data
}

const HomeIntro = ({ data }: Props) => {
    const isDarkMode: boolean = useSelector((state: RootState) => state.modeReducer.isDarkMode);
    const container = useRef<HTMLDivElement>();
    const links = useRef<HTMLAnchorElement[]>([]);

    useEffect(() => {
        gsap.from(container.current, { delay: 0.5, y: -50, opacity: 0, duration: 1.2 });
        gsap.from(links.current, { stagger: 0.2, delay: 1.4, opacity: 0, duration: 1.2 })
    }, [])

    const addLinkToRef = (el: HTMLAnchorElement) => {
        if (el && !links.current.includes(el)) {
            links.current.push(el);
        }
    }

    return (
        <section className={classNames({
            [styles.homeIntro]: true,
            [styles.darkBg]: isDarkMode,
        })}>
            <div className='container' ref={container}>
                { data ? (<><h1 className={classNames({
                    lightColor: isDarkMode,
                    [styles.title]: true,
                    title: true
                })}>
                    <span className={styles.titleSpan}>{ data.greeting }</span>
                    <br />
                    { data.title }
                </h1>
                <p className={classNames({
                    lightColor: isDarkMode,
                    [styles.subtitle]: true,
                    subtitle: true
                })}>{ data.sub }</p>
                <ul className={styles.socialList}>
                    {
                        data.links.map(({ name, link, color }: Link) => (
                            <li key={link}>
                                <a className={classNames({
                                        lightColor: isDarkMode,
                                        [styles.socialLink]: true,
                                    })} 
                                    style={{ color }} 
                                    target='_blank'
                                    href={link}
                                    ref={addLinkToRef}>{name}</a>
                            </li>
                        ))
                    }
                </ul></>) : <div className={styles.loading}>
                    <Skeleton style={{marginBottom: '10px'}} count={5} width={`100%`} height={28} />
                </div> }
            </div>
        </section>
    );
}

export default HomeIntro;