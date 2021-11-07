import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Components
import { Container } from '@partials/layout';
import { Text, Title } from '@components/typography';
import { Section, SocialList } from '@components/partials';

// Constants
import { SOCAIL_LINK_ITEMS } from '@shared/constants';

// Styles
import styles from './styles.module.scss';

const AboutIntro: React.FC = () => {
  const infoArray = useRef<HTMLElement[]>([]);

  useEffect(() => {
    gsap.from(infoArray.current, {
      delay: 0.5,
      y: -50,
      opacity: 0,
      duration: 1.2,
    });
  }, []);

  return (
    <Section classes={styles.section} darkModeClass={styles.withImage}>
      <Container>
        <Title ref={(title) => infoArray.current.push(title)}>Обо мне</Title>
        <Text
          ref={(text) => infoArray.current.push(text)}
          classes={styles.info}
        >
          я React / Front-end разработчик, верстаю сайты различной сложности. В
          свободное время занимаюсь репетиторством
        </Text>
        <SocialList linkList={SOCAIL_LINK_ITEMS} />
      </Container>
    </Section>
  );
};

export default AboutIntro;
