// Components
import { Container } from '@partials/layout';
import { Title } from '@components/typography';
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
          <InfoBox key={title} title={title} text={text} />
        ))}
      </ul>
    </Container>
  </Section>
);

export default ConsultThemes;
