import Image from 'next/image';
import styles from './styles.module.scss';

const HomeIntro = ({ data }) => {
    return (
        <section className={styles.homeIntro}>
            <Image
                src="/images/backgrounds/dark-bg.png"
                quality="50"
                layout="fill"
            />
            <div className="container">

            </div>
        </section>
    );
}

export default HomeIntro;