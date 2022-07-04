// Components
import { Text, Title } from '@components/typography';
import { Section } from '@components/partials';

// Constants
import { WHY_ME_LIST } from './constants';

// Styles
import styles from './styles.module.scss';

const WhyMe = () => (
  <Section className={styles.section}>
      <ul className={styles.wrapper}>
        {WHY_ME_LIST.map(({ icon, title, text }) => (
          <li className={styles.item}>
            <img className={styles.icon} src={icon} alt={title} />
            <Title middle level={3} fixedColor="light">{title}</Title>
            <Text className={styles.text} fixedColor="light">{text}</Text>
          </li>
        ))}
      </ul>
  </Section>
);

export default WhyMe;
