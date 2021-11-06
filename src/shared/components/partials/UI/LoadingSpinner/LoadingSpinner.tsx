import { useSelector } from 'react-redux';
import cx from 'classnames';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Styles
import styles from './styles.module.scss';

interface Props {
  classes?: string[];
}

const LoadingSpinner: React.FC<Props> = ({ classes = [], ...rest }) => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

  return (
    <div
      {...rest}
      className={cx(styles.loadingSpinner, ...classes, {
        [styles.light]: isDarkMode,
      })}
    ></div>
  );
};

export default LoadingSpinner;
