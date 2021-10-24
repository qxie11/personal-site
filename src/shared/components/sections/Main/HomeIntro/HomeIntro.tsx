import { useEffect, useRef } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import gsap from 'gsap';

// Components
import { SocialList } from '@components/partials';
import { Container } from '@components/partials/layout';

// Constants
import { SOCAIL_LINK_ITEMS } from './constants';

// Styles
import styles from './styles.module.scss';

// Types
import { RootState } from '@store/store';

const HomeIntro: React.FC = () => {
  const isDarkMode: boolean = useSelector(
    (state: RootState) => state.modeReducer.isDarkMode
  );
  const container = useRef<HTMLDivElement>();

  useEffect(() => {
    gsap.from(container.current, {
      delay: 0.5,
      y: -50,
      opacity: 0,
      duration: 1.2,
    });
  }, []);

  return (
    <section
      className={cx(styles.homeIntro, {
        [styles.darkBg]: isDarkMode,
      })}
    >
      <Container ref={container}>
        <h1
          className={cx('title', styles.title, {
            lightColor: isDarkMode,
          })}
        >
          <span className={styles.titleSpan}>привет, меня зовут Евгений</span>
          <br />я фрилансер, веб-разработчик
        </h1>
        <p
          className={cx('subtitle', styles.subtitle, {
            lightColor: isDarkMode,
          })}
        >
          разрабатываю веб-сайты более четырех лет, за плечами большой опыт в
          разработке, а также в обучении верстке сайтов.
        </p>
        <SocialList linkList={SOCAIL_LINK_ITEMS} />
      </Container>
    </section>
  );
};

export default HomeIntro;
