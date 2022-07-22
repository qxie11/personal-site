// Components
import { InfoBox, Section, List } from '@components/partials';
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
        {INFORMATION_DATA.map(({ title, list }) => (
          <InfoBox key={title}>
            <Title middle level={3}>
              {title}
            </Title>
            <List listArray={list} />
          </InfoBox>
        ))}
      </div>
    </Container>
  </Section>
);

export default AboutInfo;
