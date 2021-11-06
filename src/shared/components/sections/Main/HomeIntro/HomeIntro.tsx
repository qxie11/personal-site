import { useEffect, useRef } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import gsap from 'gsap';

// Components
import { SocialList } from '@components/partials';
import { Container } from '@components/partials/layout';
import { Title, Text } from '@shared/components/typography';

// Constants
import { SOCAIL_LINK_ITEMS } from '@shared/constants';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Styles
import styles from './styles.module.scss';

const HomeIntro: React.FC = () => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);
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
        <Title classes={styles.title}>
          <span className={styles.titleSpan}>привет, меня зовут Евгений</span>
          <br />я фрилансер, веб-разработчик
        </Title>
        <Text classes={styles.subtitle}>
          разрабатываю веб-сайты более четырех лет, за плечами большой опыт в
          разработке, а также в обучении верстке сайтов.
        </Text>
        <SocialList linkList={SOCAIL_LINK_ITEMS} />
      </Container>
    </section>
  );
};

export default HomeIntro;
