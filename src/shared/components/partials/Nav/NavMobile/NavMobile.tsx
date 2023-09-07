import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import gsap from "gsap";

// Components
import { Anchor } from "shared/components/typography";
import {
  LanguageSwitcher,
  Logo,
  ThemeSwitcher,
} from "shared/components/partials";

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
  const [isNavActive, setNavActive] = useState(false);
  const menuRef = useRef();

  const items = filterFromCurrentPage(pathname as PagesType, NAV_ITEMS);

  useEffect(() => {
    isNavActive ? disableBodyScroll(document) : enableBodyScroll(document);

    return () => enableBodyScroll(document);
  }, [isNavActive]);

  useEffect(() => {
    if (!isNavActive) return;

    gsap.from(menuRef.current, {
      scale: 0,
      opacity: 0,
      transformOrigin: "top right",
      duration: 0.3,
    });
  }, [isNavActive]);

  return (
    <>
      <button
        className={styles.menuBtn}
        onClick={() => setNavActive(!isNavActive)}
      >
        <span className={styles.menuBtnLine}></span>
        <span className={styles.menuBtnLine}></span>
        <span className={styles.menuBtnLine}></span>
      </button>
      {isNavActive && (
        <div ref={menuRef} className={styles.menu}>
          <Logo />
          <nav className={styles.nav}>
            {items.map(({ text, link }) => (
              <Anchor className={styles.link} underline href={link} key={link}>
                {text}
              </Anchor>
            ))}
          </nav>
          <LanguageSwitcher className={styles.language} />
          <ThemeSwitcher className={styles.theme} />
        </div>
      )}
    </>
  );
};

export default NavDesktop;
