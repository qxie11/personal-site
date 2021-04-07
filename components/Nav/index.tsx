import { useContext } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import styles from './styles.module.scss';
import { NavDataContext } from "../../pages";

interface Data {
    items: string[],
    link: string[],
}

const Nav: React.FC = () => {
    const data: Data | null = useContext(NavDataContext);
    return (
        <nav className={styles.nav}>
            {
                data ? data.items.map((item: string, i: number) => (
                        <Link href={data.link[i]} key={i + item}>
                            <a>{item}</a>
                        </Link>
                    )) : Array(3).fill('').map(_ => <Skeleton width={140} />)
            }
        </nav>
    )
};

export default Nav;