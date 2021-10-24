import Link from 'next/link';
import styles from './styles.module.scss';
import cx from 'classnames/bind';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

const Logo: React.FC = () => {
  const isDarkMode: boolean = useSelector(
    ({ modeReducer }: RootState) => modeReducer.isDarkMode
  );

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
