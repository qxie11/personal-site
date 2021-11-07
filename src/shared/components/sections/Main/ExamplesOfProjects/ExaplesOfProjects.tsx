// Components
import ProjectItem from './ProjectItem';
import { Container } from '@partials/layout';
import { Title } from '@shared/components/typography';
import { Section } from '@components/partials';

// Constants
import { EXAMPLES_OF_PROJECTS } from './constants';

const ExamplesOfProjects: React.FC = () => {
  return (
    <Section id="works">
      <Container>
        <Title level={2} middle>
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
    </Section>
  );
};

export default ExamplesOfProjects;
