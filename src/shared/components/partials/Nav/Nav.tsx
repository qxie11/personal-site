import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import gsap from 'gsap';
import cx from 'classnames';

// Components
import { Anchor } from '@shared/components/typography';

// Constants
import { NAV_ITEMS, NAV_ITEMS_WITH_HOME } from './constants';
import { PAGES } from '@shared/constants';

// Styles
import styles from './styles.module.scss';

interface Props {
  notConvertIntoToggleMenu?: true;
}

const Nav: React.FC<Props> = ({
  notConvertIntoToggleMenu,
}) => {
  const { pathname } = useRouter();

  const items = pathname !== PAGES.HOME ? NAV_ITEMS_WITH_HOME : NAV_ITEMS;
  const links = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    gsap.from(links.current, { y: -100, stagger: 0.2, delay: 0.4, opacity: 0 });
  }, []);

  const addLinkToRef = (el: HTMLAnchorElement) => {
    if (el && !links.current.includes(el)) {
      links.current.push(el);
    }
  };

  return (
    <>
      <nav
        className={cx(styles.nav, {
          [styles.menuConvert]: !notConvertIntoToggleMenu,
        })}
      >
        {items.map(({ text, link }) => (
          <Anchor underlineAnimation href={link} key={link} ref={addLinkToRef}>
            {text}
          </Anchor>
        ))}
      </nav>
    </>
  );
};

export default Nav;
