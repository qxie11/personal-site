import { useSelector } from "react-redux";
import cx from "classnames";
import Image from "next/image";

// Components
import { Container } from "shared/components/partials/layout";

// Selectors
import modeSelectors from "store/selectors/modeSelectors";

// Types
import { IProjectItem } from "./types";

// Styles
import styles from "./styles.module.scss";

const ProjectItem: React.FC<IProjectItem> = ({ title, subtitle, img, url }) => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

  return (
    <div
      className={cx(styles.projectItem, {
        [styles.projectItemDark]: isDarkMode,
      })}
    >
      <a href={url} className={styles.projectLink} target="_blank"></a>
      <Image
        className={styles.projectImage}
        src={img}
        alt={title}
        layout="fixed"
        width={1920}
        height={300}
        quality={90}
      />
      <Container>
        <h3
          style={{ textShadow: `1px 1px 6px ${isDarkMode ? "#000" : "#fff"}` }}
          className={cx(styles.projectTitle, {
            lightColor: isDarkMode,
          })}
        >
          <span>{title}</span>
          {subtitle}
        </h3>
      </Container>
    </div>
  );
};

export default ProjectItem;
