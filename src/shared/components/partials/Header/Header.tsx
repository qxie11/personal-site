import { useEffect, useRef } from "react";
import gsap from "gsap";

// Components
import {
  LanguageSwitcher,
  Logo,
  Nav,
  ThemeSwitcher,
} from "shared/components/partials";

// Hooks
import { useMedia } from "shared/hooks";

// Styles
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  const header = useRef<HTMLHeadElement | null>(null);
  const { isMD } = useMedia();

  useEffect(() => {
    if (isMD) {
      gsap.from(header.current, {
        y: -50,
        duration: 1.9,
        delay: 0.2,
        ease: "elastic",
      });
    }
  }, []);

  return (
    <>
      <header ref={header} className={styles.header}>
        {isMD && <Logo />}
        <Nav />
        {isMD && (
          <>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </>
        )}
      </header>
    </>
  );
};

export default Header;
