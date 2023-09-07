import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/router";
// import gsap from "gsap";

// Components
import { Anchor } from "shared/components/typography";

// Constants
import { NAV_ITEMS } from "../constants";

// Utils
import { filterFromCurrentPage } from "../utils";

// Types
import { PagesType } from "shared/types";

// Styles
import styles from "./styles.module.scss";

const NavDesktop = () => {
  const { pathname } = useRouter();

  const items = filterFromCurrentPage(pathname as PagesType, NAV_ITEMS);
  const links = useRef<HTMLAnchorElement[]>([]);

  useLayoutEffect(() => {
    // gsap.from(links.current, { y: -100, stagger: 0.2, delay: 0.4, opacity: 0 });
  }, []);

  const addLinkToRef = (el: HTMLAnchorElement) => {
    if (el && !links.current.includes(el)) {
      links.current.push(el);
    }
  };

  return (
    <>
      <nav className={styles.nav}>
        {items.map(({ text, link }) => (
          <Anchor underline href={link} key={link} ref={addLinkToRef}>
            {text}
          </Anchor>
        ))}
      </nav>
    </>
  );
};

export default NavDesktop;
