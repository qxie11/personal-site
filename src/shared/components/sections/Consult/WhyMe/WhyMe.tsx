// Components
import { Text, Title } from '@components/typography';
import { Section } from '@components/partials';
import { Container } from '@partials/layout';

// Constants
import { WHY_ME_LIST } from './constants';

// Styles
import styles from './styles.module.scss';

const WhyMe = () => (
  <Section className={styles.section}>
    <Container>
      <Title middle level={2}>
        почему я?
      </Title>
    </Container>
    <ul className={styles.wrapper}>
      {WHY_ME_LIST.map(({ icon, title, text }, i) => (
        <li key={`${title}-${i}`} className={styles.item}>
          <img className={styles.icon} src={icon} alt={title} />
          <Title middle level={3} fixedColor="light">
            {title}
          </Title>
          <Text className={styles.text} fixedColor="light">
            {text}
          </Text>
        </li>
      ))}
    </ul>
  </Section>
);

export default WhyMe;