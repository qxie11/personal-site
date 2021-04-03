import Link from 'next/link';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const Logo = () => {
    return (
        <Link href="/">
            <a data-text="<evgeniy.p />" className={classNames({
                [styles.lightColor]: false,
                [styles.glitch]: true
            })}>{`<evgeniy.p />`}</a>
        </Link>
    )
}

export default Logo;