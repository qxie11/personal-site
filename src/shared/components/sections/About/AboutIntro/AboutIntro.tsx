// Components
import { Container } from '@partials/layout';
import { Text, Title } from '@components/typography';
import { Section, SocialList } from '@components/partials';

// Constants
import { SOCIAL_LINK_ITEMS } from '@shared/constants';

// Hooks
import useTextAnime from '@shared/hooks/useTextAnime'

// Styles
import styles from './styles.module.scss';

const AboutIntro: React.FC = () => {
  const animeArray = useTextAnime();

  return (
    <Section className={styles.section} darkModeClass={styles.withImage}>
      <Container>
        <Title>Обо мне</Title>
        <Text
          ref={(text) => animeArray.current.push(text)}
          className={styles.info}
        >
          я React / Front-end разработчик, верстаю сайты различной сложности. В
          свободное время занимаюсь репетиторством
        </Text>
        <SocialList linkList={SOCIAL_LINK_ITEMS} />
      </Container>
    </Section>
  );
};

export default AboutIntro;
