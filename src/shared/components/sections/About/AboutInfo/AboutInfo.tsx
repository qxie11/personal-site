// Components
import { InfoBox, Section } from '@components/partials';
import { Title } from '@components/typography';
import { Container } from '@partials/layout';

// Constants
import { INFORMATION_DATA } from './constants';

// Styles
import styles from './styles.module.scss';

const AboutInfo: React.FC = () => (
  <Section>
    <Container>
      <Title level={2} middle>
        Информация
      </Title>
      <div className={styles.wrapper}>
        {INFORMATION_DATA.map((data) => (
          <InfoBox key={data.title} {...data} />
        ))}
      </div>
    </Container>
  </Section>
);

export default AboutInfo;
