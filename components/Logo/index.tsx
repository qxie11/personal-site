import Link from 'next/link';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Logo: React.FC = () => {
    const isDarkMode: boolean = useSelector((state: RootState) => state.modeReducer.isDarkMode);
    return (
        <Link href="/">
            <a title="evgeniy.p" data-text="<evgeniy.p />" className={classNames({
                lightColor: isDarkMode,
                [styles.glitch]: true
            })}>{`<evgeniy.p />`}</a>
        </Link>
    )
}

export default Logo;