import { useSelector } from 'react-redux';
import cx from 'classnames';
import { RootState } from '@store/store';

// Components
import { Container } from '@partials/layout';

// Styles
import styles from './styles.module.scss';

const AboutIntro: React.FC = () => {
  const isDarkMode: boolean = useSelector(
    (state: RootState) => state.modeReducer.isDarkMode
  );

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
