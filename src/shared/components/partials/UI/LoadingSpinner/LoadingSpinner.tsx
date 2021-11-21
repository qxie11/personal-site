import { useSelector } from 'react-redux';
import cx from 'classnames';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Styles
import styles from './styles.module.scss';

interface Props {
  className?: string[];
}

const LoadingSpinner: React.FC<Props> = ({ className = [], ...rest }) => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

  return (
    <div
      {...rest}
      className={cx(styles.loadingSpinner, ...className, {
        [styles.light]: isDarkMode,
      })}
    ></div>
  );
};

export default LoadingSpinner;
