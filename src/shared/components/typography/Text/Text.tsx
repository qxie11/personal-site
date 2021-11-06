import { useSelector } from 'react-redux';
import { HTMLAttributes } from 'react';
import cx from 'classnames';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Styles
import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  classes?: string | string[];
}

const Text: React.FC<Props> = ({ children, classes, ...rest }) => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

  return (
    <p
      className={cx(styles.text, classes, {
        [styles.light]: isDarkMode,
      })}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Text;
