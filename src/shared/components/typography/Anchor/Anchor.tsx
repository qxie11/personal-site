import { useSelector } from "react-redux";
import Link, { LinkProps } from "next/link";
import React, { ForwardedRef, HTMLAttributes } from "react";
import cx from "classnames";

// Selectors
import modeSelectors from "store/selectors/modeSelectors";

// Styles
import styles from "./styles.module.scss";

interface Props extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  href: string;
  target?: string;
  light?: boolean;
  external?: boolean;
  className?: string;
  underlineAnimation?: boolean;
  ref?: ForwardedRef<HTMLAnchorElement>;
}

const Anchor: React.FC<Props> = React.forwardRef(
  (
    { children, className, light, external, underlineAnimation, href, ...rest },
    ref
  ) => {
    const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

    const classNames = cx(styles.link, className, {
      [styles.underlineAnimation]: underlineAnimation,
      [styles.light]: isDarkMode,
    });

    if (external) {
      return (
        <a className={classNames} href={href} ref={ref} {...rest}>
          {children}
        </a>
      );
    } else {
      return (
        <Link href={href} {...rest}>
          <a className={classNames} ref={ref}>
            {children}
          </a>
        </Link>
      );
    }
  }
);

export default Anchor;
