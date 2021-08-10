import { useContext } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from "react-redux";

// Context
import { NavDataContext } from '../../../pages';

// Components
import Nav from "../Nav";

// Styles
import styles from "./styles.module.scss";

// Types
import { RootState } from "../../../store/store";

const Footer: React.FC = () => {
  const isDarkMode: boolean = useSelector(({ modeReducer }: RootState) => modeReducer.isDarkMode);
  const data = useContext(NavDataContext)

  return (
    <footer className={classNames('section', {
      darkBg: isDarkMode,
    })}>
      <div className="container">
        <h2 className={classNames('small-title', {
          lightColor: isDarkMode,
        })}>Сотрудничество</h2>
        <a className={classNames('link', styles.vkLink, {
          lightColor: isDarkMode,
        })} target="_blank" href="https://vk.com/evgeniy_vronskiy">vk.com/evgeniy_vronskiy</a>
        <Nav
          withoutToggleTheme
          notConvertIntoToggleMenu
          preloadWidth={60}
        />
      </div>
    </footer>
  )
}

export default Footer;
