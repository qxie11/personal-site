import Link from 'next/link';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const Logo: React.FC = () => {
    const isDarkMode: boolean = useSelector(({ modeReducer }: RootState) => modeReducer.isDarkMode);

    return (
        <Link href="/">
            <a title="evgeniy.v" data-text="<evgeniy.v />" className={classNames(styles.glitch, {
                lightColor: isDarkMode,
            })}>{`<evgeniy.v />`}</a>
        </Link>
    )
}

export default Logo;