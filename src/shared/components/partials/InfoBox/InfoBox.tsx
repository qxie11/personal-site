import { useSelector } from "react-redux";
import cx from "classnames";

// Selectors
import modeSelectors from "store/selectors/modeSelectors";

// Styles
import styles from "./styles.module.scss";

interface Props {
  wrapperAttributes?: React.HTMLAttributes<HTMLDivElement>;
  boxAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

const InfoBox: React.FC<Props> = ({
  wrapperAttributes,
  boxAttributes,
  children,
}) => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);
  return (
    <div
      {...boxAttributes}
      className={cx(styles.box, boxAttributes?.className, {
        [styles.darkMode]: isDarkMode,
      })}
    >
      <div
        {...wrapperAttributes}
        className={cx(styles.wrapper, wrapperAttributes?.className)}
      >
        {children}
      </div>
    </div>
  );
};

export default InfoBox;
