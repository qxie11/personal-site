import { useSelector } from 'react-redux';
import classNames from 'classnames';

// Types
import { RootState } from '../../../store/store';

// Styles
import styles from './styles.module.scss';

interface Props {
  classes?: string[],
}

const LoadingSpinner: React.FC<Props> = ({ classes = [], ...rest }) => {
  const isDarkMode: boolean = useSelector((state: RootState) => state.modeReducer.isDarkMode);

  return (
    <div {...rest} className={classNames(styles.loadingSpinner, ...classes, {
      [styles.light]: isDarkMode,
    })}></div>
  )
};

export default LoadingSpinner;