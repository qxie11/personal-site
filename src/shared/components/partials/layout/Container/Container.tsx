import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';

// Styles
import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  ref?: ForwardedRef<HTMLDivElement>;
}

const Container: React.FC<Props> = forwardRef(({ children, ...rest }, ref) => (
  <div className={styles.container} {...rest} ref={ref}>
    {children}
  </div>
));

export default Container;
