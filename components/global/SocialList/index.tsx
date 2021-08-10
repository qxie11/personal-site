import gsap from "gsap";
import { useEffect, useRef } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

// Types
import { RootState } from "../../../store/store";

// Styles
import styles from "./styles.module.scss";

export interface Link {
  name: string,
  link: string,
  color: string,
}

interface Props {
  linkList: Link[]
}
const SocialList: React.FC<Props> = ({ linkList }) => {
  const isDarkMode: boolean = useSelector((state: RootState) => state.modeReducer.isDarkMode);

  const links = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    gsap.from(links.current, { stagger: 0.2, delay: 1.4, opacity: 0, duration: 1.2 })
  }, [])

  const addLinkToRef = (el: HTMLAnchorElement) => {
    if (el && !links.current.includes(el)) {
      links.current.push(el);
    }
  }

  return (<ul className={styles.socialList}>
    {
      linkList?.map(({name, link, color}: Link) => (
        <li key={link}>
          <a className={classNames(styles.socialLink, {
            lightColor: isDarkMode,
          })}
             style={{color}}
             target='_blank'
             href={link}
             ref={addLinkToRef}>{name}</a>
        </li>
      ))
    }
  </ul>)
};

export default SocialList;
