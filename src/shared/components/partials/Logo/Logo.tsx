import Link from 'next/link';
import cx from 'classnames';
import { useSelector } from 'react-redux';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Styles
import styles from './styles.module.scss';

const Logo: React.FC = () => {
  const isDarkMode: boolean = useSelector(modeSelectors.selectCurrentTheme);

  return (
    <Link href="/">
      <a
        title="evgeniy.v"
        data-text="<evgeniy.v />"
        className={cx(styles.glitch, {
          lightColor: isDarkMode,
        })}
      >{`<evgeniy.v />`}</a>
    </Link>
  );
};

export default Logo;
