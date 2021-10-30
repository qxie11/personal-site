import cx from 'classnames/bind';
import { useSelector } from 'react-redux';

// Components
import { Nav } from '@components/partials';
import { Container } from '@partials/layout';
import { Title } from '@shared/components/typography';

// Styles
import styles from './styles.module.scss';

// Types
import { RootState } from '@store/store';

const Footer: React.FC = () => {
  const isDarkMode: boolean = useSelector(
    ({ modeReducer }: RootState) => modeReducer.isDarkMode
  );

  return (
    <footer
      className={cx('section', {
        darkBg: isDarkMode,
      })}
    >
      <Container>
        <Title small>Сотрудничество</Title>
        <a
          className={cx('link', styles.vkLink, {
            lightColor: isDarkMode,
          })}
          target="_blank"
          href="https://vk.com/evgeniy_vronskiy"
        >
          vk.com/evgeniy_vronskiy
        </a>
        <Nav withoutToggleTheme notConvertIntoToggleMenu />
      </Container>
    </footer>
  );
};

export default Footer;
