import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Styles
import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  classes?: string | string[];
  ref?: ForwardedRef<HTMLParagraphElement>;
}

const Text: React.FC<Props> = forwardRef(
  ({ children, classes, ...rest }, ref) => {
    const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

    return (
      <p
        className={cx(styles.text, classes, {
          [styles.light]: isDarkMode,
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </p>
    );
  }
);

export default Text;
