import { useSelector } from 'react-redux';
import cx from 'classnames';

// Components
import { Container } from '@partials/layout';
import { Text, Title } from '@components/typography';
import { Section } from '@components/partials';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Constants
import { THEMES_LIST } from './constants';

// Styles
import styles from './styles.module.scss';

const ConsultThemes = () => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

  return (
    <Section>
      <Container>
        <Title className={styles.title} middle level={2}>
          консультирую по темам:
        </Title>
        <ul className={styles.wrapper}>
          {THEMES_LIST.map(({ title, text }) => (
            <li className={cx(styles.theme, { [styles.darkMode]: isDarkMode })}>
              <Title level={3}>{title}</Title>
              <Text>{text}</Text>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default ConsultThemes;
