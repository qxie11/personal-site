import { useSelector } from 'react-redux';
import cx from 'classnames';

// Types
import { RootState } from '@store/store';

// Components
import ProjectItem from './ProjectItem';
import { Container } from '@partials/layout';
import { Title } from '@shared/components/typography';

// Constants
import { EXAMPLES_OF_PROJECTS } from './constants';

const ExamplesOfProjects: React.FC = () => {
  const isDarkMode: boolean = useSelector(
    (state: RootState) => state.modeReducer.isDarkMode
  );

  return (
    <section
      id="works"
      className={cx({
        darkBg: isDarkMode,
      })}
    >
      <Container>
        <Title small>Примеры работ</Title>
      </Container>
      <ul>
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
