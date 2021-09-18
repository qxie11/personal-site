import { useSelector } from 'react-redux';
import classNames from 'classnames';

// Types
import { RootState } from '../../../../../store/store';

// Styles
import styles from './styles.module.scss';

// Components
import ProjectItem from './ProjectItem';
import LoadingSpinner from '../../../partials/UI/LoadingSpinner';

export interface IProjectItem {
  title: string;
  subtitle: string;
  img: string;
  url: string;
}

interface Props {
  data: IProjectItem[];
}

const ExamplesOfProjects: React.FC<Props> = ({ data }) => {
  const isDarkMode: boolean = useSelector(
    (state: RootState) => state.modeReducer.isDarkMode
  );

  return (
    <section
      id="works"
      className={classNames(styles.projectExamples, {
        darkBg: isDarkMode,
      })}
    >
      <div className="container">
        <h2
          className={classNames('small-title', {
            lightColor: isDarkMode,
          })}
        >
          Примеры работ
        </h2>
      </div>
      <ul className="projectItemsWrapper">
        {data?.map((project: IProjectItem) => (
          <li key={project.img}>
            <ProjectItem {...project} />
          </li>
        )) || <LoadingSpinner />}
      </ul>
    </section>
  );
};

export default ExamplesOfProjects;
