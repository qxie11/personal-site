import { forwardRef } from 'react';

// Styles
import styles from './styles.module.scss';

const Container: React.FC<any> = forwardRef(({ children, ...rest }) => (
  <div className={styles.container} {...rest}>
    {children}
  </div>
));

export default Container;
