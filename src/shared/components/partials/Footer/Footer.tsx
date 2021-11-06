import cx from 'classnames/bind';
import { useSelector } from 'react-redux';

// Components
import { Nav } from '@components/partials';
import { Container } from '@partials/layout';
import { Title, Anchor } from '@shared/components/typography';

// Styles
import styles from './styles.module.scss';

// Types
import { RootState } from '@store/store';

const Footer: React.FC = () => {
  const isDarkMode: boolean = useSelector(
    ({ mode }: RootState) => mode.isDarkMode
  );

  return (
    <footer
      className={cx('section', {
        darkBg: isDarkMode,
      })}
    >
      <Container>
        <Title level={2} small>
          Сотрудничество
        </Title>
        <Anchor
          classes={styles.vkLink}
          target="_blank"
          href="https://vk.com/evgeniy_vronskiy"
        >
          vk.com/evgeniy_vronskiy
        </Anchor>
        <Nav withoutToggleTheme notConvertIntoToggleMenu />
      </Container>
    </footer>
  );
};

export default Footer;
