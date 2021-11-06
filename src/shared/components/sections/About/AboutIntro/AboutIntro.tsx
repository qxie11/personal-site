import { useSelector } from 'react-redux';
import cx from 'classnames';

// Components
import { Container } from '@partials/layout';

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
      <Container>123</Container>
    </section>
  );
};

export default AboutIntro;
