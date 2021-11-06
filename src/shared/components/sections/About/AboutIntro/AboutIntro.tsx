import { useSelector } from 'react-redux';
import cx from 'classnames';

// Components
import { Container } from '@partials/layout';
import { Text, Title } from '@components/typography';
import { SocialList } from '@components/partials';

// Constants
import { SOCAIL_LINK_ITEMS } from '@shared/constants';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Styles
import styles from './styles.module.scss';

const AboutIntro: React.FC = () => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

  return (
    <section
      className={cx(styles.section, {
        [styles.withImage]: isDarkMode,
      })}
    >
      <Container>
        <Title>Обо мне</Title>
        <Text classes={styles.info}>
          я React / Front-end разработчик, верстаю сайты различной сложности. В
          свободное время занимаюсь репетиторством
        </Text>
        <SocialList linkList={SOCAIL_LINK_ITEMS} />
      </Container>
    </section>
  );
};

export default AboutIntro;
