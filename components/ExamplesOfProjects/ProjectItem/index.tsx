import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { RootState } from '../../../store/store';
import Image from 'next/image';
import styles from './styles.module.scss';
import { IProjectItem } from '../';

const ProjectItem: React.FC<IProjectItem> = ({ title, subtitle, img, url }) => {
  const isDarkMode: boolean = useSelector((state: RootState) => state.modeReducer.isDarkMode);

  return (
    <div className={classNames(styles.projectItem, {
      [styles.projectItemDark]: isDarkMode,
    })}>
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
        <div className="container">
          <h3
            style={{ textShadow: `1px 1px 6px ${isDarkMode ? '#000' : '#fff'}`}}
            className={classNames(styles.projectTitle, {
            'lightColor': isDarkMode,
          })}>
            <span>{title}</span>
            {subtitle}
          </h3>
        </div>
    </div>
  )
}

export default ProjectItem;
