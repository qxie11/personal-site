import { HTMLAttributes } from "react";
import cx from "classnames";
import { useSelector } from "react-redux";

// Selectors
import modeSelectors from "store/selectors/modeSelectors";

// Styles
import styles from "./styles.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
  className?: string;
  darkModeClass?: string;
  tagName?: keyof JSX.IntrinsicElements;
}

const Section: React.FC<Props> = ({
  children,
  className,
  darkModeClass,
  tagName,
  ...rest
}) => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);
  const Tag: any = tagName ?? "section";

  return (
    <Tag
      className={cx(
        styles.section,
        {
          [styles.darkMode]: isDarkMode,
          [darkModeClass]: isDarkMode,
        },
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Section;
