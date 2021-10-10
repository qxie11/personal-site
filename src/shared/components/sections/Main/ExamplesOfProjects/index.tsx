import { useSelector } from 'react-redux';
import classNames from 'classnames';

// Types
import { RootState } from '../../../../../store/store';

// Styles
import styles from './styles.module.scss';

// Components
import ProjectItem from './ProjectItem';

// Constants
import { EXAMPLES_OF_PROJECTS } from './constants';

const ExamplesOfProjects: React.FC = () => {
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
        {EXAMPLES_OF_PROJECTS?.map((project) => (
          <li key={project.img}>
            <ProjectItem {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExamplesOfProjects;
