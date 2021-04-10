import Image from 'next/image';
import styles from './styles.module.scss';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const HomeIntro = ({ data }) => {
    const isDarkMode: boolean = useSelector((state: RootState) => state.modeReducer.isDarkMode);
    return (
        <section className={styles.homeIntro}>
            <Image
                src={isDarkMode ? "/images/backgrounds/dark-bg.jpg" : "/images/backgrounds/light-bg.jpg"}
                quality="100"
                layout="fill"
            />
            <div className="container">

            </div>
        </section>
    );
}

export default HomeIntro;