// Components
import { Container } from '@partials/layout';
import { Title, Text } from '@components/typography';
import { Section, InfoBox } from '@components/partials';

// Constants
import { THEMES_LIST } from './constants';

// Styles
import styles from './styles.module.scss';

const ConsultThemes = () => (
  <Section>
    <Container>
      <Title className={styles.title} middle level={2}>
        консультирую по темам:
      </Title>
      <ul className={styles.wrapper}>
        {THEMES_LIST.map(({ title, text }) => (
          <InfoBox key={title}>
            <Title middle level={3}>{title}</Title>
            <Text>{text}</Text>
          </InfoBox>
        ))}
      </ul>
    </Container>
  </Section>
);

export default ConsultThemes;
