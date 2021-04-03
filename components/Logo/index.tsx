import Link from 'next/link';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const Logo = () => {
    return (
        <Link href="/">
            <a data-text="<ponomarev />" className={classNames({
                'light-color': false,
                [styles.glitch]: true
            })}>{`<ponomarev />`}</a>
        </Link>
    )
}

export default Logo;