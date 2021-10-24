import { useSelector } from 'react-redux';
import cx from 'classnames';
import { RootState } from '@store/store';
import Image from 'next/image';
import { Container } from '@partials/layout';
import { IProjectItem } from './types';
import styles from './styles.module.scss';

const ProjectItem: React.FC<IProjectItem> = ({ title, subtitle, img, url }) => {
  const isDarkMode: boolean = useSelector(
    (state: RootState) => state.modeReducer.isDarkMode
  );

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
          style={{ textShadow: `1px 1px 6px ${isDarkMode ? '#000' : '#fff'}` }}
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
