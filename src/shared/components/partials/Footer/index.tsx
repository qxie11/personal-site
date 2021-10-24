import { useContext } from 'react';
import cx from 'classnames/bind';
import { useSelector } from 'react-redux';

// Components
import Nav from '../Nav';

// Styles
import styles from './styles.module.scss';

// Types
import { RootState } from '../../../../store/store';

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
      <div className="container">
        <h2
          className={cx('small-title', {
            lightColor: isDarkMode,
          })}
        >
          Сотрудничество
        </h2>
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
      </div>
    </footer>
  );
};

export default Footer;
