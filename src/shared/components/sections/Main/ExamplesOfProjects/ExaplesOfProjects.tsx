import { useSelector } from 'react-redux';
import cx from 'classnames';

// Types
import { RootState } from '@store/store';

// Styles
import styles from './styles.module.scss';

// Components
import ProjectItem from './ProjectItem';
import { Container } from '@partials/layout';

// Constants
import { EXAMPLES_OF_PROJECTS } from './constants';

const ExamplesOfProjects: React.FC = () => {
  const isDarkMode: boolean = useSelector(
    (state: RootState) => state.modeReducer.isDarkMode
  );

  return (
    <section
      id="works"
      className={cx(styles.projectExamples, {
        darkBg: isDarkMode,
      })}
    >
      <Container>
        <h2
          className={cx('small-title', {
            lightColor: isDarkMode,
          })}
        >
          Примеры работ
        </h2>
      </Container>
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
