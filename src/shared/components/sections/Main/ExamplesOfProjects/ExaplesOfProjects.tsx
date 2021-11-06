import { useSelector } from 'react-redux';
import cx from 'classnames';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Components
import ProjectItem from './ProjectItem';
import { Container } from '@partials/layout';
import { Title } from '@shared/components/typography';

// Constants
import { EXAMPLES_OF_PROJECTS } from './constants';

const ExamplesOfProjects: React.FC = () => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

  return (
    <section
      id="works"
      className={cx({
        darkBg: isDarkMode,
      })}
    >
      <Container>
        <Title level={2} small>
          Примеры работ
        </Title>
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
