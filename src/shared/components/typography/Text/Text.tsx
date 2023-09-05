import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';

// Selectors
import modeSelectors from 'store/selectors/modeSelectors';

// Styles
import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  fixedColor?: 'dark' | 'light';
  ref?: ForwardedRef<HTMLParagraphElement>;
  tagName?: keyof JSX.IntrinsicElements;
}

const Text: React.FC<Props> = forwardRef(
  ({ children, className, fixedColor, tagName = 'p', ...rest }, ref) => {
    const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);
    const Tag = tagName as any;

    return (
      <Tag
        className={cx(styles.text, className, {
          [styles.light]:
            (isDarkMode || fixedColor === 'light') && fixedColor !== 'dark',
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);

export default Text;
